import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsOverview from './components/SkillsOverview';
import TestimonialsSection from './components/TestimonialsSection';
import BlogPreview from './components/BlogPreview';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Home - Juma.dev | Fullstack Engineer Portfolio',
  description: 'Premium software engineer portfolio showcasing fullstack development expertise in React, Next.js, and Python. Building elegant solutions that combine technical excellence with exceptional user experiences.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <FeaturedProjects />
        <SkillsOverview />
        <TestimonialsSection />
        <BlogPreview />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}