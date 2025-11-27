'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 lg:p-10 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
          <Icon name="EnvelopeIcon" size={32} className="text-white" />
        </div>

        <div>
          <h3 className="text-2xl lg:text-3xl font-headline font-bold text-white mb-3">
            Stay Updated with Latest Insights
          </h3>
          <p className="text-base text-white/90 leading-relaxed">
            Join 5,000+ developers receiving weekly tutorials, industry insights, and practical tips delivered straight to your inbox. No spam, unsubscribe anytime.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-white text-foreground rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 transition-smooth"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary font-semibold text-sm rounded-md hover:scale-105 hover:shadow-brand transition-smooth whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-2 py-3 text-white">
            <Icon name="CheckCircleIcon" size={24} variant="solid" />
            <span className="font-medium">Thanks for subscribing! Check your inbox.</span>
          </div>
        )}

        <p className="text-xs text-white/70">
          By subscribing, you agree to receive our newsletter and accept our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default NewsletterCTA;