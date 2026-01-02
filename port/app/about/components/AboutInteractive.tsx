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
    description:
      "I'm a fullstack engineer who believes that great code is just the foundation—exceptional user experiences are what truly matter. With expertise in React, Next.js, and Python, I craft solutions that are both technically excellent and delightfully usable."
  };

  const storyData = {
    title: "My Journey into Software Development",
    paragraphs: [
      "My path to software engineering wasn't traditional, but it was intentional. What started as curiosity about how websites worked evolved into a passion for creating digital experiences that solve real problems. I taught myself to code through countless late nights, online courses, and building projects that pushed my limits.",
      "Over the years, I've had the privilege of working with startups, agencies, and established companies, each experience teaching me something valuable about collaboration, problem-solving, and the importance of writing maintainable code. I've learned that the best solutions come from truly understanding the problem before writing a single line of code.",
      "In 2025, I studied at Moringa School, Nairobi, where I refined my skills in fullstack development, focusing on React, Next.js, Python, and software engineering principles. This formal training, combined with my self-taught experience, shaped me into the versatile developer I am today."
    ],
    image:
      "https://i.pinimg.com/736x/57/8e/22/578e2232b053c12c0dfc74ef5c745a22.jpg",
    imageAlt:
      "Professional software developer working on laptop in modern office with dual monitors showing code"
  };

  const philosophies: Philosophy[] = [
    {
      icon: "CodeBracketIcon",
      title: "Code Quality Matters",
      description:
        "Clean, maintainable code isn't just about aesthetics—it's about respect for future developers and the longevity of the project. I write code that others can understand and build upon."
    },
    {
      icon: "UserGroupIcon",
      title: "User-Centered Development",
      description:
        "Technology should serve people, not the other way around. Every technical decision I make is filtered through the lens of user experience and real-world impact."
    },
    {
      icon: "LightBulbIcon",
      title: "Continuous Innovation",
      description:
        "The tech landscape evolves rapidly, and so should we. I stay current with industry trends while maintaining a critical eye for what truly adds value versus what's just hype."
    },
    {
      icon: "ShieldCheckIcon",
      title: "Reliability First",
      description:
        "Flashy features mean nothing if the foundation isn't solid. I prioritize performance, security, and stability in everything I build, ensuring solutions that stand the test of time."
    },
    {
      icon: "ChatBubbleLeftRightIcon",
      title: "Transparent Communication",
      description:
        "Great software is built through collaboration. I believe in clear, honest communication about challenges, timelines, and trade-offs—no technical jargon when plain English will do."
    },
    {
      icon: "AcademicCapIcon",
      title: "Teaching & Learning",
      description:
        "Knowledge grows when shared. I'm passionate about mentoring junior developers, contributing to open source, and learning from the broader developer community."
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: "#",
      title: "Senior Fullstack Engineer",
      company: "TechVision Solutions",
      description:
        "Leading development of enterprise-scale React applications with focus on performance optimization and team mentorship.",
      achievements: [
        "Architected microservices infrastructure serving 500K+ daily active users",
        "Reduced application load time by 60% through strategic code splitting and lazy loading",
        "Mentored team of 5 junior developers, establishing code review standards and best practices",
        "Implemented comprehensive testing strategy achieving 85% code coverage"
      ]
    },
    {
      year: "1",
      title: "Fullstack Developer",
      company: "Digital Innovations Inc",
      description:
        "Built and maintained multiple client-facing web applications using React, Next.js, and Python Django.",
      achievements: [
        "Developed 12+ production applications for diverse clients across healthcare, finance, and e-commerce",
        "Integrated third-party APIs and payment systems with 99.9% uptime",
        "Collaborated with design team to implement pixel-perfect, responsive interfaces",
        "Established CI/CD pipelines reducing deployment time from hours to minutes"
      ]
    },
    {
      year: "2",
      title: "Junior Developer",
      company: "StartupHub Technologies",
      description:
        "Contributed to frontend development and learned fullstack engineering fundamentals in fast-paced startup environment.",
      achievements: [
        "Built reusable React component library used across 5 internal products",
        "Participated in agile development process, completing 50+ sprint stories",
        "Learned Python backend development and database design principles",
        "Received 'Rising Star' award for exceptional growth and contribution"
      ]
    },
    {
      year: "3",
      title: "Self-Taught Developer Journey",
      company: "Independent Learning",
      description:
        "Intensive self-study period focused on mastering web development fundamentals and building portfolio projects.",
      achievements: [
        "Completed 15+ online courses covering HTML, CSS, JavaScript, React, and Python",
        "Built 20+ personal projects demonstrating various technical skills",
        "Contributed to 5 open-source projects on GitHub",
        "Earned certifications in React, Node.js, and Python development"
      ]
    }
  ];

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
    }
  ];

  const recognitions: Recognition[] = [
    {
      type: "Certification",
      title: "Professional Fullstack Development",
      issuer: "Moringa School",
      date: "2025",
      icon: "AcademicCapIcon",
      image: "https://i.pinimg.com/736x/8e/85/c3/8e85c3b1c3d2048157c5422ae092af6c.jpg",
      imageAlt: "Moringa School certificate for fullstack development"
    },
    {
      type: "Certification",
      title: "Soft Skills Excellence Performance Management",
      issuer: "Africa Management Institute",
      date: "2025",
      icon: "AcademicCapIcon",
      image: "https://i.pinimg.com/736x/22/de/c0/22dec0f76243bbee61ba2bb885678555.jpg",
      imageAlt: "Africa Management Institute certificate for soft skills excellence"
    },
    {
      type: "Certification",
      title: "Personal Productivity and Time Management",
      issuer: "Africa Management Institute",
      date: "2025",
      icon: "AcademicCapIcon",
      image: "https://i.pinimg.com/736x/2a/b0/c7/2ab0c7c2e1aacd264917168785941723.jpg",
      imageAlt: "Africa Management Institute certificate for communication and leadership"
    }
  ];

  const manifestoData = {
    title: "My Software Craftsmanship Manifesto",
    subtitle: "The principles that guide every project I undertake",
    points: [
      {
        title: "Code is Communication",
        description:
          "Every function, variable, and comment is a message to future developers. I write code that tells a story, making intentions clear and maintenance straightforward."
      },
      {
        title: "Users Come First, Always",
        description:
          "Technical elegance means nothing if users struggle. I prioritize accessibility, performance, and intuitive design in every decision, ensuring technology serves people effectively."
      },
      {
        title: "Simplicity is Sophistication",
        description:
          "The best solutions are often the simplest ones. I resist over-engineering, choosing straightforward approaches that solve problems without unnecessary complexity."
      },
      {
        title: "Testing is Not Optional",
        description:
          "Confidence in code comes from comprehensive testing. I write tests not as an afterthought, but as an integral part of development that enables fearless refactoring."
      },
      {
        title: "Continuous Improvement is a Mindset",
        description:
          "Every project is an opportunity to learn and grow. I actively seek feedback, embrace constructive criticism, and constantly refine my skills and approaches."
      },
      {
        title: "Collaboration Amplifies Impact",
        description:
          "Great software is rarely built in isolation. I value diverse perspectives, clear communication, and the collective intelligence of teams working toward shared goals."
      }
    ]
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-96 bg-gradient-to-br from-primary/5 via-accent/5 to-background animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
          <div className="h-64 bg-surface rounded-xl animate-pulse" />
          <div className="h-96 bg-surface rounded-xl animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection {...heroData} />
      <StorySection story={storyData} />
      <PhilosophySection philosophies={philosophies} />
      <TimelineSection events={timelineEvents} />
      <ValuesSection values={values} />
      <RecognitionSection recognitions={recognitions} />
      <ManifestoSection manifesto={manifestoData} />
      <CTASection />
    </>
  );
}
