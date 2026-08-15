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
  url: string;
  color?: string;
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

export interface CertificationItem {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateImage?: string;
  skills?: string[];
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

export interface ServiceItem {
  title: string;
  description: string;
  icon: "code" | "server" | "database" | "layers" | "smartphone";
}

export const site = {
  name: "Md. Rejwan Mahmud",
  initials: "rejwan.dev",
  role: "Software Engineer",
  roles: ["Software Engineer", "Full-Stack Developer", "Problem Solver"],
  tagline:
    "I build scalable, high-quality web & mobile applications across the full stack.",
  location: "Dhaka, Bangladesh",
  email: "rejwan.dev24@gmail.com",
  resumeUrl: "/assets/files/resume-md-rejwan-mahmud.pdf",
  githubUsername: "rezwanz",
};

export const socialLinks: SocialLink[] = [
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
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-rejwan-mahmud",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/rezwanzzz", icon: "x" },
  { label: "GitHub", href: "https://github.com/rezwanz", icon: "github" },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "I am a Full-Stack Software Engineer with 4+ years of experience in web and mobile app development. Skilled in front-end, back-end, and database management, I deliver high-quality, scalable solutions that boost performance, cut costs, and enhance user experience.",
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
      {
        name: "HTML5",
        icon: "html5",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: "css3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        color: "#1572B6",
      },
      {
        name: "Bootstrap",
        icon: "bootstrap",
        url: "https://getbootstrap.com/",
        color: "#7952B3",
      },
      {
        name: "JavaScript",
        icon: "javascript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwindcss",
        url: "https://tailwindcss.com/",
        color: "#06B6D4",
      },
      {
        name: "jQuery",
        icon: "jquery",
        url: "https://jquery.com/",
        color: "#0769AD",
      },
      {
        name: "Vue.js",
        icon: "vuedotjs",
        url: "https://vuejs.org/",
        color: "#4FC08D",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "PHP",
        icon: "php",
        url: "https://www.php.net/",
        color: "#777BB4",
      },
      {
        name: "Laravel",
        icon: "laravel",
        url: "https://laravel.com/",
        color: "#FF2D20",
      },
      {
        name: "Livewire",
        icon: "livewire",
        url: "https://livewire.laravel.com/",
        color: "#4E56A6",
      },
      {
        name: "Python",
        icon: "python",
        url: "https://www.python.org/",
        color: "#3776AB",
      },
      {
        name: "C++",
        icon: "cplusplus",
        url: "https://isocpp.org/",
        color: "#00599C",
      },
      {
        name: "Java",
        icon: "java",
        url: "https://www.java.com/",
        color: "#E76F00",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MySQL",
        icon: "mysql",
        url: "https://www.mysql.com/",
        color: "#4479A1",
      },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      {
        name: "Git",
        icon: "git",
        url: "https://git-scm.com/",
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: "github",
        url: "https://github.com/",
      },
      {
        name: "GitLab",
        icon: "gitlab",
        url: "https://about.gitlab.com/",
        color: "#FC6D26",
      },
      {
        name: "Docker",
        icon: "docker",
        url: "https://www.docker.com/",
        color: "#2496ED",
      },
      {
        name: "Linux",
        icon: "linux",
        url: "https://www.linux.org/",
        color: "#FCC624",
      },
    ],
  },
];

export const services: ServiceItem[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with React/Vue front ends and Laravel/PHP back ends, built for performance and long-term maintainability.",
    icon: "code",
  },
  {
    title: "Backend & API Development",
    description:
      "RESTful APIs, business logic, and system integrations built on Laravel and PHP, focused on clean architecture and reliability.",
    icon: "server",
  },
  {
    title: "Database Design & Optimization",
    description:
      "MySQL schema design, query tuning, and structural refactors to improve performance and keep data integrity as systems grow.",
    icon: "database",
  },
  {
    title: "ERP & Business Systems",
    description:
      "Custom ERP modules for production, ordering, invoicing, and reporting — tailored to real operational workflows, not generic templates.",
    icon: "layers",
  },
  {
    title: "Responsive UI Implementation",
    description:
      "Pixel-accurate, accessible, mobile-first interfaces with Tailwind CSS that hold up across devices and screen sizes.",
    icon: "smartphone",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Codeware Limited",
    start: "May 2025",
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
    end: "Apr 2025",
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

export const certifications: CertificationItem[] = [
  {
    title: "PHP with Laravel Framework",
    issuer: "BASIS",
    issued: "Jul 2022",
    credentialId: "BASIS76/OID23/PHP6/17",
    certificateImage: "/assets/images/certificates/basis-php-laravel-framework.jpg",
    skills: [
      "HTML5",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "PHP",
      "Laravel",
      "Web Development",
    ],
  },
  {
    title: "Professional English Communication Skill",
    issuer: "WSDA New Zealand",
    issued: "Jun 2022",
    credentialId: "BASIS76/BITMD23/PHP6",
    certificateImage:
      "/assets/images/certificates/wsda-professional-english-communication.jpg",
    skills: ["Communication", "Business English"],
  },
  {
    title: "Introduction to Psychology",
    issuer: "Coursera",
    issued: "Jul 2020",
    credentialId: "UT242ZX4Y8AK",
    credentialUrl: "https://coursera.org/verify/UT242ZX4Y8AK",
    skills: ["Psychological Assessment"],
  },
  {
    title: "Python Data Structures",
    issuer: "Coursera",
    issued: "Jul 2020",
    credentialId: "FZ9HUYNBLGEL",
    credentialUrl: "https://coursera.org/verify/FZ9HUYNBLGEL",
    skills: ["Python (Programming Language)"],
  },
  {
    title: "Introduction to HTML",
    issuer: "Coursera",
    issued: "Jul 2020",
    credentialId: "6HXAFSZ5EX7E",
    credentialUrl: "https://www.coursera.org/api/certificate.v1/pdf/6HXAFSZ5EX7E",
    skills: ["HTML5"],
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
    issued: "Jun 2020",
    credentialId: "28EZD4J6UWWT",
    credentialUrl: "https://coursera.org/verify/28EZD4J6UWWT",
    skills: ["Python (Programming Language)"],
  },
];

export const projects: Project[] = [
  {
    title: "Property Management System (PMS)",
    description:
      "A multi-tenant SaaS Hotel PMS on a DB-per-tenant architecture, with two apps: a Super Admin panel for tenant onboarding, billing, and global hotel data, and a per-hotel Tenant PMS covering front desk, reservations, guest CRM, POS, night audit, and accounting.",
    tags: ["HTML", "CSS", "Tailwind", "TypeScript", "Inertia.js", "Vue.js", "PHP", "Laravel", "MySQL"],
    category: "Full-stack",
    associatedWith: "Codeware Limited",
  },
  {
    title: "Visa Agency CRM & Management System",
    description:
      "A multilingual (AR/BN/EN) multi-tenant CRM for Al Zahra Consultancy, a visa services agency — combining a marketing site with a back-office suite covering customer tracking, invoicing & payments, commissions, double-entry accounting, and financial reporting.",
    tags: ["HTML", "CSS", "Tailwind", "Alpine.js", "JavaScript", "PHP", "Laravel", "Livewire", "MySQL"],
    category: "Full-stack",
    associatedWith: "Codeware Limited (client: Al Zahra Consultancy)",
    live: "https://alzahrabd.com/",
  },
  {
    title: "Bangladesh Medical University (BMU)",
    description:
      "A university administration and research platform with an end-to-end IRB ethics-approval workflow, governance portals for Academic & Syndicate meetings with signed attendance confirmation, and a multilingual (EN/BN) CMS with per-department subdomains and news publishing.",
    tags: ["HTML", "CSS", "Tailwind", "Alpine.js", "PHP", "Laravel", "Livewire", "Filament", "MySQL"],
    category: "Full-stack",
    associatedWith: "Codeware Limited",
    live: "https://www.bmu.ac.bd/",
  },
  {
    title: "Winrooms",
    description:
      "A hotel & accommodation booking platform for searching, comparing, and booking rooms, with dynamic pricing, real-time availability, and partner dashboards for property management.",
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "Alpine.js",
      "React",
      "Next.js",
      "Vue.js",
      "PHP",
      "Laravel",
      "Livewire",
      "Redis",
      "MySQL",
    ],
    category: "Full-stack",
    associatedWith: "Codeware Limited",
    live: "https://winrooms.com/",
  },
  {
    title: "Etripi",
    description:
      "A hotel & tour booking platform for the Bangladesh market, with a partner portal for rate/availability management, local payment gateway integration, automated invoicing, and a dedicated tour booking module.",
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "Alpine.js",
      "React",
      "Next.js",
      "Vue.js",
      "PHP",
      "Laravel",
      "Livewire",
      "Redis",
      "MySQL",
    ],
    category: "Full-stack",
    associatedWith: "Codeware Limited",
    live: "https://etripi.com/",
  },
  {
    title: "goRMG ERP",
    description:
      "A multi-vendor ERP for the garments industry, deployed across 20+ clients to streamline operations; contributed to Protracker, a cloud-based tool for tracking orders, production, shipping, and invoicing.",
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
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind", "WordPress", "PHP"],
    category: "Frontend",
    associatedWith: "DevTechGuru Ltd. (client: Wyss Institute, Harvard)",
    live: "https://wyss.harvard.edu/collaboration/wyss-diagnostics-accelerator/",
  },
  {
    title: "GURU ERP",
    description:
      "A multi-vendor, web-based ERP solution to streamline business processes, improve inter-departmental efficiency, and enhance data management — deployed for Three Arrows Plastic Factory (Saudi Arabia) and Uniglory Ltd.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Ajax", "PHP", "MySQL"],
    category: "Full-stack",
    associatedWith: "DevTechGuru Ltd. (clients: Three Arrows Plastic Factory, Uniglory Ltd.)",
  },
  {
    title: "CMS for QK Ahmad Foundation",
    description:
      "A user-friendly content management platform enabling easy creation, editing, organization, and publishing of text, images, and video content.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Ajax", "PHP", "MySQL"],
    category: "Full-stack",
    associatedWith: "DevTechGuru Ltd.",
    live: "https://qkaf.org/home.php",
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
  formspreeEndpoint: "https://formspree.io/f/xwleqzln",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
