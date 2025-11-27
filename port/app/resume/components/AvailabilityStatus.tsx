'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/dist/client/link';

interface AvailabilityStatusProps {
  status: 'available' | 'limited' | 'unavailable';
  nextAvailable?: string;
  responseTime: string;
}

export default function AvailabilityStatus({ 
  status, 
  nextAvailable, 
  responseTime 
}: AvailabilityStatusProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const statusConfig = {
    available: {
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success',
      icon: 'CheckCircleIcon' as const,
      label: 'Available for New Projects',
    },
    limited: {
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning',
      icon: 'ClockIcon' as const,
      label: 'Limited Availability',
    },
    unavailable: {
      color: 'text-error',
      bgColor: 'bg-error/10',
      borderColor: 'border-error',
      icon: 'XCircleIcon' as const,
      label: 'Currently Unavailable',
    },
  };

  const config = statusConfig[status];

  if (!isHydrated) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="h-24 bg-muted animate-pulse rounded" />
      </div>
    );
  }

  return (
    <div className={`bg-card border ${config.borderColor} rounded-lg p-6`}>
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 ${config.bgColor} rounded-lg flex items-center justify-center`}>
          <Icon name={config.icon} size={24} className={config.color} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-semibold ${config.color} mb-2`}>
            {config.label}
          </h3>
          
          {nextAvailable && status !== 'available' && (
            <p className="text-sm text-text-secondary mb-2">
              Next available: {nextAvailable}
            </p>
          )}
          
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="ClockIcon" size={16} />
            <span>Typical response time: {responseTime}</span>
          </div>
          
          {status === 'available' && (
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-conversion text-conversion-foreground font-semibold text-sm rounded-md hover:scale-105 shadow-brand transition-smooth"
              >
                <Icon name="EnvelopeIcon" size={16} />
                <span>Start a Conversation</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}