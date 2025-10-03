#!/usr/bin/env node
/**
 * Check for duplicate image content in the public directory
 * This script generates SHA256 hashes for all images and reports duplicates
 */
import { createHash } from 'crypto';
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGE_EXTENSIONS = /\.(png|jpe?g|svg|webp|ico)$/i;

function walk(dir) {
  const files = [];
  try {
    for (const f of readdirSync(dir)) {
      const p = join(dir, f);
      const s = statSync(p);
      if (s.isDirectory()) {
        files.push(...walk(p));
      } else if (IMAGE_EXTENSIONS.test(p)) {
        files.push(p);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  return files;
}

function main() {
  const publicDir = join(__dirname, '..', 'public');
  const files = walk(publicDir);
  
  if (files.length === 0) {
    console.log('No image files found in public directory');
    return;
  }

  console.log(`Checking ${files.length} image files for duplicates...`);
  
  const hashMap = new Map();
  let errorCount = 0;

  for (const filepath of files) {
    try {
      const content = readFileSync(filepath);
      const hash = createHash('sha256').update(content).digest('hex');
      
      if (!hashMap.has(hash)) {
        hashMap.set(hash, []);
      }
      hashMap.get(hash).push(filepath);
    } catch (error) {
      console.error(`Error processing ${filepath}:`, error.message);
      errorCount++;
    }
  }

  const duplicates = [...hashMap.entries()].filter(([, paths]) => paths.length > 1);

  if (duplicates.length === 0) {
    console.log('✅ No duplicate image content detected');
  } else {
    console.log(`🔍 Found ${duplicates.length} groups of duplicate image content:`);
    console.log('');
    
    duplicates.forEach(([hash, paths], index) => {
      console.log(`Group ${index + 1} (hash: ${hash.substring(0, 12)}...):`);
      paths.forEach(path => {
        console.log(`  - ${path}`);
      });
      console.log('');
    });
    
    if (process.env.CI) {
      console.error('❌ Duplicate image content detected in CI environment');
      process.exit(1);
    }
  }

  if (errorCount > 0) {
    console.log(`⚠️  ${errorCount} files could not be processed`);
  }
}

main();