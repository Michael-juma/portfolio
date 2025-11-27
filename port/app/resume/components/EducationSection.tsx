import Icon from '@/components/ui/AppIcon';

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gpa?: string;
  honors?: string[];
  relevantCourses: string[];
}

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-headline font-semibold text-foreground mb-6">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="AcademicCapIcon" size={24} className="text-accent" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </div>
                <div className="flex flex-col sm:items-end">
                  <span className="text-sm text-text-secondary">{edu.duration}</span>
                  <span className="text-sm text-text-secondary">{edu.location}</span>
                  {edu.gpa && (
                    <span className="text-sm font-medium text-success mt-1">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>

              {edu.honors && edu.honors.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Honors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((honor, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Relevant Coursework:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-surface text-text-secondary text-xs font-medium rounded-full border border-border"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}