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
    video: "assets/videos/chat-collector-demo.mp4",
    title: "Chat Collector Pro",
    description:
      "A comprehensive chat collector application built with React and Node.js, featuring real-time collaboration, project tracking, and team management capabilities.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Material-UI",
    ],
    links: {
      preview: "#",
      github: "https://github.com/theahmed619",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/magic-bento-demo.mp4",
    title: "Magic Bento Box",
    description:
      "Magic Bento Box is a platform for creating and sharing magic recipes that can be used in the game.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Stripe",
    ],
    links: {
      preview: "#",
      github: "#",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/chat-collector-demo.mp4",
    title: "Chat Collector Pro",
    description:
      "A comprehensive chat collector application built with React and Node.js, featuring real-time collaboration, project tracking, and team management capabilities.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Material-UI",
    ],
    links: {
      preview: "#",
      github: "#",
      githubApi: "#",
    },
  },
  // --- ADDED FOR TESTING ---
  {
    video: "assets/videos/new-project-2-demo.mp4",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Framer Motion.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: {
      preview: "#",
      github: "https://github.com/theahmed619",
      githubApi: "#",
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
