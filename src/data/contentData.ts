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
    titles: [
      "CTO @ ArachnoVa",
      "Backend Engineer",
      "Full Stack Developer",
      "Software Architect",
      "Web3 & ML Engineer",
    ],
  },

  about: {
    name: "Muhammad Grandiv Lava Putra",
    location: "Yogyakarta, Indonesia",
    role: "Chief Technology Officer & Software Engineer",
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
      "Solidity",
      "Machine Learning",
    ],
    bio: [
      "I'm the Chief Technology Officer of ArachnoVa, a software house, where I lead a small engineering team to ideate, build, and operate production platforms for real clients. I'm also a final-year S1 Information Technology student at Universitas Gadjah Mada (expected 2026), and ArachnoVa was selected as a Startup Grant 2026 recipient by Innovative Academy UGM.",
      "I architect scalable microservices systems in Go and Node.js — including KreaZcy, an in-house engine of 15+ composable services that new client products are assembled from. My work spans high-traffic ticketing (RoeTix, now powering 20+ clients across cities with 99.9% uptime), applied AI/ML (Kolosal Perfect Score), and Web3 (Credora on Mantle, NazarETH on Base).",
      "My undergraduate thesis, \"Hybrid Trust Architecture for Agentic AI: Integrating Verifiable Credentials and Soulbound Tokens,\" is planned for publication at ICSCSS 2027 (ACM). I care about robust, production-ready systems — comprehensive documentation, automated testing, and design-led, human-centered product craft.",
    ],
    photoAlt: "Photo of Muhammad Grandiv Lava Putra",
  },

  contact: {
    email: "grandivfarand@gmail.com",
    links: [
      {
        href: "https://www.linkedin.com/in/grandiv/",
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
