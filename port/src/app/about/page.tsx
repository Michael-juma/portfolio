import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
  title: 'About - Juma.dev',
  description: 'Learn about Juma\'s journey as a fullstack engineer, technical philosophy, core values, and what makes collaboration unique. Discover the story behind the code.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <AboutInteractive />
      </div>
    </main>
  );
}