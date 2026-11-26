// Where NuroTok is published. Every store link on the site, and the app's structured data, reads
// from here. No locale parameters, so each store opens in the visitor's own country and language.
export const APP_STORE_ID = '6822251386';
export const ANDROID_PACKAGE = 'com.nurotok.app';
export const APP_STORE_URL = `https://apps.apple.com/app/nurotok/id${APP_STORE_ID}`;
export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

export const NUROTOK_SITE_URL = 'https://nurotok.co.uk/';

export const STORE_URLS = {
  'App Store': APP_STORE_URL,
  'Google Play': PLAY_STORE_URL,
  iOS: APP_STORE_URL,
  Android: PLAY_STORE_URL
};
