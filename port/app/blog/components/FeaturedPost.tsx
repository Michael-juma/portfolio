import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FeaturedPostProps {
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

const FeaturedPost: React.FC<FeaturedPostProps> = ({
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
    <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-brand-lg transition-smooth">
      <div className="grid lg:grid-cols-2 gap-0">
        <Link href={`/blog/${id}`} className="block relative h-64 lg:h-full overflow-hidden bg-muted group">
          <AppImage
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-warning text-warning-foreground rounded-full">
              <Icon name="StarIcon" size={14} variant="solid" />
              <span className="text-xs font-semibold">Featured</span>
            </div>
          </div>
        </Link>

        <div className="p-8 lg:p-10 flex flex-col justify-center space-y-6">
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              {category}
            </span>
            
            <Link href={`/blog/${id}`} className="block group/title">
              <h2 className="text-2xl lg:text-3xl font-headline font-bold text-foreground group-hover/title:text-primary transition-smooth mb-4">
                {title}
              </h2>
            </Link>

            <p className="text-base text-text-secondary leading-relaxed line-clamp-4">
              {excerpt}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                <AppImage
                  src={author.avatar}
                  alt={author.avatarAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{author.name}</p>
                <div className="flex items-center space-x-3 text-xs text-text-secondary">
                  <span>{publishDate}</span>
                  <span>•</span>
                  <span>{readTime} min read</span>
                </div>
              </div>
            </div>

            <Link
              href={`/blog/${id}`}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:scale-105 transition-smooth"
            >
              <span>Read Article</span>
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;