'use client';

import { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import StorySection from './StorySection';
import PhilosophySection from './PhilosophySection';
import TimelineSection from './TimelineSection';
import ValuesSection from './ValuesSection';
import TestimonialsSection from './TestimonialsSection';
import RecognitionSection from './RecognitionSection';
import ManifestoSection from './ManifestoSection';
import CTASection from './CTASection';

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  imageAlt: string;
  quote: string;
  relationship: string;
}

interface Recognition {
  type: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  image?: string;
  imageAlt?: string;
}

interface Philosophy {
  icon: string;
  title: string;
  description: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface ManifestoPoint {
  title: string;
  description: string;
}

export default function AboutInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const heroData = {
    title: "Building Software That Makes a Difference",
    subtitle: "About Juma",
    description: "I'm a fullstack engineer who believes that great code is just the foundation—exceptional user experiences are what truly matter. With expertise in React, Next.js, and Python, I craft solutions that are both technically excellent and delightfully usable."
  };

  const storyData = {
    title: "My Journey into Software Development",
    paragraphs: [
    "My path to software engineering wasn't traditional, but it was intentional. What started as curiosity about how websites worked evolved into a passion for creating digital experiences that solve real problems. I taught myself to code through countless late nights, online courses, and building projects that pushed my limits.",
    "Over the years, I've had the privilege of working with startups, agencies, and established companies, each experience teaching me something valuable about collaboration, problem-solving, and the importance of writing maintainable code. I've learned that the best solutions come from truly understanding the problem before writing a single line of code.",
    "Today, I specialize in fullstack development with React and Python, but my real expertise lies in bridging the gap between technical possibilities and user needs. I believe in continuous learning, clean architecture, and building software that teams are proud to maintain and users love to use."],

    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b",
    imageAlt: "Professional software developer working on laptop in modern office with dual monitors showing code"
  };

  const philosophies: Philosophy[] = [
  {
    icon: "CodeBracketIcon",
    title: "Code Quality Matters",
    description: "Clean, maintainable code isn't just about aesthetics—it's about respect for future developers and the longevity of the project. I write code that others can understand and build upon."
  },
  {
    icon: "UserGroupIcon",
    title: "User-Centered Development",
    description: "Technology should serve people, not the other way around. Every technical decision I make is filtered through the lens of user experience and real-world impact."
  },
  {
    icon: "LightBulbIcon",
    title: "Continuous Innovation",
    description: "The tech landscape evolves rapidly, and so should we. I stay current with industry trends while maintaining a critical eye for what truly adds value versus what's just hype."
  },
  {
    icon: "ShieldCheckIcon",
    title: "Reliability First",
    description: "Flashy features mean nothing if the foundation isn't solid. I prioritize performance, security, and stability in everything I build, ensuring solutions that stand the test of time."
  },
  {
    icon: "ChatBubbleLeftRightIcon",
    title: "Transparent Communication",
    description: "Great software is built through collaboration. I believe in clear, honest communication about challenges, timelines, and trade-offs—no technical jargon when plain English will do."
  },
  {
    icon: "AcademicCapIcon",
    title: "Teaching & Learning",
    description: "Knowledge grows when shared. I'm passionate about mentoring junior developers, contributing to open source, and learning from the broader developer community."
  }];


  const timelineEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "Senior Fullstack Engineer",
    company: "TechVision Solutions",
    description: "Leading development of enterprise-scale React applications with focus on performance optimization and team mentorship.",
    achievements: [
    "Architected microservices infrastructure serving 500K+ daily active users",
    "Reduced application load time by 60% through strategic code splitting and lazy loading",
    "Mentored team of 5 junior developers, establishing code review standards and best practices",
    "Implemented comprehensive testing strategy achieving 85% code coverage"]

  },
  {
    year: "2023",
    title: "Fullstack Developer",
    company: "Digital Innovations Inc",
    description: "Built and maintained multiple client-facing web applications using React, Next.js, and Python Django.",
    achievements: [
    "Developed 12+ production applications for diverse clients across healthcare, finance, and e-commerce",
    "Integrated third-party APIs and payment systems with 99.9% uptime",
    "Collaborated with design team to implement pixel-perfect, responsive interfaces",
    "Established CI/CD pipelines reducing deployment time from hours to minutes"]

  },
  {
    year: "2021",
    title: "Junior Developer",
    company: "StartupHub Technologies",
    description: "Contributed to frontend development and learned fullstack engineering fundamentals in fast-paced startup environment.",
    achievements: [
    "Built reusable React component library used across 5 internal products",
    "Participated in agile development process, completing 50+ sprint stories",
    "Learned Python backend development and database design principles",
    "Received 'Rising Star' award for exceptional growth and contribution"]

  },
  {
    year: "2020",
    title: "Self-Taught Developer Journey",
    company: "Independent Learning",
    description: "Intensive self-study period focused on mastering web development fundamentals and building portfolio projects.",
    achievements: [
    "Completed 15+ online courses covering HTML, CSS, JavaScript, React, and Python",
    "Built 20+ personal projects demonstrating various technical skills",
    "Contributed to 5 open-source projects on GitHub",
    "Earned certifications in React, Node.js, and Python development"]

  }];


  const values: Value[] = [
  {
    icon: "BoltIcon",
    title: "Excellence",
    description: "Striving for the highest quality in every line of code and every user interaction"
  },
  {
    icon: "HeartIcon",
    title: "Empathy",
    description: "Understanding user needs and team dynamics to build better solutions together"
  },
  {
    icon: "SparklesIcon",
    title: "Innovation",
    description: "Embracing new technologies and approaches while respecting proven patterns"
  },
  {
    icon: "HandRaisedIcon",
    title: "Integrity",
    description: "Honest communication, ethical practices, and taking responsibility for outcomes"
  }];


  const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "TechVision Solutions",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffde516e-1763293580273.png",
    imageAlt: "Professional woman with brown hair in business attire smiling at camera in modern office",
    quote: "Working with Juma has been transformative for our team. His ability to translate complex technical concepts into clear solutions, combined with his genuine care for code quality, makes him an invaluable asset. He doesn't just build features—he builds systems that scale.",
    relationship: "Direct Manager"
  },
  {
    name: "Marcus Chen",
    role: "Senior Software Architect",
    company: "Digital Innovations Inc",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15d805f55-1763295574780.png",
    imageAlt: "Asian man with glasses in navy blazer smiling professionally in tech office environment",
    quote: "Juma's technical skills are impressive, but what sets him apart is his collaborative spirit. He actively seeks feedback, mentors junior developers, and always considers the broader impact of his work. The kind of engineer every team needs.",
    relationship: "Former Colleague"
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "StartupHub Technologies",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14d9c05ed-1763293709001.png",
    imageAlt: "Hispanic woman with long dark hair in casual professional attire smiling warmly in creative workspace",
    quote: "As a designer, I've worked with many developers, but Juma stands out for his attention to detail and commitment to user experience. He doesn't just implement designs—he improves them with thoughtful suggestions and technical insights.",
    relationship: "Cross-functional Partner"
  },
  {
    name: "David Thompson",
    role: "CTO",
    company: "GrowthTech Ventures",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a5ca983-1763300171126.png",
    imageAlt: "Caucasian man with short brown hair in dark suit smiling confidently in executive office setting",
    quote: "Juma delivered our MVP ahead of schedule and under budget, but more importantly, he built it right. The codebase is clean, well-documented, and has scaled beautifully as we've grown. He's the kind of developer you want on your founding team.",
    relationship: "Client"
  }];


  const recognitions: Recognition[] = [
  {
    type: "Certification",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "November 2024",
    icon: "CloudIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_197526070-1764231355157.png",
    imageAlt: "AWS certification badge with cloud computing icons on blue gradient background"
  },
  {
    type: "Certification",
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "August 2024",
    icon: "CodeBracketSquareIcon",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    imageAlt: "React logo with advanced code patterns on dark background with blue accents"
  },
  {
    type: "Achievement",
    title: "Open Source Contributor",
    issuer: "GitHub",
    date: "2020 - Present",
    icon: "StarIcon"
  },
  {
    type: "Speaking",
    title: "React Performance Optimization",
    issuer: "DevConf 2024",
    date: "June 2024",
    icon: "MicrophoneIcon",
    image: "https://images.unsplash.com/photo-1590674680695-8b9efe9b764d",
    imageAlt: "Conference speaker presenting to large audience with presentation slides visible on screen"
  },
  {
    type: "Publication",
    title: "Building Scalable React Apps",
    issuer: "Dev.to Featured Article",
    date: "March 2024",
    icon: "DocumentTextIcon"
  },
  {
    type: "Award",
    title: "Employee of the Quarter",
    issuer: "TechVision Solutions",
    date: "Q2 2024",
    icon: "TrophyIcon"
  }];


  const manifestoData = {
    title: "My Software Craftsmanship Manifesto",
    subtitle: "The principles that guide every project I undertake",
    points: [
    {
      title: "Code is Communication",
      description: "Every function, variable, and comment is a message to future developers. I write code that tells a story, making intentions clear and maintenance straightforward."
    },
    {
      title: "Users Come First, Always",
      description: "Technical elegance means nothing if users struggle. I prioritize accessibility, performance, and intuitive design in every decision, ensuring technology serves people effectively."
    },
    {
      title: "Simplicity is Sophistication",
      description: "The best solutions are often the simplest ones. I resist over-engineering, choosing straightforward approaches that solve problems without unnecessary complexity."
    },
    {
      title: "Testing is Not Optional",
      description: "Confidence in code comes from comprehensive testing. I write tests not as an afterthought, but as an integral part of development that enables fearless refactoring."
    },
    {
      title: "Continuous Improvement is a Mindset",
      description: "Every project is an opportunity to learn and grow. I actively seek feedback, embrace constructive criticism, and constantly refine my skills and approaches."
    },
    {
      title: "Collaboration Amplifies Impact",
      description: "Great software is rarely built in isolation. I value diverse perspectives, clear communication, and the collective intelligence of teams working toward shared goals."
    }]

  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-96 bg-gradient-to-br from-primary/5 via-accent/5 to-background animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
          <div className="h-64 bg-surface rounded-xl animate-pulse" />
          <div className="h-96 bg-surface rounded-xl animate-pulse" />
        </div>
      </div>);

  }

  return (
    <>
      <HeroSection {...heroData} />
      <StorySection story={storyData} />
      <PhilosophySection philosophies={philosophies} />
      <TimelineSection events={timelineEvents} />
      <ValuesSection values={values} />
      <TestimonialsSection testimonials={testimonials} />
      <RecognitionSection recognitions={recognitions} />
      <ManifestoSection manifesto={manifestoData} />
      <CTASection />
    </>);

}