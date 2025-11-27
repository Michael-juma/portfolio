interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20 lg:py-32">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-accent font-medium text-primary mb-4 tracking-wide uppercase">
            {subtitle}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}