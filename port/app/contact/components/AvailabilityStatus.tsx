import Icon from '@/components/ui/AppIcon';

interface AvailabilityStatusProps {
  className?: string;
}

export default function AvailabilityStatus({ className = '' }: AvailabilityStatusProps) {
  return (
    <div className={`bg-card border border-border rounded-lg p-6 shadow-brand ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
              <Icon name="CalendarDaysIcon" size={24} className="text-success" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card animate-pulse" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
            Currently Available
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            Accepting new projects starting December 2025. Limited spots available for Q1 2026.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Icon name="ClockIcon" size={16} className="text-text-secondary" />
              <span className="text-text-secondary">Typical response time: 12-24 hours</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Icon name="GlobeAltIcon" size={16} className="text-text-secondary" />
              <span className="text-text-secondary">Timezone: EST (UTC-5)</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Icon name="VideoCameraIcon" size={16} className="text-text-secondary" />
              <span className="text-text-secondary">Video consultations available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}