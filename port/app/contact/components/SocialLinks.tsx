import Icon from '@/components/ui/AppIcon';

interface SocialLink {
  id: string;
  name: string;
  icon: string;
  href: string;
  username: string;
  color: string;
  bgGradient: string;
}

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  const socialLinks: SocialLink[] = [
    {
      id: '1',
      name: 'GitHub',
      icon: 'CodeBracketIcon',
      href: 'https://github.com/Michael-juma',
      username: 'Michael-juma',
      color: 'hover:text-white',
      bgGradient: 'hover:bg-gradient-to-br hover:from-slate-900 hover:to-slate-700'
    },
    {
      id: '2',
      name: 'LinkedIn',
      icon: 'LinkIcon',
      href: 'https://www.linkedin.com/in/michael-juma-obudho-497190364/',
      username: 'Michael Juma Obudho',
      color: 'hover:text-white',
      bgGradient: 'hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500'
    },
    {
      id: '3',
      name: 'X',
      icon: 'AtSymbolIcon',
      href: 'https://x.com/MichaelJum96316',
      username: '@MichaelJum96316',
      color: 'hover:text-white',
      bgGradient: 'hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600'
    },
    {
      id: '4',
      name: 'Facebook',
      icon: 'UserGroupIcon',
      href: 'https://www.facebook.com/profile.php?id=100090904490870',
      username: 'Michael Juma',
      color: 'hover:text-white',
      bgGradient: 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-700'
    },
    {
      id: '5',
      name: 'WhatsApp',
      icon: 'ChatBubbleLeftRightIcon',
      href: 'https://wa.me/254725745754',
      username: '+254725745754',
      color: 'hover:text-white',
      bgGradient: 'hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600'
    },
    {
      id: '6',
      name: 'Email',
      icon: 'EnvelopeIcon',
      href: 'mailto:obudho200@gmail.com',
      username: 'obudho200@gmail.com',
      color: 'hover:text-white',
      bgGradient: 'hover:bg-gradient-to-br hover:from-red-500 hover:to-rose-600'
    }
  ];

  return (
    <div className={className}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
          Connect With Me
        </h3>
        <p className="text-base text-text-secondary max-w-2xl mx-auto">
          Choose your preferred platform to get in touch. I'm active and responsive on all channels.
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-gradient-to-br from-card to-surface border-2 border-border rounded-xl p-6 text-center hover:shadow-brand-lg hover:scale-105 transition-smooth ${link.bgGradient} ${link.color}`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-surface to-card rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors shadow-lg">
                <Icon name={link.icon as any} size={28} className="text-primary group-hover:text-current transition-colors" />
              </div>
              <div>
                <p className="font-headline font-bold text-foreground group-hover:text-current text-base mb-1">
                  {link.name}
                </p>
                <p className="text-xs text-text-secondary group-hover:text-current/90 font-medium break-all px-1">
                  {link.username}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-lg">
          <Icon name="CheckBadgeIcon" size={20} className="text-primary" />
          <p className="text-sm font-medium text-foreground">
            All platforms verified and actively monitored
          </p>
        </div>
      </div>
    </div>
  );
}