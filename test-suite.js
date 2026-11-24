const fs = require('fs');
const path = require('path');

const pages = [
  'index.html',
  'about.html',
  'knee-replacement.html',
  'orthopedic-services.html',
  'testimonials.html',
  'contact.html'
];

let errors = [];
let passCount = 0;

console.log('>>> RUNNING COMPREHENSIVE FINAL VERIFICATION AUDIT <<<\n');

// 1. PAGE AUDITS
pages.forEach(page => {
  if (!fs.existsSync(page)) {
    errors.push('Missing file: ' + page);
    return;
  }
  const content = fs.readFileSync(page, 'utf-8');

  // Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  if (!titleMatch) {
    errors.push(page + ': missing <title>');
  } else {
    passCount++;
  }

  // Meta Description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (!descMatch || descMatch[1].length < 100) {
    errors.push(page + ': missing or short meta description');
  } else {
    passCount++;
  }

  // Canonical Link
  const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonMatch) {
    errors.push(page + ': missing canonical link');
  } else {
    passCount++;
  }

  // JSON-LD Structured Data
  const jsonLdMatches = Array.from(content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi));
  if (jsonLdMatches.length === 0) {
    errors.push(page + ': missing structured data');
  } else {
    for (const m of jsonLdMatches) {
      try {
        const parsed = JSON.parse(m[1]);
        passCount++;
      } catch(err) {
        errors.push(page + ': Invalid JSON-LD: ' + err.message);
      }
    }
  }

  // Broken Images
  const imgMatches = content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi);
  for (const im of imgMatches) {
    const src = im[1];
    if (!src.startsWith('http') && !src.startsWith('data:')) {
      const cleanSrc = src.split('?')[0].split('#')[0];
      if (!fs.existsSync(cleanSrc)) {
        errors.push(page + ': Broken image reference: ' + cleanSrc);
      } else {
        passCount++;
      }
    }
  }

  // Broken Local Links
  const linkMatches = content.matchAll(/<a[^>]+href=["']([^"']+)["']/gi);
  for (const lm of linkMatches) {
    const href = lm[1];
    if (!href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('#')) {
      const cleanHref = href.split('?')[0].split('#')[0];
      if (cleanHref && !fs.existsSync(cleanHref)) {
        errors.push(page + ': Broken link reference: ' + cleanHref);
      } else {
        passCount++;
      }
    }
  }

  // Check for Old Inconsistent Phone Numbers
  if (content.includes('6361652352') || content.includes('63616 52352')) {
    errors.push(page + ': contains obsolete phone number 63616 52352');
  }

  // Check for Unverified Surgery Count Claims
  if (content.includes('1000+ successful') || content.includes('5000+ knee')) {
    errors.push(page + ': contains unverified surgery count claim');
  }

  // Check for "100% bone preservation" or guaranteed outcome
  if (content.includes('100% bone preservation') || content.includes('guaranteed recovery') || content.includes('guaranteed results')) {
    errors.push(page + ': contains unsupported medical outcome claim');
  }

  // Check for consistent Verified Phone Numbers
  if (!content.includes('91082 80640') && !content.includes('9108280640')) {
    errors.push(page + ': missing verified primary appointment phone number');
  }

  // Check for Responsive Viewport Meta
  if (!content.includes('name="viewport"')) {
    errors.push(page + ': missing viewport meta tag');
  }

  // Check Header and Footer
  if (!content.includes('class="site-header"') || !content.includes('class="site-footer"')) {
    errors.push(page + ': missing consistent site-header or site-footer');
  }
});

// 2. SITEMAP & ROBOTS CHECK
if (!fs.existsSync('sitemap.xml')) {
  errors.push('Missing sitemap.xml');
} else {
  const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
  pages.forEach(p => {
    if (!sitemap.includes(p) && p !== 'index.html') {
      errors.push('sitemap.xml missing route: ' + p);
    }
  });
  passCount++;
}

if (!fs.existsSync('robots.txt')) {
  errors.push('Missing robots.txt');
} else {
  const robots = fs.readFileSync('robots.txt', 'utf8');
  if (!robots.includes('sitemap.xml')) {
    errors.push('robots.txt missing Sitemap directive');
  }
  passCount++;
}

// 3. CSS & JS DESIGN CHECK
if (!fs.existsSync('premium.css')) {
  errors.push('Missing premium.css');
} else {
  const css = fs.readFileSync('premium.css', 'utf8');
  if (!css.includes('--color-gold:') || !css.includes('--color-navy:')) {
    errors.push('premium.css missing Brand Navy & Signature Gold tokens');
  }
  if (!css.includes('sticky-mobile-bar') || !css.includes('mobile-drawer')) {
    errors.push('premium.css missing mobile quick-action dock rules');
  }
  passCount++;
}

if (!fs.existsSync('premium.js')) {
  errors.push('Missing premium.js');
} else {
  const js = fs.readFileSync('premium.js', 'utf8');
  if (!js.includes('mobile-drawer') || !js.includes('appointment-form')) {
    errors.push('premium.js missing drawer or form validation logic');
  }
  passCount++;
}

console.log('================ AUDIT SUMMARY ================');
if (errors.length === 0) {
  console.log(`STATUS: SUCCESS! ${passCount} checks passed across all 6 core pages, styles, scripts, assets, and SEO schemas with 0 errors.`);
} else {
  console.error(`STATUS: FAILED! Found ${errors.length} errors:`);
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
}
