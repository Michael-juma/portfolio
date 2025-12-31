'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2025');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerLinks = {
    navigation: [
      { id: 'nav-home', label: 'Home', href: '/homepage' },
      { id: 'nav-about', label: 'About', href: '/about' },
      { id: 'nav-skills', label: 'Skills', href: '/skills' },
      { id: 'nav-blog', label: 'Blog', href: '/blog' }
    ],
    resources: [
      { id: 'res-contact', label: 'Contact', href: '/contact' },
      { id: 'res-resume', label: 'Resume', href: '/resume' },
      { id: 'res-projects', label: 'Projects', href: '/homepage' },
      { id: 'res-services', label: 'Services', href: '/homepage' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: 'CodeBracketIcon', href: 'https://github.com/Michael-juma', label: 'GitHub Profile' },
    { name: 'LinkedIn', icon: 'UserGroupIcon', href: 'https://www.linkedin.com/in/michael-juma-obudho-497190364/', label: 'LinkedIn Profile' },
    { name: 'X', icon: 'AtSymbolIcon', href: 'https://x.com/MichaelJum96316', label: 'X Profile' },
    { name: 'Email', icon: 'EnvelopeIcon', href: 'mailto:obudho200@gmail.com', label: 'Email Contact' }
  ];

  return (
    <footer className={`bg-slate-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/homepage" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-md">
                <span className="text-primary-foreground font-accent font-medium text-lg">JD</span>
              </div>
              <span className="text-xl font-headline font-semibold">Juma.dev</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Building elegant fullstack solutions with React, Next.js, and Python. Code that works beautifully.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-primary transition-fast"
                  aria-label={social.label}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-fast text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-fast text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:obudho200@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-primary transition-fast text-sm"
              >
                <Icon name="EnvelopeIcon" size={18} />
                obudho200@gmail.com
              </a>
              <a
                href="https://github.com/Michael-juma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-primary transition-fast text-sm"
              >
                <Icon name="CodeBracketIcon" size={18} />
                github.com/Michael-juma
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-smooth text-sm font-medium mt-2"
              >
                Start a Project
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              {isHydrated ? `© ${currentYear}` : '© 2025'} Juma.dev. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/homepage" className="text-slate-400 hover:text-primary transition-fast text-sm">
                Privacy Policy
              </Link>
              <Link href="/homepage" className="text-slate-400 hover:text-primary transition-fast text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;