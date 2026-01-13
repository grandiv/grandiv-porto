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
      "I currently work with technologies like React, Next.js, Vue.js, Astro, Tailwind, Bootstrap and other libraries and frameworks for frontend, and in the backend I work with Node.js, Express, MongoDB, Firebase, among others.",
    category: "webdev",
  },
  {
    question: "My Experience",
    answer:
      "I have experience working in startups and technology consulting firms, developing and building websites from Figma designs. For this, I use frontend technologies like Astro and React, along with Tailwind CSS and other libraries and frameworks for styling and interface optimization.",
    category: "webdev",
  },
  {
    question: "My Education",
    answer:
      "I studied a university-level technical degree in automation at ITU, which gave me the foundations in programming. Later, I decided to focus on web and software development studying at ITU. Additionally, I completed various courses, diplomas and training programs at major Argentine universities, such as UTN and the University Technological Institute. I also complement my education with self-taught learning, which allows me to stay updated with technological advances in software development.",
    category: "webdev",
  },
  {
    question: "How do I work in a team?",
    answer:
      "I have experience working in multidisciplinary teams, where I have been in charge of frontend development for web applications. For this, I use agile methodologies like Scrum and Kanban, as well as version control tools like Git and GitHub to manage the workflow. I also have experience using project management tools like Trello and Jira, facilitating organization and collaboration within the team.",
    category: "webdev",
  },
  {
    question: "Agile Methodologies",
    answer:
      "I have worked with agile methodologies like Scrum and Kanban. In Scrum, I participated in two-week sprints, where at the end of each sprint I would create a pull request (PR) with my work, which went through a review and correction phase before being merged and sent to production. I have also worked with Kanban, using boards to manage tasks and move them according to their progress status. Additionally, I participated in daily meetings (dailies) to plan and report project progress, ensuring efficient communication within the team.",
    category: "webdev",
  },
];
