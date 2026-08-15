/**
 * English locale — source-of-truth dictionary.
 * Every key here must exist in `bn.ts` with the same structure (enforced
 * by the `Locale` type). Keys are flat snake_case inside feature sections.
 */
const en = {
  // ── Navigation ────────────────────────────────────────────────────────────
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    certifications: "Certifications",
    services: "Services",
    contact: "Contact",
    resume: "Resume",
    skip_to_content: "Skip to content",
    toggle_menu: "Toggle menu",
    light_mode: "Light mode",
    dark_mode: "Dark mode",
    switch_to_light_aria: "Switch to light mode",
    switch_to_dark_aria: "Switch to dark mode",
  },

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    greeting: "Hi, my name is",
    roles: ["Software Engineer", "Full-Stack Developer", "Problem Solver"],
    tagline:
      "I build scalable, high-quality web & mobile applications across the full stack.",
    cta_projects: "View Projects",
    cta_contact: "Contact Me",
  },

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    section_label: "01. About",
    heading: "About Me",
  },

  // ── Skills ────────────────────────────────────────────────────────────────
  skills: {
    section_label: "02. Skills",
    heading: "Tools & Technologies",
  },

  // ── Experience ────────────────────────────────────────────────────────────
  experience: {
    section_label: "03. Experience",
    heading: "Where I've Worked",
  },

  // ── Education ─────────────────────────────────────────────────────────────
  education: {
    section_label: "04. Education",
    heading: "Academic Background",
  },

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: {
    section_label: "05. Projects",
    heading: "Things I've Built",
    filter_aria: "Filter projects by category",
    filter_all: "All",
    filter_frontend: "Frontend",
    filter_fullstack: "Full-stack",
    filter_backend: "Backend",
    github_aria: "GitHub repository",
    live_aria: "live demo",
  },

  // ── Certifications ────────────────────────────────────────────────────────
  certifications: {
    section_label: "06. Licenses & Certifications",
    heading: "Certifications",
    issued_label: "Issued {date}",
    credential_id: "Credential ID: {id}",
    show_credential_aria: "Show credential for {title}",
  },

  // ── Services ──────────────────────────────────────────────────────────────
  services: {
    section_label: "07. Services",
    heading: "What I Can Help With",
  },

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    section_label: "08. Contact",
    heading: "Get In Touch",
    subheading:
      "Have a project in mind or just want to say hi? My inbox is always open.",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    send: "Send Message",
    sending: "Sending…",
    success:
      "Thanks! Your message has been sent — I'll get back to you soon.",
    error_generic: "Something went wrong. Please email me directly instead.",
    error_not_configured:
      "The contact form isn't configured yet. Please email me directly instead.",
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    copyright: "© {year} {name}. All rights reserved.",
    back_to_top: "Back to top",
    top: "Top",
  },

  // ── Command palette ───────────────────────────────────────────────────────
  commands: {
    go_to: "Go to {section}",
    hint_section: "Section",
    open: "Open {label}",
    hint_link: "Link",
    theme_light: "Switch to light mode",
    theme_dark: "Switch to dark mode",
    hint_theme: "Theme",
    download_resume: "Download resume",
    hint_pdf: "PDF",
    placeholder: "Jump to a section or run a command…",
    no_results: "No matching commands.",
    open_aria: "Open command palette",
    dialog_aria: "Command palette",
  },

  // ── Shared UI ─────────────────────────────────────────────────────────────
  common: {
    name: "Md. Rejwan Mahmud",
    change_language_aria: "Change language",
  },
} as const;

export default en;
