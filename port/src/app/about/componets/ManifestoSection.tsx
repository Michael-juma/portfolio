

interface ManifestoPoint {
  title: string;
  description: string;
}

interface ManifestoSectionProps {
  manifesto: {
    title: string;
    subtitle: string;
    points: ManifestoPoint[];
  };
}

export default function ManifestoSection({ manifesto }: ManifestoSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            {manifesto.title}
          </h2>
          <p className="text-lg text-text-secondary">
            {manifesto.subtitle}
          </p>
        </div>
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-lg border border-border">
          <div className="space-y-6">
            {manifesto.points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-accent font-semibold text-sm">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-headline font-semibold text-card-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}