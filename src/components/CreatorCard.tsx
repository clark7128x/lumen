// Creator card: portrait, info, Telegram CTA

import { track } from '../lib/track';
import { buildTelegramUrl } from '../lib/telegram';
import type { Creator } from '../types';

interface CreatorCardProps {
  creator: Creator;
  onOpenProfile: (id: Creator['id']) => void;
}

export function CreatorCard({ creator, onOpenProfile }: CreatorCardProps) {
  const { id, name, handle, niche, tagline, portrait, focus, accent, surface } = creator;

  const handleCardClick = () => {
    track('profile_open', { creator_id: id, source: 'card' });
    onOpenProfile(id);
  };

  const handleTelegramClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = buildTelegramUrl(creator, 'card');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-card bg-base-surface focus-within:ring-2 focus-within:ring-telegram focus-within:ring-offset-2 focus-within:ring-offset-base"
      style={{ backgroundColor: surface }}
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      aria-label={`Open ${name}'s profile`}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={portrait}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ objectPosition: focus }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="text-xl font-bold text-text-primary">{name}</h3>
          <p className="mt-1 text-sm text-text-muted">{handle}</p>
          <p className="mt-2 text-xs font-medium uppercase tracking-wide" style={{ color: accent }}>
            {niche}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-primary/90">{tagline}</p>
        </div>

        <button
          type="button"
          onClick={handleTelegramClick}
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-telegram px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-telegram/90 focus:outline-none focus:ring-2 focus:ring-telegram focus:ring-offset-2 focus:ring-offset-base"
          aria-label={`Go to ${name}'s Telegram`}
        >
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
          </svg>
          Telegram
        </button>
      </div>
    </article>
  );
}