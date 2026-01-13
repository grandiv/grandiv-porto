import type { Project } from "../types";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import imgNote from "../assets/img-projects/note-app.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";

export const projects: Project[] = [
  {
    title: "React Shop",
    image: ReactEcommerce.src,
    technologies: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "jwt"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    code: "https://github.com/Grandiv-R-collins/React-E-commerce.git",
  },
  {
    title: "E-commerce Urban Style",
    description: "Brief description of project 1.",
    image: urbanStyle.src,
    technologies: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    code: "https://github.com/Grandiv-R-collins/ProyectoFinal-Rodriguez.git",
  },
  {
    title: "Organization App",
    image: imgNote.src,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    code: "https://github.com/Grandiv-R-collins/Front-react-todo",
  },
  {
    title: "REST API for Ecommerce",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app/",
    code: "https://github.com/Grandiv-R-collins/ApiRest-Ecommerce.git",
  },
];
