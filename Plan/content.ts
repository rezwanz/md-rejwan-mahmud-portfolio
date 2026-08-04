// src/data/content.ts
// Single source of truth for all portfolio content.
// Edit this file to update the site — no component code needs to change.

export const personal = {
  name: "Md. Rejwan Mahmud",
  role: "Software Engineer",
  roles: [ // used for the hero's rotating/typewriter text
    "Software Engineer",
    "Full-Stack Developer",
    "Problem Solver",
  ],
  tagline:
    "I build scalable, high-quality web & mobile applications across the full stack.",
  bio: `I am a Full-Stack Software Engineer with 2+ years of experience in web and
mobile app development. Skilled in front-end, back-end, and database
management, I deliver high-quality, scalable solutions that boost
performance, cut costs, and enhance user experience.`,
  location: "Dhaka, Bangladesh",
  email: "rejwan.dev24@gmail.com",
  resumeFile: "/assets/files/resume-md-rejwan-mahmud.pdf", // drop your PDF here
  socials: {
    email: "mailto:rejwan.dev24@gmail.com",
    linkedin: "https://www.linkedin.com/in/md-rejwan-mahmud",
    github: "https://github.com/rezwanz",
    x: "https://x.com/rezwanzzz",
    facebook: "https://www.facebook.com/mrm.shakil",
    instagram: "https://www.instagram.com/rezwanzz/",
  },
};

export const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Vue.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Python", "Java", "C++"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "GitLab", "Docker", "Linux"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Codeware Limited",
    date: "May 2024 - Present",
    description:
      "Developed and implemented new backend features, fixed critical bugs, and optimized database structures and queries. Provided emergency technical support and collaborated across teams.",
  },
  {
    role: "Software Engineer",
    company: "Skylark Soft Limited",
    date: "Apr 2024 - Mar 2025",
    description:
      "Developed backend and frontend features, fixed critical bugs, and created reports. Refactored ERP modules for improved performance and efficiency.",
  },
  {
    role: "Jr. Software Engineer",
    company: "DevTechGuru",
    date: "Feb 2023 - Mar 2024",
    description:
      "Developed web applications with a focus on backend and frontend. Designed scalable system architectures based on project goals and client needs.",
  },
  {
    role: "Trainee Software Engineer",
    company: "DevTechGuru",
    date: "Aug 2022 - Jan 2023",
    description:
      "Assisted in the early stages of web application projects, gaining hands-on experience in core software engineering principles.",
  },
  {
    role: "Software Development Engineer (Intern)",
    company: "Excellent Soft Ltd.",
    date: "Jan 2022 - Apr 2022",
    description:
      "Worked closely with senior developers to build scalable web applications and front-end designs. Conducted software testing and debugging.",
  },
];

// NOTE: your Codeware (May 2024-Present) and Skylark Soft (Apr 2024-Mar 2025)
// dates overlap — worth double-checking these before publishing, in case one
// should say "Present" and the other an earlier end date.

export const education = [
  {
    degree: "Executive Master in Information Technology",
    institution: "University of Dhaka",
    date: "2023 - 2025",
    description: "Specialized in Software Engineering and Data Science.",
  },
  {
    degree: "B.Sc in Computer Science and Engineering",
    institution: "Independent University, Bangladesh (IUB)",
    date: "2017 - 2022",
    description:
      "Specialized in Data Structures, Algorithms, Databases, and Software Engineering.",
  },
];

export const projects = [
  {
    title: "Etripi.com",
    tech: ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", "PHP", "Laravel", "Livewire", "React", "MySQL"],
    description:
      "A comprehensive online booking platform enabling users to search, compare, and book hotels seamlessly. Includes advanced features for room management, dynamic pricing, real-time availability, partner dashboards, and AI-assisted property descriptions for a smooth experience for both travelers and property owners.",
    associatedWith: "Codeware Limited",
    github: "", // add link if available
    live: "https://etripi.com/",
  },
  {
    title: "goRMG ERP",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "Laravel", "Vue.js", "MySQL"],
    description:
      "An ERP for the garments industry to streamline operations; contributed to Protracker, a cloud-based tool for tracking orders, production, shipping, and invoicing.",
    associatedWith: "Skylark Soft Limited",
    github: "", // add link if available
    live: "",
  },
  {
    title: "Laboratory Information Management System (LIMS)",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind", "PHP", "Laravel", "MySQL"],
    description:
      "LIMS for the Wyss Institute at Harvard — streamlines sample management, automates workflows, ensures data integrity, and improves efficiency in research and testing facilities.",
    associatedWith: "DevTechGuru Ltd. (client: Wyss Institute, Harvard)",
    github: "",
    live: "",
  },
  {
    title: "Wyss Diagnostics Accelerator (DxA) Web Presence",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind", "PHP", "Laravel", "MySQL"],
    description:
      "A visually engaging, user-friendly website built to enhance online presence, improve navigation, and highlight innovative research for the Wyss Institute's DxA program at Harvard.",
    associatedWith: "DevTechGuru Ltd. (client: Wyss Institute, Harvard)",
    github: "",
    live: "",
  },
  {
    title: "GURU ERP",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Ajax", "PHP", "MySQL"],
    description:
      "A web-based ERP solution to streamline business processes, improve inter-departmental efficiency, and enhance data management for a Saudi Arabia-based company.",
    associatedWith: "DevTechGuru Ltd.",
    github: "",
    live: "",
  },
  {
    title: "CMS for QK Ahmad Foundation",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Ajax", "PHP", "MySQL"],
    description:
      "A user-friendly content management platform enabling easy creation, editing, organization, and publishing of text, images, and video content.",
    associatedWith: "DevTechGuru Ltd.",
    github: "",
    live: "",
  },
];
