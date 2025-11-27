'use client';

import React, { useState, useEffect } from 'react';
import BlogFilters from './BlogFilters';
import BlogCard from './BlogCard';
import FeaturedPost from './FeaturedPost';
import NewsletterCTA from './NewsletterCTA';
import Icon from '@/components/ui/AppIcon';

interface BlogPost {
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
  isFeatured?: boolean;
}

const BlogInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories = [
  { id: 'all', label: 'All Articles', count: 42 },
  { id: 'tutorials', label: 'Tutorials', count: 18 },
  { id: 'case-studies', label: 'Case Studies', count: 8 },
  { id: 'best-practices', label: 'Best Practices', count: 12 },
  { id: 'industry-insights', label: 'Industry Insights', count: 4 }];


  const allTags = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'Node.js',
  'Performance',
  'Architecture',
  'Testing',
  'DevOps',
  'UI/UX'];


  const blogPosts: BlogPost[] = [
  {
    id: 'optimizing-nextjs-performance',
    title: 'Optimizing Next.js 14 App Router Performance: A Complete Guide',
    excerpt: 'Deep dive into performance optimization techniques for Next.js 14 App Router, including Server Components, streaming, and caching strategies that reduced our load times by 60%.',
    category: 'Tutorials',
    tags: ['Next.js', 'Performance', 'React'],
    readTime: 12,
    publishDate: 'Nov 20, 2025',
    image: "https://images.unsplash.com/photo-1629543371294-68ada742c5fd",
    imageAlt: 'Modern laptop displaying colorful code editor with Next.js project on dark desk with coffee mug',
    author: {
      name: 'Juma Dev',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_107fbb372-1763299253295.png",
      avatarAlt: 'Professional headshot of software engineer with glasses in casual blue shirt'
    },
    isFeatured: true
  },
  {
    id: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for Scalable React Applications',
    excerpt: 'Explore advanced TypeScript patterns including discriminated unions, conditional types, and utility types that make your React codebase more maintainable and type-safe.',
    category: 'Best Practices',
    tags: ['TypeScript', 'React', 'Architecture'],
    readTime: 10,
    publishDate: 'Nov 15, 2025',
    image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c",
    imageAlt: 'Close-up of TypeScript code on monitor showing interface definitions and type annotations',
    author: {
      name: 'Juma Dev',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_107fbb372-1763299253295.png",
      avatarAlt: 'Professional headshot of software engineer with glasses in casual blue shirt'
    }
  },
  {
    id: 'python-async-patterns',
    title: 'Mastering Async Python: From Basics to Production-Ready Patterns',
    excerpt: 'Complete guide to asynchronous programming in Python, covering asyncio, concurrent.futures, and real-world patterns for building high-performance backend services.',
    category: 'Tutorials',
    tags: ['Python', 'Performance', 'Architecture'],
    readTime: 15,
    publishDate: 'Nov 10, 2025',
    image: "https://images.unsplash.com/photo-1727805903400-99ee11b5bb87",
    imageAlt: 'Python code displayed on ultrawide monitor showing async function definitions in dark theme',
    author: {
      name: 'Juma Dev',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_107fbb372-1763299253295.png",
      avatarAlt: 'Professional headshot of software engineer with glasses in casual blue shirt'
    }
  },
  {
    id: 'building-design-system',
    title: 'Building a Production-Ready Design System with React and Tailwind',
    excerpt: 'Step-by-step guide to creating a scalable design system using React components and Tailwind CSS, including component architecture, theming, and documentation strategies.',
    category: 'Case Studies',
    tags: ['React', 'UI/UX', 'Architecture'],
    readTime: 18,
    publishDate: 'Nov 5, 2025',
    image: "https://images.unsplash.com/photo-1710787554730-1b416f226a21",
    imageAlt: 'Designer workspace with color palette swatches, component sketches, and laptop showing design system',
    author: {
      name: 'Juma Dev',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_107fbb372-1763299253295.png",
      avatarAlt: 'Professional headshot of software engineer with glasses in casual blue shirt'
    }
  },
  {
    id: 'testing-strategies-react',
    title: 'Comprehensive Testing Strategies for React Applications',
    excerpt: 'Learn effective testing approaches for React apps using Jest, React Testing Library, and Playwright, with practical examples and best practices from real projects.',
    category: 'Best Practices',
    tags: ['React', 'Testing', 'TypeScript'],
    readTime: 14,
    publishDate: 'Oct 28, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11571c10a-1764231355402.png",
    imageAlt: 'Terminal window showing green passing test results with code coverage statistics',
    author: {
      name: 'Juma Dev',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_107fbb372-1763299253295.png",
      avatarAlt: 'Professional headshot of software engineer with glasses in casual blue shirt'
    }
  },
  {
    id: 'microservices-nodejs',
    title: 'Building Scalable Microservices with Node.js and Docker',
    excerpt: 'Practical guide to designing and deploying microservices architecture using Node.js, Docker, and Kubernetes, with lessons learned from production deployments.',
    category: 'Tutorials',
    tags: ['Node.js', 'DevOps', 'Architecture'],
    readTime: 20,
    publishDate: 'Oct 22, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16714da79-1764231355680.png",
    imageAlt: 'Network diagram showing interconnected microservices architecture with Docker containers',
    author: {
      name: 'Juma Dev',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_107fbb372-1763299253295.png",
      avatarAlt: 'Professional headshot of software engineer with glasses in casual blue shirt'
    }
  },
  {
    id: 'web-accessibility-guide',
    title: 'Web Accessibility: Beyond WCAG Compliance',
    excerpt: 'Comprehensive guide to building truly accessible web applications, covering ARIA patterns, keyboard navigation, screen reader optimization, and inclusive design principles.',
    category: 'Best Practices',
    tags: ['UI/UX', 'React', 'Best Practices'],
    readTime: 11,
    publishDate: 'Oct 15, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_196084dec-1764231358256.png",
    imageAlt: 'Person using assistive technology with screen reader to navigate website on computer',
    author: {
      name: 'Juma Dev',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_107fbb372-1763299253295.png",
      avatarAlt: 'Professional headshot of software engineer with glasses in casual blue shirt'
    }
  },
  {
    id: 'state-management-2025',
    title: 'State Management in 2025: Choosing the Right Solution',
    excerpt: 'Comparative analysis of modern state management solutions including Zustand, Jotai, Redux Toolkit, and React Server Components, with decision frameworks for your project.',
    category: 'Industry Insights',
    tags: ['React', 'Architecture', 'Best Practices'],
    readTime: 13,
    publishDate: 'Oct 8, 2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_158048893-1764231357089.png",
    imageAlt: 'Flowchart diagram showing state management data flow patterns on whiteboard',
    author: {
      name: 'Juma Dev',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_107fbb372-1763299253295.png",
      avatarAlt: 'Professional headshot of software engineer with glasses in casual blue shirt'
    }
  }];


  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch = !searchQuery ||
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesTag && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.isFeatured);
  const regularPosts = filteredPosts.filter((post) => !post.isFeatured);

  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = regularPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isHydrated) {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-surface border border-border rounded-lg p-6 h-96 animate-pulse" />
          </div>
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-card border border-border rounded-lg h-96 animate-pulse" />
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) =>
              <div key={i} className="bg-card border border-border rounded-lg h-96 animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <BlogFilters
              selectedCategory={selectedCategory}
              selectedTag={selectedTag}
              searchQuery={searchQuery}
              onCategoryChange={setSelectedCategory}
              onTagChange={setSelectedTag}
              onSearchChange={setSearchQuery}
              categories={categories}
              tags={allTags} />

          </div>
        </aside>

        <main className="lg:col-span-3 space-y-12">
          {featuredPost && selectedCategory === 'all' && !searchQuery && !selectedTag &&
          <section>
              <FeaturedPost {...featuredPost} />
            </section>
          }

          <section>
            {filteredPosts.length === 0 ?
            <div className="text-center py-16">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DocumentTextIcon" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-text-secondary mb-6">Try adjusting your filters or search query</p>
                <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedTag('');
                  setSearchQuery('');
                }}
                className="px-6 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:scale-105 transition-smooth">

                  Reset Filters
                </button>
              </div> :

            <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-headline font-bold text-foreground">
                    {selectedCategory === 'all' ? 'Latest Articles' : categories.find((c) => c.id === selectedCategory)?.label}
                  </h2>
                  <span className="text-sm text-text-secondary">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {paginatedPosts.map((post) =>
                <BlogCard key={post.id} {...post} />
                )}
                </div>

                {totalPages > 1 &&
              <div className="flex items-center justify-center space-x-2">
                    <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 border border-border rounded-md hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed transition-fast">

                      <Icon name="ChevronLeftIcon" size={20} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-fast ${
                  currentPage === page ?
                  'bg-primary text-primary-foreground' :
                  'border border-border hover:bg-surface text-text-secondary'}`
                  }>

                        {page}
                      </button>
                )}

                    <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-border rounded-md hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed transition-fast">

                      <Icon name="ChevronRightIcon" size={20} />
                    </button>
                  </div>
              }
              </>
            }
          </section>

          <section>
            <NewsletterCTA />
          </section>
        </main>
      </div>
    </div>);

};

export default BlogInteractive;