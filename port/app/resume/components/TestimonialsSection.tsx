'use client';

import { useState, useEffect } from 'react';
import ResumeHeader from './ResumeHeader';
import ContactInfo from './ContactInfo';
import ProfessionalSummary from './ProfessionalSummary';
import ExperienceTimeline from './ExperienceTimeline';
import EducationSection from './EducationSection';
import SkillsMatrix from './SkillsMatrix';
import ProjectHighlights from './ProjectHighlights';
import AvailabilityStatus from './AvailabilityStatus';

/* =======================
   Types
======================= */

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  relevantCourses: string[];
}

interface Skill {
  category: string;
  skills: {
    name: string;
    level: number;
    years: number;
  }[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  impact: string;
  technologies: string[];
}

/* =======================
   Component
======================= */

export default function ResumeInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  /* =======================
     CONTACT INFORMATION
  ======================= */

  const contactInfo: ContactItem[] = [
    {
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'obudho200@gmail.com',
      link: 'mailto:obudho200@gmail.com'
    },
    {
      icon: 'PhoneIcon',
      label: 'Phone',
      value: '+254 725 745 754',
      link: 'tel:+254725745754'
    },
    {
      icon: 'MapPinIcon',
      label: 'Location',
      value: 'Nairobi, Kenya'
    },
    {
      icon: 'CodeBracketIcon',
      label: 'GitHub',
      value: 'github.com/Michael-juma',
      link: 'https://github.com/Michael-juma'
    },
    {
      icon: 'UserGroupIcon',
      label: 'LinkedIn',
      value: 'linkedin.com/in/michael-juma-obudho-497190364',
      link: 'https://www.linkedin.com/in/michael-juma-obudho-497190364/'
    }
  ];

  /* =======================
     PROFESSIONAL SUMMARY
  ======================= */

  const professionalSummary = {
    summary:
      'Full-Stack Software Engineer trained at Moringa School with hands-on experience building modern web applications using React, Flask, and PostgreSQL. Focused on clean architecture, RESTful APIs, and user-centered design. Experienced in delivering end-to-end projects including authentication, dashboards, and data-driven systems.',
    highlights: [
      'Built multiple full-stack applications using React and Flask',
      'Designed RESTful APIs with SQLAlchemy and PostgreSQL',
      'Implemented authentication and role-based access control',
      'Strong understanding of CRUD operations and relational databases',
      'Collaborated on team projects using Git and GitHub'
    ]
  };

  /* =======================
     EXPERIENCE
  ======================= */

  const experiences: Experience[] = [
    {
      id: 1,
      company: 'Moringa School',
      position: 'Full-Stack Software Engineering Trainee',
      duration: '2025 – 2026',
      location: 'Nairobi, Kenya',
      type: 'Training & Projects',
      responsibilities: [
        'Developed full-stack web applications using React and Flask',
        'Built RESTful APIs following MVC architecture',
        'Implemented authentication and authorization using JWT',
        'Designed relational databases with SQLAlchemy',
        'Worked in Agile teams using GitHub for version control'
      ],
      achievements: [
        'Completed multiple production-ready full-stack projects',
        'Built secure CRUD applications from scratch',
        'Applied clean code and REST best practices',
        'Collaborated successfully in team-based projects'
      ],
      technologies: [
        'React',
        'JavaScript',
        'Python',
        'Flask',
        'SQLAlchemy',
        'PostgreSQL',
        'HTML',
        'CSS',
        'Git'
      ]
    }
  ];

  /* =======================
     EDUCATION
  ======================= */

  const education: Education[] = [
    {
      id: 1,
      degree: 'Certificate in Software Engineering',
      institution: 'Moringa School',
      duration: '2025 – 2026',
      location: 'Ngong Road, Nairobi, Kenya',
      relevantCourses: [
        'JavaScript & React Development',
        'Python & Flask APIs',
        'SQLAlchemy & PostgreSQL',
        'Data Structures & Algorithms',
        'Software Engineering Principles',
        'Agile Development'
      ]
    }
  ];

  /* =======================
     SKILLS
  ======================= */

  const skillCategories: Skill[] = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90, years: 1 },
        { name: 'JavaScript (ES6+)', level: 90, years: 1 },
        { name: 'HTML5 & CSS3', level: 90, years: 1 },
        { name: 'Tailwind CSS', level: 85, years: 1 }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Python', level: 85, years: 1 },
        { name: 'Flask', level: 85, years: 1 },
        { name: 'SQLAlchemy', level: 80, years: 1 },
        { name: 'RESTful APIs', level: 85, years: 1 }
      ]
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'PostgreSQL', level: 80, years: 1 },
        { name: 'SQLite', level: 80, years: 1 },
        { name: 'Git & GitHub', level: 90, years: 1 },
        { name: 'Agile / Scrum', level: 80, years: 1 }
      ]
    }
  ];

  /* =======================
     PROJECTS
  ======================= */

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'Food Court Web Application',
      description:
        'A full-stack food ordering platform allowing customers to browse menus, place orders, and restaurant owners to manage menus and orders.',
      role: 'Full-Stack Developer',
      impact:
        'Implemented role-based authentication and cart-based ordering system',
      technologies: ['React', 'Flask', 'PostgreSQL', 'JWT', 'SQLAlchemy']
    },
    {
      id: 2,
      title: 'Livestock Disease Management System',
      description:
        'A data-driven platform for researching livestock and fish diseases with symptoms, treatments, and prevention.',
      role: 'Full-Stack Developer',
      impact:
        'Designed relational models and built searchable disease records',
      technologies: ['React', 'Flask', 'SQLAlchemy', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'SalesPilot',
      description:
        'A sales management dashboard for tracking products, customers, and performance metrics.',
      role: 'Full-Stack Developer',
      impact:
        'Built REST APIs and interactive dashboards for data visualization',
      technologies: ['React', 'Flask', 'Python', 'PostgreSQL']
    }
  ];

  const handleDownload = (format: 'pdf' | 'word' | 'txt') => {
    alert(`Preparing ${format.toUpperCase()} resume for download...`);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading resume...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ResumeHeader onDownload={handleDownload} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProfessionalSummary
              summary={professionalSummary.summary}
              highlights={professionalSummary.highlights}
            />
            <ExperienceTimeline experiences={experiences} />
            <ProjectHighlights projects={featuredProjects} />
          </div>

          {/* 🔹 SIDEBAR WITH CONTACT INFO */}
          <div className="space-y-8">
            <AvailabilityStatus status="available" responseTime="24–48 hours" />
            <ContactInfo contacts={contactInfo} />
            <EducationSection education={education} />
          </div>
        </div>

        <div className="mt-8">
          <SkillsMatrix skillCategories={skillCategories} />
        </div>
      </div>
    </div>
  );
}
