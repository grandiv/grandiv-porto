// Centralized site content for CMS-readiness
// All text content, navigation, and configuration in one place

import type { SiteContent } from "../types";

export const siteContent: SiteContent = {
  navigation: {
    logo: "Grandiv Putra",
    links: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "About Me", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },

  hero: {
    greeting: "Hello! I'm available for new opportunities!",
    titles: ["Backend Engineer", "Full Stack Developer", "DevOps Engineer", "Software Architect"],
  },

  about: {
    name: "Muhammad Grandiv Lava Putra",
    location: "Yogyakarta, Indonesia",
    role: "Full-Stack Software Developer & Backend Engineer",
    focus: ["microservices architecture", "system design", "DevOps engineering"],
    technologies: [
      "Go",
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Nginx",
      "Microservices",
    ],
    bio: [
      "I'm a Full-Stack Software Developer and Backend Engineer currently pursuing a Bachelor of Science in Information Technology at Gadjah Mada University (Expected 2026), with comprehensive coursework in Software Engineering, Data Engineering, Web Development, AI, Database Technology, and Data Structures & Algorithms.",
      "I specialize in architecting scalable microservices platforms using Go and Node.js, with expertise in system design, CI/CD automation, and DevOps practices. My recent work includes building high-traffic event ticketing systems handling 1,000+ concurrent users with 99.9% uptime, implementing distributed systems with Redis, Kafka, and WebSocket, and achieving 82.75% test coverage across enterprise applications.",
      "I'm passionate about building robust, production-ready systems with comprehensive documentation, automated testing, and modern development practices. I continuously seek to advance my skills in scalable architecture, cloud infrastructure, and emerging technologies.",
    ],
    photoAlt: "Photo of Muhammad Grandiv Lava Putra",
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
