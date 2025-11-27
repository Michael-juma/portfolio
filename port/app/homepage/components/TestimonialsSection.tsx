'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'TechVentures Inc',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bdbe6c11-1763300715032.png",
    alt: 'Professional woman with long brown hair in navy blazer smiling confidently at camera',
    content: 'Juma transformed our legacy system into a modern, scalable platform. The attention to detail and code quality exceeded our expectations. Our conversion rates increased by 45% within the first month.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'DataFlow Solutions',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0203c69-1763294964268.png",
    alt: 'Asian man in gray suit with black-rimmed glasses smiling professionally in office setting',
    content: 'Working with Juma was a game-changer for our analytics platform. The real-time dashboard handles millions of events seamlessly. Technical expertise combined with excellent communication.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder & CEO',
    company: 'StartupHub',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10bbbf135-1763294543564.png",
    alt: 'Hispanic woman with curly dark hair in white blouse smiling warmly in bright office',
    content: 'Juma built our MVP in record time without compromising quality. The mobile-first approach and offline capabilities were exactly what we needed. Now serving 50K+ happy users!',
    rating: 5
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (!isHydrated) {
    return (
      <section className={`py-20 bg-gradient-to-br from-primary/5 to-accent/5 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <span className="text-primary font-accent text-sm">Client Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>
        </div>
      </section>);

  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-20 bg-gradient-to-br from-primary/5 to-accent/5 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-primary font-accent text-sm">Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real feedback from clients who have experienced the difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border shadow-brand-lg p-8 md:p-12 relative">
            <Icon
              name="ChatBubbleLeftRightIcon"
              size={48}
              className="text-primary/20 absolute top-8 left-8" />


            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover" />

                </div>
                <div>
                  <h3 className="font-headline font-semibold text-lg text-card-foreground">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) =>
                <Icon key={i} name="StarIcon" size={20} className="text-yellow-500" variant="solid" />
                )}
              </div>

              <p className="text-lg text-card-foreground leading-relaxed mb-6">
                "{currentTestimonial.content}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-border'}`
                    }
                    aria-label={`Go to testimonial ${index + 1}`} />

                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handlePrevious}
                    className="w-10 h-10 flex items-center justify-center bg-surface border border-border rounded-lg hover:bg-muted transition-fast"
                    aria-label="Previous testimonial">

                    <Icon name="ChevronLeftIcon" size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 flex items-center justify-center bg-surface border border-border rounded-lg hover:bg-muted transition-fast"
                    aria-label="Next testimonial">

                    <Icon name="ChevronRightIcon" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;