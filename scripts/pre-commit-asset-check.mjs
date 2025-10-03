#!/usr/bin/env node

/**
 * Pre-commit hook to prevent mass asset changes
 * Usage: Run this script to check for potentially problematic asset changes
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

const ASSET_PATHS = [
  'public/images/',
  'public/logo/',
  'public/*.png',
  'public/*.jpg',
  'public/*.jpeg',
  'public/*.svg',
  'public/*.ico'
];

const MAX_ASSETS_CHANGED = 5; // Maximum number of assets that can be changed in one commit

function checkAssetChanges() {
  try {
    // Get list of staged files
    const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' })
      .split('\n')
      .filter(Boolean);

    // Filter for asset files
    const changedAssets = stagedFiles.filter(file => 
      ASSET_PATHS.some(pattern => {
        if (pattern.includes('*')) {
          const regex = new RegExp(pattern.replace(/\*/g, '.*'));
          return regex.test(file);
        }
        return file.startsWith(pattern);
      })
    );

    if (changedAssets.length === 0) {
      console.log('✅ No asset changes detected');
      return true;
    }

    console.log(`📸 Found ${changedAssets.length} asset changes:`);
    changedAssets.forEach(file => console.log(`  - ${file}`));

    if (changedAssets.length > MAX_ASSETS_CHANGED) {
      console.log(`\n❌ TOO MANY ASSET CHANGES!`);
      console.log(`   Found: ${changedAssets.length} changed assets`);
      console.log(`   Limit: ${MAX_ASSETS_CHANGED} assets per commit`);
      console.log(`\n💡 To prevent accidental mass asset changes:`);
      console.log(`   1. Review each asset change carefully`);
      console.log(`   2. Split large asset changes into multiple commits`);
      console.log(`   3. Use 'git commit --no-verify' to bypass this check if intentional`);
      return false;
    }

    console.log(`\n⚠️  Asset changes detected but within limits (${changedAssets.length}/${MAX_ASSETS_CHANGED})`);
    console.log(`   Please review these changes carefully before committing.`);
    return true;

  } catch (error) {
    console.log('⚠️  Could not check git status, skipping asset check');
    return true; // Don't block commit if git check fails
  }
}

function main() {
  console.log('🔍 Checking for mass asset changes...');
  
  const passed = checkAssetChanges();
  
  if (!passed) {
    process.exit(1);
  }
  
  console.log('✅ Asset check passed');
}

main();