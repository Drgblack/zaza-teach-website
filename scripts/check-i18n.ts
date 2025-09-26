#!/usr/bin/env tsx

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get the project root directory
const projectRoot = path.resolve(path.dirname(__filename), '..');

// Load translation files
function loadTranslations(locale: string): Record<string, any> {
  const filePath = path.join(projectRoot, `src/i18n/messages/${locale}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Translation file not found: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Recursively get all translation keys from an object
function getTranslationKeys(obj: any, prefix = ''): string[] {
  const keys: string[] = [];
  
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys.push(...getTranslationKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

// Find translation keys used in components
function findUsedTranslationKeys(directory: string): Set<string> {
  const usedKeys = new Set<string>();
  
  function scanDirectory(dir: string) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Look for useTranslations usage
        const translationRegex = /useTranslations\(['"`]([^'"`]+)['"`]\)/g;
        const tCallRegex = /\bt\(['"`]([^'"`]+)['"`]\)/g;
        
        let match;
        while ((match = translationRegex.exec(content)) !== null) {
          const namespace = match[1];
          
          // Find t() calls in the same file
          const tMatches = content.matchAll(tCallRegex);
          for (const tMatch of tMatches) {
            usedKeys.add(`${namespace}.${tMatch[1]}`);
          }
        }
      }
    }
  }
  
  scanDirectory(directory);
  return usedKeys;
}

// Check for unused translation keys
function findUnusedKeys(availableKeys: string[], usedKeys: Set<string>): string[] {
  return availableKeys.filter(key => !usedKeys.has(key));
}

// Check for missing translations
function findMissingTranslations(baseKeys: string[], targetKeys: string[]): string[] {
  return baseKeys.filter(key => !targetKeys.includes(key));
}

// Validate translation values
function validateTranslationValues(translations: Record<string, any>, locale: string): string[] {
  const issues: string[] = [];
  
  function validate(obj: any, path = '') {
    for (const key in obj) {
      const currentPath = path ? `${path}.${key}` : key;
      const value = obj[key];
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        validate(value, currentPath);
      } else if (typeof value === 'string') {
        // Check for empty values
        if (value.trim() === '') {
          issues.push(`Empty translation: ${currentPath}`);
        }
        
        // Check for placeholder consistency
        const placeholders = value.match(/\{[^}]+\}/g) || [];
        if (placeholders.length > 0) {
          console.log(`Found placeholders in ${currentPath}: ${placeholders.join(', ')}`);
        }
        
        // Check for HTML tags in translations (potential security issue)
        if (/<[^>]+>/.test(value)) {
          issues.push(`HTML tags found in translation: ${currentPath}`);
        }
      }
    }
  }
  
  validate(translations);
  return issues;
}

// Main function
async function main() {
  console.log('🌍 Zaza Teach i18n Check\n');
  
  const supportedLocales = ['en', 'de'];
  let hasErrors = false;
  
  try {
    // Load all translation files
    const translations: Record<string, any> = {};
    const translationKeys: Record<string, string[]> = {};
    
    for (const locale of supportedLocales) {
      translations[locale] = loadTranslations(locale);
      translationKeys[locale] = getTranslationKeys(translations[locale]);
      console.log(`✅ Loaded ${locale} translations: ${translationKeys[locale].length} keys`);
    }
    
    // Find used translation keys in code
    console.log('\n🔍 Scanning codebase for translation usage...');
    const usedKeys = findUsedTranslationKeys(path.join(projectRoot, 'app'));
    const usedKeysComponents = findUsedTranslationKeys(path.join(projectRoot, 'components'));
    const allUsedKeys = new Set([...usedKeys, ...usedKeysComponents]);
    console.log(`📝 Found ${allUsedKeys.size} translation keys used in code`);
    
    // Check for missing translations between locales
    console.log('\n🔄 Checking translation completeness...');
    const baseLocale = 'en';
    const baseKeys = translationKeys[baseLocale];
    
    for (const locale of supportedLocales) {
      if (locale === baseLocale) continue;
      
      const missingKeys = findMissingTranslations(baseKeys, translationKeys[locale]);
      if (missingKeys.length > 0) {
        console.log(`❌ Missing translations in ${locale}:`);
        missingKeys.forEach(key => console.log(`   - ${key}`));
        hasErrors = true;
      } else {
        console.log(`✅ ${locale} translations complete`);
      }
      
      // Check for extra keys (translations not in base)
      const extraKeys = findMissingTranslations(translationKeys[locale], baseKeys);
      if (extraKeys.length > 0) {
        console.log(`⚠️  Extra keys in ${locale} (not in ${baseLocale}):`);
        extraKeys.forEach(key => console.log(`   + ${key}`));
      }
    }
    
    // Check for unused translations
    console.log('\n🧹 Checking for unused translations...');
    for (const locale of supportedLocales) {
      const unusedKeys = findUnusedKeys(translationKeys[locale], allUsedKeys);
      if (unusedKeys.length > 0) {
        console.log(`⚠️  Potentially unused translations in ${locale}:`);
        unusedKeys.slice(0, 10).forEach(key => console.log(`   - ${key}`));
        if (unusedKeys.length > 10) {
          console.log(`   ... and ${unusedKeys.length - 10} more`);
        }
      } else {
        console.log(`✅ No unused translations in ${locale}`);
      }
    }
    
    // Validate translation values
    console.log('\n🔍 Validating translation values...');
    for (const locale of supportedLocales) {
      const issues = validateTranslationValues(translations[locale], locale);
      if (issues.length > 0) {
        console.log(`❌ Issues found in ${locale} translations:`);
        issues.forEach(issue => console.log(`   - ${issue}`));
        hasErrors = true;
      } else {
        console.log(`✅ ${locale} translation values are valid`);
      }
    }
    
    // Generate summary
    console.log('\n📊 Translation Summary:');
    for (const locale of supportedLocales) {
      console.log(`   ${locale}: ${translationKeys[locale].length} keys`);
    }
    
    console.log(`\n🎯 Total unique translation keys used in code: ${allUsedKeys.size}`);
    
    if (hasErrors) {
      console.log('\n❌ i18n check completed with errors');
      process.exit(1);
    } else {
      console.log('\n✅ i18n check passed successfully');
    }
    
  } catch (error) {
    console.error('\n💥 Error during i18n check:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

export { main as checkI18n };