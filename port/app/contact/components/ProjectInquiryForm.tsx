'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  newsletter: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  description?: string;
}

interface ProjectInquiryFormProps {
  className?: string;
}

export default function ProjectInquiryForm({ className = '' }: ProjectInquiryFormProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    newsletter: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projectTypes = [
    { value: '', label: 'Select project type' },
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'api', label: 'API Development' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '', label: 'Select budget range' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
    { value: 'flexible', label: 'Flexible / To be discussed' }
  ];

  const timelines = [
    { value: '', label: 'Select timeline' },
    { value: 'urgent', label: 'Urgent (1-2 weeks)' },
    { value: 'short', label: 'Short-term (1-2 months)' },
    { value: 'medium', label: 'Medium-term (3-6 months)' },
    { value: 'long', label: 'Long-term (6+ months)' },
    { value: 'ongoing', label: 'Ongoing partnership' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Please provide at least 50 characters describing your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: '',
      newsletter: false
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  if (!isHydrated) {
    return (
      <div className={`bg-card border border-border rounded-lg p-8 shadow-brand ${className}`}>
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-surface rounded w-3/4" />
          <div className="h-4 bg-surface rounded w-full" />
          <div className="space-y-4">
            <div className="h-12 bg-surface rounded" />
            <div className="h-12 bg-surface rounded" />
            <div className="h-32 bg-surface rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card border border-border rounded-lg p-8 shadow-brand ${className}`}>
      <div className="mb-8">
        <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
          Start Your Project
        </h2>
        <p className="text-text-secondary">
          Fill out the form below and I'll get back to you within 24 hours with next steps.
        </p>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-start gap-3">
          <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-success mb-1">Message Sent Successfully!</h3>
            <p className="text-sm text-success/80">
              Thank you for reaching out. I'll review your inquiry and respond within 24 hours.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name <span className="text-error">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth ${
                errors.name ? 'border-error' : 'border-input'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-error flex items-center gap-1">
                <Icon name="ExclamationCircleIcon" size={16} />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address <span className="text-error">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth ${
                errors.email ? 'border-error' : 'border-input'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error flex items-center gap-1">
                <Icon name="ExclamationCircleIcon" size={16} />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            placeholder="Your company name (optional)"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            >
              {projectTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            >
              {budgetRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            >
              {timelines.map(time => (
                <option key={time.value} value={time.value}>
                  {time.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
            Project Description <span className="text-error">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none ${
              errors.description ? 'border-error' : 'border-input'
            }`}
            placeholder="Tell me about your project, goals, and any specific requirements..."
          />
          <div className="mt-1 flex items-center justify-between">
            {errors.description ? (
              <p className="text-sm text-error flex items-center gap-1">
                <Icon name="ExclamationCircleIcon" size={16} />
                {errors.description}
              </p>
            ) : (
              <p className="text-sm text-text-secondary">
                Minimum 50 characters
              </p>
            )}
            <p className="text-sm text-text-secondary">
              {formData.description.length} characters
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-primary border-input rounded focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="newsletter" className="text-sm text-text-secondary">
            Subscribe to my newsletter for technical insights, tutorials, and project updates
          </label>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-4 bg-conversion text-conversion-foreground font-cta font-semibold rounded-lg hover:scale-105 hover:shadow-brand-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Inquiry</span>
                <Icon name="PaperAirplaneIcon" size={20} />
              </>
            )}
          </button>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-start gap-3 text-sm text-text-secondary">
            <Icon name="ShieldCheckIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
            <p>
              Your information is secure and will never be shared. I respect your privacy and will only use your contact details to respond to your inquiry.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}