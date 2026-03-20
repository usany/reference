'use client';

import { useTheme } from '@/app/context/ThemeContext';

export default function ExampleThemeUsage() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button onClick={() => setTheme('light')}>
        Set Light
      </button>
      <button onClick={() => setTheme('dark')}>
        Set Dark
      </button>
    </div>
  );
}
