const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const QUALITY = 85;
const INPUT_DIR = 'public/images';
const FORMATS = ['.jpg', '.jpeg', '.png'];

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    const inputStats = await fs.stat(inputPath);
    const outputStats = await fs.stat(outputPath);
    
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(2);
    console.log(`✓ Converted ${path.basename(inputPath)} → ${path.basename(outputPath)} (${reduction}% smaller)`);
    
    return { input: inputStats.size, output: outputStats.size };
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dirPath) {
  let totalInput = 0;
  let totalOutput = 0;
  let fileCount = 0;

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        const subResult = await processDirectory(fullPath);
        totalInput += subResult.totalInput;
        totalOutput += subResult.totalOutput;
        fileCount += subResult.fileCount;
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (FORMATS.includes(ext)) {
          const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          
          // Check if WebP already exists
          try {
            await fs.access(outputPath);
            console.log(`⚠ Skipping ${entry.name} - WebP already exists`);
          } catch {
            const result = await convertToWebP(fullPath, outputPath);
            if (result) {
              totalInput += result.input;
              totalOutput += result.output;
              fileCount++;
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }

  return { totalInput, totalOutput, fileCount };
}

async function main() {
  console.log('🖼️ Converting images to WebP format...\n');
  
  const startTime = Date.now();
  const result = await processDirectory(INPUT_DIR);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  
  if (result.fileCount > 0) {
    const totalReduction = ((1 - result.totalOutput / result.totalInput) * 100).toFixed(2);
    console.log(`
✅ Conversion complete!
   Files converted: ${result.fileCount}
   Total size reduction: ${totalReduction}%
   Original: ${(result.totalInput / 1024 / 1024).toFixed(2)} MB
   WebP: ${(result.totalOutput / 1024 / 1024).toFixed(2)} MB
   Time: ${duration}s
`);
  } else {
    console.log('\n⚠ No images needed conversion.');
  }
}

// Check if sharp is installed
try {
  require.resolve('sharp');
  main().catch(console.error);
} catch {
  console.error('❌ Please install sharp first: npm install --save-dev sharp');
  process.exit(1);
}