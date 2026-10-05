// Header: logo, theme switcher, Telegram button

import { ThemeSwitcher } from './ThemeSwitcher';
import { TELEGRAM_GLOBAL_URL, SITE_NAME } from '../config';

export function Header() {
  const handleTelegramClick = () => {
    window.open(TELEGRAM_GLOBAL_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-border bg-base">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a
          href="/"
          className="text-2xl font-bold text-text-primary transition-colors hover:text-telegram"
        >
          {SITE_NAME}
        </a>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />

          <button
            type="button"
            onClick={handleTelegramClick}
            className="hidden items-center gap-2 rounded-full bg-telegram px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-telegram/90 sm:flex"
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
      </div>
    </header>
  );
}