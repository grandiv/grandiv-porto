import urbanStyle from "../assets/img-projects/urbanStyle.png";
import imgNote from "../assets/img-projects/note-app.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";

export const proyectos = [
  {
    titulo: "React Shop",
    imagen: ReactEcommerce.src,
    tecnologias: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "jwt"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    codigo: "https://github.com/Grandiv-R-collins/React-E-commerce.git",
  },
  {
    titulo: "E-commerce Urban Style",
    descripcion: "Brief description of project 1.",
    imagen: urbanStyle.src,
    tecnologias: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Grandiv-R-collins/ProyectoFinal-Rodriguez.git",
  },
  {
    titulo: "Organization App",
    imagen: imgNote.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/Grandiv-R-collins/Front-react-todo",
  },
  {
    titulo: "REST API for Ecommerce",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app/",
    codigo: "https://github.com/Grandiv-R-collins/ApiRest-Ecommerce.git",
  },
];
