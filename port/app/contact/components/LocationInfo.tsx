import Icon from '@/components/ui/AppIcon';

interface LocationInfoProps {
  className?: string;
}

export default function LocationInfo({ className = '' }: LocationInfoProps) {
  return (
    <div className={`bg-card border border-border rounded-lg overflow-hidden shadow-brand ${className}`}>
      <div className="aspect-video w-full bg-surface relative overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Office Location"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=40.7128,-74.0060&z=14&output=embed"
          className="absolute inset-0"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-headline font-semibold text-foreground mb-4">
          Based in New York City
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Icon name="MapPinIcon" size={20} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-foreground">Location</p>
              <p className="text-sm text-text-secondary">New York, NY, United States</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Icon name="ClockIcon" size={20} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-foreground">Working Hours</p>
              <p className="text-sm text-text-secondary">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p className="text-sm text-text-secondary">Weekend: By appointment</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Icon name="GlobeAltIcon" size={20} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-foreground">Remote Collaboration</p>
              <p className="text-sm text-text-secondary">
                Available for remote projects worldwide with flexible timezone accommodation
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-text-secondary">
            While I'm based in NYC, I work with clients globally and am experienced in remote collaboration using modern communication tools.
          </p>
        </div>
      </div>
    </div>
  );
}