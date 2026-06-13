import type { Project } from "../types";
import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";
import roetixImg from "../assets/img-projects/roetix.jpg";
import soldasImg from "../assets/img-projects/soldas.svg";
import novagateImg from "../assets/img-projects/novagate.svg";
import compfestImg from "../assets/img-projects/compfest.jpg";
import jogjaSmartTourImg from "../assets/img-projects/jogjasmarttour.png";
import sampahJujurImg from "../assets/img-projects/sampahjujur.png";
import wonderfulYogyakartaImg from "../assets/img-projects/WonderfulYogyakarta.jpg";
import truckErpImg from "../assets/img-projects/truckerp.jpg";
import credoraImg from "../assets/img-projects/credora.jpg";
import kolosalImg from "../assets/img-projects/kolosal.jpg";
import hawaiiImg from "../assets/img-projects/hawaii.jpg";
import nazarethImg from "../assets/img-projects/nazareth.jpg";

export const projects: Project[] = [
  {
    title: "KreaZcy → Truck Maintenance ERP",
    description:
      "KreaZcy is an in-house, use-case-agnostic microservices engine in Go (15+ composable services with domain-driven design, CQRS read models, Backend-for-Frontend, and Temporal saga orchestration) that ArachnoVa assembles new client products from. Pictured is one live product built on it: a multi-role fleet Truck Maintenance ERP for drivers, foremen, the workshop, and owners, with a repair kanban, role-based dashboards, and spare-part demand forecasting.",
    image: truckErpImg.src,
    technologies: ["Go", "Microservices", "Temporal", "CQRS", "React", "Docker"],
    demo: "https://truck-maintenance.izcy.tech",
    code: "https://github.com/grandiv",
    category: "backend",
  },
  {
    title: "Credora - On-Chain Reputation Arena for AI Trading Agents",
    description:
      "A Web3 competition arena on Mantle (an Ethereum Layer 2) where AI trading agents commit each decision publicly before the outcome is known, earning a transparent, tamper-proof Credora Score recorded on-chain. I built the backend that imports strategy track records, computes the score, and serves the frontend. Built at The Turing Test Hackathon 2026.",
    image: credoraImg.src,
    technologies: ["Web3", "Mantle", "Solidity", "Node.js", "Vercel"],
    demo: "https://credora-turing.vercel.app",
    code: "https://github.com/grandiv",
    category: "fullstack",
  },
  {
    title: "Kolosal Perfect Score - AI-Personalized ACT Test Engine",
    description:
      "AI test-prep platform that converts real past ACT material into an endless supply of personalized, exam-grade practice papers. I built the generation engine (FastAPI, Redis job queue, Supabase) with challenge, targeted weak-area, and randomized modes, a LaTeX-to-PDF rendering pipeline, and vision-based extraction that turns scanned source tests into structured question banks. Remote, for Kolosal (Newark, Delaware, US).",
    image: kolosalImg.src,
    technologies: ["FastAPI", "Python", "Machine Learning", "Redis", "Supabase", "Encore.ts"],
    demo: "https://www.perfectscoreact.com/",
    code: "https://github.com/grandiv",
    category: "backend",
  },
  {
    title: "NazarETH - On-Chain Fitness Commitment Protocol",
    description:
      "A Web3 accountability protocol on Base where athletes stake USDC against verifiable fitness goals — hit the target to earn it back, miss it and forfeit the unearned portion. Built for Base Batches 003 (Student Track).",
    image: nazarethImg.src,
    technologies: ["Web3", "Base", "Solidity", "USDC", "React"],
    demo: "https://nazareth.izcy.tech",
    code: "https://github.com/grandiv",
    category: "fullstack",
  },
  {
    title: "Hawaii Deep-Sea Fishing - Charter Booking Platform",
    description:
      "A booking and content platform for a deep-sea fishing-charter operator across Oahu, Maui, Kona, and Kauai — built to turn casual browsers into confident bookings with verified reviews, transparent pricing, and instant confirmation. A design-led, conversion-focused build for a real client.",
    image: hawaiiImg.src,
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    demo: "https://hawaiideepsea.nozaracy.com",
    code: "https://github.com/grandiv",
    category: "frontend",
  },
  {
    title: "RoeTix - Event Ticketing Platform for Rumah Orkestra Jogja",
    description:
      "9-service microservices platform using Go and Node.js for high-traffic event ticketing, now powering 20+ clients across concert and competition events in multiple cities. Features CI/CD with GitHub Actions, Docker, Watchtower achieving zero-downtime deployments. Maintains 99.9% uptime with 1,000+ concurrent users.",
    image: roetixImg.src,
    technologies: ["Go", "Node.js", "Redis", "Kafka", "Docker", "Nginx"],
    demo: "https://roetix.com",
    code: "https://github.com/grandiv",
    category: "backend",
  },
  {
    title: "PT Solusi Cerdas Sampah Indonesia (SolDas) ERP System",
    description:
      "Enterprise microservices platform with 8 independent services using Node.js, Express.js, MongoDB, and TypeScript. Features Admin Dashboard with ReactFlow workflow editor, Worker PWA with GPS tracking, and 82.75% test coverage with Jest.",
    image: soldasImg.src,
    technologies: ["Node.js", "TypeScript", "MongoDB", "React", "Redis"],
    demo: "https://bsigunungputri.web.id",
    code: "https://github.com/grandiv",
    category: "fullstack",
  },
  {
    title: "SonneTix - Event Ticketing Platform",
    description:
      "Microservices-based event ticketing platform in Node.js with RESTful APIs, PostgreSQL, and Zod validation. Integrated Midtrans payment gateway, JWT authentication, email verification, and enterprise-grade security features.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    technologies: ["Node.js", "PostgreSQL", "React", "Vite", "Midtrans"],
    demo: "https://sonnetix.com",
    code: "https://github.com/grandiv",
    category: "fullstack",
  },
  {
    title: "NovaGate - Form & Landing Page Builder Platform",
    description:
      "Full-stack SaaS platform using Next.js 15 with App Router, TypeScript, PostgreSQL, and Prisma ORM. Features drag-and-drop form builder with 18+ field types, custom subdomain routing, dual payment gateways (Tripay + Midtrans), and NextAuth.js v5 authentication.",
    image: novagateImg.src,
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    demo: "https://novagate.app",
    code: "https://github.com/grandiv",
    category: "fullstack",
  },
  {
    title: "Jogja Smart Tour - AI-Powered Travel Planning Platform",
    description:
      "AI-powered travel planning web application for Yogyakarta tourism with automated itinerary generation using Azure OpenAI (DeepSeek-R1). Features interactive multi-style maps with Leaflet, smart chatbot assistant, comprehensive destination catalog with advanced filtering, Google OAuth authentication, and cost estimation breakdown. Deployed on Railway.app with Docker containerization and CI/CD via GitHub Actions.",
    image: jogjaSmartTourImg.src,
    technologies: [
      "Next.js",
      "TypeScript",
      "Azure OpenAI",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    demo: "https://jogja-smart-tour-frontend-v1-production.up.railway.app",
    code: "https://github.com/saaip7/jogja-smart-tour",
    category: "fullstack",
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
  {
    title: "FOREAL - Food Rescue and Allocation Mobile App",
    description:
      "Social impact Android application addressing UN SDG 2: Zero Hunger by connecting food donors with recipients and volunteers. Built with Kotlin and Firebase, featuring three-sided marketplace architecture, Google OAuth authentication, random donation matching algorithm, and real-time Firestore synchronization. Implements dynamic UI with custom popups for donation-recipient pairing, volunteer delivery selection, and comprehensive CRUD operations. Rapid MVP development completed in 10 days with team of 3 developers.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    technologies: ["Kotlin", "Firebase", "Firestore", "Google OAuth", "Android"],
    demo: "https://github.com/grandiv/FOREAL",
    code: "https://github.com/grandiv/FOREAL",
    category: "fullstack",
  },
  {
    title: "Wonderful Yogyakarta - Interactive Tourism Website",
    description:
      "Award-winning tourism website for Web Development Competition 2024 showcasing Yogyakarta Special Region's 5 regions with advanced parallax scrolling using Framer Motion, glassmorphism UI, and smooth animations via AOS. Built with Next.js 14 App Router, Tailwind CSS, and Swiper carousel featuring interactive region navigation, modal-based destination galleries, and responsive design across mobile/tablet/desktop. Features custom typography, isometric platform design, and immersive storytelling. Lead developer in team of 3, responsible for core features, navbar implementation, and component architecture.",
    image: wonderfulYogyakartaImg.src,
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Swiper"],
    demo: "https://github.com/grandiv/wdc_n93_w3b",
    code: "https://github.com/grandiv/wdc_n93_w3b",
    category: "frontend",
  },
  {
    title: "COMPFEST 16 AI Innovation Challenge - First Runner-Up",
    description:
      "AI-driven SaaS web application that achieved second place against 300+ teams nationally. Features Vertex AI with Gemini model for content generation, YouTube and Unsplash API integrations, deployed on DigitalOcean and Google Cloud Run with CI/CD.",
    image: compfestImg.src,
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Vertex AI", "Docker"],
    demo: "https://compfest-ai.app",
    code: "https://github.com/grandiv",
    category: "fullstack",
  },
];
