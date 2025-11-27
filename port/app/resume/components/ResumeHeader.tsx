'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ResumeHeaderProps {
  onDownload: (format: 'pdf' | 'word' | 'txt') => void;
}

export default function ResumeHeader({ onDownload }: ResumeHeaderProps) {
  const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);

  const downloadFormats = [
    { format: 'pdf' as const, label: 'PDF Format', icon: 'DocumentArrowDownIcon' },
    { format: 'word' as const, label: 'Word Document', icon: 'DocumentTextIcon' },
    { format: 'txt' as const, label: 'Plain Text (ATS)', icon: 'DocumentIcon' },
  ];

  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-headline font-bold text-foreground mb-2">
              Professional Resume
            </h1>
            <p className="text-lg text-text-secondary">
              Fullstack Software Engineer | React & Python Specialist
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDownloadMenuOpen(!isDownloadMenuOpen)}
              className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 shadow-brand transition-smooth"
            >
              <Icon name="ArrowDownTrayIcon" size={20} />
              <span>Download Resume</span>
              <Icon 
                name="ChevronDownIcon" 
                size={16} 
                className={`transition-transform ${isDownloadMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isDownloadMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsDownloadMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-brand-lg z-50">
                  <div className="py-2">
                    {downloadFormats.map((item) => (
                      <button
                        key={item.format}
                        onClick={() => {
                          onDownload(item.format);
                          setIsDownloadMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-popover-foreground hover:bg-surface transition-fast"
                      >
                        <Icon name={item.icon} size={20} className="text-primary" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}