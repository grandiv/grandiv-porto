import type { Project } from "../types";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import imgNote from "../assets/img-projects/note-app.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";
import roetixImg from "../assets/img-projects/roetix.png";
import soldasImg from "../assets/img-projects/soldas.svg";
import novagateImg from "../assets/img-projects/novagate.svg";
import sampahJujurImg from "../assets/img-projects/sampahjujur.png";

export const projects: Project[] = [
  {
    title: "RoeTix - Event Ticketing Platform",
    description:
      "9-service microservices platform using Go and Node.js for high-traffic event ticketing with 99.9% uptime.",
    image: roetixImg.src,
    technologies: ["Go", "Node.js", "Redis", "Kafka", "Docker", "Nginx"],
    demo: "https://roetix.com",
    code: "https://github.com/grandiv",
  },
  {
    title: "PT SolDas ERP System",
    description:
      "Enterprise microservices platform with 8 services, Admin Dashboard with ReactFlow, and 82.75% test coverage.",
    image: soldasImg.src,
    technologies: ["Node.js", "TypeScript", "MongoDB", "React", "Redis"],
    demo: "https://bsigunungputri.web.id",
    code: "https://github.com/grandiv",
  },
  {
    title: "NovaGate - Form & Landing Page Builder",
    description:
      "Full-stack SaaS platform with Next.js 15, drag-and-drop form builder with 18+ field types, and dual payment gateways.",
    image: novagateImg.src,
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    demo: "https://novagate.app",
    code: "https://github.com/grandiv",
  },
  {
    title: "Sampah Jujur - Waste Management Marketplace",
    description:
      "Enterprise-grade Android two-sided marketplace connecting households with waste collectors for recyclable materials. Built with Jetpack Compose and MVVM + Clean Architecture, featuring hybrid Room + Firebase architecture for offline-first capabilities with 82% reduction in cloud reads. Implements real-time GPS tracking with 10-second location updates, Firebase authentication with Google Sign-In, real-time chat system, comprehensive analytics dashboards, and Cloudinary image management. Role: Location & Media Specialist in team of 3.",
    image: sampahJujurImg.src,
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "Room Database",
      "OpenStreetMap",
      "Cloudinary",
    ],
    demo: "https://github.com/grandiv",
    code: "https://github.com/grandiv",
    category: "fullstack",
  },
];
