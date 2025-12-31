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
      value: 'obudho200@gmail.com',
      action: 'Send Email',
      href: 'mailto:obudho200@gmail.com',
      primary: true,
      gradient: 'from-red-500/20 to-rose-600/20'
    },
    {
      id: '2',
      icon: 'ChatBubbleLeftRightIcon',
      title: 'WhatsApp',
      description: 'Quick messages and instant responses',
      value: '+254725745754',
      action: 'Chat on WhatsApp',
      href: 'https://wa.me/254725745754',
      gradient: 'from-green-500/20 to-emerald-600/20'
    },
    {
      id: '3',
      icon: 'AtSymbolIcon',
      title: 'Twitter',
      description: 'Connect and discuss on social media',
      value: '@MichaelJum96316',
      action: 'Follow on X',
      href: 'https://x.com/MichaelJum96316',
      gradient: 'from-sky-500/20 to-blue-600/20'
    },
    {
      id: '4',
      icon: 'UserGroupIcon',
      title: 'Facebook',
      description: 'Join the community and stay updated',
      value: 'Michael Juma',
      action: 'Visit Facebook Page',
      href: 'https://www.facebook.com/profile.php?id=100090904490870',
      gradient: 'from-blue-600/20 to-indigo-700/20'
    },
    {
      id: '5',
      icon: 'CodeBracketIcon',
      title: 'GitHub',
      description: 'Open source collaboration and code reviews',
      value: 'github.com/Michael-juma',
      action: 'View Profile',
      href: 'https://github.com/Michael-juma',
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
            className={`group block bg-card border rounded-2xl p-6 hover:shadow-brand-lg hover:-translate-y-1 transform transition ease-out duration-200 focus:outline-none focus:ring-2 focus:ring-ring ${
              method.primary ? 'border-primary' : 'border-border'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold shadow-sm ${
                method.primary ? 'bg-primary text-primary-foreground' : 'bg-surface text-foreground'
              }`}>
                <Icon name={method.icon as any} size={22} className="" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-headline font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {method.title}
                  </h3>
                  {method.primary && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                      PRIMARY
                    </span>
                  )}
                </div>

                <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                  {method.description}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-mono text-foreground bg-muted/10 px-3 py-2 rounded-md truncate">
                    {method.value}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      {method.action}
                    </span>
                    <div className="p-2 bg-surface rounded-md text-primary group-hover:bg-primary/10 transition">
                      <Icon 
                        name="ArrowRightIcon" 
                        size={16} 
                        className="text-primary group-hover:text-accent transition-transform" 
                      />
                    </div>
                  </div>
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