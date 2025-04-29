"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle hover:cursor-pointer relative py-1 px-2 m-1"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark")}}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-5 h-5 dark:hidden" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <path stroke="currentColor" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
      </svg>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="hidden w-5 h-5 dark:block" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" 
        />
      </svg>
    </button>
  );
}
