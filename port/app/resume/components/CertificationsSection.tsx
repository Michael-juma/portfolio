import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  logo: string;
  logoAlt: string;
  verifyLink?: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-headline font-semibold text-foreground mb-6">
        Certifications & Credentials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="border border-border rounded-lg p-4 hover:shadow-brand transition-smooth"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-surface rounded-lg overflow-hidden flex items-center justify-center">
                <AppImage
                  src={cert.logo}
                  alt={cert.logoAlt}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                <p className="text-xs text-text-secondary mb-2">
                  Issued: {cert.date}
                </p>
                <p className="text-xs text-text-secondary mb-3">
                  ID: {cert.credentialId}
                </p>
                {cert.verifyLink && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-primary hover:underline"
                  >
                    <Icon name="CheckBadgeIcon" size={14} />
                    <span>Verify Credential</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}