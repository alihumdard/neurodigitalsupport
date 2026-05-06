import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast('Thanks for subscribing to our newsletter');
      setEmail('');
    }
  };

  const navigationLinks = [
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Modules', path: '/modules' },
    { name: 'Research', path: '/research' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-lg font-bold text-primary" style={{ letterSpacing: '-0.02em' }}>NeuroDigital Support</span>
            <p className="mt-4 text-sm leading-relaxed">
              Creating sensory-aware digital spaces that support neurodivergent wellbeing and reduce overwhelm.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase">Navigation</span>
            <nav className="mt-4 space-y-2" aria-label="Footer navigation">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm hover:text-primary transition-colors duration-200 focus-visible-ring rounded"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase">Contact</span>
            <div className="mt-4 space-y-3">
              <a href="mailto:info@neurodigitalsupport.com" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors duration-200 focus-visible-ring rounded">
                <span className="flex h-5 w-5 items-center justify-center">
                  <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span>info@neurodigitalsupport.com</span>
              </a>
              <a href="tel:+441234567890" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors duration-200 focus-visible-ring rounded">
                <span className="flex h-5 w-5 items-center justify-center">
                  <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span>+44 123 456 7890</span>
              </a>
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/50 hover:bg-background transition-all duration-200 focus-visible-ring"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase">Newsletter</span>
            <p className="mt-4 text-sm leading-relaxed">
              Get updates on new features and accessibility improvements.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background text-foreground"
                aria-label="Email address for newsletter"
              />
              <Button type="submit" className="w-full" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} NeuroDigital Support. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/accessibility" className="hover:text-primary transition-colors duration-200 focus-visible-ring rounded">
                Accessibility statement
              </Link>
              <Link to="/privacy" className="hover:text-primary transition-colors duration-200 focus-visible-ring rounded">
                Privacy policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-200 focus-visible-ring rounded">
                Terms of service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
