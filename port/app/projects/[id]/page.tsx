import projects from '@/app/data/projects';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Params {
  params: { id: string };
}

export async function generateMetadata({ params }: Params) {
  const project = projects.find((p) => p.id === Number(params.id));
  return {
    title: project ? project.title : 'Project',
    description: project ? project.description : 'Project details',
  };
}

export default function ProjectDetail({ params }: Params) {
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    return (
      <main className="py-20">
        <div className="max-w-3xl mx-auto px-4">Project not found.</div>
      </main>
    );
  }

  return (
    <main className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-2">
            <Icon name="ArrowLeftIcon" size={18} /> Back to projects
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/homepage" className="text-sm font-medium text-text-secondary hover:text-primary">Home</Link>
            <Link href="/about" className="text-sm font-medium text-text-secondary hover:text-primary">About</Link>
            <Link href="/contact" className="text-sm font-medium text-text-secondary hover:text-primary">Contact</Link>
            <Link href="/contact" className="px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold">Get In Touch</Link>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-hidden p-6">
          <div className="relative h-80 rounded-lg overflow-hidden mb-6">
            <AppImage src={project.image} alt={project.alt} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white rounded-full">
              <span className="text-xs font-semibold">{project.category}</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-text-secondary mb-6">{project.fullDescription || project.description}</p>

          {project.links && (
            <div className="flex flex-wrap gap-4 mb-6">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-md">
                  <Icon name="CodeBracketIcon" size={16} className="mr-2" /> View on GitHub
                </a>
              )}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
                  <Icon name="ArrowTopRightOnSquareIcon" size={16} className="mr-2" /> View Live
                </a>
              )}
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Challenges</h2>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                {project.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </section>
          )}

          {project.results && project.results.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Results & Impact</h2>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                {project.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="text-xl font-semibold mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-3 py-1 bg-surface text-text-secondary text-sm font-medium rounded-full">{t}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
