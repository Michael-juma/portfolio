import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import AvailabilityStatus from './components/AvailabilityStatus';
import ContactMethods from './components/ContactMethods';
import ProjectInquiryForm from './components/ProjectInquiryForm';
import FAQSection from './components/FAQSection';
import LocationInfo from './components/LocationInfo';
import SocialLinks from './components/SocialLinks';
import ContactInfoCard from './components/ContactInfoCard';
import Icon from '@/components/ui/AppIcon';


export const metadata: Metadata = {
  title: 'Contact - Juma.dev',
  description: 'Get in touch for project inquiries, technical consultations, or collaboration opportunities. Multiple communication channels available with response within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <ContactHero />
        
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <ProjectInquiryForm />
              </div>

              <div className="space-y-8">
                <AvailabilityStatus />
                <LocationInfo />
                {/* Prominent contact info */}
                <ContactInfoCard />
              </div>
            </div>
            
            <div id="contact-methods" className="mb-16 scroll-mt-20">
              <ContactMethods />
            </div>
            
            <div className="mb-16">
              <SocialLinks />
            </div>
            
            <div>
              <FAQSection />
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full mb-6">
              <Icon name="SparklesIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-foreground">Ready to Get Started?</span>
            </div>

            <h2 className="text-3xl font-headline font-bold text-foreground mb-4">
              Let's Turn Your Ideas Into Reality
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Whether you have a detailed project brief or just an idea, I'm here to help bring your vision to life with clean code and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#project-inquiry"
                className="px-8 py-4 bg-gradient-to-r from-conversion via-primary to-accent text-conversion-foreground font-cta font-bold rounded-lg hover:scale-105 hover:shadow-brand-lg transition-smooth shadow-brand"
              >
                Fill Out Project Form
              </a>
              <a
                href="mailto:obudho200@gmail.com"
                className="px-8 py-4 bg-card border-2 border-border text-foreground font-cta font-bold rounded-lg hover:border-primary hover:shadow-brand transition-smooth"
              >
                Send Quick Email
              </a>
            </div>
          </div>
        </section>
        
        
      </main>
    </div>
  );
}