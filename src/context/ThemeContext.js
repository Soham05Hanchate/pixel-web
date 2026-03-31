import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check local storage so it remembers the user's choice on refresh
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' ? true : false;
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};