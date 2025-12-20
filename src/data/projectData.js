import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";

export const proyectos = [
  {
    titulo: "React Shop",
    descripcion:
      "Full stack e-commerce developed with React, Node.js and MongoDB. Includes authentication, shopping cart, search, categories, reviews, etc.",
    imagen: ReactEcommerce.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    codigo: "https://github.com/Grandiv-R-collins/React-E-commerce.git",
    categoria: "fullstack",
  },
  {
    titulo: "Organization App",
    descripcion:
      "Full-stack app with CRUD functions, board and list creation, user authentication, developed with MERN stack.",
    imagen: imgNote.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/Grandiv-R-collins/Front-react-todo",
    categoria: "fullstack",
  },
  {
    titulo: "E-commerce Urban Style",
    descripcion:
      "Functional clothing and accessories e-commerce, with shopping cart, categories and payment gateway developed in React.",
    imagen: urbanStyle.src,
    tecnologias: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Grandiv-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: "fullstack",
  },
  {
    titulo: "Artisan Store",
    descripcion:
      "Full-Stack ecommerce to view, buy and sell your products, with login for users and sellers.",
    imagen:
      "https://i.pinimg.com/736x/c9/70/bf/c970bfbc24489e39418b2c1b1f8f74ef.jpg",
    tecnologias: ["React", "Node", "Express", "MongoDB"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    codigo: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    categoria: "fullstack",
  },
  {
    titulo: "Income-Expense Tracker",
    descripcion:
      "App that performs CRUD operations to add, view, edit and delete income/expenses.",
    imagen:
      "https://i.pinimg.com/736x/a4/85/c4/a485c4da3e78f4f518ddbcdb6637bacf.jpg",
    tecnologias: ["React", "contextAPI"],
    demo: "https://traker-gastos-ingresos.onrender.com/",
    codigo: "https://github.com/Grandiv-R-collins/Traker-Gastos-Ingresos",
    categoria: "frontend",
  },
  {
    titulo: "Weather App",
    descripcion:
      "Application made with React that uses an API to display real-time weather.",
    imagen: "https://i.pinimg.com/736x/10/6e/cd/106ecd1c3defb83ea0f87a334.jpg",
    tecnologias: ["React", "contextAPI", "tailwind"],
    demo: "https://app-clima-om19.onrender.com/",
    codigo: "https://github.com/Grandiv-R-collins/app-clima",
    categoria: "frontend",
  },
  {
    titulo: "Legal Staff",
    descripcion:
      "Website developed with Astro and Tailwind, marketing funnel for law firms.",
    imagen: legalWeb.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    codigo: "https://github.com/Grandiv-R-collins/legal-staff",
    categoria: "frontend",
  },
  {
    titulo: "Medicare",
    descripcion:
      "Website developed with Astro and Tailwind, marketing funnel for Health Insurance.",
    imagen: mediCare.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    codigo: "https://github.com/Grandiv-R-collins/obra-social-landing.git",
    categoria: "frontend",
  },
  {
    titulo: "AstroFit",
    descripcion:
      "Website developed with Astro and Tailwind, marketing funnel for fitness coaching.",
    imagen: astroFit.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    codigo: "https://github.com/Grandiv-R-collins/GymPage.git",
    categoria: "frontend",
  },
  {
    titulo: "REST API for Ecommerce",
    descripcion:
      "RESTful API built with Node.js, Express and MongoDB to manage tasks with CRUD operations, user registration and JWT login.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app/",
    codigo: "https://github.com/Grandiv-R-collins/ApiRest-Ecommerce.git",
    categoria: "backend",
  },
  {
    titulo: "100 days coding in JS",
    descripcion: "100 projects, made with HTML, CSS and JavaScript.",
    imagen:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    tecnologias: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://one00-proyects-web.onrender.com/",
    codigo: "https://github.com/Grandiv-R-collins/100-days-of-coding-in-JS",
    categoria: "frontend",
  },
  {
    titulo: "PlaniFy",
    descripcion:
      "Web app to organize your projects, made with React + Vite, TypeScript and Tailwind for styling.",
    imagen:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    tecnologias: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    codigo: "https://github.com/Grandiv-R-collins/PlaniFy-organization-app",
    categoria: "frontend",
  },
  {
    titulo: "Verbenas Landscapes",
    descripcion:
      "Static page developed with Astro and Tailwind as a challenge for a startup.",
    imagen: Verbenas.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    codigo: "https://github.com/Grandiv-R-collins/challenge-Neowyze.git",
    categoria: "frontend",
  },
  {
    titulo: "REST API",
    descripcion:
      "RESTful API built with Express and MongoDB to manage tasks with CRUD operations, user registration and JWT login.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    codigo: "https://github.com/Grandiv-R-collins/Back-express-todo.git",
    categoria: "backend",
  },
];
