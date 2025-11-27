import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Recognition {
  type: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  image?: string;
  imageAlt?: string;
}

interface RecognitionSectionProps {
  recognitions: Recognition[];
}

export default function RecognitionSection({ recognitions }: RecognitionSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-4">
            Professional Recognition
          </h2>
          <p className="text-lg text-text-secondary">
            Certifications, achievements, and continuous learning milestones
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recognitions.map((recognition, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-smooth border border-border"
            >
              {recognition.image && (
                <div className="relative h-40 bg-gradient-to-br from-primary/10 to-accent/10">
                  <AppImage
                    src={recognition.image}
                    alt={recognition.imageAlt || `${recognition.title} certificate`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg flex-shrink-0">
                    <Icon name={recognition.icon as any} size={24} className="text-success" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 bg-surface rounded text-xs text-text-secondary font-medium mb-2">
                      {recognition.type}
                    </span>
                    <h3 className="text-lg font-headline font-semibold text-card-foreground mb-1">
                      {recognition.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-primary font-medium mb-1">
                  {recognition.issuer}
                </p>
                <p className="text-xs text-text-secondary">
                  {recognition.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}