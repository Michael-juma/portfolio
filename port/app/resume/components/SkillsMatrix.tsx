interface Skill {
  category: string;
  skills: {
    name: string;
    level: number;
    years: number;
  }[];
}

interface SkillsMatrixProps {
  skillCategories: Skill[];
}

export default function SkillsMatrix({ skillCategories }: SkillsMatrixProps) {
  const getLevelColor = (level: number) => {
    if (level >= 90) return 'bg-success';
    if (level >= 70) return 'bg-primary';
    if (level >= 50) return 'bg-accent';
    return 'bg-warning';
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-headline font-semibold text-foreground mb-6">
        Technical Skills
      </h2>
      <div className="space-y-6">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-text-secondary">
                        {skill.years} {skill.years === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-text-secondary">
                      {getLevelText(skill.level)}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getLevelColor(skill.level)} transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}