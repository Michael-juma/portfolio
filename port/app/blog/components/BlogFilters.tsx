'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface BlogFiltersProps {
  selectedCategory: string;
  selectedTag: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onTagChange: (tag: string) => void;
  onSearchChange: (query: string) => void;
  categories: Array<{ id: string; label: string; count: number }>;
  tags: string[];
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  selectedCategory,
  selectedTag,
  searchQuery,
  onCategoryChange,
  onTagChange,
  onSearchChange,
  categories,
  tags,
}) => {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 space-y-6">
      <div>
        <div className="relative">
          <Icon 
            name="MagnifyingGlassIcon" 
            size={20} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
          />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
          <Icon name="FolderIcon" size={16} />
          <span>Categories</span>
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-smooth ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'text-text-secondary hover:bg-muted hover:text-foreground'
              }`}
            >
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-primary-foreground/20'
                  : 'bg-muted'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
          <Icon name="TagIcon" size={16} />
          <span>Popular Tags</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagChange(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-smooth ${
                selectedTag === tag
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <button
          onClick={() => {
            onCategoryChange('all');
            onTagChange('');
            onSearchChange('');
          }}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted rounded-md transition-smooth"
        >
          <Icon name="ArrowPathIcon" size={16} />
          <span>Reset Filters</span>
        </button>
      </div>
    </div>
  );
};

export default BlogFilters;