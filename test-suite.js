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
let warnings = [];

pages.forEach(page => {
  if (!fs.existsSync(page)) {
    errors.push('Missing file: ' + page);
    return;
  }
  const content = fs.readFileSync(page, 'utf-8');

  // Check title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  if (!titleMatch) {
    errors.push(page + ': missing <title>');
  } else {
    console.log(`[PASS] ${page} -> Title: "${titleMatch[1]}"`);
  }

  // Check meta description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (!descMatch) {
    errors.push(page + ': missing meta description');
  } else {
    console.log(`[PASS] ${page} -> Description length: ${descMatch[1].length} chars`);
  }

  // Check canonical
  const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonMatch) {
    errors.push(page + ': missing canonical link');
  }

  // Check JSON-LD
  const jsonLdMatches = content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  for (const m of jsonLdMatches) {
    try {
      const parsed = JSON.parse(m[1]);
      console.log(`[PASS] ${page} -> Valid JSON-LD: @type = ${parsed['@type']}`);
    } catch(err) {
      errors.push(page + ': Invalid JSON-LD: ' + err.message);
    }
  }

  // Check local images
  const imgMatches = content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi);
  for (const im of imgMatches) {
    const src = im[1];
    if (!src.startsWith('http') && !src.startsWith('data:')) {
      const cleanSrc = src.split('?')[0].split('#')[0];
      if (!fs.existsSync(cleanSrc)) {
        errors.push(page + ': Broken image reference: ' + cleanSrc);
      }
    }
  }

  // Check local links
  const linkMatches = content.matchAll(/<a[^>]+href=["']([^"']+)["']/gi);
  for (const lm of linkMatches) {
    const href = lm[1];
    if (!href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('#')) {
      const cleanHref = href.split('?')[0].split('#')[0];
      if (cleanHref && !fs.existsSync(cleanHref)) {
        errors.push(page + ': Broken link reference: ' + cleanHref);
      }
    }
  }
});

console.log('\n================ AUDIT SUMMARY ================');
if (errors.length === 0) {
  console.log('STATUS: SUCCESS! All 6 pages, assets, links, and schemas validated with 0 errors.');
} else {
  console.error('STATUS: FAILED! Found errors:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
}
