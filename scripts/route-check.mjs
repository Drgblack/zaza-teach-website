#!/usr/bin/env node

/**
 * route-check.mjs
 * Quick route and file structure validation
 * Checks that expected pages exist and finds any missing routes
 * Usage: node scripts/route-check.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const LOCALES = ['en', 'de'];
const APP_DIR = path.join(__dirname, '..', 'app');

class RouteValidator {
  constructor() {
    this.routes = [];
    this.missingPages = [];
    this.extraPages = [];
    this.errors = [];
    this.warnings = [];
  }

  // Discover all routes from app directory structure
  discoverRoutes() {
    console.log('🔍 Discovering routes from app directory...');
    
    this.scanDirectory(APP_DIR);
    
    console.log(`  ✅ Found ${this.routes.length} routes`);
    return this.routes;
  }

  scanDirectory(dir, currentPath = '') {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Check if this is a locale directory at root
        if (currentPath === '' && LOCALES.includes(item)) {
          this.scanDirectory(fullPath, `/${item}`);
        } else if (currentPath !== '' && !item.startsWith('(') && !item.startsWith('_')) {
          // Regular route segment
          const routePath = currentPath === '/' ? `/${item}` : `${currentPath}/${item}`;
          this.scanDirectory(fullPath, routePath);
        }
      } else if (item === 'page.tsx') {
        // Found a page, record the route
        const route = currentPath || '/';
        this.routes.push({
          path: route,
          fullPath: fullPath,
          exists: true
        });
      }
    }
  }

  // Check for missing required pages
  checkRequiredPages() {
    console.log('🔍 Checking for required pages...');
    
    const requiredRoutes = [
      '/',
      '/about',
      '/about-founder', 
      '/blog',
      '/contact',
      '/pricing',
      '/products',
      '/faqs',
      '/privacy',
      '/terms',
      '/impressum'
    ];

    const missingRoutes = [];
    
    for (const locale of LOCALES) {
      for (const route of requiredRoutes) {
        const expectedRoute = `/${locale}${route === '/' ? '' : route}`;
        const found = this.routes.find(r => r.path === expectedRoute);
        
        if (!found) {
          missingRoutes.push(expectedRoute);
        }
      }
    }

    if (missingRoutes.length > 0) {
      this.errors.push(`Missing required pages: ${missingRoutes.join(', ')}`);
    }

    console.log(`  ✅ Checked ${requiredRoutes.length * LOCALES.length} required routes`);
  }

  // Check for locale parity
  checkLocaleParity() {
    console.log('🔍 Checking for locale parity...');
    
    const enRoutes = this.routes.filter(r => r.path.startsWith('/en')).map(r => r.path.replace('/en', ''));
    const deRoutes = this.routes.filter(r => r.path.startsWith('/de')).map(r => r.path.replace('/de', ''));
    
    const missingInDe = enRoutes.filter(route => !deRoutes.includes(route));
    const missingInEn = deRoutes.filter(route => !enRoutes.includes(route));
    
    if (missingInDe.length > 0) {
      this.errors.push(`Routes missing in DE: ${missingInDe.map(r => '/de' + r).join(', ')}`);
    }
    
    if (missingInEn.length > 0) {
      this.errors.push(`Routes missing in EN: ${missingInEn.map(r => '/en' + r).join(', ')}`);
    }

    console.log(`  ✅ EN routes: ${enRoutes.length}, DE routes: ${deRoutes.length}`);
  }

  // Extract links from components
  extractLinksFromCode() {
    console.log('🔍 Extracting links from code...');
    
    const internalLinks = new Set();
    const externalLinks = new Set();
    
    const patterns = [
      /href\s*=\s*["`']([^"`']+)["`']/g,
      /Link\s+href\s*=\s*["`']([^"`']+)["`']/g,
      /router\.push\(["`']([^"`']+)["`']\)/g
    ];

    this.scanForLinks(APP_DIR, patterns, internalLinks, externalLinks);
    this.scanForLinks(path.join(__dirname, '..', 'components'), patterns, internalLinks, externalLinks);
    
    console.log(`  ✅ Found ${internalLinks.size} internal links, ${externalLinks.size} external links`);
    
    return { internalLinks, externalLinks };
  }

  scanForLinks(dir, patterns, internalLinks, externalLinks) {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.scanForLinks(fullPath, patterns, internalLinks, externalLinks);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          
          for (const pattern of patterns) {
            let match;
            while ((match = pattern.exec(content)) !== null) {
              const url = match[1];
              
              if (url.startsWith('http://') || url.startsWith('https://')) {
                externalLinks.add(url);
              } else if (url.startsWith('/') && !url.startsWith('//')) {
                internalLinks.add(url);
              }
            }
          }
        } catch (error) {
          this.warnings.push(`Could not read file ${fullPath}: ${error.message}`);
        }
      }
    }
  }

  // Validate that linked routes exist
  validateLinkedRoutes(internalLinks) {
    console.log('🔍 Validating linked routes...');
    
    const brokenLinks = [];
    const allRoutePaths = this.routes.map(r => r.path);
    
    for (const link of internalLinks) {
      // Skip dynamic routes and anchors
      if (link.includes('[') || link.includes('#') || link.includes('?')) {
        continue;
      }
      
      // For routes without locale prefix, check if they exist with locale prefixes
      if (!link.startsWith('/en') && !link.startsWith('/de')) {
        const enRoute = `/en${link === '/' ? '' : link}`;
        const deRoute = `/de${link === '/' ? '' : link}`;
        
        if (!allRoutePaths.includes(enRoute) && !allRoutePaths.includes(deRoute)) {
          brokenLinks.push(link);
        }
      } else {
        // Direct locale-prefixed route
        if (!allRoutePaths.includes(link)) {
          brokenLinks.push(link);
        }
      }
    }
    
    if (brokenLinks.length > 0) {
      this.errors.push(`Broken internal links: ${brokenLinks.join(', ')}`);
    }
    
    console.log(`  ✅ Validated ${internalLinks.size} internal links`);
  }

  // Generate report
  generateReport() {
    console.log('\n📊 Route Validation Report');
    console.log('==========================');
    
    // Statistics
    console.log(`\nStatistics:`);
    console.log(`  Total routes: ${this.routes.length}`);
    console.log(`  EN routes: ${this.routes.filter(r => r.path.startsWith('/en')).length}`);
    console.log(`  DE routes: ${this.routes.filter(r => r.path.startsWith('/de')).length}`);
    
    // Sample routes
    console.log(`\nSample routes:`);
    this.routes.slice(0, 10).forEach(route => {
      console.log(`  • ${route.path}`);
    });
    
    if (this.routes.length > 10) {
      console.log(`  ... and ${this.routes.length - 10} more`);
    }
    
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
    const hasErrors = this.errors.length > 0;
    console.log(`\n${hasErrors ? '❌' : '✅'} Summary:`);
    console.log(`  ${this.errors.length} errors, ${this.warnings.length} warnings`);
    
    return !hasErrors;
  }

  // Main validation workflow
  async validate() {
    console.log('🚀 Starting route validation...\n');
    
    this.discoverRoutes();
    this.checkRequiredPages();
    this.checkLocaleParity();
    
    const { internalLinks, externalLinks } = this.extractLinksFromCode();
    this.validateLinkedRoutes(internalLinks);
    
    const success = this.generateReport();
    
    console.log(`\n${success ? '🎉 Route validation completed successfully!' : '💥 Route validation found issues!'}`);
    
    return success;
  }
}

// Run validation
const validator = new RouteValidator();
const success = await validator.validate();

process.exit(success ? 0 : 1);