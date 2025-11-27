import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  category: string;
  link: string;
}

interface FeaturedProjectsProps {
  className?: string;
}

const FeaturedProjects = ({ className = '' }: FeaturedProjectsProps) => {
  const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    description: 'Complete overhaul of legacy e-commerce system resulting in 45% increase in conversion rates and 60% faster page loads. Built with Next.js 14, TypeScript, and Stripe integration.',
    image: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68",
    alt: 'Modern e-commerce website interface showing product grid with shopping cart on laptop screen',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    category: 'Web Application',
    link: '/homepage'
  },
  {
    id: 2,
    title: 'Real-Time Analytics Dashboard',
    description: 'Enterprise-grade analytics platform processing 10M+ events daily. Features real-time data visualization, custom reporting, and predictive analytics powered by Python and React.',
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    alt: 'Analytics dashboard displaying colorful charts and graphs with real-time data metrics on desktop monitor',
    technologies: ['React', 'Python', 'PostgreSQL', 'Redis'],
    category: 'Data Platform',
    link: '/homepage'
  },
  {
    id: 3,
    title: 'Mobile-First SaaS Application',
    description: 'Progressive web app serving 50K+ users with offline-first architecture. Achieved 98% uptime and 4.8-star rating through meticulous attention to performance and UX.',
    image: "https://images.unsplash.com/photo-1647880087466-a1318b812de5",
    alt: 'Mobile phone displaying modern SaaS application interface with clean design and intuitive navigation',
    technologies: ['Next.js', 'PWA', 'Firebase', 'Tailwind'],
    category: 'Mobile App',
    link: '/homepage'
  }];


  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-primary font-accent text-sm">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Projects That Make an Impact
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-world solutions that combine technical excellence with measurable business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) =>
          <Link
            key={project.id}
            href={project.link}
            className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-brand-lg transition-smooth">

              <div className="relative h-48 overflow-hidden bg-muted">
                <AppImage
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />

                <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-foreground">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-headline font-semibold text-card-foreground mb-3 group-hover:text-primary transition-fast">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) =>
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface text-text-secondary text-xs font-medium rounded-full">

                      {tech}
                    </span>
                )}
                </div>

                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-smooth">
                  View Case Study
                  <Icon name="ArrowRightIcon" size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/homepage"
            className="inline-flex items-center px-8 py-4 bg-surface text-foreground font-cta font-semibold text-base rounded-lg border border-border hover:bg-muted transition-smooth">

            View All Projects
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedProjects;