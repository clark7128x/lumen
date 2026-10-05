// Final CTA: call to action before footer

import { TELEGRAM_GLOBAL_URL } from '../config';
import { creators } from '../data/creators';

export function FinalCTA() {
  const handleGlobalTelegramClick = () => {
    window.open(TELEGRAM_GLOBAL_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-card bg-base-surface p-8 text-center md:p-12">
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            Ready to connect?
          </h2>
          <p className="mb-8 text-lg text-text-muted">
            Choose your AI blogger and start chatting in Telegram right now.
          </p>

          <div className="mb-8 flex items-center justify-center gap-3">
            {creators.map((creator, index) => (
              <div
                key={creator.id}
                className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-base-surface md:h-16 md:w-16"
                style={{
                  zIndex: creators.length - index,
                  marginLeft: index > 0 ? '-0.5rem' : '0',
                }}
              >
                <img
                  src={creator.portrait}
                  alt={creator.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: creator.focus }}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleGlobalTelegramClick}
            className="inline-flex items-center gap-3 rounded-full bg-telegram px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-telegram/90 focus:outline-none focus:ring-2 focus:ring-telegram focus:ring-offset-2 focus:ring-offset-base"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            Start on Telegram
          </button>

          <p className="mt-4 text-sm text-text-muted">
            Free • No registration • Instant access
          </p>
        </div>
      </div>
    </section>
  );
}