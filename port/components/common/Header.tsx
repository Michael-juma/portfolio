'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/5 via-background to-accent/5 backdrop-blur-lg border-b border-primary/20 shadow-brand ${className}`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          <Link href="/homepage" className="flex items-center space-x-3 hover:opacity-90 transition-smooth group">
            <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary rounded-xl shadow-brand-lg group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-headline font-bold text-xl">JD</span>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-headline font-bold text-foreground leading-none">Juma.dev</span>
              <span className="text-xs font-medium text-primary leading-none mt-1">Fullstack Engineer</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-2.5 text-sm font-semibold text-text-secondary hover:text-primary hover:bg-surface/80 rounded-lg transition-smooth border border-transparent hover:border-primary/20"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-conversion via-primary to-accent text-conversion-foreground font-cta font-bold text-sm rounded-lg hover:scale-105 hover:shadow-brand-lg transition-smooth shadow-brand"
            >
              Get In Touch
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-text-secondary hover:text-primary hover:bg-surface/80 rounded-lg transition-fast border border-transparent hover:border-primary/20"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-primary/20 bg-gradient-to-b from-background to-surface/50 backdrop-blur-lg">
            <nav className="px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-4 text-base font-semibold text-text-secondary hover:text-primary hover:bg-surface/80 rounded-lg transition-smooth border border-transparent hover:border-primary/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full px-8 py-4 bg-gradient-to-r from-conversion via-primary to-accent text-conversion-foreground font-cta font-bold text-base text-center rounded-lg hover:scale-105 hover:shadow-brand-lg transition-smooth shadow-brand"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get In Touch
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;