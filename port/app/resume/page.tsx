import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResumeInteractive from './components/ResumeInteractive';

export const metadata: Metadata = {
  title: 'Professional Resume - Juma.dev',
  description: 'Comprehensive professional resume showcasing 8+ years of fullstack development experience, technical skills, certifications, and professional recommendations. Download in multiple formats.',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <ResumeInteractive />
      </div>
    </main>
  );
}