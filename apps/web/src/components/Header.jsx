import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, Eye } from 'lucide-react';
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
    { name: 'Modules', path: '/modules' },
    { name: 'Research', path: '/research' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="relative -ml-7 block h-12 w-[230px] overflow-hidden focus-visible-ring rounded-md sm:-ml-10 sm:w-[280px] lg:-ml-16" aria-label="NeuroDigital Support home">
            <img
              src={logoSrc}
              alt="NeuroDigital Support"
              className="absolute left-0 top-[-51px] w-[260px] max-w-none sm:top-[-59px] sm:w-[300px]"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 focus-visible-ring ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-muted/50">
              <Sun className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Switch
                checked={darkMode}
                onCheckedChange={toggleDarkMode}
                aria-label="Toggle dark mode"
              />
              <Moon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </div>

            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-muted/50">
              <Eye className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Switch
                checked={highContrast}
                onCheckedChange={toggleHighContrast}
                aria-label="Toggle high contrast"
              />
            </div>

          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
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
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 space-y-4 border-t pt-6">
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
