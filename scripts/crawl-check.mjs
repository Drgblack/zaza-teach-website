#!/usr/bin/env node

/**
 * crawl-check.mjs
 * Comprehensive link validation and site crawling for EN/DE locales
 * Checks internal links, external links, and identifies broken routes
 * Usage: node scripts/crawl-check.mjs [--external] [--verbose]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const LOCALES = ['en', 'de'];
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const TIMEOUT = 10000; // 10 seconds
const MAX_REDIRECTS = 5;

class SiteCrawler {
  constructor(options = {}) {
    this.checkExternal = options.external || false;
    this.verbose = options.verbose || false;
    this.baseUrl = BASE_URL;
    
    this.visited = new Set();
    this.queue = [];
    this.errors = [];
    this.warnings = [];
    this.externalLinks = new Set();
    this.internalRoutes = new Set();
    
    // Expected routes from App Router structure
    this.expectedRoutes = new Set();
  }

  log(message, level = 'info') {
    if (this.verbose || level === 'error' || level === 'warn') {
      const prefix = {
        info: '  ℹ️',
        warn: '  ⚠️',
        error: '  ❌',
        success: '  ✅'
      }[level] || '  •';
      
      console.log(`${prefix} ${message}`);
    }
  }

  // Discover routes from the app directory structure
  discoverRoutes() {
    console.log('🔍 Discovering routes from app directory...');
    
    const appDir = path.join(__dirname, '..', 'app');
    this.scanAppDirectory(appDir);
    
    console.log(`  ✅ Found ${this.expectedRoutes.size} expected routes`);
    if (this.verbose) {
      Array.from(this.expectedRoutes).sort().forEach(route => {
        this.log(`Expected route: ${route}`);
      });
    }
  }

  scanAppDirectory(dir, currentPath = '') {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip locale directories at root level
        if (currentPath === '' && LOCALES.includes(item)) {
          const routePath = '/';
          this.expectedRoutes.add(`/${item}${routePath}`);
          this.scanAppDirectory(fullPath, routePath);
        } else if (currentPath !== '' && !item.startsWith('_') && !item.startsWith('(')) {
          // Regular route segment
          const routePath = currentPath === '/' ? `/${item}` : `${currentPath}/${item}`;
          
          // Check if this directory has a page.tsx
          const pageFile = path.join(fullPath, 'page.tsx');
          if (fs.existsSync(pageFile)) {
            for (const locale of LOCALES) {
              this.expectedRoutes.add(`/${locale}${routePath}`);
            }
          }
          
          this.scanAppDirectory(fullPath, routePath);
        }
      }
    }
  }

  // Extract links from components and pages
  extractLinksFromCode() {
    console.log('🔍 Extracting links from code...');
    
    const patterns = [
      /href\s*=\s*["`']([^"`']+)["`']/g,
      /Link\s+href\s*=\s*["`']([^"`']+)["`']/g,
      /router\.push\(["`']([^"`']+)["`']\)/g,
      /canonical\(["`']([^"`']+)["`']\)/g
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
          this.extractLinksFromFile(fullPath, patterns);
        }
      }
    };

    const componentsDir = path.join(__dirname, '..', 'components');
    const appDir = path.join(__dirname, '..', 'app');
    
    scanDirectory(componentsDir);
    scanDirectory(appDir);
    
    console.log(`  ✅ Found ${this.internalRoutes.size} internal routes, ${this.externalLinks.size} external links`);
  }

  extractLinksFromFile(filePath, patterns) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      for (const pattern of patterns) {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          const url = match[1];
          
          if (url.startsWith('http://') || url.startsWith('https://')) {
            this.externalLinks.add(url);
          } else if (url.startsWith('/') && !url.startsWith('//')) {
            this.internalRoutes.add(url);
          }
        }
      }
    } catch (error) {
      this.log(`Could not read file ${filePath}: ${error.message}`, 'warn');
    }
  }

  // Validate internal routes
  async validateInternalRoutes() {
    console.log('🔍 Validating internal routes...');
    
    const routesToCheck = new Set([
      ...this.internalRoutes,
      ...this.expectedRoutes
    ]);

    const results = {
      valid: [],
      invalid: [],
      total: routesToCheck.size
    };

    for (const route of routesToCheck) {
      try {
        // Handle locale-prefixed routes
        let checkUrl;
        if (route.startsWith('/en/') || route.startsWith('/de/')) {
          checkUrl = `${this.baseUrl}${route}`;
        } else if (route === '/') {
          checkUrl = `${this.baseUrl}/en/`;
        } else {
          // Try with default locale
          checkUrl = `${this.baseUrl}/en${route}`;
        }

        const result = await this.checkUrl(checkUrl);
        
        if (result.status >= 200 && result.status < 400) {
          results.valid.push(route);
          this.log(`✓ ${route} -> ${result.status}`, 'success');
        } else {
          results.invalid.push({ route, status: result.status, error: result.error });
          this.log(`✗ ${route} -> ${result.status} ${result.error || ''}`, 'error');
          this.errors.push(`Invalid internal route: ${route} (${result.status})`);
        }
      } catch (error) {
        results.invalid.push({ route, error: error.message });
        this.log(`✗ ${route} -> ${error.message}`, 'error');
        this.errors.push(`Internal route error: ${route} - ${error.message}`);
      }
    }

    console.log(`  ✅ ${results.valid.length}/${results.total} internal routes valid`);
    return results;
  }

  // Validate external links (if enabled)
  async validateExternalLinks() {
    if (!this.checkExternal) {
      console.log('🔍 Skipping external link validation (use --external to enable)');
      return { valid: [], invalid: [], total: 0 };
    }

    console.log('🔍 Validating external links...');
    
    const results = {
      valid: [],
      invalid: [],
      total: this.externalLinks.size
    };

    for (const url of this.externalLinks) {
      try {
        const result = await this.checkUrl(url);
        
        if (result.status >= 200 && result.status < 400) {
          results.valid.push(url);
          this.log(`✓ ${url} -> ${result.status}`, 'success');
        } else {
          results.invalid.push({ url, status: result.status, error: result.error });
          this.log(`✗ ${url} -> ${result.status} ${result.error || ''}`, 'warn');
          this.warnings.push(`External link issue: ${url} (${result.status})`);
        }
      } catch (error) {
        results.invalid.push({ url, error: error.message });
        this.log(`✗ ${url} -> ${error.message}`, 'warn');
        this.warnings.push(`External link error: ${url} - ${error.message}`);
      }
    }

    console.log(`  ✅ ${results.valid.length}/${results.total} external links valid`);
    return results;
  }

  // Check a single URL
  async checkUrl(url) {
    try {
      // Use dynamic import for fetch in Node.js
      const { default: fetch } = await import('node-fetch');
      
      const response = await fetch(url, {
        method: 'HEAD',
        timeout: TIMEOUT,
        follow: MAX_REDIRECTS,
        headers: {
          'User-Agent': 'Zaza-Teach-Crawler/1.0'
        }
      });

      return {
        status: response.status,
        url: response.url,
        redirected: response.redirected
      };
    } catch (error) {
      return {
        status: 0,
        error: error.message
      };
    }
  }

  // Generate comprehensive report
  generateReport(internalResults, externalResults) {
    console.log('\n📊 Site Crawl Report');
    console.log('====================');
    
    // Statistics
    console.log(`\nStatistics:`);
    console.log(`  Base URL: ${this.baseUrl}`);
    console.log(`  Locales: ${LOCALES.join(', ')}`);
    console.log(`  Expected routes: ${this.expectedRoutes.size}`);
    console.log(`  Internal routes found: ${this.internalRoutes.size}`);
    console.log(`  External links found: ${this.externalLinks.size}`);
    
    // Internal routes
    console.log(`\nInternal Routes:`);
    console.log(`  ✅ Valid: ${internalResults.valid.length}/${internalResults.total}`);
    console.log(`  ❌ Invalid: ${internalResults.invalid.length}/${internalResults.total}`);
    
    if (internalResults.invalid.length > 0 && this.verbose) {
      console.log(`\nInvalid Internal Routes:`);
      internalResults.invalid.forEach(item => {
        console.log(`    • ${item.route}: ${item.status || 'Error'} ${item.error || ''}`);
      });
    }
    
    // External links
    if (this.checkExternal) {
      console.log(`\nExternal Links:`);
      console.log(`  ✅ Valid: ${externalResults.valid.length}/${externalResults.total}`);
      console.log(`  ⚠️  Issues: ${externalResults.invalid.length}/${externalResults.total}`);
    }
    
    // Errors and warnings
    if (this.errors.length > 0) {
      console.log(`\n❌ Errors (${this.errors.length}):`);
      this.errors.forEach(error => console.log(`  • ${error}`));
    }
    
    if (this.warnings.length > 0) {
      console.log(`\n⚠️  Warnings (${this.warnings.length}):`);
      this.warnings.forEach(warning => console.log(`  • ${warning}`));
    }
    
    // Summary
    const hasErrors = this.errors.length > 0;
    console.log(`\n${hasErrors ? '❌' : '✅'} Summary:`);
    console.log(`  ${this.errors.length} errors, ${this.warnings.length} warnings`);
    
    return !hasErrors;
  }

  // Main crawling workflow
  async crawl() {
    console.log('🚀 Starting site crawl...\n');
    
    this.discoverRoutes();
    this.extractLinksFromCode();
    
    const internalResults = await this.validateInternalRoutes();
    const externalResults = await this.validateExternalLinks();
    
    const success = this.generateReport(internalResults, externalResults);
    
    console.log(`\n${success ? '🎉 Crawl completed successfully!' : '💥 Crawl found issues!'}`);
    
    return success;
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  external: args.includes('--external'),
  verbose: args.includes('--verbose')
};

// Run crawl
const crawler = new SiteCrawler(options);
const success = await crawler.crawl();

process.exit(success ? 0 : 1);