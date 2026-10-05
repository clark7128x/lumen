// Аналітика: логування подій у консоль та dataLayer

type TrackEvent = 
  | 'cta_click'
  | 'profile_open'
  | 'tab_change'
  | 'post_open'
  | 'chat_question';

type TrackProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: TrackEvent, props: TrackProps): void {
  if (import.meta.env.DEV) {
    console.debug('[track]', event, props);
  }

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...props });
  }
}