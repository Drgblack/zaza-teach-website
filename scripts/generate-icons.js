const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Icon sizes needed for web standards
const ICON_SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

// Create a simple SVG icon based on Zaza's brand colors
const createSVGIcon = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#66B2B2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle -->
  <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="url(#grad)"/>
  
  <!-- Letter Z in white -->
  <text x="${size/2}" y="${size/2 + size/8}" 
        font-family="Arial, sans-serif" 
        font-weight="bold" 
        font-size="${size * 0.6}" 
        text-anchor="middle" 
        fill="white">Z</text>
</svg>`;

// Create Open Graph image SVG
const createOGImage = () => `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F8F8FC;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#E8E6F5;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#66B2B2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  
  <!-- Logo circle -->
  <circle cx="200" cy="315" r="80" fill="url(#logoGrad)"/>
  <text x="200" y="340" 
        font-family="Arial, sans-serif" 
        font-weight="bold" 
        font-size="72" 
        text-anchor="middle" 
        fill="white">Z</text>
  
  <!-- Main title -->
  <text x="320" y="280" 
        font-family="Arial, sans-serif" 
        font-weight="bold" 
        font-size="48" 
        fill="#2C3E35">Zaza Teach</text>
        
  <!-- Subtitle -->
  <text x="320" y="330" 
        font-family="Arial, sans-serif" 
        font-size="32" 
        fill="#66B2B2">AI Lesson Planning for Educators</text>
        
  <!-- Description -->
  <text x="320" y="380" 
        font-family="Arial, sans-serif" 
        font-size="24" 
        fill="#2C3E35">Plan lessons faster with AI-powered tools</text>
        
  <!-- Call to action -->
  <rect x="320" y="420" width="250" height="60" rx="30" fill="#66B2B2"/>
  <text x="445" y="458" 
        font-family="Arial, sans-serif" 
        font-weight="bold" 
        font-size="20" 
        text-anchor="middle" 
        fill="white">Try Zaza Teach Free</text>
        
  <!-- Decorative elements -->
  <circle cx="950" cy="150" r="8" fill="#8A2BE2" opacity="0.3"/>
  <circle cx="1000" cy="200" r="12" fill="#66B2B2" opacity="0.3"/>
  <circle cx="1050" cy="120" r="6" fill="#8A2BE2" opacity="0.4"/>
  <circle cx="850" cy="500" r="10" fill="#66B2B2" opacity="0.3"/>
  <circle cx="950" cy="480" r="8" fill="#8A2BE2" opacity="0.3"/>
</svg>`;

async function generateIcons() {
  try {
    console.log('🎨 Generating icons and images...\n');
    
    const publicDir = path.join(process.cwd(), 'public');
    
    // Ensure public directory exists
    try {
      await fs.access(publicDir);
    } catch {
      await fs.mkdir(publicDir, { recursive: true });
    }

    // Generate favicon.ico from 32px PNG
    console.log('📱 Generating app icons...');
    
    for (const { size, name } of ICON_SIZES) {
      const svgIcon = createSVGIcon(size);
      const outputPath = path.join(publicDir, name);
      
      await sharp(Buffer.from(svgIcon))
        .png()
        .toFile(outputPath);
        
      console.log(`✓ Created ${name} (${size}x${size})`);
    }

    // Generate favicon.ico from 32px PNG
    const favicon32Path = path.join(publicDir, 'favicon-32x32.png');
    const faviconPath = path.join(publicDir, 'favicon.ico');
    
    await sharp(favicon32Path)
      .resize(32, 32)
      .png()
      .toFile(faviconPath.replace('.ico', '.png'));
      
    // Note: For true .ico format, you'd need a specialized library
    // For now, we'll use PNG and update the HTML to reference it correctly
    console.log('✓ Created favicon.ico (as PNG)');

    // Generate Open Graph image
    console.log('\n🌐 Generating Open Graph image...');
    const ogSvg = createOGImage();
    const ogPath = path.join(publicDir, 'og-image.png');
    
    await sharp(Buffer.from(ogSvg))
      .png()
      .toFile(ogPath);
      
    console.log('✓ Created og-image.png (1200x630)');

    // Create a simple logo version
    console.log('\n🏷️ Generating logo variations...');
    const logoSvg = createSVGIcon(200);
    const logoPath = path.join(publicDir, 'logo.png');
    
    await sharp(Buffer.from(logoSvg))
      .png()
      .toFile(logoPath);
      
    console.log('✓ Created logo.png (200x200)');

    // Generate app screenshots placeholder
    console.log('\n📱 Generating app screenshots...');
    
    const desktopScreenshot = `
    <svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <rect width="1280" height="720" fill="#F8F8FC"/>
      <rect x="50" y="50" width="1180" height="620" fill="white" stroke="#E5E7EB" stroke-width="2" rx="8"/>
      <text x="640" y="360" font-family="Arial" font-size="32" text-anchor="middle" fill="#2C3E35">Zaza Teach Desktop Interface</text>
    </svg>`;
    
    const mobileScreenshot = `
    <svg width="400" height="800" viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="800" fill="#F8F8FC"/>
      <rect x="20" y="20" width="360" height="760" fill="white" stroke="#E5E7EB" stroke-width="2" rx="8"/>
      <text x="200" y="400" font-family="Arial" font-size="18" text-anchor="middle" fill="#2C3E35">Zaza Teach Mobile</text>
    </svg>`;

    await sharp(Buffer.from(desktopScreenshot))
      .png()
      .toFile(path.join(publicDir, 'screenshot-desktop.png'));
      
    await sharp(Buffer.from(mobileScreenshot))
      .png()
      .toFile(path.join(publicDir, 'screenshot-mobile.png'));
      
    console.log('✓ Created screenshot-desktop.png');
    console.log('✓ Created screenshot-mobile.png');

    console.log('\n🎉 All icons and images generated successfully!');
    console.log('\nGenerated files:');
    console.log('- favicon.ico');
    console.log('- favicon-16x16.png');
    console.log('- favicon-32x32.png');
    console.log('- apple-touch-icon.png');
    console.log('- android-chrome-192x192.png');
    console.log('- android-chrome-512x512.png');
    console.log('- og-image.png');
    console.log('- logo.png');
    console.log('- screenshot-desktop.png');
    console.log('- screenshot-mobile.png');

  } catch (error) {
    console.error('❌ Error generating icons:', error);
  }
}

// Check if sharp is available
if (require.main === module) {
  try {
    require.resolve('sharp');
    generateIcons();
  } catch {
    console.error('❌ Please install sharp first: npm install --save-dev sharp');
    process.exit(1);
  }
}

module.exports = { generateIcons };