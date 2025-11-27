'use client';

import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

export default function ContactHero({ className = '' }: ContactHeroProps) {
  const quickLinks = [
    {
      icon: 'EnvelopeIcon',
      label: 'Email',
      href: 'mailto:hello@juma.dev',
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      label: 'WhatsApp',
      href: 'https://wa.me/15551234567',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: 'AtSymbolIcon',
      label: 'Twitter',
      href: 'https://twitter.com/juma_dev',
      color: 'from-sky-500 to-blue-600'
    }
  ];

  return (
    <section className={`relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full mb-6 shadow-brand">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-foreground">Available for New Projects</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6 leading-tight">
          Let's Build Something
          <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Extraordinary Together
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your vision into reality? Get in touch through any of these channels, 
          and I'll respond within 24 hours with a detailed plan for your project.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#contact-form"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-conversion via-primary to-accent text-conversion-foreground font-cta font-bold text-base rounded-lg hover:scale-105 hover:shadow-brand-lg transition-smooth shadow-brand"
          >
            Start Your Project
          </a>
          <a
            href="#contact-methods"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-methods')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-card border-2 border-border text-foreground font-cta font-bold text-base rounded-lg hover:border-primary hover:shadow-brand transition-smooth"
          >
            View All Options
          </a>
        </div>

        <div className="flex items-center justify-center gap-4">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${link.color} text-white rounded-lg hover:scale-105 transition-smooth shadow-brand`}
            >
              <Icon name={link.icon as any} size={20} />
              <span className="font-semibold text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}