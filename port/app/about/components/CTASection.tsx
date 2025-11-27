import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 lg:p-12 text-center shadow-brand-lg">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-cta font-semibold rounded-lg hover:scale-105 hover:shadow-brand-lg transition-smooth"
            >
              <span>Start a Conversation</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-cta font-semibold rounded-lg hover:bg-white/20 transition-smooth border border-white/20"
            >
              <Icon name="DocumentTextIcon" size={20} />
              <span>View Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}