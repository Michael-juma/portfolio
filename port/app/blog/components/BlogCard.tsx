import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: number;
  publishDate: string;
  image: string;
  imageAlt: string;
  author: {
    name: string;
    avatar: string;
    avatarAlt: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  category,
  tags,
  readTime,
  publishDate,
  image,
  imageAlt,
  author,
}) => {
  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-brand-lg transition-smooth group">
      <Link href={`/blog/${id}`} className="block">
        <div className="relative h-48 overflow-hidden bg-muted">
          <AppImage
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-4 text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="CalendarIcon" size={14} />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="ClockIcon" size={14} />
            <span>{readTime} min read</span>
          </div>
        </div>

        <Link href={`/blog/${id}`} className="block group/title">
          <h3 className="text-xl font-headline font-semibold text-foreground group-hover/title:text-primary transition-smooth line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-text-secondary line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
              <AppImage
                src={author.avatar}
                alt={author.avatarAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground">{author.name}</span>
          </div>

          <Link
            href={`/blog/${id}`}
            className="flex items-center space-x-1 text-sm font-medium text-primary hover:text-primary/80 transition-fast"
          >
            <span>Read More</span>
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;