import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig,
    SiPython
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Student Copilot",
        description:
            "Student Copilot is an AI tool that helps students stay organized and boost productivity. It generates lecture notes, quizzes, and manages course schedules. The integrated chatbot provides real-time Q&A for better engagement and understanding of course material.",
    technologies: [SiTypescript,SiTailwindcss],
        techNames: ["TypeScript", "Tailwind CSS", "Langchain"],
        techLinks: ["https://www.typescriptlang.org/", "https://tailwindcss.c", "https://www.langchain.com/"],
        github: "https://github.com/Egham-7/StudentCopilot",
        demo: "https://www.studentcopilot.app/",
        image: "/projects/studentcopilot.png",
        available: true,
    },
    {
        id: 1,
        name: "Readyou",
        description:
            "The Dynamic README Generator automatically creates clear, structured README.md files by pulling key repository details. It streamlines documentation, saving developers time with easy-to-understand, informative files.",
        technologies: [SiNextdotjs,SiPython ],
        techNames: ["NextJS", "Python" ],
        techLinks: [ "https://nextjs.org/telemetry", "https://www.python.org/"],
        github: "https://github.com/Egham-7/readme-ai",
        demo: "https://readyou.uk/",
        image: "/projects/readyou.png",
        available: true,
    },
];
