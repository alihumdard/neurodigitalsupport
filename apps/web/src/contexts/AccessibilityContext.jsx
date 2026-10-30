import React, { createContext, useEffect, useMemo, useState } from 'react';

export const AccessibilityContext = createContext();

const STORAGE_KEY = 'accessibilitySettings';

const defaultSettings = {
  darkMode: false,
  highContrast: false,
  reducedMotion: false,
  sensoryMode: false,
  focusMode: false,
  hideImages: false,
  highlightLinks: false,
  fontSize: 'medium',
  bigCursor: false,
  dyslexiaFont: false,
  textSpacing: false,
  lineHeight: false
};

const legacyKeys = ['darkMode', 'highContrast', 'reducedMotion', 'sensoryMode', 'fontSize'];

const readStoredSettings = () => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    return { ...defaultSettings, ...JSON.parse(saved) };
  }

  return {
    ...defaultSettings,
    darkMode: JSON.parse(localStorage.getItem('darkMode') || 'false'),
    highContrast: JSON.parse(localStorage.getItem('highContrast') || 'false'),
    reducedMotion:
      JSON.parse(localStorage.getItem('reducedMotion') || 'false') ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    sensoryMode: JSON.parse(localStorage.getItem('sensoryMode') || 'false'),
    fontSize: localStorage.getItem('fontSize') || 'medium'
  };
};

export const AccessibilityProvider = ({ children }) => {
  const [settings, setSettings] = useState(readStoredSettings);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    legacyKeys.forEach((key) => localStorage.removeItem(key));

    const root = document.documentElement;
    const classMap = {
      dark: settings.darkMode,
      'high-contrast-mode': settings.highContrast,
      'reduced-motion-mode': settings.reducedMotion,
      'sensory-safe-mode': settings.sensoryMode,
      'focus-mode': settings.focusMode,
      'hide-images-mode': settings.hideImages,
      'highlight-links-mode': settings.highlightLinks,
      'big-cursor-mode': settings.bigCursor,
      'dyslexia-font-mode': settings.dyslexiaFont,
      'text-spacing-mode': settings.textSpacing,
      'line-height-mode': settings.lineHeight
    };

    Object.entries(classMap).forEach(([className, enabled]) => {
      root.classList.toggle(className, enabled);
    });

    root.style.fontSize =
      settings.fontSize === 'xlarge' ? '150%' : settings.fontSize === 'large' ? '120%' : '100%';
  }, [settings]);

  const updateSetting = (key, value) => {
    setSettings((current) => ({
      ...current,
      [key]: typeof value === 'function' ? value(current[key]) : value
    }));
  };

  const toggleSetting = (key) => updateSetting(key, (value) => !value);

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const value = useMemo(
    () => ({
      ...settings,
      settings,
      updateSetting,
      toggleSetting,
      resetSettings,
      toggleDarkMode: () => toggleSetting('darkMode'),
      toggleReducedMotion: () => toggleSetting('reducedMotion'),
      toggleFocusMode: () => toggleSetting('focusMode'),
      toggleHighContrast: () => toggleSetting('highContrast'),
      toggleSensoryMode: () => toggleSetting('sensoryMode'),
      changeFontSize: (fontSize) => updateSetting('fontSize', fontSize)
    }),
    [settings]
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
