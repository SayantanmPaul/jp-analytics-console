'use client';

import { Icons } from '@/assets/icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    startThemeTransition(400);
    const next = (resolvedTheme ?? theme) === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="w-7 h-7 cursor-pointer flex items-center justify-center shrink-0"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={handleToggle}
    >
      <Icons.sun
        className={`w-5 h-5 size-full text-black transition-transform duration-200 ${
          isAnimating ? 'rotate-once' : ''
        }`}
      />
    </Button>
  );
};

export default ThemeToggle;

// theme transition
export function startThemeTransition(duration = 400) {
  const root = document.documentElement;
  root.classList.add('theme-transition');
  window.setTimeout(() => {
    root.classList.remove('theme-transition');
  }, duration);
}
