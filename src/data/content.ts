/**
 * Single source of truth for all site copy and content.
 * Edit this file to update the site — no component changes needed.
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "facebook" | "instagram" | "mail";
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  start: string;
  end: string;
  details?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: "Frontend" | "Full-stack" | "Backend" | "Other";
  associatedWith?: string;
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

export const site = {
  name: "Md. Rejwan Mahmud",
  initials: "RM",
  role: "Software Engineer",
  roles: ["Software Engineer", "Full-Stack Developer", "Problem Solver"],
  tagline:
    "I build scalable, high-quality web & mobile applications across the full stack.",
  location: "Dhaka, Bangladesh",
  email: "rejwan.dev24@gmail.com",
  resumeUrl: "/assets/files/resume-md-rejwan-mahmud.pdf",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/rezwanz", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-rejwan-mahmud",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/rezwanzzz", icon: "x" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/mrm.shakil",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rezwanzz/",
    icon: "instagram",
  },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "I am a Full-Stack Software Engineer with 2+ years of experience in web and mobile app development. Skilled in front-end, back-end, and database management, I deliver high-quality, scalable solutions that boost performance, cut costs, and enhance user experience.",
  ],
  facts: [
    { label: "Location", value: site.location },
    { label: "Role", value: `${site.role} @ Codeware Limited` },
    { label: "Focus", value: "Full-stack web & mobile development" },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "jQuery", icon: "jquery" },
      { name: "Vue.js", icon: "vuedotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cplusplus" },
    ],
  },
  {
    category: "Database",
    items: [{ name: "MySQL", icon: "mysql" }],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Codeware Limited",
    start: "May 2024",
    end: "Present",
    bullets: [
      "Developed and implemented new backend features, fixed critical bugs, and optimized database structures and queries.",
      "Provided emergency technical support and collaborated across teams.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Skylark Soft Limited",
    start: "Apr 2024",
    end: "Mar 2025",
    bullets: [
      "Developed backend and frontend features, fixed critical bugs, and created reports.",
      "Refactored ERP modules for improved performance and efficiency.",
    ],
  },
  {
    role: "Jr. Software Engineer",
    company: "DevTechGuru",
    start: "Feb 2023",
    end: "Mar 2024",
    bullets: [
      "Developed web applications with a focus on backend and frontend.",
      "Designed scalable system architectures based on project goals and client needs.",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "DevTechGuru",
    start: "Aug 2022",
    end: "Jan 2023",
    bullets: [
      "Assisted in the early stages of web application projects, gaining hands-on experience in core software engineering principles.",
    ],
  },
  {
    role: "Software Development Engineer (Intern)",
    company: "Excellent Soft Ltd.",
    start: "Jan 2022",
    end: "Apr 2022",
    bullets: [
      "Worked closely with senior developers to build scalable web applications and front-end designs.",
      "Conducted software testing and debugging.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Executive Master in Information Technology",
    institution: "University of Dhaka",
    start: "2023",
    end: "2025",
    details: "Specialized in Software Engineering and Data Science.",
  },
  {
    degree: "B.Sc in Computer Science and Engineering",
    institution: "Independent University, Bangladesh (IUB)",
    start: "2017",
    end: "2022",
    details:
      "Specialized in Data Structures, Algorithms, Databases, and Software Engineering.",
  },
];

export const projects: Project[] = [
  {
    title: "goRMG ERP",
    description:
      "An ERP for the garments industry to streamline operations; contributed to Protracker, a cloud-based tool for tracking orders, production, shipping, and invoicing.",
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "Laravel",
      "Vue.js",
      "MySQL",
    ],
    category: "Full-stack",
    associatedWith: "Skylark Soft Limited",
  },
  {
    title: "Laboratory Information Management System (LIMS)",
    description:
      "LIMS for the Wyss Institute at Harvard — streamlines sample management, automates workflows, ensures data integrity, and improves efficiency in research and testing facilities.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind", "PHP", "Laravel", "MySQL"],
    category: "Full-stack",
    associatedWith: "DevTechGuru Ltd. (client: Wyss Institute, Harvard)",
  },
  {
    title: "Wyss Diagnostics Accelerator (DxA) Web Presence",
    description:
      "A visually engaging, user-friendly website built to enhance online presence, improve navigation, and highlight innovative research for the Wyss Institute's DxA program at Harvard.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind", "PHP", "Laravel", "MySQL"],
    category: "Frontend",
    associatedWith: "DevTechGuru Ltd. (client: Wyss Institute, Harvard)",
  },
  {
    title: "GURU ERP",
    description:
      "A web-based ERP solution to streamline business processes, improve inter-departmental efficiency, and enhance data management for a Saudi Arabia-based company.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Ajax", "PHP", "MySQL"],
    category: "Full-stack",
    associatedWith: "DevTechGuru Ltd.",
  },
  {
    title: "CMS for QK Ahmad Foundation",
    description:
      "A user-friendly content management platform enabling easy creation, editing, organization, and publishing of text, images, and video content.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Ajax", "PHP", "MySQL"],
    category: "Full-stack",
    associatedWith: "DevTechGuru Ltd.",
  },
];

export const projectFilters = [
  "All",
  "Frontend",
  "Full-stack",
  "Backend",
] as const;

export const contact = {
  heading: "Get In Touch",
  subheading:
    "Have a project in mind or just want to say hi? My inbox is always open.",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
