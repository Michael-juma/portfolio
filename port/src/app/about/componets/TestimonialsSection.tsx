'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  imageAlt: string;
  quote: string;
  relationship: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            What Others Say
          </h2>
          <p className="text-lg text-text-secondary">
            Testimonials from colleagues, mentors, and collaborators
          </p>
        </div>
        <div className="relative bg-card rounded-2xl p-8 lg:p-12 shadow-brand-lg border border-border">
          <Icon
            name="ChatBubbleLeftRightIcon"
            size={48}
            className="text-primary/20 absolute top-8 left-8"
          />
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 shadow-brand">
                <AppImage
                  src={currentTestimonial.image}
                  alt={currentTestimonial.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-headline font-semibold text-card-foreground">
                {currentTestimonial.name}
              </h3>
              <p className="text-sm text-primary font-medium">
                {currentTestimonial.role}
              </p>
              <p className="text-sm text-text-secondary">
                {currentTestimonial.company}
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-surface rounded-full text-xs text-text-secondary">
                {currentTestimonial.relationship}
              </span>
            </div>
            <blockquote className="text-lg text-text-secondary leading-relaxed text-center max-w-3xl mx-auto mb-8">
              "{currentTestimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="flex items-center justify-center w-10 h-10 bg-surface hover:bg-primary/10 rounded-full transition-smooth"
                aria-label="Previous testimonial"
              >
                <Icon name="ChevronLeftIcon" size={20} className="text-text-secondary" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-10 h-10 bg-surface hover:bg-primary/10 rounded-full transition-smooth"
                aria-label="Next testimonial"
              >
                <Icon name="ChevronRightIcon" size={20} className="text-text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}