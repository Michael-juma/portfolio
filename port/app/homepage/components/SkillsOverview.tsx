import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: string;
}

interface SkillsOverviewProps {
  className?: string;
}

const SkillsOverview = ({ className = '' }: SkillsOverviewProps) => {
  const skills: Skill[] = [
    { name: 'React & Next.js', icon: 'CodeBracketIcon', proficiency: 95, category: 'Frontend' },
    { name: 'TypeScript', icon: 'CommandLineIcon', proficiency: 90, category: 'Language' },
    { name: 'Python & Django', icon: 'ServerIcon', proficiency: 88, category: 'Backend' },
    { name: 'Tailwind CSS', icon: 'PaintBrushIcon', proficiency: 92, category: 'Styling' },
    { name: 'PostgreSQL', icon: 'CircleStackIcon', proficiency: 85, category: 'Database' },
    { name: 'AWS & Cloud', icon: 'CloudIcon', proficiency: 80, category: 'DevOps' }
  ];

  return (
    <section className={`py-20 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-primary font-accent text-sm">Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Full-Stack Mastery
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive expertise across modern web technologies and frameworks
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-brand transition-smooth"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={skill.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline font-semibold text-card-foreground">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-text-secondary">{skill.category}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Proficiency</span>
                  <span className="font-semibold text-foreground">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-smooth"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/skills"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-cta font-semibold text-base rounded-lg hover:scale-105 hover:shadow-brand-lg transition-smooth"
          >
            Explore Full Tech Stack
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;