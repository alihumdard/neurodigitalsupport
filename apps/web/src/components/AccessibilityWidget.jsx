import React from 'react';
import {
  AlignLeft,
  BookOpen,
  Contrast,
  Eye,
  ImageOff,
  Link as LinkIcon,
  MousePointer2,
  RotateCcw,
  SlidersHorizontal,
  Type
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useAccessibility } from '@/hooks/useAccessibility.jsx';

const toggleItems = [
  { key: 'highContrast', label: 'Contrast', icon: Contrast },
  { key: 'hideImages', label: 'Hide Images', icon: ImageOff },
  { key: 'highlightLinks', label: 'Highlight Links', icon: LinkIcon },
  { key: 'bigCursor', label: 'Big Cursor', icon: MousePointer2 },
  { key: 'dyslexiaFont', label: 'Dyslexia Friendly', icon: BookOpen, mark: 'Df' },
  { key: 'textSpacing', label: 'Text Spacing', icon: Type },
  { key: 'lineHeight', label: 'Line Height', icon: AlignLeft }
];

const fontSizeOptions = [
  { label: 'Default', value: 'medium' },
  { label: '1.2x', value: 'large' },
  { label: '1.5x', value: 'xlarge' }
];

const AccessibilityWidget = () => {
  const accessibility = useAccessibility();
  const { darkMode, highContrast, fontSize, resetSettings, toggleSetting, updateSetting } = accessibility;
  const darkTextStyle = darkMode || highContrast ? { color: '#ffffff' } : undefined;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-10 w-11 rounded-2xl border border-emerald-100 bg-white/92 text-[#0f765a] shadow-[0_10px_28px_rgba(15,61,50,0.10)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#9ccfbd] hover:bg-[#e8f7f1] hover:text-[#0c4f3f] dark:border-emerald-400/25 dark:bg-white/10 dark:text-emerald-200 dark:shadow-[0_12px_34px_rgba(0,0,0,0.28)] dark:hover:bg-emerald-400/12 sm:h-12 sm:w-14"
          aria-label="Open accessibility menu"
        >
          <SlidersHorizontal className="h-5 w-5 stroke-[2.25] sm:h-6 sm:w-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="accessibility-panel w-[min(92vw,420px)] border-l border-emerald-400/20 bg-[#111614]/94 p-0 text-white shadow-[0_28px_90px_rgba(15,61,50,0.18)] backdrop-blur-2xl"
      >
        <div className="flex h-full flex-col">
          <SheetHeader className="border-b border-emerald-400/20 px-6 py-6 text-left">
            <SheetTitle className="mt-4 text-2xl font-semibold tracking-normal text-white" style={darkTextStyle}>
              Accessibility
            </SheetTitle>
            <p className="text-sm font-medium leading-6 text-white" style={darkTextStyle}>
              Apply comfortable viewing settings across the whole website.
            </p>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="mb-5">
              <div className="mb-3 flex items-center gap-2">
                <Eye className="h-4 w-4 text-white" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-white" style={darkTextStyle}>Bigger Text</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 rounded-2xl border border-emerald-200/70 bg-white/[0.03] p-2">
                {fontSizeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateSetting('fontSize', option.value)}
                    style={darkTextStyle}
                    className={`h-11 rounded-xl text-sm font-semibold text-white transition ${
                      fontSize === option.value
                        ? 'bg-[#167158] text-white shadow-sm'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {toggleItems.map(({ key, label, icon: Icon, mark }) => {
                const active = Boolean(accessibility[key]);

                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={active}
                    data-active={active}
                    onClick={() => toggleSetting(key)}
                    style={darkTextStyle}
                    className={`flex min-h-[112px] flex-col justify-between rounded-2xl border p-4 text-left text-white shadow-sm transition ${
                      active
                        ? 'border-emerald-300 bg-emerald-400/14 shadow-emerald-900/10'
                        : 'border-emerald-200/70 bg-white/[0.03] hover:bg-white/10'
                    }`}
                  >
                    <span data-accessibility-icon className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#167158] shadow-sm dark:bg-white dark:text-[#167158]">
                      {mark ? (
                        <span className="text-lg font-semibold leading-none tracking-normal">{mark}</span>
                      ) : (
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                    <span className="mt-4 text-sm font-semibold leading-snug text-white" style={darkTextStyle}>
                      {label}
                      {mark ? <span className="mt-2 block h-1 w-14 rounded-full bg-[#8ee0c3]" aria-hidden="true" /> : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-t border-emerald-400/20 p-6">
            <button
              type="button"
              onClick={resetSettings}
              data-reset-button
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#0f765a] bg-[#0f765a] text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-white hover:text-[#0f765a] dark:border-emerald-200/70 dark:bg-[#0f765a] dark:text-white dark:hover:bg-white dark:hover:text-[#0f765a]"
            >
              <RotateCcw className="h-4 w-4 text-current" aria-hidden="true" />
              <span className="text-current">Reset Settings</span>
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AccessibilityWidget;
