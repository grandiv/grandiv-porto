// Services/Features offered
// Icon names correspond to react-icons imports

import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "microservices",
    title: "Microservices Architecture",
    description:
      "Designing and implementing scalable microservices platforms with Go and Node.js, featuring distributed systems, inter-service communication, and event-driven patterns.",
    icon: "FaRocket",
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    description:
      "Building CI/CD pipelines with Docker, Kubernetes, and GitHub Actions. Managing production infrastructure with Nginx, Redis, Kafka, and achieving 99.9% uptime for high-traffic applications.",
    icon: "FaLaptopCode",
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "Creating end-to-end SaaS platforms with React, Next.js, TypeScript for frontend, and Node.js, PostgreSQL, MongoDB for backend. Implementing secure authentication, payment gateways, and comprehensive testing.",
    icon: "FaBolt",
  },
];
