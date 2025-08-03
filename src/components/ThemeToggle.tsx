"use client";

import { useTheme } from "@/provider/theme";

interface ThemeToggleProps {
  className?: string;
  showText?: boolean;
}

export default function ThemeToggle({ className = "", showText = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        );
      case "dark":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
    }
  };

  const getThemeText = () => {
    switch (theme) {
      case "light":
        return "โหมดมืด";
      case "dark":
        return "โหมดสว่าง";
      default:
        return "เปลี่ยนธีม";
    }
  };

  if (showText) {
    return (
      <button 
        onClick={toggleTheme}
        className={`flex items-center text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${className}`}
        aria-label="Toggle theme"
        title={getThemeText()}
      >
        {getThemeIcon()}
        <span className="ml-2">{getThemeText()}</span>
      </button>
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className={`p-2 text-gray-700 hover:text-[#A54141] hover:bg-[#F5F0F0] rounded-md transition-colors duration-200 ${className}`}
      aria-label="Toggle theme"
      title={getThemeText()}
    >
      {getThemeIcon()}
    </button>
  );
} 