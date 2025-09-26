#!/usr/bin/env tsx

/**
 * Complete i18n setup validation script
 * Validates the entire internationalization setup for the Zaza Teach website
 */

import * as fs from 'fs';
import * as path from 'path';

const projectRoot = path.resolve(path.dirname(__filename), '..');

interface ValidationResult {
  category: string;
  checks: Array<{
    name: string;
    status: 'pass' | 'fail' | 'warning';
    message: string;
  }>;
}

class I18nValidator {
  private results: ValidationResult[] = [];

  async validate(): Promise<void> {
    console.log('🌍 Zaza Teach i18n Setup Validation\n');
    console.log('=====================================\n');

    await this.validateFileStructure();
    await this.validateTranslationFiles();
    await this.validateRouteStructure();
    await this.validateSEOSetup();
    await this.validateBlogSetup();
    await this.validateComponentUsage();
    await this.validateCISetup();

    this.printResults();
    this.summarize();
  }

  private async validateFileStructure(): Promise<void> {
    const checks: ValidationResult['checks'] = [];

    // Check core i18n files exist
    const requiredFiles = [
      'src/i18n/messages/en.json',
      'src/i18n/messages/de.json',
      'lib/seo.ts',
      'lib/blog-locale.ts',
      'components/LocaleProvider.tsx',
      'components/HrefLangLinks.tsx'
    ];

    for (const file of requiredFiles) {
      const exists = fs.existsSync(path.join(projectRoot, file));
      checks.push({
        name: `File exists: ${file}`,
        status: exists ? 'pass' : 'fail',
        message: exists ? 'Found' : 'Missing required file'
      });
    }

    // Check directory structure
    const requiredDirs = [
      'app/en',
      'app/de', 
      'content/blog/en',
      'content/blog/de',
      'docs'
    ];

    for (const dir of requiredDirs) {
      const exists = fs.existsSync(path.join(projectRoot, dir));
      checks.push({
        name: `Directory exists: ${dir}`,
        status: exists ? 'pass' : 'fail',
        message: exists ? 'Found' : 'Missing required directory'
      });
    }

    this.results.push({ category: 'File Structure', checks });
  }

  private async validateTranslationFiles(): Promise<void> {
    const checks: ValidationResult['checks'] = [];

    try {
      // Load translation files
      const enPath = path.join(projectRoot, 'src/i18n/messages/en.json');
      const dePath = path.join(projectRoot, 'src/i18n/messages/de.json');

      // Validate JSON syntax
      let enTranslations, deTranslations;
      
      try {
        enTranslations = JSON.parse(fs.readFileSync(enPath, 'utf8'));
        checks.push({
          name: 'English JSON syntax',
          status: 'pass',
          message: 'Valid JSON format'
        });
      } catch (error) {
        checks.push({
          name: 'English JSON syntax',
          status: 'fail',
          message: `Invalid JSON: ${error}`
        });
        return;
      }

      try {
        deTranslations = JSON.parse(fs.readFileSync(dePath, 'utf8'));
        checks.push({
          name: 'German JSON syntax',
          status: 'pass',
          message: 'Valid JSON format'
        });
      } catch (error) {
        checks.push({
          name: 'German JSON syntax',
          status: 'fail',
          message: `Invalid JSON: ${error}`
        });
        return;
      }

      // Count translation keys
      const enKeys = this.countKeys(enTranslations);
      const deKeys = this.countKeys(deTranslations);

      checks.push({
        name: 'Translation key counts',
        status: 'pass',
        message: `English: ${enKeys} keys, German: ${deKeys} keys`
      });

      // Check for minimum required sections
      const requiredSections = ['nav', 'home', 'footer', 'common'];
      for (const section of requiredSections) {
        const enHas = enTranslations[section] !== undefined;
        const deHas = deTranslations[section] !== undefined;
        
        checks.push({
          name: `Required section: ${section}`,
          status: (enHas && deHas) ? 'pass' : 'fail',
          message: enHas && deHas ? 'Present in both locales' : 'Missing in one or both locales'
        });
      }

    } catch (error) {
      checks.push({
        name: 'Translation file validation',
        status: 'fail',
        message: `Error: ${error}`
      });
    }

    this.results.push({ category: 'Translation Files', checks });
  }

  private async validateRouteStructure(): Promise<void> {
    const checks: ValidationResult['checks'] = [];

    // Check for key route files
    const keyRoutes = [
      'page.tsx',
      'pricing/page.tsx',
      'about/page.tsx',
      'contact/page.tsx',
      'blog/page.tsx',
      'blog/[slug]/page.tsx'
    ];

    for (const route of keyRoutes) {
      const enExists = fs.existsSync(path.join(projectRoot, 'app/en', route));
      const deExists = fs.existsSync(path.join(projectRoot, 'app/de', route));
      
      checks.push({
        name: `Route parity: ${route}`,
        status: (enExists && deExists) ? 'pass' : enExists || deExists ? 'warning' : 'fail',
        message: enExists && deExists ? 'Both locales' : 
                enExists ? 'English only' : 
                deExists ? 'German only' : 
                'Missing both locales'
      });
    }

    // Check layout files
    const enLayoutExists = fs.existsSync(path.join(projectRoot, 'app/en/layout.tsx'));
    const deLayoutExists = fs.existsSync(path.join(projectRoot, 'app/de/layout.tsx'));

    checks.push({
      name: 'Layout files',
      status: (enLayoutExists && deLayoutExists) ? 'pass' : 'fail',
      message: (enLayoutExists && deLayoutExists) ? 'Both layouts present' : 'Missing layout files'
    });

    this.results.push({ category: 'Route Structure', checks });
  }

  private async validateSEOSetup(): Promise<void> {
    const checks: ValidationResult['checks'] = [];

    try {
      // Check SEO utilities file
      const seoPath = path.join(projectRoot, 'lib/seo.ts');
      const seoContent = fs.readFileSync(seoPath, 'utf8');

      const requiredFunctions = [
        'generateSEOMetadata',
        'getCanonicalUrl',
        'getAlternateUrls',
        'getHrefLangData'
      ];

      for (const func of requiredFunctions) {
        const hasFunction = seoContent.includes(func);
        checks.push({
          name: `SEO function: ${func}`,
          status: hasFunction ? 'pass' : 'fail',
          message: hasFunction ? 'Found' : 'Missing function'
        });
      }

      // Check for hreflang component
      const hrefLangPath = path.join(projectRoot, 'components/HrefLangLinks.tsx');
      const hrefLangExists = fs.existsSync(hrefLangPath);

      checks.push({
        name: 'HrefLang component',
        status: hrefLangExists ? 'pass' : 'fail',
        message: hrefLangExists ? 'Component exists' : 'Missing HrefLangLinks component'
      });

      // Check layout SEO integration
      const layouts = ['app/en/layout.tsx', 'app/de/layout.tsx'];
      for (const layoutPath of layouts) {
        const fullPath = path.join(projectRoot, layoutPath);
        if (fs.existsSync(fullPath)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const hasHrefLang = content.includes('HrefLangLinks');
          const hasSEO = content.includes('generateSEOMetadata');

          checks.push({
            name: `SEO integration: ${layoutPath}`,
            status: (hasHrefLang && hasSEO) ? 'pass' : 'warning',
            message: (hasHrefLang && hasSEO) ? 'Full SEO integration' : 
                    hasSEO ? 'Has metadata, missing hreflang' :
                    hasHrefLang ? 'Has hreflang, missing metadata' :
                    'Missing SEO integration'
          });
        }
      }

    } catch (error) {
      checks.push({
        name: 'SEO setup validation',
        status: 'fail',
        message: `Error: ${error}`
      });
    }

    this.results.push({ category: 'SEO Setup', checks });
  }

  private async validateBlogSetup(): Promise<void> {
    const checks: ValidationResult['checks'] = [];

    try {
      // Check blog directories
      const enBlogDir = path.join(projectRoot, 'content/blog/en');
      const deBlogDir = path.join(projectRoot, 'content/blog/de');

      const enBlogExists = fs.existsSync(enBlogDir);
      const deBlogExists = fs.existsSync(deBlogDir);

      checks.push({
        name: 'Blog content directories',
        status: (enBlogExists && deBlogExists) ? 'pass' : 'fail',
        message: (enBlogExists && deBlogExists) ? 'Both blog directories exist' : 'Missing blog directories'
      });

      // Count blog posts
      if (enBlogExists && deBlogExists) {
        const enPosts = fs.readdirSync(enBlogDir).filter(f => f.endsWith('.md')).length;
        const dePosts = fs.readdirSync(deBlogDir).filter(f => f.endsWith('.md')).length;

        checks.push({
          name: 'Blog post counts',
          status: 'pass',
          message: `English: ${enPosts} posts, German: ${dePosts} posts`
        });

        const coverage = dePosts / enPosts;
        checks.push({
          name: 'Blog translation coverage',
          status: coverage >= 0.8 ? 'pass' : coverage >= 0.5 ? 'warning' : 'fail',
          message: `${Math.round(coverage * 100)}% coverage (${dePosts}/${enPosts})`
        });
      }

      // Check blog utilities
      const blogUtilPath = path.join(projectRoot, 'lib/blog-locale.ts');
      const blogUtilExists = fs.existsSync(blogUtilPath);

      checks.push({
        name: 'Blog locale utilities',
        status: blogUtilExists ? 'pass' : 'fail',
        message: blogUtilExists ? 'Blog utilities exist' : 'Missing blog-locale.ts'
      });

    } catch (error) {
      checks.push({
        name: 'Blog setup validation',
        status: 'fail',
        message: `Error: ${error}`
      });
    }

    this.results.push({ category: 'Blog Setup', checks });
  }

  private async validateComponentUsage(): Promise<void> {
    const checks: ValidationResult['checks'] = [];

    try {
      // Check LocaleProvider usage
      const layouts = ['app/en/layout.tsx', 'app/de/layout.tsx'];
      for (const layoutPath of layouts) {
        const fullPath = path.join(projectRoot, layoutPath);
        if (fs.existsSync(fullPath)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const hasProvider = content.includes('LocaleProvider');

          checks.push({
            name: `LocaleProvider in ${layoutPath}`,
            status: hasProvider ? 'pass' : 'fail',
            message: hasProvider ? 'LocaleProvider found' : 'Missing LocaleProvider'
          });
        }
      }

      // Check for useTranslations usage in components
      const componentDir = path.join(projectRoot, 'components');
      if (fs.existsSync(componentDir)) {
        const componentsWithTranslations = this.findTranslationUsage(componentDir);
        
        checks.push({
          name: 'Component translation usage',
          status: componentsWithTranslations > 0 ? 'pass' : 'warning',
          message: `${componentsWithTranslations} components use translations`
        });
      }

    } catch (error) {
      checks.push({
        name: 'Component usage validation',
        status: 'fail',
        message: `Error: ${error}`
      });
    }

    this.results.push({ category: 'Component Usage', checks });
  }

  private async validateCISetup(): Promise<void> {
    const checks: ValidationResult['checks'] = [];

    // Check CI workflow files
    const ciFiles = [
      '.github/workflows/ci.yml',
      '.github/workflows/i18n.yml'
    ];

    for (const ciFile of ciFiles) {
      const exists = fs.existsSync(path.join(projectRoot, ciFile));
      checks.push({
        name: `CI workflow: ${ciFile}`,
        status: exists ? 'pass' : 'warning',
        message: exists ? 'Workflow exists' : 'CI workflow missing'
      });

      if (exists) {
        const content = fs.readFileSync(path.join(projectRoot, ciFile), 'utf8');
        const hasI18nCheck = content.includes('check:i18n');
        
        checks.push({
          name: `i18n check in ${ciFile}`,
          status: hasI18nCheck ? 'pass' : 'warning',
          message: hasI18nCheck ? 'i18n check included' : 'No i18n validation in CI'
        });
      }
    }

    // Check package.json scripts
    const packageJsonPath = path.join(projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const hasI18nScript = packageJson.scripts && packageJson.scripts['check:i18n'];

      checks.push({
        name: 'npm script: check:i18n',
        status: hasI18nScript ? 'pass' : 'fail',
        message: hasI18nScript ? 'Script available' : 'Missing i18n check script'
      });
    }

    this.results.push({ category: 'CI/CD Setup', checks });
  }

  private countKeys(obj: any, prefix = ''): number {
    let count = 0;
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        count += this.countKeys(obj[key], prefix ? `${prefix}.${key}` : key);
      } else {
        count++;
      }
    }
    return count;
  }

  private findTranslationUsage(dir: string): number {
    let count = 0;
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        count += this.findTranslationUsage(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('useTranslations')) {
          count++;
        }
      }
    }
    
    return count;
  }

  private printResults(): void {
    for (const result of this.results) {
      console.log(`\n📋 ${result.category}`);
      console.log('='.repeat(result.category.length + 3));
      
      for (const check of result.checks) {
        const icon = check.status === 'pass' ? '✅' : 
                    check.status === 'warning' ? '⚠️' : '❌';
        console.log(`${icon} ${check.name}: ${check.message}`);
      }
    }
  }

  private summarize(): void {
    let totalChecks = 0;
    let passedChecks = 0;
    let warnings = 0;
    let failures = 0;

    for (const result of this.results) {
      for (const check of result.checks) {
        totalChecks++;
        if (check.status === 'pass') passedChecks++;
        else if (check.status === 'warning') warnings++;
        else failures++;
      }
    }

    console.log('\n📊 Summary');
    console.log('===========');
    console.log(`Total checks: ${totalChecks}`);
    console.log(`✅ Passed: ${passedChecks}`);
    console.log(`⚠️  Warnings: ${warnings}`);
    console.log(`❌ Failures: ${failures}`);

    const successRate = Math.round((passedChecks / totalChecks) * 100);
    console.log(`\n🎯 Success rate: ${successRate}%`);

    if (failures > 0) {
      console.log('\n❌ i18n setup validation failed');
      console.log('Please fix the failing checks before proceeding.');
      process.exit(1);
    } else if (warnings > 0) {
      console.log('\n⚠️  i18n setup validation completed with warnings');
      console.log('Consider addressing the warnings for optimal setup.');
    } else {
      console.log('\n✅ i18n setup validation passed successfully');
      console.log('Your internationalization setup is complete!');
    }
  }
}

// Run validation
if (require.main === module) {
  const validator = new I18nValidator();
  validator.validate().catch(console.error);
}