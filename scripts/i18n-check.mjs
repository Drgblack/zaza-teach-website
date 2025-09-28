#!/usr/bin/env node

/**
 * i18n-check.mjs
 * Validates translation coverage across EN/DE locales
 * Checks for missing keys and orphaned translations
 * Usage: node scripts/i18n-check.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const LOCALES = ['en', 'de'];
const MESSAGES_DIR = path.join(__dirname, '..', 'src', 'i18n', 'messages');
const COMPONENTS_DIR = path.join(__dirname, '..', 'components');
const APP_DIR = path.join(__dirname, '..', 'app');

class I18nValidator {
  constructor() {
    this.messages = {};
    this.usedKeys = new Set();
    this.errors = [];
    this.warnings = [];
  }

  // Load translation files
  loadMessages() {
    console.log('🔍 Loading translation files...');
    
    for (const locale of LOCALES) {
      const filePath = path.join(MESSAGES_DIR, `${locale}.json`);
      
      if (!fs.existsSync(filePath)) {
        this.errors.push(`Missing translation file: ${locale}.json`);
        continue;
      }

      try {
        const content = fs.readFileSync(filePath, 'utf8');
        this.messages[locale] = JSON.parse(content);
        console.log(`  ✅ Loaded ${locale}.json`);
      } catch (error) {
        this.errors.push(`Invalid JSON in ${locale}.json: ${error.message}`);
      }
    }
  }

  // Recursively flatten nested translation keys
  flattenKeys(obj, prefix = '') {
    const keys = [];
    
    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        keys.push(...this.flattenKeys(value, fullKey));
      } else {
        keys.push(fullKey);
      }
    }
    
    return keys;
  }

  // Extract translation keys used in components
  extractUsedKeys() {
    console.log('🔍 Scanning for translation key usage...');
    
    const patterns = [
      /t\(['"]([\w.]+)['"]\)/g,
      /useTranslations\(\)\(['"]([\w.]+)['"]\)/g,
      /\{t\(['"]([\w.]+)['"]\)\}/g
    ];

    const scanDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
          this.scanFile(fullPath, patterns);
        }
      }
    };

    scanDirectory(COMPONENTS_DIR);
    scanDirectory(APP_DIR);
    
    console.log(`  ✅ Found ${this.usedKeys.size} translation key usages`);
  }

  scanFile(filePath, patterns) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      for (const pattern of patterns) {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          this.usedKeys.add(match[1]);
        }
      }
    } catch (error) {
      this.warnings.push(`Could not read file ${filePath}: ${error.message}`);
    }
  }

  // Check for missing translations
  validateCoverage() {
    console.log('🔍 Validating translation coverage...');
    
    if (LOCALES.length < 2) {
      this.warnings.push('Less than 2 locales configured for comparison');
      return;
    }

    const baseLocale = LOCALES[0];
    const baseKeys = this.flattenKeys(this.messages[baseLocale] || {});
    
    for (let i = 1; i < LOCALES.length; i++) {
      const locale = LOCALES[i];
      const localeKeys = this.flattenKeys(this.messages[locale] || {});
      
      // Check for missing keys in target locale
      const missingInTarget = baseKeys.filter(key => !localeKeys.includes(key));
      const missingInBase = localeKeys.filter(key => !baseKeys.includes(key));
      
      if (missingInTarget.length > 0) {
        this.errors.push(`Missing keys in ${locale}: ${missingInTarget.join(', ')}`);
      }
      
      if (missingInBase.length > 0) {
        this.warnings.push(`Extra keys in ${locale} (not in ${baseLocale}): ${missingInBase.join(', ')}`);
      }
    }
  }

  // Check for unused translation keys
  validateUsage() {
    console.log('🔍 Checking for unused translation keys...');
    
    const baseLocale = LOCALES[0];
    const allKeys = this.flattenKeys(this.messages[baseLocale] || {});
    const unusedKeys = allKeys.filter(key => !this.usedKeys.has(key));
    
    if (unusedKeys.length > 0) {
      this.warnings.push(`Potentially unused translation keys: ${unusedKeys.join(', ')}`);
    }
    
    // Check for used keys that don't exist
    const missingKeys = Array.from(this.usedKeys).filter(key => !allKeys.includes(key));
    if (missingKeys.length > 0) {
      this.errors.push(`Used keys missing from translations: ${missingKeys.join(', ')}`);
    }
  }

  // Generate report
  generateReport() {
    console.log('\n📊 Translation Coverage Report');
    console.log('================================');
    
    // Statistics
    console.log(`\nStatistics:`);
    console.log(`  Locales: ${LOCALES.join(', ')}`);
    console.log(`  Translation files: ${Object.keys(this.messages).length}/${LOCALES.length}`);
    
    for (const locale of LOCALES) {
      if (this.messages[locale]) {
        const keyCount = this.flattenKeys(this.messages[locale]).length;
        console.log(`  Keys in ${locale}: ${keyCount}`);
      }
    }
    
    console.log(`  Keys used in code: ${this.usedKeys.size}`);
    
    // Errors
    if (this.errors.length > 0) {
      console.log(`\n❌ Errors (${this.errors.length}):`);
      this.errors.forEach(error => console.log(`  • ${error}`));
    }
    
    // Warnings
    if (this.warnings.length > 0) {
      console.log(`\n⚠️  Warnings (${this.warnings.length}):`);
      this.warnings.forEach(warning => console.log(`  • ${warning}`));
    }
    
    // Summary
    console.log(`\n${this.errors.length === 0 ? '✅' : '❌'} Summary:`);
    console.log(`  ${this.errors.length} errors, ${this.warnings.length} warnings`);
    
    return this.errors.length === 0;
  }

  // Main validation workflow
  async validate() {
    console.log('🚀 Starting i18n validation...\n');
    
    this.loadMessages();
    this.extractUsedKeys();
    this.validateCoverage();
    this.validateUsage();
    
    const success = this.generateReport();
    
    console.log(`\n${success ? '🎉 Validation completed successfully!' : '💥 Validation failed!'}`);
    
    return success;
  }
}

// Run validation
const validator = new I18nValidator();
const success = await validator.validate();

process.exit(success ? 0 : 1);