// Type definitions for Grandiv Portfolio
// Ensures type safety across data structures

// Navigation types
export interface NavigationLink {
  name: string;
  href: string;
}

export interface Navigation {
  logo: string;
  links: NavigationLink[];
}

// Hero types
export interface Hero {
  greeting: string;
  titles: string[];
}

// About types
export interface About {
  name: string;
  location: string;
  role: string;
  focus: string[];
  technologies: string[];
  bio: string[];
  photoAlt: string;
}

// Contact types
export interface ContactLink {
  href: string;
  label: string;
}

export interface ContactMessages {
  copyError: string;
  copied: string;
  copy: string;
}

export interface Contact {
  email: string;
  links: ContactLink[];
  messages: ContactMessages;
}

// Footer types
export interface Footer {
  copyright: string;
}

// Site content (combines all sections)
export interface SiteContent {
  navigation: Navigation;
  hero: Hero;
  about: About;
  contact: Contact;
  footer: Footer;
}

// Skills types
export interface Skill {
  name: string;
  icon: string;
}

// FAQ types
export type FaqCategory = "webdev" | "mobile" | "design";

export interface FaqCategories {
  "Web Development": "webdev";
  "Mobile Development": "mobile";
  "UI/UX Design & Prototyping": "design";
}

export interface Faq {
  question: string;
  answer: string;
  category: FaqCategory;
}

// Services types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Icons types
export interface CategoryIcons {
  webdev: string;
  mobile: string;
  design: string;
}

// Projects types
export type ProjectCategory = "fullstack" | "frontend" | "backend";

export interface Project {
  title: string;
  description?: string;
  image: string;
  technologies: string[];
  demo: string;
  code: string;
  category?: ProjectCategory;
}

// Jobs/Experience types
export interface Job {
  title: string;
  time: string[];
  description: string;
  list: string[];
}
