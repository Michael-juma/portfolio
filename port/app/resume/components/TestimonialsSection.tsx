'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  relationship: string;
  testimonial: string;
  avatar: string;
  avatarAlt: string;
  linkedIn?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-headline font-semibold text-foreground mb-6">
        Professional Recommendations
      </h2>
      <div className="space-y-4">
        {testimonials.map((testimonial) => {
          const isExpanded = expandedId === testimonial.id;
          const shouldTruncate = testimonial.testimonial.length > 200;
          const displayText = isExpanded || !shouldTruncate
            ? testimonial.testimonial
            : `${testimonial.testimonial.substring(0, 200)}...`;

          return (
            <div
              key={testimonial.id}
              className="border border-border rounded-lg p-4 hover:shadow-brand transition-smooth"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
                  <AppImage
                    src={testimonial.avatar}
                    alt={testimonial.avatarAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-primary">{testimonial.position}</p>
                      <p className="text-xs text-text-secondary">{testimonial.company}</p>
                    </div>
                    {testimonial.linkedIn && (
                      <a
                        href={testimonial.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-fast"
                      >
                        <Icon name="LinkIcon" size={16} />
                      </a>
                    )}
                  </div>
                  
                  <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded mb-3">
                    {testimonial.relationship}
                  </span>
                  
                  <p className="text-sm text-text-secondary leading-relaxed mb-2">
                    "{displayText}"
                  </p>
                  
                  {shouldTruncate && (
                    <button
                      onClick={() => toggleExpand(testimonial.id)}
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}