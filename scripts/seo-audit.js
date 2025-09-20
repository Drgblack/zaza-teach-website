const fs = require('fs').promises;
const path = require('path');
const cheerio = require('cheerio');

class SEOAuditor {
  constructor() {
    this.results = {
      meta: {},
      structuredData: [],
      images: [],
      links: [],
      headings: {},
      performance: {},
      accessibility: {},
      seo: {}
    };
  }

  async auditPage(htmlContent, url = '') {
    const $ = cheerio.load(htmlContent);
    
    console.log(`🔍 SEO Audit for: ${url}\n`);
    
    this.auditMetaTags($);
    this.auditHeadings($);
    this.auditImages($);
    this.auditLinks($);
    this.auditStructuredData($);
    this.auditPerformance($);
    
    this.generateReport();
  }

  auditMetaTags($) {
    console.log('📋 META TAGS ANALYSIS');
    console.log('=====================');

    // Title
    const title = $('title').text();
    console.log(`Title: ${title}`);
    console.log(`Title Length: ${title.length} chars ${title.length >= 30 && title.length <= 60 ? '✅' : '⚠️'}`);

    // Meta description
    const description = $('meta[name="description"]').attr('content') || '';
    console.log(`Description: ${description.substring(0, 100)}...`);
    console.log(`Description Length: ${description.length} chars ${description.length >= 150 && description.length <= 160 ? '✅' : '⚠️'}`);

    // Keywords
    const keywords = $('meta[name="keywords"]').attr('content') || '';
    console.log(`Keywords: ${keywords ? '✅' : '❌'} ${keywords.substring(0, 50)}...`);

    // Viewport
    const viewport = $('meta[name="viewport"]').attr('content') || '';
    console.log(`Viewport: ${viewport ? '✅' : '❌'} ${viewport}`);

    // Canonical
    const canonical = $('link[rel="canonical"]').attr('href') || '';
    console.log(`Canonical: ${canonical ? '✅' : '❌'} ${canonical}`);

    // Open Graph
    const ogTitle = $('meta[property="og:title"]').attr('content') || '';
    const ogDescription = $('meta[property="og:description"]').attr('content') || '';
    const ogImage = $('meta[property="og:image"]').attr('content') || '';
    
    console.log(`Open Graph Title: ${ogTitle ? '✅' : '❌'}`);
    console.log(`Open Graph Description: ${ogDescription ? '✅' : '❌'}`);
    console.log(`Open Graph Image: ${ogImage ? '✅' : '❌'}`);

    // Twitter Cards
    const twitterCard = $('meta[name="twitter:card"]').attr('content') || '';
    console.log(`Twitter Card: ${twitterCard ? '✅' : '❌'} ${twitterCard}`);

    console.log('');
  }

  auditHeadings($) {
    console.log('📊 HEADING STRUCTURE');
    console.log('===================');

    const headings = {};
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
      const tag = el.tagName.toLowerCase();
      if (!headings[tag]) headings[tag] = 0;
      headings[tag]++;
    });

    console.log(`H1 tags: ${headings.h1 || 0} ${headings.h1 === 1 ? '✅' : headings.h1 > 1 ? '⚠️' : '❌'}`);
    console.log(`H2 tags: ${headings.h2 || 0}`);
    console.log(`H3 tags: ${headings.h3 || 0}`);
    console.log(`Total headings: ${Object.values(headings).reduce((a, b) => a + b, 0)}`);
    console.log('');
  }

  auditImages($) {
    console.log('🖼️ IMAGES ANALYSIS');
    console.log('=================');

    const images = $('img');
    let missingAlt = 0;
    let optimized = 0;

    images.each((i, el) => {
      const alt = $(el).attr('alt');
      const src = $(el).attr('src');
      const loading = $(el).attr('loading');
      
      if (!alt || alt.trim() === '') missingAlt++;
      if (loading === 'lazy' || src?.includes('.webp')) optimized++;
    });

    console.log(`Total images: ${images.length}`);
    console.log(`Missing alt text: ${missingAlt} ${missingAlt === 0 ? '✅' : '⚠️'}`);
    console.log(`Optimized images: ${optimized}/${images.length} ${optimized > images.length / 2 ? '✅' : '⚠️'}`);
    console.log('');
  }

  auditLinks($) {
    console.log('🔗 LINKS ANALYSIS');
    console.log('================');

    const internalLinks = $('a[href^="/"], a[href*="zazateach.com"]').length;
    const externalLinks = $('a[href^="http"]:not([href*="zazateach.com"])').length;
    const nofollow = $('a[rel*="nofollow"]').length;

    console.log(`Internal links: ${internalLinks}`);
    console.log(`External links: ${externalLinks}`);
    console.log(`Nofollow links: ${nofollow}`);
    console.log('');
  }

  auditStructuredData($) {
    console.log('📋 STRUCTURED DATA');
    console.log('=================');

    const jsonLdScripts = $('script[type="application/ld+json"]');
    console.log(`JSON-LD scripts: ${jsonLdScripts.length}`);

    jsonLdScripts.each((i, script) => {
      try {
        const data = JSON.parse($(script).html());
        console.log(`  - ${data['@type']} schema found ✅`);
      } catch (e) {
        console.log(`  - Invalid JSON-LD detected ❌`);
      }
    });
    console.log('');
  }

  auditPerformance($) {
    console.log('⚡ PERFORMANCE HINTS');
    console.log('==================');

    const preloadLinks = $('link[rel="preload"]').length;
    const prefetchLinks = $('link[rel="prefetch"]').length;
    const criticalCSS = $('style[data-href*="critical"]').length;

    console.log(`Preload directives: ${preloadLinks}`);
    console.log(`Prefetch directives: ${prefetchLinks}`);
    console.log(`Critical CSS: ${criticalCSS > 0 ? '✅' : '⚠️'}`);
    console.log('');
  }

  generateReport() {
    console.log('📊 SEO SCORE SUMMARY');
    console.log('===================');
    console.log('✅ = Good');
    console.log('⚠️ = Needs improvement');
    console.log('❌ = Critical issue');
    console.log('\nRecommendations:');
    console.log('- Ensure all images have descriptive alt text');
    console.log('- Keep title tags between 30-60 characters');
    console.log('- Keep meta descriptions between 150-160 characters');
    console.log('- Add structured data for better search visibility');
    console.log('- Optimize images for web (WebP format, lazy loading)');
    console.log('- Use semantic HTML5 elements');
    console.log('- Ensure mobile responsiveness');
  }
}

// Usage example
async function runSEOAudit() {
  const auditor = new SEOAuditor();
  
  try {
    // You can add HTML content here or read from built files
    const sampleHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Zaza Teach | AI Lesson Planning for Educators</title>
        <meta name="description" content="Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="og:title" content="Zaza Teach | AI Lesson Planning for Educators">
        <meta name="twitter:card" content="summary_large_image">
        <link rel="canonical" href="https://zazateach.com">
      </head>
      <body>
        <h1>AI Lesson Planning for Educators</h1>
        <h2>Features</h2>
        <img src="/hero.webp" alt="Teachers using Zaza Teach" loading="lazy">
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zaza Technologies"
        }
        </script>
      </body>
      </html>
    `;
    
    await auditor.auditPage(sampleHTML, 'https://zazateach.com');
  } catch (error) {
    console.error('Error running SEO audit:', error);
  }
}

if (require.main === module) {
  // Check if cheerio is available
  try {
    require.resolve('cheerio');
    runSEOAudit();
  } catch {
    console.log('📦 To run SEO audit, install cheerio:');
    console.log('npm install --save-dev cheerio');
  }
}

module.exports = SEOAuditor;