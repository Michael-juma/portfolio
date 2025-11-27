import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 bg-gradient-to-br from-primary to-accent ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss your project and create a solution that exceeds expectations. From concept to deployment, I'll be with you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-cta font-semibold text-base rounded-lg hover:scale-105 hover:shadow-brand-lg transition-smooth"
            >
              Start Your Project
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-cta font-semibold text-base rounded-lg border-2 border-white hover:bg-white hover:text-primary transition-smooth"
            >
              Download Resume
              <Icon name="ArrowDownTrayIcon" size={20} className="ml-2" />
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-headline font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-bold text-white mb-2">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;