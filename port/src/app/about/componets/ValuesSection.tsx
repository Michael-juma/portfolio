import Icon from '@/components/ui/AppIcon';

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  values: Value[];
}

export default function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Core Values
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The principles that define how I work and collaborate with teams
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-brand hover:shadow-brand-lg transition-smooth border border-border"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
                <Icon name={value.icon as any} size={32} className="text-accent" />
              </div>
              <h3 className="text-lg font-headline font-semibold text-card-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}