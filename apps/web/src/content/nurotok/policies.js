import privacy from './01-privacy-policy.md?raw';
import terms from './02-terms-and-conditions.md?raw';
import deletion from './03-account-and-data-deletion.md?raw';
import subscriptions from './04-subscriptions-cancellation-refunds.md?raw';
import wellbeing from './05-wellbeing-and-ai-disclaimer.md?raw';
import permissions from './06-permissions-and-device-data.md?raw';
import support from './07-support-and-contact.md?raw';
import cookies from './08-cookies-and-third-party-websites.md?raw';
import accessibility from './09-accessibility-statement.md?raw';
import safeguarding from './10-safeguarding-and-crisis-support.md?raw';

// Built-in copies. The live text comes from the CMS (admin > Pages) and falls back to these.

export const nuroTokPolicies = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    description: 'What stays on your device, what usage sharing sends, your choices and your data rights.',
    content: privacy
  },
  {
    slug: 'terms',
    title: 'Terms and Conditions',
    description: 'The service terms, eligibility, wellbeing limits, subscriptions, and consumer rights.',
    content: terms
  },
  {
    slug: 'delete-account',
    title: 'Account and Data Deletion',
    description: 'How to request account deletion, remove local data, and manage subscriptions separately.',
    content: deletion
  },
  {
    slug: 'subscriptions',
    title: 'Subscriptions, Cancellation and Refunds',
    description: 'Store billing, renewals, cancellations, refund requests, and restoring purchases.',
    content: subscriptions
  },
  {
    slug: 'wellbeing-disclaimer',
    title: 'Wellbeing and AI Disclaimer',
    description: 'Important limits on wellbeing tools, AI conversations, exercises, and filtering.',
    content: wellbeing
  },
  {
    slug: 'permissions',
    title: 'App Permissions and Device Data',
    description: 'Why NuroTok may request device permissions and how they support app features.',
    content: permissions
  },
  {
    slug: 'support',
    title: 'Support and Contact',
    description: 'Contact details, issue reporting guidance, and common support requests.',
    content: support
  },
  {
    slug: 'cookies',
    title: 'Cookies and Third-Party Websites',
    description: 'How embedded Lite websites and third-party services may use cookies and similar storage.',
    content: cookies
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    description: 'How NuroTok and this website are made to be usable, known limits, and how to ask for help.',
    content: accessibility
  },
  {
    slug: 'safeguarding',
    title: 'Safeguarding and Crisis Support',
    description: 'Where to get urgent help, how parent controls protect children, and reporting a concern.',
    content: safeguarding
  }
];
