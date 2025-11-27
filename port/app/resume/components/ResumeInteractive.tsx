'use client';

import { useState, useEffect } from 'react';
import ResumeHeader from './ResumeHeader';
import ContactInfo from './ContactInfo';
import ProfessionalSummary from './ProfessionalSummary';
import ExperienceTimeline from './ExperienceTimeline';
import EducationSection from './EducationSection';
import SkillsMatrix from './SkillsMatrix';
import CertificationsSection from './CertificationsSection';
import TestimonialsSection from './TestimonialsSection';
import ProjectHighlights from './ProjectHighlights';
import AvailabilityStatus from './AvailabilityStatus';

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
  gpa?: string;
  honors?: string[];
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

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  logo: string;
  logoAlt: string;
  verifyLink?: string;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  relationship: string;
  testimonial: string;
  avatar: string;
  avatarAlt: string;
  linkedIn?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  impact: string;
  technologies: string[];
}

export default function ResumeInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const contactInfo: ContactItem[] = [
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'juma@jumadev.com',
    link: 'mailto:juma@jumadev.com'
  },
  {
    icon: 'PhoneIcon',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: 'MapPinIcon',
    label: 'Location',
    value: 'San Francisco, CA'
  },
  {
    icon: 'GlobeAltIcon',
    label: 'Website',
    value: 'www.juma.dev',
    link: 'https://www.juma.dev'
  },
  {
    icon: 'CodeBracketIcon',
    label: 'GitHub',
    value: 'github.com/jumadev',
    link: 'https://github.com/jumadev'
  },
  {
    icon: 'UserGroupIcon',
    label: 'LinkedIn',
    value: 'linkedin.com/in/jumadev',
    link: 'https://linkedin.com/in/jumadev'
  }];


  const professionalSummary = {
    summary: "Accomplished Fullstack Software Engineer with 8+ years of experience building scalable web applications and leading development teams. Specialized in React, Next.js, Python, and modern cloud architectures. Proven track record of delivering high-impact solutions that improve user experience and drive business growth. Passionate about clean code, performance optimization, and mentoring junior developers.",
    highlights: [
    "Led development of enterprise applications serving 500K+ active users",
    "Reduced application load times by 60% through performance optimization",
    "Architected microservices infrastructure handling 10M+ daily requests",
    "Mentored 15+ junior developers and conducted 100+ code reviews",
    "Contributed to 20+ open-source projects with 5K+ GitHub stars combined"]

  };

  const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Fullstack Engineer",
    duration: "Jan 2021 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    responsibilities: [
    "Lead development of customer-facing web applications using React, Next.js, and Python",
    "Design and implement RESTful APIs and GraphQL endpoints for mobile and web clients",
    "Collaborate with product managers and designers to translate requirements into technical solutions",
    "Mentor junior developers and conduct code reviews to maintain code quality standards",
    "Optimize application performance and implement monitoring solutions"],

    achievements: [
    "Reduced page load times by 60% through code splitting and lazy loading strategies",
    "Implemented CI/CD pipeline that decreased deployment time from 2 hours to 15 minutes",
    "Led migration from monolithic architecture to microservices, improving scalability by 300%",
    "Increased test coverage from 45% to 85% by implementing comprehensive testing strategy"],

    technologies: ["React", "Next.js", "TypeScript", "Python", "Django", "PostgreSQL", "AWS", "Docker", "Kubernetes"]
  },
  {
    id: 2,
    company: "StartupHub Inc",
    position: "Fullstack Developer",
    duration: "Mar 2018 - Dec 2020",
    location: "Remote",
    type: "Full-time",
    responsibilities: [
    "Developed and maintained multiple client projects using React and Node.js",
    "Built responsive web applications with focus on mobile-first design",
    "Integrated third-party APIs and payment processing systems",
    "Participated in agile development process with daily standups and sprint planning",
    "Provided technical support and bug fixes for production applications"],

    achievements: [
    "Delivered 12+ client projects on time and within budget",
    "Improved application security by implementing OAuth 2.0 and JWT authentication",
    "Reduced server costs by 40% through database query optimization",
    "Created reusable component library used across 8 different projects"],

    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Material-UI", "Stripe API", "Heroku"]
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    position: "Frontend Developer",
    duration: "Jun 2016 - Feb 2018",
    location: "New York, NY",
    type: "Full-time",
    responsibilities: [
    "Created pixel-perfect responsive websites from design mockups",
    "Implemented interactive features using JavaScript and jQuery",
    "Collaborated with backend developers to integrate APIs",
    "Ensured cross-browser compatibility and accessibility standards",
    "Optimized websites for SEO and performance"],

    achievements: [
    "Built 25+ responsive websites for clients across various industries",
    "Achieved 95+ Google PageSpeed scores on all delivered projects",
    "Reduced development time by 30% through creation of starter templates",
    "Improved client satisfaction scores from 3.8 to 4.7 out of 5"],

    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Sass", "Gulp", "WordPress"]
  }];


  const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    duration: "2012 - 2016",
    location: "Berkeley, CA",
    gpa: "3.8/4.0",
    honors: ["Dean's List", "Cum Laude", "CS Department Honors"],
    relevantCourses: [
    "Data Structures & Algorithms",
    "Web Development",
    "Database Systems",
    "Software Engineering",
    "Computer Networks",
    "Operating Systems"]

  }];


  const skillCategories: Skill[] = [
  {
    category: "Frontend Development",
    skills: [
    { name: "React.js", level: 95, years: 6 },
    { name: "Next.js", level: 90, years: 4 },
    { name: "TypeScript", level: 90, years: 5 },
    { name: "JavaScript (ES6+)", level: 95, years: 8 },
    { name: "HTML5 & CSS3", level: 95, years: 8 },
    { name: "Tailwind CSS", level: 85, years: 3 }]

  },
  {
    category: "Backend Development",
    skills: [
    { name: "Python", level: 90, years: 6 },
    { name: "Django", level: 85, years: 5 },
    { name: "Node.js", level: 85, years: 5 },
    { name: "Express.js", level: 80, years: 4 },
    { name: "RESTful APIs", level: 90, years: 6 },
    { name: "GraphQL", level: 75, years: 3 }]

  },
  {
    category: "Database & Cloud",
    skills: [
    { name: "PostgreSQL", level: 85, years: 5 },
    { name: "MongoDB", level: 80, years: 4 },
    { name: "Redis", level: 75, years: 3 },
    { name: "AWS", level: 80, years: 4 },
    { name: "Docker", level: 85, years: 4 },
    { name: "Kubernetes", level: 70, years: 2 }]

  },
  {
    category: "Tools & Practices",
    skills: [
    { name: "Git & GitHub", level: 95, years: 8 },
    { name: "CI/CD", level: 85, years: 4 },
    { name: "Agile/Scrum", level: 90, years: 6 },
    { name: "Jest & Testing", level: 85, years: 5 },
    { name: "Webpack", level: 80, years: 4 },
    { name: "Performance Optimization", level: 90, years: 6 }]

  }];


  const certifications: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "March 2023",
    credentialId: "AWS-SA-2023-12345",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13eab3672-1764231355425.png",
    logoAlt: "AWS certification badge with orange and white cloud logo",
    verifyLink: "https://aws.amazon.com/verification"
  },
  {
    id: 2,
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "January 2022",
    credentialId: "PSM-I-2022-67890",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa0ddee1-1764231357090.png",
    logoAlt: "Scrum.org certification badge with blue circular design",
    verifyLink: "https://scrum.org/verify"
  },
  {
    id: 3,
    name: "Meta Front-End Developer",
    issuer: "Meta (Facebook)",
    date: "September 2021",
    credentialId: "META-FE-2021-11223",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_16a62497e-1764231356091.png",
    logoAlt: "Meta certification badge with blue gradient logo",
    verifyLink: "https://coursera.org/verify"
  },
  {
    id: 4,
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "June 2023",
    credentialId: "GCP-PRO-2023-44556",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_18f05e809-1764231355154.png",
    logoAlt: "Google Cloud certification badge with multicolor cloud icon",
    verifyLink: "https://cloud.google.com/verify"
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "VP of Engineering",
    company: "TechCorp Solutions",
    relationship: "Direct Manager",
    testimonial: "Juma is an exceptional engineer who consistently delivers high-quality work. His ability to architect scalable solutions and mentor junior developers has been invaluable to our team. He led the migration of our monolithic application to microservices, which improved our system's reliability and scalability significantly. Beyond his technical skills, Juma is a great communicator and collaborator who always puts the team's success first.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1626fc972-1763299131583.png",
    avatarAlt: "Professional headshot of woman with short brown hair in navy blazer",
    linkedIn: "https://linkedin.com/in/sarahmitchell"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    company: "TechCorp Solutions",
    relationship: "Colleague",
    testimonial: "Working with Juma has been a pleasure. He has a unique ability to translate complex technical concepts into language that non-technical stakeholders can understand. His attention to detail and commitment to user experience has resulted in products that our customers love. Juma's proactive approach to problem-solving and his willingness to go the extra mile make him an invaluable team member.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd15b436-1763300581767.png",
    avatarAlt: "Professional headshot of Asian man with glasses in gray suit",
    linkedIn: "https://linkedin.com/in/michaelchen"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Senior Frontend Developer",
    company: "StartupHub Inc",
    relationship: "Former Colleague",
    testimonial: "Juma is one of the most talented developers I've had the privilege to work with. His expertise in React and modern web technologies is impressive, but what sets him apart is his dedication to code quality and best practices. He introduced our team to advanced testing strategies and performance optimization techniques that significantly improved our codebase. I learned so much from working alongside him.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_162a57531-1763296100992.png",
    avatarAlt: "Professional headshot of Hispanic woman with long dark hair in white blouse",
    linkedIn: "https://linkedin.com/in/emilyrodriguez"
  },
  {
    id: 4,
    name: "David Thompson",
    position: "CTO",
    company: "Digital Agency Pro",
    relationship: "Former Supervisor",
    testimonial: "Juma joined our team as a junior developer and quickly proved himself to be a fast learner and reliable contributor. His growth trajectory was remarkable - within a year, he was leading projects and mentoring other developers. His work ethic, technical skills, and positive attitude made him a standout member of our team. Any organization would be lucky to have him.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10e52a26f-1763294215038.png",
    avatarAlt: "Professional headshot of man with beard in blue shirt",
    linkedIn: "https://linkedin.com/in/davidthompson"
  }];


  const featuredProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    description: "Led complete redesign and rebuild of enterprise e-commerce platform serving 500K+ monthly users. Implemented modern React architecture with Next.js for improved SEO and performance.",
    role: "Lead Developer",
    impact: "Increased conversion rate by 35% and reduced bounce rate by 42%",
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL", "AWS"]
  },
  {
    id: 2,
    title: "Real-Time Analytics Dashboard",
    description: "Built comprehensive analytics dashboard with real-time data visualization for monitoring business metrics. Integrated with multiple data sources and implemented custom charting solutions.",
    role: "Fullstack Developer",
    impact: "Reduced data processing time by 70% and improved decision-making speed",
    technologies: ["React", "Python", "Django", "WebSocket", "Redis", "D3.js"]
  },
  {
    id: 3,
    title: "Mobile-First Social Platform",
    description: "Developed progressive web application for social networking with focus on mobile experience. Implemented offline-first architecture and real-time messaging features.",
    role: "Frontend Lead",
    impact: "Achieved 4.8-star rating with 100K+ downloads in first 6 months",
    technologies: ["React", "PWA", "Firebase", "WebRTC", "Tailwind CSS"]
  }];


  const handleDownload = (format: 'pdf' | 'word' | 'txt') => {
    const messages = {
      pdf: 'Downloading PDF resume...',
      word: 'Downloading Word document...',
      txt: 'Downloading plain text resume (ATS-optimized)...'
    };
    alert(messages[format]);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            <div className="h-32 bg-muted animate-pulse rounded-lg" />
            <div className="h-64 bg-muted animate-pulse rounded-lg" />
            <div className="h-96 bg-muted animate-pulse rounded-lg" />
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <ResumeHeader onDownload={handleDownload} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProfessionalSummary
              summary={professionalSummary.summary}
              highlights={professionalSummary.highlights} />

            <ExperienceTimeline experiences={experiences} />
            <ProjectHighlights projects={featuredProjects} />
          </div>

          <div className="space-y-8">
            <AvailabilityStatus
              status="available"
              responseTime="24-48 hours" />

            <ContactInfo contacts={contactInfo} />
            <EducationSection education={education} />
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <SkillsMatrix skillCategories={skillCategories} />
          <CertificationsSection certifications={certifications} />
          <TestimonialsSection testimonials={testimonials} />
        </div>
      </div>
    </div>);

}