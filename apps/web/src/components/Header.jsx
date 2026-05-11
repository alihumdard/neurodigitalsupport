import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import AccessibilityWidget from '@/components/AccessibilityWidget.jsx';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useAccessibility } from '@/hooks/useAccessibility.jsx';
import logoSrc from '../../public/logo.png';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, highContrast, toggleDarkMode, toggleHighContrast } = useAccessibility();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Research', path: '/research' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const featurePaths = [
    '/features',
    '/nurotok',
    '/altitok',
    '/olitok',
    '/care-logging',
    '/digital-advocacy-hub',
    '/research-insights-hub',
    '/social-listening-dashboard'
  ];

  const isActive = (path) => (
    path === '/features'
      ? featurePaths.includes(location.pathname)
      : location.pathname === path
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm shadow-slate-950/5 backdrop-blur supports-[backdrop-filter]:bg-background/75 dark:shadow-none">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex h-[4.4rem] items-center justify-between gap-2 sm:h-16">
          <Link to="/" className="relative block h-12 min-w-0 flex-1 overflow-hidden focus-visible-ring rounded-md sm:-ml-4 sm:h-14 sm:w-[290px] sm:flex-none lg:-ml-16" aria-label="NeuroDigital Support home">
            <img
              src={logoSrc}
              alt="NeuroDigital Support"
              className="absolute left-[-16px] top-[-42px] w-[230px] max-w-none sm:left-0 sm:top-[-61px] sm:w-[310px]"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 focus-visible-ring ${
                  isActive(link.path)
                    ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center">
            <AccessibilityWidget />
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-2xl" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 text-base font-medium rounded-md transition-all duration-200 focus-visible-ring ${
                      isActive(link.path)
                        ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200'
                        : 'text-foreground hover:text-primary hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 space-y-4 border-t pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Accessibility menu</span>
                  <AccessibilityWidget />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Dark mode</span>
                  <Switch
                    checked={darkMode}
                    onCheckedChange={toggleDarkMode}
                    aria-label="Toggle dark mode"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">High contrast</span>
                  <Switch
                    checked={highContrast}
                    onCheckedChange={toggleHighContrast}
                    aria-label="Toggle high contrast"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
