'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
}

export default function FAQSection({ className = '' }: FAQSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'What is your typical response time?',
      answer: 'I aim to respond to all inquiries within 24 hours during business days. For urgent matters, please mention it in your message and I\'ll prioritize accordingly.'
    },
    {
      id: '2',
      question: 'Do you offer free consultations?',
      answer: 'Yes! I offer a free 30-minute initial consultation to discuss your project requirements, timeline, and budget. This helps us determine if we\'re a good fit for collaboration.'
    },
    {
      id: '3',
      question: 'What types of projects do you take on?',
      answer: 'I specialize in fullstack web applications using React/Next.js and Python. This includes custom web apps, API development, e-commerce platforms, SaaS products, and technical consulting for existing projects.'
    },
    {
      id: '4',
      question: 'What is your availability?',
      answer: 'I\'m currently accepting new projects starting December 2025. I work with a limited number of clients at a time to ensure quality and attention to detail. Q1 2026 slots are filling up quickly.'
    },
    {
      id: '5',
      question: 'How do you handle project pricing?',
      answer: 'Pricing depends on project scope, complexity, and timeline. I offer both fixed-price projects and hourly rates. After our initial consultation, I\'ll provide a detailed proposal with transparent pricing.'
    },
    {
      id: '6',
      question: 'Do you work with international clients?',
      answer: 'Absolutely! I work with clients globally and am experienced in remote collaboration. I\'m flexible with timezone differences and use modern communication tools to ensure smooth project execution.'
    },
    {
      id: '7',
      question: 'What is your development process?',
      answer: 'I follow an agile approach with regular check-ins, iterative development, and continuous feedback. You\'ll have full visibility into progress through project management tools and regular demos.'
    },
    {
      id: '8',
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! I offer maintenance and support packages for all completed projects. This includes bug fixes, updates, performance monitoring, and feature enhancements as your needs evolve.'
    }
  ];

  const toggleFAQ = (id: string) => {
    if (!isHydrated) return;
    setOpenId(openId === id ? null : id);
  };

  if (!isHydrated) {
    return (
      <div className={className}>
        <div className="text-center mb-12">
          <div className="h-10 bg-surface rounded w-64 mx-auto mb-4" />
          <div className="h-6 bg-surface rounded w-96 mx-auto" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-surface rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-headline font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Quick answers to common questions about working together
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-brand transition-smooth"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-surface transition-fast"
            >
              <span className="font-headline font-semibold text-foreground pr-4">
                {faq.question}
              </span>
              <Icon
                name="ChevronDownIcon"
                size={20}
                className={`text-text-secondary flex-shrink-0 transition-transform ${
                  openId === faq.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {openId === faq.id && (
              <div className="px-6 pb-4 text-text-secondary leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-text-secondary mb-4">
          Still have questions?
        </p>
        <a
          href="mailto:hello@juma.dev"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          <Icon name="EnvelopeIcon" size={20} />
          <span>Send me an email</span>
        </a>
      </div>
    </div>
  );
}