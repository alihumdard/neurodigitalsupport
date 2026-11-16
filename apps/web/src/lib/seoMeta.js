// Page titles, descriptions, FAQ and structured data for search engines and AI assistants.
//
// Plain ESM with relative imports on purpose: the React app reads it (SeoFoundation, NuroTokPage)
// and so do the build tools (tools/seo-build.js writes sitemap.xml, robots.txt and llms.txt;
// tools/prerender.js writes a static HTML page per route), so the two can never disagree.
import { SITE_URL } from './seo.js';
import { ANDROID_PACKAGE, APP_STORE_ID, APP_STORE_URL, PLAY_STORE_URL } from './stores.js';

export const SITE_NAME = 'NeuroDigital Support';
export const ORG_LOGO = `${SITE_URL}/images/products/logo.png`;
export const NUROTOK_LOGO = `${SITE_URL}/images/products/nurotok-logo.jpeg`;
export const DEFAULT_TITLE = 'NeuroDigital Support | Inclusive digital support for neurodivergent adults';
export const DEFAULT_DESCRIPTION = 'NeuroDigital Support builds sensory-aware digital platforms and evidence-led tools for autistic and neurodivergent adults, caregivers, and teams, including the NuroTok sensory regulation app.';

/** Never in the sitemap, always noindex. */
export const PRIVATE_PATHS = ['/admin', '/thank-you', '/nurotok/account'];

export const PAGES = {
  '/': { name: 'Home', title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, priority: '1.0' },
  '/nurotok': {
    name: 'NuroTok',
    title: 'NuroTok: Sensory Regulation & Calm App for iPhone and Android',
    description: 'NuroTok is a calm app for sensory overload: breathing, soothing sounds, a reel counter, an on-device content filter and gentle limits for Instagram, TikTok and YouTube. Free on the App Store and Google Play.',
    priority: '1.0',
    image: NUROTOK_LOGO
  },
  '/about': {
    name: 'About',
    title: 'About NeuroDigital Support | Inclusive digital wellbeing',
    description: 'Learn how NeuroDigital Support designs research-driven digital products, including the NuroTok app, that prioritise neurodivergent wellbeing, accessibility, and inclusive support.',
    priority: '0.8'
  },
  '/features': {
    name: 'Features',
    title: 'Features | NeuroDigital Support ecosystem',
    description: 'Explore wellbeing, social, advocacy, research, and care tools built for neurodivergent adults and teams, from the NuroTok app to Care Logging.',
    priority: '0.8'
  },
  '/blogs': {
    name: 'Blog',
    title: 'NeuroDigital Support Blog | Neurodivergent wellbeing insights',
    description: 'Read stories, research updates, and practical insights on accessible digital wellbeing for autistic and neurodivergent adults.',
    priority: '0.7'
  },
  '/contact': {
    name: 'Contact',
    title: 'Contact NeuroDigital Support | Demo, partnership, support',
    description: 'Contact NeuroDigital Support for NuroTok help, demos, partnerships, accessibility advice, research enquiries, or support.',
    priority: '0.7'
  },
  '/consultancy-training-workshops': {
    name: 'Consultancy and Training',
    title: 'Consultancy, Training & Workshops | NeuroDigital Support',
    description: 'Explore consultancy, training and workshops on digital inclusion, advocacy and sensory-aware digital experiences for organisations across the UK.',
    priority: '0.8',
    image: `${SITE_URL}/images/training/training-hero-1600.webp`
  },
  '/nurotok/legal': { name: 'NuroTok Policies & Support', title: 'NuroTok Policies and Support | NeuroDigital Support', description: 'Find NuroTok privacy, terms, deletion, subscriptions, wellbeing, permissions, support, and cookies information.', priority: '0.5' },
  '/nurotok/privacy': { name: 'NuroTok Privacy Policy', title: 'NuroTok Privacy Policy | NeuroDigital Support', description: 'How the NuroTok app handles data: on-device filtering, optional usage sharing, privacy choices, and your data rights.', priority: '0.5' },
  '/nurotok/terms': { name: 'NuroTok Terms and Conditions', title: 'NuroTok Terms and Conditions | NeuroDigital Support', description: 'Terms and conditions for NuroTok features, wellbeing tools, and subscriptions.', priority: '0.4' },
  '/nurotok/delete-account': { name: 'NuroTok Account and Data Deletion', title: 'Delete your NuroTok Account and Data | NeuroDigital Support', description: 'How to delete your NuroTok account and data in the app or online, and remove local app data.', priority: '0.5' },
  '/nurotok/subscriptions': { name: 'NuroTok Subscriptions, Cancellation and Refunds', title: 'NuroTok Subscriptions, Cancellation and Refunds | NeuroDigital Support', description: 'NuroTok Premium billing, the free trial, cancelling on the App Store or Google Play, refunds, and restoring purchases.', priority: '0.5' },
  '/nurotok/wellbeing-disclaimer': { name: 'NuroTok Wellbeing and AI Disclaimer', title: 'NuroTok Wellbeing and AI Disclaimer | NeuroDigital Support', description: 'Important limits on NuroTok wellbeing tools, AI conversations, and filtering. NuroTok is not a medical device.', priority: '0.4' },
  '/nurotok/permissions': { name: 'NuroTok App Permissions and Device Data', title: 'NuroTok App Permissions Explained | NeuroDigital Support', description: 'Why NuroTok asks for accessibility, usage access, screen sharing, VPN and other permissions, and what each one is used for.', priority: '0.5' },
  '/nurotok/support': { name: 'NuroTok Support and Contact', title: 'NuroTok Support and Contact | NeuroDigital Support', description: 'Get help with the NuroTok app: contact details and guidance for support requests.', priority: '0.6' },
  '/nurotok/accessibility': { name: 'NuroTok Accessibility Statement', title: 'NuroTok Accessibility Statement | NeuroDigital Support', description: 'How NuroTok supports accessibility: Easy Read, reduced motion, large text, screen readers and calm design, and how to report a barrier.', priority: '0.5' },
  '/nurotok/safeguarding': { name: 'NuroTok Safeguarding and Crisis Support', title: 'NuroTok Safeguarding and Crisis Support | NeuroDigital Support', description: 'Where to get urgent help, how NuroTok handles safeguarding concerns, and UK and international crisis lines.', priority: '0.5' },
  '/nurotok/easy-read': { name: 'NuroTok Easy Read', title: 'NuroTok in Easy Read | NeuroDigital Support', description: 'The main points about NuroTok, privacy and your choices, in short sentences and everyday words.', priority: '0.5' },
  '/nurotok/cookies': { name: 'NuroTok Cookies and Third-Party Websites', title: 'NuroTok Cookies and Third-Party Websites | NeuroDigital Support', description: 'Information about cookies and third-party websites used with NuroTok.', priority: '0.3' },
  '/altitok': { name: 'AltiTok', title: 'AltiTok | NeuroDigital Support', description: 'AltiTok is a social platform designed around safety, calm interaction, and meaningful connection.', priority: '0.6' },
  '/olitok': { name: 'OliTok', title: 'OliTok | NeuroDigital Support', description: 'OliTok connects autistic and neurodivergent individuals with trained volunteers for safe, structured companionship.', priority: '0.6' },
  '/care-logging': { name: 'Care Logging', title: 'Care Logging | NeuroDigital Support', description: 'Care Logging helps care teams securely record routines, incidents, mood, sensory observations, and reports.', priority: '0.6' },
  '/digital-advocacy-hub': { name: 'Digital Advocacy Hub', title: 'Digital Advocacy Hub | NeuroDigital Support', description: 'Campaigns, educational resources, and practical tools supporting neurodiversity awareness and accessible societal change.', priority: '0.5' },
  '/research-insights-hub': { name: 'Research & Insights Hub', title: 'Research & Insights Hub | NeuroDigital Support', description: 'A research intelligence hub for searchable evidence, ethical data intelligence, and inclusive digital care.', priority: '0.5' },
  '/social-listening-dashboard': { name: 'Social Listening Dashboard', title: 'Social Listening Dashboard | NeuroDigital Support', description: 'Monitor public conversations, identify emerging themes, and understand neurodivergent digital experiences.', priority: '0.5' },
  '/research': { name: 'Research', title: 'Research & Insights Hub | NeuroDigital Support', description: 'A research intelligence hub for searchable evidence, ethical data intelligence, and inclusive digital care.', canonical: '/research-insights-hub' },
  '/thank-you': { name: 'Thank You', title: 'Thank You | NeuroDigital Support', description: DEFAULT_DESCRIPTION }
};

/** Questions people (and AI assistants) ask about NuroTok, answered plainly. Shown on /nurotok too. */
export const NUROTOK_FAQ = [
  {
    q: 'What is NuroTok?',
    a: 'NuroTok is a sensory regulation app for iPhone and Android. It gives you calm, practical tools for moments of sensory overload (guided breathing, grounding, soothing sounds and a picture board for how you feel) and helps you step away from the apps that wear you down, with a reel counter, gentle limits and an on-device content filter.'
  },
  {
    q: 'Who is NuroTok for?',
    a: 'Anyone who finds screens hard work: autistic and ADHD adults, people sensitive to visual, sound or emotional triggers, people living with anxiety, and anyone who wants a gentler, less overwhelming phone. Parents can also link a child’s phone.'
  },
  {
    q: 'Is NuroTok free?',
    a: 'Yes. NuroTok is free to download and the whole sensory toolkit stays free. NuroTok Premium adds every app, the full meditation and sleep story library, profiles and a year of history, with a 7-day free trial.'
  },
  {
    q: 'Is NuroTok on iPhone and Android?',
    a: `Yes. Download NuroTok from the App Store (${APP_STORE_URL}) or Google Play (${PLAY_STORE_URL}). On Android it also counts reels, filters content inside other apps and blocks websites. On iPhone it pauses the apps you choose using Apple’s Screen Time.`
  },
  {
    q: 'How does NuroTok help with sensory overload?',
    a: 'It brings the calming tools into one tap: 4-7-8 breathing, 5-4-3-2-1 grounding, a two-minute reset, white, brown and pink noise, a warm screen tint and an Emergency Calm Mode that quiets everything at once. Your sensory profile shapes what it suggests.'
  },
  {
    q: 'Can NuroTok help me scroll less on Instagram, TikTok and YouTube?',
    a: 'Yes. On Android, NuroTok counts the Reels, Shorts and TikToks you watch, checks in gently at your daily goal, can switch off the Reels tab, Explore or Shorts while keeping messages, and can pause apps during focus sessions and overnight.'
  },
  {
    q: 'Does NuroTok read my messages or upload my screen?',
    a: 'No. Content filtering runs on your phone and screen frames are analysed in memory and discarded, never saved or uploaded. The reel counter only looks at scrolling and never reads text, messages or usernames. Usage sharing is off unless you switch it on.'
  },
  {
    q: 'Is NuroTok a medical app?',
    a: 'No. NuroTok is a wellbeing tool, not a medical device, and it does not diagnose or treat any condition. If you are in crisis, contact your local emergency services.'
  },
  {
    q: 'Who makes NuroTok?',
    a: 'NuroTok is made by NeuroDigital Support, a UK team building sensory-aware digital tools for neurodivergent people.'
  },
  {
    q: 'How do I delete my NuroTok account?',
    a: `In the app go to Profile, Account, Delete account, or follow the steps at ${SITE_URL}/nurotok/delete-account. Cancelling a subscription is done separately in the App Store or Google Play.`
  }
];

/** A short, crawlable version of each page, used by the static HTML the build writes per route. */
export const NUROTOK_FEATURES = [
  'Breathing guides, 5-4-3-2-1 grounding and a two-minute reset',
  'Soundscapes: white, brown and pink noise, rain and ambient music, offline',
  'How I feel picture board and mood check-ins',
  'Reel counter with a daily goal for Instagram, YouTube, TikTok, Snapchat and Facebook (Android)',
  'On-device Calm Content Filter with over 50 cover styles (Android)',
  'App pausing, focus sessions and a sleep schedule',
  'Website and adult-content blocking (Android)',
  'Emergency Calm Mode, Easy Read and reduced motion',
  'Family linking and breathing together',
  'Meditations, sleep stories and programmes'
];

export function pageFor(path) {
  return PAGES[path] || (path.startsWith('/blogs/')
    ? { name: 'Blog article', title: `Blog | ${SITE_NAME}`, description: PAGES['/blogs'].description }
    : { name: SITE_NAME, title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION });
}

export function canonicalPath(path) {
  return pageFor(path).canonical || path;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: ORG_LOGO,
    email: 'info@neurodigitalsupport.com',
    description: DEFAULT_DESCRIPTION,
    areaServed: [{ '@type': 'Country', name: 'United Kingdom' }, 'Worldwide'],
    knowsAbout: ['neurodiversity', 'autism', 'ADHD', 'sensory overload', 'sensory regulation', 'digital accessibility', 'digital wellbeing', 'screen time', 'assistive technology'],
    owns: { '@id': `${SITE_URL}/nurotok#app` }
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ['NeuroDigital Support', 'NuroTok'],
    url: `${SITE_URL}/`,
    inLanguage: 'en-GB',
    publisher: { '@id': `${SITE_URL}/#organization` }
  };
}

export function appSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': `${SITE_URL}/nurotok#app`,
    name: 'NuroTok',
    alternateName: ['NuroTok: Sensory Regulation', 'Nurotok app'],
    description: PAGES['/nurotok'].description,
    url: `${SITE_URL}/nurotok`,
    image: NUROTOK_LOGO,
    applicationCategory: 'HealthApplication',
    applicationSubCategory: 'Wellbeing, sensory regulation, screen time',
    operatingSystem: 'Android, iOS, iPadOS',
    installUrl: [PLAY_STORE_URL, APP_STORE_URL],
    downloadUrl: [PLAY_STORE_URL, APP_STORE_URL],
    sameAs: [PLAY_STORE_URL, APP_STORE_URL],
    featureList: NUROTOK_FEATURES,
    inLanguage: 'en-GB',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', category: 'free' },
    publisher: { '@id': `${SITE_URL}/#organization` },
    author: { '@id': `${SITE_URL}/#organization` },
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'Android package', value: ANDROID_PACKAGE },
      { '@type': 'PropertyValue', propertyID: 'App Store ID', value: APP_STORE_ID }
    ]
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: NUROTOK_FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  };
}

export function breadcrumbSchema(path) {
  const items = [{ name: 'Home', url: `${SITE_URL}/` }];
  if (path.startsWith('/nurotok/')) items.push({ name: 'NuroTok', url: `${SITE_URL}/nurotok` });
  if (path !== '/') items.push({ name: pageFor(path).name, url: `${SITE_URL}${canonicalPath(path)}` });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: item.url }))
  };
}

/** Every JSON-LD block for a route. */
export function schemasFor(path) {
  const out = [organizationSchema(), websiteSchema(), breadcrumbSchema(path)];
  if (path === '/nurotok') out.push(appSchema(), faqSchema());
  if (path === '/') out.push(appSchema());
  return out;
}
