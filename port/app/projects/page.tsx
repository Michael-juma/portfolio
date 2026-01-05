import projects from '@/app/data/projects';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

function ProjectsNav() {
  return (
    <nav className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <Link href="/homepage" className="text-sm font-medium text-text-secondary hover:text-primary">Home</Link>
        <Link href="/about" className="text-sm font-medium text-text-secondary hover:text-primary">About</Link>
        <Link href="/skills" className="text-sm font-medium text-text-secondary hover:text-primary">Skills</Link>
        <Link href="/resume" className="text-sm font-medium text-text-secondary hover:text-primary">Resume</Link>
        <Link href="/contact" className="text-sm font-medium text-text-secondary hover:text-primary">Contact</Link>
      </div>
      <Link href="/contact" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">Get In Touch</Link>
    </nav>
  );
}

export const metadata = {
  title: 'Projects',
  description: 'All projects',
};

export default function ProjectsPage() {
  return (
    <main className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsNav />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-bold text-foreground">All Projects</h1>
          <p className="text-text-secondary mt-3">A collection of projects and case studies.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article key={project.id} className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="relative h-52 overflow-hidden bg-muted">
                <AppImage src={project.image} alt={project.alt} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-foreground">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-headline font-semibold text-card-foreground mb-3">{project.title}</h3>
                <p className="text-text-secondary mb-4 line-clamp-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-surface text-text-secondary text-xs font-medium rounded-full">{tech}</span>
                  ))}
                </div>

                <div className="flex items-center text-primary font-medium text-sm">
                  <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 hover:underline">
                    View Details
                    <Icon name="ArrowRightIcon" size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
