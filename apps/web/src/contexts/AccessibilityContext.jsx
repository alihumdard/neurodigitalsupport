import React, { createContext, useState, useEffect } from 'react';

export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [reducedMotion, setReducedMotion] = useState(() => {
    const saved = localStorage.getItem('reducedMotion');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return saved ? JSON.parse(saved) : prefersReduced;
  });

  const [highContrast, setHighContrast] = useState(() => {
    const saved = localStorage.getItem('highContrast');
    return saved ? JSON.parse(saved) : false;
  });

  const [sensoryMode, setSensoryMode] = useState(() => {
    const saved = localStorage.getItem('sensoryMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('fontSize');
    return saved || 'medium';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('reducedMotion', JSON.stringify(reducedMotion));
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion-mode');
    } else {
      document.documentElement.classList.remove('reduced-motion-mode');
    }
  }, [reducedMotion]);

  useEffect(() => {
    localStorage.setItem('highContrast', JSON.stringify(highContrast));
    if (highContrast) {
      document.documentElement.classList.add('high-contrast-mode');
    } else {
      document.documentElement.classList.remove('high-contrast-mode');
    }
  }, [highContrast]);

  useEffect(() => {
    localStorage.setItem('sensoryMode', JSON.stringify(sensoryMode));
    if (sensoryMode) {
      document.documentElement.classList.add('sensory-safe-mode');
    } else {
      document.documentElement.classList.remove('sensory-safe-mode');
    }
  }, [sensoryMode]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.style.fontSize = fontSize === 'large' ? '18px' : fontSize === 'small' ? '14px' : '16px';
  }, [fontSize]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleReducedMotion = () => setReducedMotion(prev => !prev);
  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleSensoryMode = () => setSensoryMode(prev => !prev);
  const changeFontSize = (size) => setFontSize(size);

  const value = {
    darkMode,
    reducedMotion,
    highContrast,
    sensoryMode,
    fontSize,
    toggleDarkMode,
    toggleReducedMotion,
    toggleHighContrast,
    toggleSensoryMode,
    changeFontSize
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};