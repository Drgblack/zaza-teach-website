const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Create hero image for homepage
const createHeroImage = () => `
<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F8F8FC;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#E8E6F5;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.7" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  
  <!-- Main laptop/tablet representing the app -->
  <rect x="150" y="100" width="500" height="350" rx="20" fill="#2C3E35"/>
  <rect x="170" y="120" width="460" height="280" fill="white"/>
  
  <!-- App interface mockup -->
  <rect x="190" y="140" width="420" height="40" fill="#66B2B2" rx="8"/>
  <text x="400" y="165" font-family="Arial" font-size="16" text-anchor="middle" fill="white" font-weight="bold">Zaza Teach - Lesson Planner</text>
  
  <!-- Lesson content area -->
  <rect x="190" y="200" width="420" height="180" fill="#F8F8FC" stroke="#E5E7EB" rx="4"/>
  
  <!-- Lesson items -->
  <rect x="210" y="220" width="60" height="8" fill="#66B2B2" rx="2"/>
  <rect x="280" y="220" width="140" height="8" fill="#2C3E35" rx="2"/>
  
  <rect x="210" y="240" width="80" height="8" fill="#8A2BE2" rx="2"/>
  <rect x="300" y="240" width="100" height="8" fill="#2C3E35" rx="2"/>
  
  <rect x="210" y="260" width="50" height="8" fill="#66B2B2" rx="2"/>
  <rect x="270" y="260" width="160" height="8" fill="#2C3E35" rx="2"/>
  
  <!-- Time savings indicator -->
  <circle cx="550" cy="300" r="30" fill="#8A2BE2"/>
  <text x="550" y="295" font-family="Arial" font-size="12" text-anchor="middle" fill="white" font-weight="bold">5</text>
  <text x="550" y="308" font-family="Arial" font-size="8" text-anchor="middle" fill="white">MIN</text>
  
  <!-- Floating elements showing features -->
  <circle cx="100" cy="150" r="40" fill="url(#cardGrad)" stroke="#66B2B2" stroke-width="2"/>
  <text x="100" y="157" font-family="Arial" font-size="24" text-anchor="middle" fill="#66B2B2">📚</text>
  
  <circle cx="700" cy="200" r="40" fill="url(#cardGrad)" stroke="#8A2BE2" stroke-width="2"/>
  <text x="700" y="207" font-family="Arial" font-size="24" text-anchor="middle" fill="#8A2BE2">⚡</text>
  
  <circle cx="120" cy="450" r="35" fill="url(#cardGrad)" stroke="#66B2B2" stroke-width="2"/>
  <text x="120" y="457" font-family="Arial" font-size="20" text-anchor="middle" fill="#66B2B2">✓</text>
  
  <!-- Bottom text -->
  <text x="400" y="520" font-family="Arial" font-size="18" text-anchor="middle" fill="#2C3E35" font-weight="bold">Transform Hours into Minutes</text>
  <text x="400" y="545" font-family="Arial" font-size="14" text-anchor="middle" fill="#66B2B2">AI-powered lesson planning for busy educators</text>
</svg>`;

// Create features illustration
const createFeaturesImage = () => `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="featureBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F8F8FC;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="600" height="400" fill="url(#featureBg)"/>
  
  <!-- Three feature columns -->
  
  <!-- Column 1: AI Planning -->
  <rect x="50" y="80" width="150" height="200" fill="white" stroke="#66B2B2" stroke-width="2" rx="12"/>
  <circle cx="125" cy="120" r="20" fill="#66B2B2"/>
  <text x="125" y="127" font-family="Arial" font-size="16" text-anchor="middle" fill="white">🤖</text>
  <text x="125" y="160" font-family="Arial" font-size="14" text-anchor="middle" fill="#2C3E35" font-weight="bold">AI Planning</text>
  <text x="125" y="180" font-family="Arial" font-size="10" text-anchor="middle" fill="#666">Generate lessons</text>
  <text x="125" y="195" font-family="Arial" font-size="10" text-anchor="middle" fill="#666">in minutes</text>
  
  <!-- Column 2: Curriculum Aligned -->
  <rect x="225" y="80" width="150" height="200" fill="white" stroke="#8A2BE2" stroke-width="2" rx="12"/>
  <circle cx="300" cy="120" r="20" fill="#8A2BE2"/>
  <text x="300" y="127" font-family="Arial" font-size="16" text-anchor="middle" fill="white">📋</text>
  <text x="300" y="160" font-family="Arial" font-size="14" text-anchor="middle" fill="#2C3E35" font-weight="bold">Standards Aligned</text>
  <text x="300" y="180" font-family="Arial" font-size="10" text-anchor="middle" fill="#666">Curriculum</text>
  <text x="300" y="195" font-family="Arial" font-size="10" text-anchor="middle" fill="#666">compliant</text>
  
  <!-- Column 3: Export Ready -->
  <rect x="400" y="80" width="150" height="200" fill="white" stroke="#66B2B2" stroke-width="2" rx="12"/>
  <circle cx="475" cy="120" r="20" fill="#66B2B2"/>
  <text x="475" y="127" font-family="Arial" font-size="16" text-anchor="middle" fill="white">📄</text>
  <text x="475" y="160" font-family="Arial" font-size="14" text-anchor="middle" fill="#2C3E35" font-weight="bold">Export Ready</text>
  <text x="475" y="180" font-family="Arial" font-size="10" text-anchor="middle" fill="#666">Word & PDF</text>
  <text x="475" y="195" font-family="Arial" font-size="10" text-anchor="middle" fill="#666">formats</text>
  
  <!-- Connecting lines -->
  <line x1="200" y1="180" x2="225" y2="180" stroke="#E5E7EB" stroke-width="2"/>
  <line x1="375" y1="180" x2="400" y2="180" stroke="#E5E7EB" stroke-width="2"/>
  
  <!-- Bottom tagline -->
  <text x="300" y="340" font-family="Arial" font-size="16" text-anchor="middle" fill="#2C3E35" font-weight="bold">Complete Lesson Planning Workflow</text>
</svg>`;

// Create testimonial background image
const createTestimonialBg = () => `
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="testimonialBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#66B2B2;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="400" height="300" fill="url(#testimonialBg)"/>
  
  <!-- Quote mark -->
  <text x="200" y="150" font-family="Arial" font-size="120" text-anchor="middle" fill="#66B2B2" opacity="0.3">"</text>
  
  <!-- Decorative elements -->
  <circle cx="50" cy="50" r="3" fill="#8A2BE2" opacity="0.4"/>
  <circle cx="350" cy="80" r="4" fill="#66B2B2" opacity="0.4"/>
  <circle cx="80" cy="250" r="2" fill="#8A2BE2" opacity="0.4"/>
  <circle cx="320" cy="220" r="5" fill="#66B2B2" opacity="0.3"/>
</svg>`;

async function generateHeroImages() {
  try {
    console.log('🖼️ Generating hero and feature images...\n');
    
    const publicDir = path.join(process.cwd(), 'public');
    const imagesDir = path.join(publicDir, 'images');
    
    // Ensure images directory exists
    try {
      await fs.access(imagesDir);
    } catch {
      await fs.mkdir(imagesDir, { recursive: true });
    }

    // Generate hero image
    console.log('🏠 Generating hero image...');
    const heroSvg = createHeroImage();
    await sharp(Buffer.from(heroSvg))
      .png()
      .toFile(path.join(imagesDir, 'hero-main.png'));
    console.log('✓ Created hero-main.png');

    // Generate features image
    console.log('⭐ Generating features image...');
    const featuresSvg = createFeaturesImage();
    await sharp(Buffer.from(featuresSvg))
      .png()
      .toFile(path.join(imagesDir, 'features-overview.png'));
    console.log('✓ Created features-overview.png');

    // Generate testimonial background
    console.log('💬 Generating testimonial background...');
    const testimonialSvg = createTestimonialBg();
    await sharp(Buffer.from(testimonialSvg))
      .png()
      .toFile(path.join(imagesDir, 'testimonial-bg.png'));
    console.log('✓ Created testimonial-bg.png');

    // Generate additional marketing images
    console.log('📊 Generating time-saving illustration...');
    const timeSavingSvg = `
    <svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Before/After comparison -->
      <text x="125" y="30" font-family="Arial" font-size="16" text-anchor="middle" fill="#E53E3E" font-weight="bold">BEFORE</text>
      <text x="375" y="30" font-family="Arial" font-size="16" text-anchor="middle" fill="#38A169" font-weight="bold">AFTER</text>
      
      <!-- Before: 3 hours -->
      <rect x="50" y="50" width="150" height="180" fill="#FED7D7" stroke="#E53E3E" stroke-width="2" rx="8"/>
      <text x="125" y="80" font-family="Arial" font-size="32" text-anchor="middle" fill="#E53E3E" font-weight="bold">3</text>
      <text x="125" y="105" font-family="Arial" font-size="16" text-anchor="middle" fill="#E53E3E">HOURS</text>
      <text x="125" y="140" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">Manual planning</text>
      <text x="125" y="160" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">Research time</text>
      <text x="125" y="180" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">Formatting</text>
      <text x="125" y="200" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">Stress & fatigue</text>
      
      <!-- Arrow -->
      <path d="M220 140 L280 140" stroke="#666" stroke-width="3" fill="none"/>
      <polygon points="270,135 280,140 270,145" fill="#666"/>
      <text x="250" y="125" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">With Zaza</text>
      
      <!-- After: 5 minutes -->
      <rect x="300" y="50" width="150" height="180" fill="#C6F6D5" stroke="#38A169" stroke-width="2" rx="8"/>
      <text x="375" y="80" font-family="Arial" font-size="32" text-anchor="middle" fill="#38A169" font-weight="bold">5</text>
      <text x="375" y="105" font-family="Arial" font-size="16" text-anchor="middle" fill="#38A169">MINUTES</text>
      <text x="375" y="140" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">AI-generated</text>
      <text x="375" y="160" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">Standards-aligned</text>
      <text x="375" y="180" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">Ready to use</text>
      <text x="375" y="200" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">More time for students</text>
    </svg>`;
    
    await sharp(Buffer.from(timeSavingSvg))
      .png()
      .toFile(path.join(imagesDir, 'time-savings.png'));
    console.log('✓ Created time-savings.png');

    console.log('\n🎉 All hero and feature images generated successfully!');
    console.log('\nGenerated files:');
    console.log('- images/hero-main.png');
    console.log('- images/features-overview.png');
    console.log('- images/testimonial-bg.png');
    console.log('- images/time-savings.png');

  } catch (error) {
    console.error('❌ Error generating hero images:', error);
  }
}

if (require.main === module) {
  generateHeroImages();
}

module.exports = { generateHeroImages };