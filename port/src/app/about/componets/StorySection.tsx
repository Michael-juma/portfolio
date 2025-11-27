import AppImage from '@/components/ui/AppImage';

interface StorySectionProps {
  story: {
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
}

export default function StorySection({ story }: StorySectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-foreground mb-6">
              {story.title}
            </h2>
            <div className="space-y-4">
              {story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-brand-lg h-96 lg:h-[500px]">
              <AppImage
                src={story.image}
                alt={story.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}