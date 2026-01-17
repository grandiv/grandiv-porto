// FAQ (Frequently Asked Questions) data
// Categories map to icon types in iconsData.js

import type { FaqCategories, Faq } from "../types";

export const faqCategories: FaqCategories = {
  "Web Development": "webdev",
  "Mobile Development": "mobile",
  "UI/UX Design & Prototyping": "design",
};

export const faqs: Faq[] = [
  {
    question: "What technologies do I use?",
    answer:
      "I specialize in full-stack development and DevOps with a strong focus on backend engineering. I work with Go and Node.js for backend services, TypeScript for type-safe development, React and Next.js for frontend applications. For databases, I use PostgreSQL and MongoDB. I'm experienced with DevOps tools like Docker, Kubernetes, Nginx, Redis, and Kafka for building scalable microservices architectures with CI/CD automation.",
    category: "webdev",
  },
  {
    question: "My Experience",
    answer:
      "I have extensive experience as a Backend Engineer and Full-Stack Developer at ArachnoVa, where I've architected multiple microservices platforms for high-traffic applications. I've built event ticketing systems handling 1,000+ concurrent users with 99.9% uptime, enterprise ERP systems with 8+ microservices, and SaaS platforms with payment gateway integrations. I also completed an internship at Telkom Indonesia working on SD-WAN and neuCentrIX services, and won First Runner-Up in the COMPFEST 16 AI Innovation Challenge against 300+ teams nationally.",
    category: "webdev",
  },
  {
    question: "My Education",
    answer:
      "I'm currently pursuing a Bachelor of Science in Information Technology at Gadjah Mada University in Yogyakarta, Indonesia (Expected graduation: 2026). My relevant coursework includes Software Engineering, Data Engineering, Web Development, Artificial Intelligence, Database Technology, Object-oriented Programming, and Data Structures & Algorithms. I've also completed specialized training including RUST Language Training, Advanced Deep Learning with Keras, Mobile Development Bootcamp (Best Project Award), and Web Development certifications. I continuously expand my knowledge through self-learning and staying current with emerging technologies.",
    category: "webdev",
  },
  {
    question: "How do I work in a team?",
    answer:
      "I have experience working in multidisciplinary teams as both a Technical Lead and Team Leader. I've led development teams through complex projects, implementing agile methodologies like Scrum and Kanban. I use Git/GitHub for version control, GitHub Actions for CI/CD automation, and project management tools to facilitate collaboration. I emphasize comprehensive technical documentation, code reviews, and establishing clear communication channels to ensure successful project delivery and knowledge sharing across the team.",
    category: "webdev",
  },
  {
    question: "Agile Methodologies",
    answer:
      "I have worked with agile methodologies like Scrum and Kanban. In Scrum, I participated in two-week sprints, where at the end of each sprint I would create a pull request (PR) with my work, which went through a review and correction phase before being merged and sent to production. I have also worked with Kanban, using boards to manage tasks and move them according to their progress status. Additionally, I participated in daily meetings (dailies) to plan and report project progress, ensuring efficient communication within the team.",
    category: "webdev",
  },
];
