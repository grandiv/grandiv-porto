import type { Project } from "../types";
import roetixImg from "../assets/img-projects/roetix.jpg";
import truckErpImg from "../assets/img-projects/truckerp.jpg";
import credoraImg from "../assets/img-projects/credora.jpg";
import kolosalImg from "../assets/img-projects/kolosal.jpg";
import hawaiiImg from "../assets/img-projects/hawaii.jpg";

export const projects: Project[] = [
  {
    title: "RoeTix - Event Ticketing Platform",
    description:
      "9-service microservices platform in Go and Node.js for high-traffic event ticketing, now powering 20+ clients across cities with 99.9% uptime.",
    image: roetixImg.src,
    technologies: ["Go", "Node.js", "Redis", "Kafka", "Docker", "Nginx"],
    demo: "https://roetix.com",
    code: "https://github.com/grandiv",
  },
  {
    title: "KreaZcy → Truck Maintenance ERP",
    description:
      "An in-house Go microservices engine (DDD, CQRS, BFF, Temporal sagas) that client products are assembled from — shown here as a live multi-role fleet ERP with repair kanban and spare-part demand forecasting.",
    image: truckErpImg.src,
    technologies: ["Go", "Microservices", "Temporal", "React", "Docker"],
    demo: "https://truck-maintenance.izcy.tech",
    code: "https://github.com/grandiv",
  },
  {
    title: "Credora - On-Chain Reputation for AI Agents",
    description:
      "A Web3 arena on Mantle where AI trading agents commit decisions before outcomes are known, earning a verifiable, tamper-proof reputation. Backend built at The Turing Test Hackathon 2026.",
    image: credoraImg.src,
    technologies: ["Web3", "Mantle", "Solidity", "Node.js", "Vercel"],
    demo: "https://credora-turing.vercel.app",
    code: "https://github.com/grandiv",
  },
  {
    title: "Kolosal Perfect Score - AI ACT Test Engine",
    description:
      "AI-personalized ACT test-generation engine (FastAPI, Redis, Supabase) with a LaTeX-to-PDF pipeline and vision-based question extraction for exam-grade practice papers.",
    image: kolosalImg.src,
    technologies: ["FastAPI", "Python", "ML", "Redis", "Supabase"],
    demo: "https://www.perfectscoreact.com/",
    code: "https://github.com/grandiv",
  },
  {
    title: "Hawaii Deep-Sea Fishing - Charter Booking",
    description:
      "A polished booking and content platform for a deep-sea fishing-charter operator across four Hawaiian islands, focused on craft, trust, and conversion.",
    image: hawaiiImg.src,
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    demo: "https://hawaiideepsea.nozaracy.com",
    code: "https://github.com/grandiv",
  },
];
