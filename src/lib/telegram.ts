// Побудова Telegram URL з урахуванням типу (bot/channel)

import type { Creator } from '../types';
import { track } from './track';

export function buildTelegramUrl(creator: Creator, source: string): string {
  const { url, kind } = creator.telegram;

  track('cta_click', {
    placement: source,
    creator_id: creator.id,
  });

  if (kind === 'bot') {
    const params = new URLSearchParams({
      start: `creator_${creator.id}`,
    });
    return `${url}?${params.toString()}`;
  }

  return url;
}