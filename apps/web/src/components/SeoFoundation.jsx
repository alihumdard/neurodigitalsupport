import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { canonicalFor } from '@/lib/seo';
import { ORG_LOGO, PRIVATE_PATHS, SITE_NAME, canonicalPath, pageFor, schemasFor } from '@/lib/seoMeta';
import { APP_STORE_ID } from '@/lib/stores';

// Site-wide head tags. Titles, descriptions and structured data live in lib/seoMeta.js, which the
// build also uses to write a static page per route, so crawlers that don't run JavaScript see the
// same thing. A page's own <Helmet> still wins for its title and description.
const SeoFoundation = () => {
  const { pathname } = useLocation();
  const page = pageFor(pathname);
  const canonicalUrl = canonicalFor(canonicalPath(pathname));
  const isPrivatePage = PRIVATE_PATHS.includes(pathname) || pathname.startsWith('/share/');
  const image = page.image || ORG_LOGO;

  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content="en-GB" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="United Kingdom" />
      <meta name="theme-color" content="#0b5f49" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={pathname.startsWith('/blogs/') ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={pathname.startsWith('/nurotok') ? 'NuroTok app logo' : `${SITE_NAME} logo`} />
      <meta property="og:locale" content="en_GB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={image} />
      {/* Safari on iPhone shows a small "Open in App Store" banner on the NuroTok pages. */}
      {pathname.startsWith('/nurotok') ? <meta name="apple-itunes-app" content={`app-id=${APP_STORE_ID}`} /> : null}
      {isPrivatePage ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />}
      {schemasFor(pathname).map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
};

export default SeoFoundation;
