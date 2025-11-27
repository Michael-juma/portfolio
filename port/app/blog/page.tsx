import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import BlogHero from './components/BlogHero';
import BlogInteractive from './components/BlogInteractive';

export const metadata: Metadata = {
  title: 'Technical Blog - Juma.dev',
  description: 'Deep dives into modern web development, practical tutorials, and insights from building production-grade applications with React, Next.js, Python, and fullstack engineering.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <BlogHero />
        <BlogInteractive />
      </main>

      <footer className="bg-surface border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-text-secondary">
              &copy; {new Date().getFullYear()} Juma.dev. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-text-secondary">
              <a href="/privacy" className="hover:text-primary transition-fast">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition-fast">Terms of Service</a>
              <a href="/rss" className="hover:text-primary transition-fast">RSS Feed</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}