interface ProfessionalSummaryProps {
  summary: string;
  highlights: string[];
}

export default function ProfessionalSummary({ summary, highlights }: ProfessionalSummaryProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-headline font-semibold text-foreground mb-4">
        Professional Summary
      </h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        {summary}
      </p>
      <div className="space-y-2">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
            <p className="text-sm text-text-secondary">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}