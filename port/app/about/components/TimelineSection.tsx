'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

interface TimelineSectionProps {
  events: TimelineEvent[];
}

export default function TimelineSection({ events }: TimelineSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Career Journey
          </h2>
          <p className="text-lg text-text-secondary">
            Key milestones and experiences that shaped my development career
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-brand flex-shrink-0 relative z-10">
                    <span className="text-primary-foreground font-accent font-semibold text-sm">
                      {event.year}
                    </span>
                  </div>
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-brand border border-border">
                    <div className="sm:hidden mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-accent font-semibold text-sm rounded-md">
                        {event.year}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-headline font-semibold text-card-foreground mb-1">
                            {event.title}
                          </h3>
                          <p className="text-sm text-primary font-medium mb-2">
                            {event.company}
                          </p>
                          <p className="text-text-secondary">
                            {event.description}
                          </p>
                        </div>
                        <Icon
                          name="ChevronDownIcon"
                          size={24}
                          className={`text-text-secondary transition-transform flex-shrink-0 ${
                            expandedIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    {expandedIndex === index && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold text-card-foreground mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {event.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <Icon
                                name="CheckCircleIcon"
                                size={20}
                                className="text-success flex-shrink-0 mt-0.5"
                              />
                              <span className="text-sm text-text-secondary">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}