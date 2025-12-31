'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const fullCode = `const developer = {
  name: "Michael Obudho Juma",
  role: "Fullstack Software Engineer",
  expertise: ["React", "Next.js", "Python", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "SQLAlchemy", "Flask", "JWT"],
  passion: "Building elegant solutions",
  mission: "Code that works beautifully"
};`;

  useEffect(() => {
    if (!isHydrated) return;

    if (currentIndex < fullCode.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullCode.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, 50); // 50ms per character for slow-motion effect
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isHydrated, fullCode]);

  if (!isHydrated) {
    return (
      <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${className}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary font-accent text-sm">Fullstack Engineer</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white mb-6">
              Building Software That
              <span className="block text-primary mt-2">Works Beautifully</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Crafting elegant fullstack solutions with React, Next.js, and Python. Where technical excellence meets exceptional user experience.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden ${className}`}>
      <div className="absolute inset-0 dot-pattern opacity-10" />

      {/* Decorative circular image (behind content) */}
      <div className="hidden md:block absolute top-12 left-6 -translate-x-6 z-0 pointer-events-none">
        <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 opacity-90">
          <AppImage src="https://i.pinimg.com/736x/21/82/27/218227279a307ac17a523a527635dc55.jpg" alt="Decorative" fill className="object-cover" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary font-accent text-sm">Fullstack Engineer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white mb-6">
              Building Software That
              <span className="block text-primary mt-2">Works Beautifully</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8">
              Crafting elegant fullstack solutions with React, Next.js, and Python. Where technical excellence meets exceptional user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-conversion text-conversion-foreground font-cta font-semibold text-base rounded-lg hover:scale-105 hover:shadow-brand-lg transition-smooth"
              >
                Start Your Project
                <Icon name="ArrowRightIcon" size={20} className="ml-2" />
              </Link>
              
              <Link
                href="/resume"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface text-foreground font-cta font-semibold text-base rounded-lg border border-border hover:bg-muted transition-smooth"
              >
                View Resume
                <Icon name="DocumentTextIcon" size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/Michael-juma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-fast"
                aria-label="GitHub Profile"
              >
                <Icon name="CodeBracketIcon" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/michael-juma-obudho-497190364/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-fast"
                aria-label="LinkedIn Profile"
              >
                <Icon name="UserGroupIcon" size={24} />
              </a>
              <a
                href="mailto:obudho200@gmail.com"
                className="text-slate-400 hover:text-primary transition-fast"
                aria-label="Email Contact"
              >
                <Icon name="EnvelopeIcon" size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-950 rounded-lg border border-slate-700 shadow-brand-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-slate-400 text-sm font-accent ml-2">developer.js</span>
              </div>
              
              <div className="p-6 font-accent text-sm min-h-[200px]">
                <pre className="text-green-400 whitespace-pre-wrap">
                  <code className="typewriter-text">{displayedText}</code>
                  {currentIndex < fullCode.length && (
                    <span className="typewriter-cursor">▊</span>
                  )}
                </pre>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-slate-400" />
      </div>
    </section>
  );
};

export default HeroSection;