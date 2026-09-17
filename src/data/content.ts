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
  institutionUrl?: string;
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
  roles: ["Software Engineer", "Backend Engineer", "Full-Stack Developer"],
  tagline:
    "I build scalable SaaS, ERP, CRM, and business applications with a focus on backend architecture, database performance, and reliable delivery.",
  location: "Narayanganj, Bangladesh",
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
    "I am a backend-focused Software Engineer with 4+ years of experience building multi-tenant SaaS platforms, ERP systems, CRM solutions, and business applications. Experienced in Laravel, PHP, MySQL, Livewire, Vue.js, and relational database design, I focus on scalable backend architecture, database performance, clean implementation, and production-ready systems.",
  ],
  facts: [
    { label: "Location", value: site.location },
    { label: "Role", value: `${site.role} @ Codeware Limited` },
    { label: "Focus", value: "Backend engineering, SaaS & business systems" },
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
      "End-to-end web applications with Vue/React front ends and Laravel/PHP back ends, built for performance, scalability, and long-term maintainability.",
    icon: "code",
  },
  {
    title: "Backend & API Development",
    description:
      "Backend systems, RESTful APIs, business logic, and third-party integrations built with Laravel and PHP, focused on clean architecture and reliability.",
    icon: "server",
  },
  {
    title: "Database Design & Optimization",
    description:
      "Relational schema design, query optimization, and structural refactoring to improve performance and preserve data integrity as systems scale.",
    icon: "database",
  },
  {
    title: "ERP & Business Systems",
    description:
      "Custom ERP and business-system modules for production, ordering, invoicing, accounting, and reporting, tailored to real operational workflows.",
    icon: "layers",
  },
  {
    title: "Responsive UI Implementation",
    description:
      "Responsive, accessible, mobile-first interfaces with Tailwind CSS that provide consistent experiences across devices and screen sizes.",
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
      "Develop and maintain backend features, resolve critical production issues, and optimize database structures and queries for scalability and performance.",
      "Provide technical support for critical production issues, troubleshoot system failures, and participate in client meetings to understand requirements and deliver effective solutions.",
      "Collaborate with frontend and backend teams to ensure seamless system integration, maintain code quality, and deliver reliable releases.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Skylark Soft Limited",
    start: "Apr 2024",
    end: "Apr 2025",
    bullets: [
      "Developed and maintained backend and frontend features for ERP modules based on business and functional requirements.",
      "Refactored core ERP modules to improve processing performance and reduce database query load.",
      "Resolved critical bugs and documented technical findings to improve module stability and maintainability.",
      "Redesigned key database structures to support scalability as client data volume grew.",
      "Provided technical support for high-priority client issues and production incidents.",
    ],
  },
  {
    role: "Jr. Software Engineer",
    company: "DevTechGuru",
    start: "Feb 2023",
    end: "Mar 2024",
    bullets: [
      "Developed backend and frontend features across CRM, ERP, and web portal projects.",
      "Triaged and resolved bugs, improving system reliability.",
      "Designed relational database schemas for new modules, focusing on data integrity and query efficiency.",
      "Contributed to code reviews and documentation to support long-term maintainability.",
      "Provided support during critical production incidents.",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "DevTechGuru",
    start: "Aug 2022",
    end: "Jan 2023",
    bullets: [
      "Assisted with early-stage web application development and gained hands-on experience in software engineering practices, debugging, and collaborative development.",
    ],
  },
  {
    role: "Software Development Engineer (Intern)",
    company: "Excellent Soft Ltd.",
    start: "Jan 2022",
    end: "Apr 2022",
    bullets: [
      "Worked with senior developers to build web applications and responsive, cross-browser-compatible interfaces.",
      "Conducted software testing and debugging to identify and resolve issues and maintain application quality.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Executive Master in Information Technology",
    institution: "University of Dhaka",
    institutionUrl: "https://iit.du.ac.bd/home",
    start: "2023",
    end: "2025",
    details: "Specialized in Software Engineering and Data Science.",
  },
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Independent University, Bangladesh (IUB)",
    institutionUrl: "https://iub.ac.bd/",
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
      "Designed and developed a multi-tenant SaaS Hotel PMS using a DB-per-tenant architecture, with two applications: a Super Admin panel for tenant onboarding, billing, and global hotel data, and a per-hotel Tenant PMS covering front desk, reservations, guest CRM, POS, night audit, and accounting.",
    tags: ["HTML", "CSS", "Tailwind CSS", "TypeScript", "Inertia.js", "Vite", "Vue.js", "PHP", "Laravel", "Redis", "MySQL"],
    category: "Full-stack",
    associatedWith: "Codeware Limited",
  },
  {
    title: "Visa Agency CRM & Management System",
    description:
      "Developed a multilingual (AR/BN/EN), multi-tenant CRM for a visa services agency, combining a public-facing marketing website with a back-office platform for customer management, invoicing and payments, commission tracking, double-entry accounting, and financial reporting.",
    tags: ["HTML", "CSS", "Tailwind CSS", "Alpine.js", "Vite", "JavaScript", "PHP", "Laravel", "Livewire", "MySQL"],
    category: "Full-stack",
    associatedWith: "Codeware Limited (client: Al Zahra Consultancy)",
    live: "https://alzahrabd.com/",
  },
  {
    title: "Bangladesh Medical University (BMU)",
    description:
      "Developed a university administration and research platform with an end-to-end IRB ethics-approval workflow, governance portals for Academic and Syndicate meetings with signed attendance confirmation, and a multilingual (EN/BN) CMS with per-department subdomains and news publishing.",
    tags: ["HTML", "CSS", "Tailwind CSS", "Alpine.js", "PHP", "Laravel", "Livewire", "Filament", "MySQL"],
    category: "Full-stack",
    associatedWith: "Codeware Limited",
    live: "https://www.bmu.ac.bd/",
  },
  {
    title: "Winrooms",
    description:
      "Developed a hotel and accommodation booking platform for searching, comparing, and booking rooms, with dynamic pricing, real-time availability, and partner dashboards for property management.",
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Alpine.js",
      "Vite",
      "JavaScript",
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
      "Developed a hotel and tour booking platform for the Bangladesh market, including a partner portal for rate and availability management, local payment gateway integration, automated invoicing, and a dedicated tour booking module.",
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Alpine.js",
      "Vite",
      "JavaScript",
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
      "Developed ERP modules for the garments industry, deployed across 10+ clients to streamline operations, and contributed to Protracker, a cloud-based platform for managing orders, production, shipping, and invoicing.",
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
      "Developed features for a Laboratory Information Management System for the Wyss Institute at Harvard to support sample management, workflow automation, data integrity, and research and testing operations.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind CSS", "PHP", "Laravel", "MySQL"],
    category: "Full-stack",
    associatedWith: "DevTechGuru Ltd. (client: Wyss Institute, Harvard)",
  },
  {
    title: "Wyss Diagnostics Accelerator (DxA) Web Presence",
    description:
      "Built the public-facing WordPress website for the Wyss Diagnostics Accelerator program at the Wyss Institute at Harvard, showcasing the initiative and its research focus.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind CSS", "WordPress", "PHP"],
    category: "Frontend",
    associatedWith: "DevTechGuru Ltd. (client: Wyss Institute, Harvard)",
    live: "https://wyss.harvard.edu/collaboration/wyss-diagnostics-accelerator/",
  },
  {
    title: "GURU ERP",
    description:
      "Developed a web-based ERP solution for Three Arrows Plastic Factory (Saudi Arabia) and Uniglory Ltd. to streamline business processes, improve interdepartmental efficiency, and enhance data management.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "AJAX", "PHP", "MySQL"],
    category: "Full-stack",
    associatedWith: "DevTechGuru Ltd. (clients: Three Arrows Plastic Factory, Uniglory Ltd.)",
  },
  {
    title: "CMS for QK Ahmad Foundation",
    description:
      "Developed a web-based CMS for creating, editing, organizing, and publishing digital content, including text, images, and videos.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "AJAX", "PHP", "MySQL"],
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
    "Have a project in mind or want to discuss a software engineering opportunity? My inbox is open.",
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
