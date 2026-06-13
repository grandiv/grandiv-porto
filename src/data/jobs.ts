import type { Job } from "../types";

export const jobs: Job[] = [
  {
    title: "Chief Technology Officer - ArachnoVa",
    time: ["2025 - Present"],
    description:
      "Lead a small engineering team at a software house, setting technical direction across ideation, architecture, delivery, and infrastructure for the entire client product portfolio.",
    list: [
      "Architected KreaZcy, an in-house, use-case-agnostic microservices engine in Go — 15+ composable services on shared libraries for domain-driven design, CQRS read models, Backend-for-Frontend, and Temporal saga orchestration — from which new client products are assembled rather than rebuilt",
      "Lead a team of three engineers and own the self-managed VPS infrastructure (CI/CD, Nginx, SSL/TLS, monitoring, zero-downtime deployment) behind products including RoeTix, the Truck Maintenance ERP, Villa Yutaka, and Hawaii Deep-Sea Fishing",
      "ArachnoVa was selected as a Startup Grant 2026 recipient by Innovative Academy, Universitas Gadjah Mada",
    ],
  },
  {
    title: "Backend & Infrastructure Lead - RoeTix Ticketing Platform (ArachnoVa)",
    time: ["Dec 2025 - Present"],
    description:
      "Architecting a 9-service microservices platform using Go and Node.js for high-traffic event ticketing at Rumah Orkestra Jogja, now powering 20+ clients across concert and competition events in multiple cities.",
    list: [
      "Implementing CI/CD pipelines with GitHub Actions, Docker, and Watchtower achieving zero-downtime deployments with automated health checks and rollback capabilities, reducing deployment time by 70%",
      "Managing production infrastructure with Nginx load balancing, API gateway, SSL/TLS automation, maintaining 99.9% uptime during peak ticket sale events with 1,000+ concurrent users",
      "Building distributed system with Redis, Kafka, REST, Webhook, WebSocket to reduce server overload incidents by 85% through rate limiting, queueing, idempotency, and circuit breaker patterns",
      "Serving 20+ medium-to-large-scale clients across cities with comprehensive technical documentation, deployment runbooks, and incident response procedures",
    ],
  },
  {
    title: "Backend & ML Engineer - Kolosal Perfect Score",
    time: ["Dec 2025 - Present"],
    description:
      "Building the AI test-generation backend for Kolosal Perfect Score (Newark, Delaware, US; remote), an AI-personalized ACT test-prep platform.",
    list: [
      "Built a personalized test-generation engine (FastAPI, Redis job queue, Supabase) with challenge, targeted weak-area, and randomized modes, plus a LaTeX-to-PDF pipeline producing exam-grade papers",
      "Engineered vision-based extraction to convert scanned source exams into structured question banks, served through a type-safe Encore.ts API with JWT authentication and Redis caching",
    ],
  },
  {
    title: "Full-Stack Developer & Technical Lead - PT Solusi Cerdas Sampah Indonesia (ArachnoVa)",
    time: ["Nov 2025 - Present"],
    description:
      "Architected and developed an enterprise microservices platform with 8 independent services using Node.js, Express.js, MongoDB, and TypeScript.",
    list: [
      "Implemented JWT authentication, Redis session management, and comprehensive RBAC for multi-level user authorization",
      "Developed Admin Dashboard with React 18, ReactFlow drag-and-drop workflow editor, and Recharts analytics",
      "Built Worker PWA with React 19, Vite 9, GPS tracking via Leaflet, optimized for mobile-first experience",
      "Achieved 82.75% test coverage using Jest with MongoDB Memory Server, writing 3,700+ lines of comprehensive tests with automated CI/CD validation",
      "Deployed to production VPS with Nginx reverse proxy, SSL/TLS encryption, load balancing, and delivered complete technical documentation",
    ],
  },
  {
    title: "Full-Stack Developer & Software Architect - SonneTix Event Ticketing (ArachnoVa)",
    time: ["Sep 2025 - Oct 2025"],
    description:
      "Architected a microservices-based event ticketing platform featuring RESTful APIs, PostgreSQL, and Zod validation.",
    list: [
      "Integrated Midtrans payment gateway with secure transaction processing and webhook notifications",
      "Implemented JWT authentication with bcrypt password hashing, email verification via Nodemailer, profile management with Multer file uploads, and rate limiting",
      "Built frontend using React 19, Vite 6.3, and TailwindCSS 3.4 with cross-service API integration",
      "Established enterprise-grade features including API documentation endpoints, health check monitoring, and Helmet security protection",
    ],
  },
  {
    title: "Full-Stack Developer - NovaGate: Form & Landing Page Builder (ArachnoVa)",
    time: ["Sep 2025 - Nov 2025"],
    description:
      "Architected and developed a full-stack SaaS platform using Next.js 15 with App Router, TypeScript, PostgreSQL, and Prisma ORM.",
    list: [
      "Implemented NextAuth.js v5 with dual authentication strategies: JWT sessions for form owners using bcrypt credentials and Google OAuth for respondents, supporting RBAC with middleware",
      "Built drag-and-drop form builder with 18+ field types, autosave functionality, normalized product catalog with variants/inventory tracking, and validation using Zod and React Hook Form",
      "Integrated dual payment gateways (Tripay + Midtrans) with configurable fee handling, webhook signature verification, product-based pricing calculation, and transaction tracking",
      "Developed custom subdomain routing, established RESTful API with 20+ endpoints, optimized Cloudinary file upload, and deployment with Docker, Nginx, and PM2",
    ],
  },
  {
    title: "Internship - Telkom Indonesia",
    time: ["Jan 2025 - Feb 2025"],
    description:
      "Contributed to product development lifecycle of SD-WAN and neuCentrIX services, from ideation to implementation.",
    list: [
      "Designed end-to-end user experience and system architecture for SD-WAN Inventory Portal (SALMA), creating activity diagrams, use-case diagrams, and UI/UX prototypes in Figma",
      "Conducted comprehensive QA testing on neuCentrIX customer portal using Burp Suite, Nmap, and ZAP to identify performance bottlenecks, UI/UX issues, and security vulnerabilities",
      "Performed in-depth business and technical analysis on new product initiatives to validate market fit and strategy",
      "Developed and integrated Tableau-based monitoring dashboard to track service performance and provide data-driven insights",
    ],
  },
  {
    title: "Team Leader & Full-Stack Developer - COMPFEST 16 AI Innovation Challenge",
    time: ["Jul 2024 - Oct 2024"],
    description:
      "Led a team of three to develop an AI-driven SaaS web application, achieving First Runner-Up against 300+ teams nationally.",
    list: [
      "Built responsive UI using Next.js, React.js, and Tailwind CSS",
      "Developed backend architecture with Node.js, Express.js, integrated Supabase PostgreSQL with Prisma ORM, and Google Authentication",
      "Deployed and managed app using DigitalOcean Droplet, Nginx, Docker, and CI/CD with GitHub Actions; also deployed on Google Cloud Run",
      "Integrated Vertex AI with Gemini model for AI-driven content generation, YouTube API and Unsplash API for dynamic content, and Stripe for payment processing",
    ],
  },
];
