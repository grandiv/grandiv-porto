import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";

export const projects = [
  {
    title: "PT Solusi Cerdas Sampah Indonesia (SolDas) ERP System",
    description:
      "Enterprise microservices platform with independent services such as PresenceService, ProcedureService, AuthService, TaskService, FinanceService, InventoryService, etc.",
    image: ReactEcommerce.src,
    technologies: ["Express", "Docker", "K8S", "MongoDB"],
    demo: "https://bsigunungputri.web.id",
    code: "https://github.com/Grandiv-R-collins/React-E-commerce.git",
    category: "backend",
  },
  {
    title: "NovaGate - Form & Landing Page Builder Platform",
    description:
      "Full-stack SaaS platform featuring dynamic form builder, landing page creator, custom subdomain system, and dual payment gateway integration.",
    image: imgNote.src,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    code: "https://github.com/Grandiv-R-collins/Front-react-todo",
    category: "fullstack",
  },
  {
    title: "E-commerce Urban Style",
    description:
      "Functional clothing and accessories e-commerce, with shopping cart, categories and payment gateway developed in React.",
    image: urbanStyle.src,
    technologies: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    code: "https://github.com/Grandiv-R-collins/ProyectoFinal-Rodriguez.git",
    category: "fullstack",
  },
  {
    title: "Artisan Store",
    description:
      "Full-Stack ecommerce to view, buy and sell your products, with login for users and sellers.",
    image:
      "https://i.pinimg.com/736x/c9/70/bf/c970bfbc24489e39418b2c1b1f8f74ef.jpg",
    technologies: ["React", "Node", "Express", "MongoDB"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    code: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    category: "fullstack",
  },
  {
    title: "Income-Expense Tracker",
    description:
      "App that performs CRUD operations to add, view, edit and delete income/expenses.",
    image:
      "https://i.pinimg.com/736x/a4/85/c4/a485c4da3e78f4f518ddbcdb6637bacf.jpg",
    technologies: ["React", "contextAPI"],
    demo: "https://traker-gastos-ingresos.onrender.com/",
    code: "https://github.com/Grandiv-R-collins/Traker-Gastos-Ingresos",
    category: "frontend",
  },
  {
    title: "Weather App",
    description:
      "Application made with React that uses an API to display real-time weather.",
    image: "https://i.pinimg.com/736x/10/6e/cd/106ecd1c3defb83ea0f87a334.jpg",
    technologies: ["React", "contextAPI", "tailwind"],
    demo: "https://app-clima-om19.onrender.com/",
    code: "https://github.com/Grandiv-R-collins/app-clima",
    category: "frontend",
  },
  {
    title: "Legal Staff",
    description:
      "Website developed with Astro and Tailwind, marketing funnel for law firms.",
    image: legalWeb.src,
    technologies: ["Astro", "tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    code: "https://github.com/Grandiv-R-collins/legal-staff",
    category: "frontend",
  },
  {
    title: "Medicare",
    description:
      "Website developed with Astro and Tailwind, marketing funnel for Health Insurance.",
    image: mediCare.src,
    technologies: ["Astro", "tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    code: "https://github.com/Grandiv-R-collins/obra-social-landing.git",
    category: "frontend",
  },
  {
    title: "AstroFit",
    description:
      "Website developed with Astro and Tailwind, marketing funnel for fitness coaching.",
    image: astroFit.src,
    technologies: ["Astro", "tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    code: "https://github.com/Grandiv-R-collins/GymPage.git",
    category: "frontend",
  },
  {
    title: "REST API for Ecommerce",
    description:
      "RESTful API built with Node.js, Express and MongoDB to manage tasks with CRUD operations, user registration and JWT login.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app/",
    code: "https://github.com/Grandiv-R-collins/ApiRest-Ecommerce.git",
    category: "backend",
  },
  {
    title: "100 days coding in JS",
    description: "100 projects, made with HTML, CSS and JavaScript.",
    image:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    technologies: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://one00-proyects-web.onrender.com/",
    code: "https://github.com/Grandiv-R-collins/100-days-of-coding-in-JS",
    category: "frontend",
  },
  {
    title: "PlaniFy",
    description:
      "Web app to organize your projects, made with React + Vite, TypeScript and Tailwind for styling.",
    image:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    technologies: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    code: "https://github.com/Grandiv-R-collins/PlaniFy-organization-app",
    category: "frontend",
  },
  {
    title: "Verbenas Landscapes",
    description:
      "Static page developed with Astro and Tailwind as a challenge for a startup.",
    image: Verbenas.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    code: "https://github.com/Grandiv-R-collins/challenge-Neowyze.git",
    category: "frontend",
  },
  {
    title: "REST API",
    description:
      "RESTful API built with Express and MongoDB to manage tasks with CRUD operations, user registration and JWT login.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    code: "https://github.com/Grandiv-R-collins/Back-express-todo.git",
    category: "backend",
  },
];
