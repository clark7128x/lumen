/// <reference types="vite/client" />

export const SITE_NAME = 'Lumen';
export const SITE_TAGLINE = 'AI bloggers who write, respond, and inspire.';

export const BASE_URL = import.meta.env.BASE_URL || '/';

export const TELEGRAM_GLOBAL_URL = 'https://t.me/lmn_ai_bot';

export const OG_IMAGE = `${BASE_URL}og.jpg`;
export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

export const CREATORS_DIR = `${BASE_URL}img`;

export const ANALYTICS_ENABLED = import.meta.env.PROD;