#!/usr/bin/env node
// Runs after `vite build`. The site is a single-page React app, so without this every URL serves
// the same index.html with the homepage's title, and crawlers that don't run JavaScript (most AI
// assistants, social previews, and Google's first pass) see nothing about NuroTok at all.
//
// For each public route it writes <route>/index.html with that page's title, description,
// canonical, social tags and JSON-LD, and a plain-HTML summary inside #root that React replaces
// when it starts. It also writes sitemap.xml, robots.txt and llms.txt from the same metadata.
//
// Usage: node tools/seo-build.js <outDir>
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const outDir = path.resolve(process.argv[2] || '../../dist/apps/web');
const meta = await import(pathToFileURL(path.resolve('src/lib/seoMeta.js')).href);
const { SITE_URL } = await import(pathToFileURL(path.resolve('src/lib/seo.js')).href);
const stores = await import(pathToFileURL(path.resolve('src/lib/stores.js')).href);
const { PAGES, PRIVATE_PATHS, NUROTOK_FAQ, NUROTOK_FEATURES, ORG_LOGO, SITE_NAME, schemasFor, canonicalPath } = meta;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');

// The tags each page sets for itself; the template's copies are removed first so there is one of each.
const stripped = template
  .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
  .replace(/<meta\s+(name|property)="(description|author|language|geo\.[a-z]+|og:[a-z:_]+|twitter:[a-z:_]+)"[^>]*>\s*/gi, '')
  .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '');

const NAV = [['/', 'Home'], ['/nurotok', 'NuroTok app'], ['/features', 'Features'], ['/about', 'About'], ['/blogs', 'Blog'], ['/contact', 'Contact'], ['/nurotok/support', 'NuroTok support']];
const STORE_LINKS = `<p><a href="${stores.APP_STORE_URL}">Download NuroTok on the App Store</a> · <a href="${stores.PLAY_STORE_URL}">Get NuroTok on Google Play</a></p>`;

function bodyFor(route, page) {
  // data-react-helmet lets React Helmet take these tags over instead of duplicating them.
  let main = `<h1>${esc(route === '/nurotok' ? 'NuroTok: Sensory Regulation App' : page.title.split(' | ')[0])}</h1><p>${esc(page.description)}</p>`;
  if (route === '/nurotok') {
    main += STORE_LINKS
      + `<h2>What NuroTok does</h2><ul>${NUROTOK_FEATURES.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`
      + `<h2>NuroTok questions, answered</h2>${NUROTOK_FAQ.map(({ q, a }) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}`;
  } else if (route === '/') {
    main += `<h2>NuroTok, our sensory regulation app</h2><p>${esc(PAGES['/nurotok'].description)}</p>${STORE_LINKS}<p><a href="/nurotok">Learn about NuroTok</a></p>`;
  } else if (route.startsWith('/nurotok/')) {
    main += `<p><a href="/nurotok">About the NuroTok app</a> · <a href="/nurotok/legal">All NuroTok policies</a></p>${STORE_LINKS}`;
  }
  const nav = NAV.map(([href, label]) => `<a href="${href}">${label}</a>`).join(' · ');
  return `<div id="root"><div data-prerender="true"><nav aria-label="Main">${nav}</nav><main>${main}</main><footer><p>${SITE_NAME} · <a href="mailto:info@neurodigitalsupport.com">info@neurodigitalsupport.com</a></p></footer></div></div>`;
}

function headFor(route, page) {
  const url = `${SITE_URL}${canonicalPath(route)}`;
  const image = page.image || ORG_LOGO;
  const priv = PRIVATE_PATHS.includes(route);
  const tags = [
    `<title data-react-helmet="true">${esc(page.title)}</title>`,
    `<meta data-react-helmet="true" name="description" content="${esc(page.description)}">`,
    `<meta data-react-helmet="true" name="robots" content="${priv ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'}">`,
    `<link data-react-helmet="true" rel="canonical" href="${url}">`,
    `<meta data-react-helmet="true" property="og:site_name" content="${SITE_NAME}">`,
    `<meta data-react-helmet="true" property="og:type" content="website">`,
    `<meta data-react-helmet="true" property="og:url" content="${url}">`,
    `<meta data-react-helmet="true" property="og:title" content="${esc(page.title)}">`,
    `<meta data-react-helmet="true" property="og:description" content="${esc(page.description)}">`,
    `<meta data-react-helmet="true" property="og:image" content="${image}">`,
    `<meta data-react-helmet="true" property="og:locale" content="en_GB">`,
    `<meta data-react-helmet="true" name="twitter:card" content="summary_large_image">`,
    `<meta data-react-helmet="true" name="twitter:title" content="${esc(page.title)}">`,
    `<meta data-react-helmet="true" name="twitter:description" content="${esc(page.description)}">`,
    `<meta data-react-helmet="true" name="twitter:image" content="${image}">`,
    `<meta name="geo.region" content="GB"><meta name="geo.placename" content="United Kingdom">`,
    `<link rel="alternate" hreflang="en-GB" href="${url}"><link rel="alternate" hreflang="x-default" href="${url}">`,
    route.startsWith('/nurotok') ? `<meta data-react-helmet="true" name="apple-itunes-app" content="app-id=${stores.APP_STORE_ID}">` : '',
    ...schemasFor(route).map((s) => `<script data-react-helmet="true" type="application/ld+json">${JSON.stringify(s).replace(/</g, '\\u003c')}</script>`)
  ];
  return tags.filter(Boolean).join('\n    ');
}

const routes = Object.keys(PAGES);
for (const route of routes) {
  const page = PAGES[route];
  const html = stripped
    .replace('</head>', `    ${headFor(route, page)}\n</head>`)
    .replace(/<html lang="[^"]*">/, '<html lang="en-GB">')
    .replace('<div id="root"></div>', bodyFor(route, page));
  const file = route === '/' ? path.join(outDir, 'index.html') : path.join(outDir, route, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  // Also /nurotok.html, for servers set up with `try_files $uri $uri.html ...` rather than `$uri/`.
  if (route !== '/') fs.writeFileSync(path.join(outDir, `${route.slice(1)}.html`), html);
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const listed = routes.filter((r) => !PRIVATE_PATHS.includes(r) && !PAGES[r].canonical);
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${listed.map((r) => `  <url>
    <loc>${SITE_URL}${r === '/' ? '/' : r}</loc>
    <lastmod>${today}</lastmod>
    <priority>${PAGES[r].priority || '0.5'}</priority>${r === '/nurotok' ? `
    <image:image><image:loc>${PAGES[r].image}</image:loc><image:title>NuroTok app</image:title></image:image>` : ''}
  </url>`).join('\n')}
</urlset>
`);

// robots.txt: everyone, AI assistants named explicitly so they're clearly welcome, private areas out.
const disallow = ['/admin', '/nurotok/account', '/share/', '/thank-you'].map((p) => `Disallow: ${p}`).join('\n');
const aiBots = ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'DuckAssistBot', 'meta-externalagent', 'CCBot'];
fs.writeFileSync(path.join(outDir, 'robots.txt'), `User-agent: *
Allow: /
${disallow}

${aiBots.map((b) => `User-agent: ${b}`).join('\n')}
Allow: /
${disallow}

Sitemap: ${SITE_URL}/sitemap.xml
`);

// llms.txt: a plain summary for AI assistants (https://llmstxt.org).
fs.writeFileSync(path.join(outDir, 'llms.txt'), `# NuroTok by ${SITE_NAME}

> NuroTok is a sensory regulation and calm app for iPhone and Android, made by ${SITE_NAME} (UK). It helps autistic, ADHD and other neurodivergent people, and anyone who finds screens overwhelming, with calming tools and gentler limits on social media.

- Website: ${SITE_URL}/nurotok
- App Store (iPhone, iPad): ${stores.APP_STORE_URL}
- Google Play (Android): ${stores.PLAY_STORE_URL}
- Price: free to download; NuroTok Premium is optional, with a 7-day free trial.
- Contact: info@neurodigitalsupport.com

## Features
${NUROTOK_FEATURES.map((f) => `- ${f}`).join('\n')}

## Frequently asked questions
${NUROTOK_FAQ.map(({ q, a }) => `### ${q}\n${a}`).join('\n\n')}

## Pages
${listed.map((r) => `- [${PAGES[r].title}](${SITE_URL}${r === '/' ? '/' : r}): ${PAGES[r].description}`).join('\n')}
`);

console.log(`seo-build: ${routes.length} pages, sitemap (${listed.length} urls), robots.txt and llms.txt written to ${outDir}`);
