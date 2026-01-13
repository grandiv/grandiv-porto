// Centralized site content for CMS-readiness
// All text content, navigation, and configuration in one place

import type { SiteContent } from "../types";

export const siteContent: SiteContent = {
  navigation: {
    logo: "Grandiv",
    links: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "About Me", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },

  hero: {
    greeting: "Hello! I'm available for new opportunities!",
    titles: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
  },

  about: {
    name: "Grandiv",
    location: "Indonesia",
    role: "full-stack software developer",
    focus: ["back-end development", "user experience"],
    technologies: [
      "React",
      "Astro",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "Tailwind",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],
    bio: [
      "My interest in technology and programming emerged while pursuing a University Technical Degree in Automation at UnCuyo. In the computer science class I had my first contact with the world of programming.",
      "Motivated by curiosity, I continued studying in a self-taught manner, then in a Technical Degree focused on software development, and decided that this was what I wanted to dedicate myself to at a professional level.",
      "I'm always committed to constant growth and improvement in my skills, seeking to adapt to new technological advances and improve at both professional and personal levels.",
    ],
    photoAlt: "Photo of Grandiv",
  },

  contact: {
    email: "grandivfarand@gmail.com",
    links: [
      {
        href: "https://www.linkedin.com/in/muhammad-grandiv-lava-putra-364b0324b/",
        label: "LinkedIn",
      },
      { href: "https://github.com/grandiv", label: "GitHub" },
      { href: "mailto:grandivfarand@gmail.com", label: "Email" },
    ],
    messages: {
      copyError: "Error copying",
      copied: "Copied!",
      copy: "Copy",
    },
  },

  footer: {
    copyright: "grandivfarand@gmail.com",
  },
};
