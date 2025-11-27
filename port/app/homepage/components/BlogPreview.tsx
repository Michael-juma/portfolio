import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  category: string;
  readTime: string;
  date: string;
  link: string;
}

interface BlogPreviewProps {
  className?: string;
}

const BlogPreview = ({ className = '' }: BlogPreviewProps) => {
  const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable React Applications with Next.js 14',
    excerpt: 'Explore the latest features in Next.js 14 and learn how to build production-ready applications with Server Components and improved performance.',
    image: "https://images.unsplash.com/photo-1725800066480-7ccf189e9513",
    alt: 'Developer working on laptop with code editor showing React and Next.js code on screen',
    category: 'Web Development',
    readTime: '8 min read',
    date: 'Nov 15, 2025',
    link: '/blog'
  },
  {
    id: 2,
    title: 'Python Best Practices for Backend Development',
    excerpt: 'Deep dive into Python design patterns, performance optimization, and architectural decisions that make your backend robust and maintainable.',
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    alt: 'Close-up of Python code on dark theme IDE with colorful syntax highlighting',
    category: 'Backend',
    readTime: '10 min read',
    date: 'Nov 10, 2025',
    link: '/blog'
  },
  {
    id: 3,
    title: 'TypeScript Tips for Better Code Quality',
    excerpt: 'Advanced TypeScript techniques that will help you write more maintainable, type-safe code and catch bugs before they reach production.',
    image: "https://images.unsplash.com/photo-1663284436743-194d04333b8f",
    alt: 'TypeScript code snippet showing interface definitions and type annotations on monitor',
    category: 'Programming',
    readTime: '6 min read',
    date: 'Nov 5, 2025',
    link: '/blog'
  }];


  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <span className="text-primary font-accent text-sm">Latest Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
              From the Blog
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl">
              Technical insights, tutorials, and thoughts on modern web development
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden md:inline-flex items-center px-6 py-3 bg-surface text-foreground font-cta font-semibold text-sm rounded-lg border border-border hover:bg-muted transition-smooth">

            View All Posts
            <Icon name="ArrowRightIcon" size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) =>
          <Link
            key={post.id}
            href={post.link}
            className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-brand-lg transition-smooth">

              <div className="relative h-48 overflow-hidden bg-muted">
                <AppImage
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />

                <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground rounded-full">
                  <span className="text-xs font-medium">{post.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <Icon name="CalendarIcon" size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="ClockIcon" size={14} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-headline font-semibold text-card-foreground mb-3 group-hover:text-primary transition-fast line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-text-secondary mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-smooth">
                  Read More
                  <Icon name="ArrowRightIcon" size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-surface text-foreground font-cta font-semibold text-base rounded-lg border border-border hover:bg-muted transition-smooth">

            View All Posts
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>);

};

export default BlogPreview;