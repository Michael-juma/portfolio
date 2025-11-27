import Icon from '@/components/ui/AppIcon';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

interface ContactInfoProps {
  contacts: ContactItem[];
}

export default function ContactInfo({ contacts }: ContactInfoProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-headline font-semibold text-foreground mb-4">
        Contact Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={contact.icon} size={20} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-secondary mb-1">
                {contact.label}
              </p>
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline break-all"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-sm text-foreground break-all">{contact.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}