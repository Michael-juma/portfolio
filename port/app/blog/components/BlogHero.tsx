import React from 'react';

interface BlogHeroProps {
  className?: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Technical Insights & Tutorials</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-bold text-foreground mb-6 leading-tight">
            Code, Learn, Share
          </h1>
          
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-8">
            Deep dives into modern web development, practical tutorials, and insights from building production-grade applications. Join me in exploring React, Next.js, Python, and the ever-evolving landscape of fullstack engineering.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">42</span>
              </div>
              <span>Articles Published</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-accent font-semibold">15K</span>
              </div>
              <span>Monthly Readers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <span className="text-success font-semibold">8</span>
              </div>
              <span>Tutorial Series</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;