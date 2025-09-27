const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG content for the real Zaza logo (circular blue-to-purple gradient with white Z)
const logoSvg = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="zazaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#5B9BD5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8E44AD;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="256" cy="256" r="256" fill="url(#zazaGradient)"/>
  <path d="M128 154H384V218L218 320H384V384H128V320L294 218H128V154Z" fill="white"/>
</svg>`;

async function generateLogos() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Generate main logo PNG
  await sharp(Buffer.from(logoSvg))
    .resize(200, 200)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));
  
  // Generate header logo PNG  
  await sharp(Buffer.from(logoSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'zaza-logo-32.png'));
    
  // Generate favicon sizes
  await sharp(Buffer.from(logoSvg))
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16-real.png'));
    
  await sharp(Buffer.from(logoSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32-real.png'));
    
  await sharp(Buffer.from(logoSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon-real.png'));
    
  await sharp(Buffer.from(logoSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192x192-real.png'));
    
  await sharp(Buffer.from(logoSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-512x512-real.png'));
    
  // Generate ICO favicon
  await sharp(Buffer.from(logoSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-real.png'));
    
  console.log('✅ Real Zaza logos generated successfully!');
}

generateLogos().catch(console.error);