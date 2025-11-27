import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  impact: string;
  technologies: string[];
}

interface ProjectHighlightsProps {
  projects: Project[];
}

export default function ProjectHighlights({ projects }: ProjectHighlightsProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-headline font-semibold text-foreground">
          Featured Projects
        </h2>
        <Link
          href="/homepage"
          className="text-sm text-primary hover:underline font-medium flex items-center space-x-1"
        >
          <span>View All Projects</span>
          <Icon name="ArrowRightIcon" size={14} />
        </Link>
      </div>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-border rounded-lg p-4 hover:shadow-brand transition-smooth"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                  {project.role}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-text-secondary mb-3">
              {project.description}
            </p>
            
            <div className="flex items-start space-x-2 mb-3">
              <Icon name="ChartBarIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <p className="text-sm text-success font-medium">
                {project.impact}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-surface text-text-secondary text-xs font-medium rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}