// Theme switcher: system/light/dark

import { useTheme } from '../hooks/useTheme';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: 'system' | 'light' | 'dark') => {
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-base-surface p-1 dark:bg-base-surface">
      <button
        type="button"
        onClick={() => handleThemeChange('light')}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          theme === 'light'
            ? 'bg-base text-text-primary'
            : 'text-text-muted hover:text-text-primary'
        }`}
        aria-label="Light theme"
      >
        ☀️
      </button>
      <button
        type="button"
        onClick={() => handleThemeChange('system')}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          theme === 'system'
            ? 'bg-base text-text-primary'
            : 'text-text-muted hover:text-text-primary'
        }`}
        aria-label="System theme"
      >
        💻
      </button>
      <button
        type="button"
        onClick={() => handleThemeChange('dark')}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          theme === 'dark'
            ? 'bg-base text-text-primary'
            : 'text-text-muted hover:text-text-primary'
        }`}
        aria-label="Dark theme"
      >
        🌙
      </button>
    </div>
  );
}