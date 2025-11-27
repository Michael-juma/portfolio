import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  description: string;
  value: string;
  action: string;
  href: string;
  primary?: boolean;
  gradient?: string;
}

interface ContactMethodsProps {
  className?: string;
}

export default function ContactMethods({ className = '' }: ContactMethodsProps) {
  const contactMethods: ContactMethod[] = [
    {
      id: '1',
      icon: 'EnvelopeIcon',
      title: 'Email',
      description: 'Best for detailed project inquiries',
      value: 'hello@juma.dev',
      action: 'Send Email',
      href: 'mailto:hello@juma.dev',
      primary: true,
      gradient: 'from-red-500/20 to-rose-600/20'
    },
    {
      id: '2',
      icon: 'ChatBubbleLeftRightIcon',
      title: 'WhatsApp',
      description: 'Quick messages and instant responses',
      value: '+1 (555) 123-4567',
      action: 'Chat on WhatsApp',
      href: 'https://wa.me/15551234567',
      gradient: 'from-green-500/20 to-emerald-600/20'
    },
    {
      id: '3',
      icon: 'AtSymbolIcon',
      title: 'Twitter',
      description: 'Connect and discuss on social media',
      value: '@juma_dev',
      action: 'Follow on Twitter',
      href: 'https://twitter.com/juma_dev',
      gradient: 'from-sky-500/20 to-blue-600/20'
    },
    {
      id: '4',
      icon: 'UserGroupIcon',
      title: 'Facebook',
      description: 'Join the community and stay updated',
      value: 'juma.dev',
      action: 'Visit Facebook Page',
      href: 'https://facebook.com/juma.dev',
      gradient: 'from-blue-600/20 to-indigo-700/20'
    },
    {
      id: '5',
      icon: 'CodeBracketIcon',
      title: 'GitHub',
      description: 'Open source collaboration and code reviews',
      value: 'github.com/juma-dev',
      action: 'View Profile',
      href: 'https://github.com/juma-dev',
      gradient: 'from-slate-700/20 to-slate-900/20'
    }
  ];

  return (
    <div className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-headline font-bold text-foreground mb-4">
          Multiple Ways to Connect
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Choose your preferred communication channel. I'm responsive across all platforms with 24-hour turnaround.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactMethods.map((method) => (
          <a
            key={method.id}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : undefined}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`group bg-gradient-to-br ${method.gradient || 'from-card to-surface'} border-2 rounded-xl p-6 hover:shadow-brand-lg hover:scale-105 transition-smooth ${
              method.primary ? 'border-primary shadow-brand' : 'border-border'
            }`}
          >
            <div className="flex flex-col gap-4">
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                method.primary 
                  ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground' 
                  : 'bg-gradient-to-br from-surface to-card text-primary'
              }`}>
                <Icon name={method.icon as any} size={28} className="group-hover:scale-110 transition-transform" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-headline font-bold text-foreground group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  {method.primary && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                      PRIMARY
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                  {method.description}
                </p>
                <p className="text-sm font-semibold text-foreground mb-4 truncate bg-surface/50 px-3 py-2 rounded-lg">
                  {method.value}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-primary group-hover:text-accent transition-colors">
                    {method.action}
                  </span>
                  <Icon 
                    name="ArrowRightIcon" 
                    size={18} 
                    className="text-primary group-hover:translate-x-2 group-hover:text-accent transition-smooth" 
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/20 rounded-xl shadow-brand">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
              <Icon name="ClockIcon" size={24} className="text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-lg font-headline font-bold text-foreground">
                24-Hour Response Time
              </p>
              <p className="text-sm text-text-secondary">
                All inquiries answered within one business day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}