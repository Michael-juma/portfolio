import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';

export const metadata: Metadata = {
  title: 'Skills & Technologies - Juma.dev',
  description: 'Explore my comprehensive skill set including React, Next.js, TypeScript, Python, and modern web development technologies with proficiency levels and real project applications.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <section className="w-full px-4 py-16 lg:px-8 bg-gradient-to-b from-surface to-background">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-headline font-bold text-foreground">
              Skills & Technologies
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise, proficiency levels, and real-world project applications. Each skill represents years of hands-on experience building production-grade applications.
            </p>
          </div>
        </section>

        <section className="w-full px-4 py-12 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SkillsInteractive />
          </div>
        </section>

        <section className="w-full px-4 py-16 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-headline font-bold text-foreground">
              Continuous Learning & Growth
            </h2>
            <p className="text-text-secondary text-lg">
              Technology evolves rapidly, and so do I. I'm committed to staying current with industry trends, exploring emerging technologies, and continuously refining my craft. Every project is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="px-6 py-3 bg-card border border-border rounded-lg shadow-brand">
                <p className="text-sm text-text-secondary">Currently Learning</p>
                <p className="text-lg font-semibold text-primary">AI Integration & Web3</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg shadow-brand">
                <p className="text-sm text-text-secondary">Next Focus</p>
                <p className="text-lg font-semibold text-primary">Advanced System Design</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg shadow-brand">
                <p className="text-sm text-text-secondary">Exploring</p>
                <p className="text-lg font-semibold text-primary">Rust & WebAssembly</p>
              </div>
            </div>
          </div>
        </section>

        
      </main>
    </div>
  );
}