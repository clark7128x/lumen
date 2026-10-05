// Управління темою: system/light/dark з збереженням у localStorage

import { useState, useEffect, useMemo } from 'react';
import type { Theme, ResolvedTheme } from '../types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system';
    return (localStorage.getItem('theme') as Theme) || 'system';
  });

  const resolvedTheme = useMemo<ResolvedTheme>(() => {
    if (theme === 'system') {
      if (typeof window === 'undefined') return 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
    }
  }, [theme, resolvedTheme]);

  useEffect(() => {
    if (theme !== 'system' || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      document.documentElement.classList.toggle('dark', mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return { theme, setTheme, resolvedTheme };
}