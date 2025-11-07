import { Icons } from "@/components/icons";
import { Experience, NavLink, Project, Skill } from "./types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const projectsData: Project[] = [
  {
    video: "assets/videos/memehub.mp4",
    title: "MemeHub",
    description:
      "A full-stack MERN AI social app. Features user authentication (JWT), client-side Cloudinary uploads, and a dynamic feed to browse, post, and comment on memes.",
    technologies: [
    "ReactJS", "TailwindCSS", "ExpressJS", "MongoDB", "Cloudinary"
    ],
    links: {
      preview: "#",
      github: "https://github.com/theahmed619/WebDev/tree/main/MERN%20Projects/MemeHub",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/onecart.mp4",
    title: "E-Cart",
    description:
      "A full-stack MERN e-commerce platform. Implements product filtering, a shopping cart, and a full checkout flow. Features Google OAuth and standard email/password authentication.",
    technologies: [
    "React JS", "Node.js", "MongoDB", "Express", "Tailwind CSS"
    ],
    links: {
      preview: "#",
      github: "https://github.com/theahmed619/WebDev/tree/main/MERN%20Projects/e-commerce/oneCart",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/chatbot.mp4",
    title: "ChatBot",
    description:
      "A responsive chatbot application built with React and Tailwind. It connects to a Node.js/Express backend which securely queries the Google Gemini API for real-time responses",
    technologies: [
    "React JS", "Express JS",  "Tailwind CSS", "Gemini API"
    ],
    links: {
      preview: "#",
      github: "https://github.com/theahmed619/WebDev/tree/main/MERN%20Projects/chatbot/chatbot-v2",
      githubApi: "#",
    },
  },

  {
    video: "assets/videos/DevChat-Django.mp4",
    title: "Chat-App",
    description:
      "A real-time chat application built with Python and Django. Uses Django Channels for WebSocket communication and SQLite for message persistence.",
    technologies: ["Python", "Django", "SQLite"],
    links: {
      preview: "#",
      github: "https://github.com/theahmed619/Python-Lab/tree/main/Django/DevChat",
      githubApi: "#",
    },
  },
    {
    video: "assets/videos/HMS.mp4",
    title: "Hospital Management System",
    description:
      "A full-stack web application built with Java Spring Boot and PostgreSQL. Features server-side rendering with Thymeleaf for managing patient, doctor, and appointment data",
    technologies: ["Java", "SpringBoot", "Thymeleaf", "PostgreSQL"],
    links: {
      preview: "#",
      github: "https://github.com/theahmed619/SpringFramework-Lab",
      githubApi: "#",
    },
  },
    {
    video: 'assets/videos/chat-collector-demo.mp4',
    title: 'Chat Collector Pro',
    description:
      'A comprehensive chat collector application built with React and Node.js, featuring real-time collaboration, project tracking, and team management capabilities.',
    technologies: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Material-UI',
    ],
    links: {
      preview: '#',
      github: '#',
      githubApi: '#',
    },
  },
] as const;

export const experiencesData: Experience[] = [
  {
    title: "Software Developer",
    company: "DevMynt, remote",
    description:
      "Currently developing scalable cloud-based applications and microservices. Responsible for architecting solutions, code reviews, and mentoring junior developers in best practices.",
    period: "2025 Oct - present",
    technologies: ["NodeJS", "NextJS", "MongoDB", "Java", "AWS"],
  },
  {
    title: "Software Developer Intern",
    company: "Perceptive Solution, remote",
    description:
      "Worked on end-to-end ETL workflows using SSIS for automated data migration and Developed CRM modules and contributed to backend + UI enhancements with Flask",
    period: "2025 Aug - 2025 Oct",
    technologies: ["Python", "DotNET", "PostgreSQL", "PowerBI"],
  },
  // {
  //   title: 'Full Stack Developer',
  //   company: 'Digital Innovations, remote',
  //   description:
  //     'Built responsive web applications from concept to deployment. Worked with clients to understand requirements and delivered custom solutions that exceeded expectations.',
  //   period: '2022 Jul - 2022 Dec',
  //   technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
  // },
  // {
  //   title: 'Junior Software Engineer',
  //   company: 'TechCorp Solutions, San Francisco CA',
  //   description:
  //     'Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.',
  //   period: '2022 Jan - 2022 Jul',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  // },
];

export const skillsData: Skill[] = [
  { name: "Sass", icon: <Icons.sass className="size-12" /> },
  { name: "Tailwind", icon: <Icons.tailwind className="size-12" /> },
  { name: "JavaScript", icon: <Icons.javascript className="size-12" /> },
  { name: "TypeScript", icon: <Icons.typescript className="size-12" /> },
  { name: "React", icon: <Icons.react className="size-12" /> },
  { name: "NextJS", icon: <Icons.nextjs className="size-12" /> },
  { name: "NestJS", icon: <Icons.nestjs className="size-12" /> },
  { name: "Prisma", icon: <Icons.prisma className="size-12" /> },
  { name: "Docker", icon: <Icons.docker className="size-12" /> },
];
