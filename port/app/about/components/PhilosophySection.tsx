import Icon from '@/components/ui/AppIcon';

interface Philosophy {
  icon: string;
  title: string;
  description: string;
}

interface PhilosophySectionProps {
  philosophies: Philosophy[];
}

export default function PhilosophySection({ philosophies }: PhilosophySectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Technical Philosophy
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Core principles that guide my approach to software development and problem-solving
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-brand hover:shadow-brand-lg transition-smooth border border-border"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6">
                <Icon name={philosophy.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-card-foreground mb-3">
                {philosophy.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {philosophy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}