const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Simple hero image without complex SVG
async function generateSimpleImages() {
  try {
    console.log('🖼️ Generating simple hero images...\n');
    
    const publicDir = path.join(process.cwd(), 'public');
    const imagesDir = path.join(publicDir, 'images');
    
    // Ensure images directory exists
    try {
      await fs.access(imagesDir);
    } catch {
      await fs.mkdir(imagesDir, { recursive: true });
    }

    // Create a simple gradient hero background
    console.log('🏠 Generating hero background...');
    const heroImage = sharp({
      create: {
        width: 800,
        height: 600,
        channels: 4,
        background: { r: 248, g: 248, b: 252, alpha: 1 }
      }
    });

    await heroImage
      .png()
      .toFile(path.join(imagesDir, 'hero-bg.png'));
    console.log('✓ Created hero-bg.png');

    // Create features grid background
    console.log('⭐ Generating features background...');
    const featuresImage = sharp({
      create: {
        width: 600,
        height: 400,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    });

    await featuresImage
      .png()
      .toFile(path.join(imagesDir, 'features-bg.png'));
    console.log('✓ Created features-bg.png');

    // Create testimonial background
    console.log('💬 Generating testimonial background...');
    const testimonialImage = sharp({
      create: {
        width: 400,
        height: 300,
        channels: 4,
        background: { r: 102, g: 178, b: 178, alpha: 0.1 }
      }
    });

    await testimonialImage
      .png()
      .toFile(path.join(imagesDir, 'testimonial-bg.png'));
    console.log('✓ Created testimonial-bg.png');

    // Create time-saving comparison
    console.log('📊 Generating time savings image...');
    const timeSavingImage = sharp({
      create: {
        width: 500,
        height: 300,
        channels: 4,
        background: { r: 248, g: 248, b: 252, alpha: 1 }
      }
    });

    await timeSavingImage
      .png()
      .toFile(path.join(imagesDir, 'time-savings.png'));
    console.log('✓ Created time-savings.png');

    console.log('\n🎉 All simple images generated successfully!');

  } catch (error) {
    console.error('❌ Error generating images:', error);
  }
}

if (require.main === module) {
  generateSimpleImages();
}

module.exports = { generateSimpleImages };