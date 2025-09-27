const sharp = require('sharp');
const path = require('path');

// SVG content for the real Zaza logo
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

async function generateFaviconIco() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Generate multiple sizes for ICO
  const sizes = [16, 32, 48];
  const buffers = [];
  
  for (const size of sizes) {
    const buffer = await sharp(Buffer.from(logoSvg))
      .resize(size, size)
      .png()
      .toBuffer();
    buffers.push(buffer);
  }
  
  // For now, just use the 32x32 version as favicon.ico
  // In a real implementation, you'd use a proper ICO library
  await sharp(Buffer.from(logoSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-temp.png'));
    
  console.log('✅ Favicon ICO base generated! (Note: Use proper ICO converter for production)');
}

generateFaviconIco().catch(console.error);