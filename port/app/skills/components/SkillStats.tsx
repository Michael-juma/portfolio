interface StatCardProps {
  icon: string;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 text-center shadow-brand hover:shadow-brand-lg transition-smooth">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl font-headline font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-text-secondary">{label}</div>
    </div>
  );
}

export default function SkillStats() {
  const stats = [
    { icon: '💻', value: '10+', label: 'Technologies Mastered' },
    { icon: '🚀', value: '50+', label: 'Projects Completed' },
    { icon: '⏱️', value: '2+', label: 'Years Experience' },
    { icon: '🏆', value: '2+', label: 'Certifications' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}