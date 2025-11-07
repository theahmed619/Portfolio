// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import devmynt from "./assets/company_logo/devmynt.png"
import Perceptive_solutions from "./assets/company_logo/Perceptive_solutions.jfif"

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import mumbai_university from './assets/education_logo/mumbai_university.jfif';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import memehub from './assets/work_logo/memehub1.png';
import onecart from './assets/work_logo/onecart.png';
import chatbot from './assets/work_logo/chatbot.png';
import chatapp from './assets/work_logo/chatapp.png';
import hms from './assets/work_logo/hms.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'JS', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    
   
     
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
      { name: 'PostgreSQL', logo: postgreLogo },
        { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
   
      { name: 'Vercel', logo: vercelLogo },
   
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: devmynt,
      role: "Software Developer",
      company: "DevMynt",
      date: "October 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: Perceptive_solutions,
      role: "Software Developer Intern",
      company: "Perceptive Software Solutions",
      date: "Aug 2025 - Oct 2025",
      desc: "Worked on end-to-end ETL workflows using SSIS for automated data migration and Developed CRM modules and contributed to backend + UI enhancements with Flask",
      skills: [
        "Python",
        "DotNET",
        "MS SQL",
        "HTML",
        "CSS",
      ],
    },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: mumbai_university,
      school: "Mumbai University, Mumbai",
      date: "September 2025 - May 2027",
      grade: " CGPA",
      desc: "Completed my M.Sc. IT with a focus on Artificial Intelligence, Machine Learning, Cloud Computing, and Data Science. Built a strong understanding of advanced computing concepts and gained hands-on experience through projects and practical coursework that strengthened my problem-solving and analytical skills.",
      degree: "M.Sc. IT",
    },
    {
      id: 1,
      img: mumbai_university,
      school: "Mumbai University, Mumbai",
      date: "July 2022 - Aug 2025",
      grade: "9.4 CGPA",
      desc: "I completed my Bachelor's degree in Information Technology (B.Sc.) from Mumbai University, Mumbai. Throughout my studies, Gained a strong foundation in core IT principles, including Data Structures, Web Development, and Database Management Systems.",
      degree: "Bachelor of Science - BSC (Information Technology)",
    },
    // {
    //   id: 2,
    //   img: vpsLogo,
    //   school: "Vatsalya Public School Govardhan, Mathura",
    //   date: "Apr 2017 - March 2018",
    //   grade: "78%",
    //   desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    //   degree: "CBSE(XII) - PCM with Computer Science",
    // },
    // {
    //   id: 3,
    //   img: vpsLogo,
    //   school: "Vatsalya Public School Govardhan, Mathura",
    //   date: "Apr 2015 - March 2016",
    //   grade: "87.5%",
    //   desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    //   degree: "CBSE(X), Science with Computer Application",
    // },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "MemeHub",
      description:
        "A full-stack MERN social app. Features user authentication (JWT), client-side Cloudinary uploads, and a dynamic feed to browse, post, and comment on memes.",
      image: memehub,
      tags: ["ReactJS", "TailwindCSS", "ExpressJS", "MongoDB", "Cloudinary"],
      github: "https://github.com/theahmed619/WebDev/tree/main/MERN%20Projects/MemeHub",
      webapp: "https://memehub-v1.vercel.app/",
    },
    {
      id: 1,
      title: "E-Cart",
      description:
        "A full-stack MERN e-commerce platform. Implements product filtering, a shopping cart, and a full checkout flow. Features Google OAuth and standard email/password authentication.",
      image: onecart,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/theahmed619/WebDev/tree/main/MERN%20Projects/e-commerce/oneCart",
      webapp: "https://memehub-v1.vercel.app/",
    },
    {
      id: 2,
      title: "ChatBot",
      description:
        "A responsive chatbot application built with React and Tailwind. It connects to a Node.js/Express backend which securely queries the Google Gemini API for real-time responses",
      image: chatbot,
      tags: ["React JS", "Express JS",  "Tailwind CSS", "Gemini API"],
      github: "https://github.com/theahmed619/WebDev/tree/main/MERN%20Projects/chatbot/chatbot-v2",
      webapp: "https://devchat-alri.onrender.com/",
    },
    {
      id: 3,
      title: "Chat-App",
      description:
        "A real-time chat application built with Python and Django. Uses Django Channels for WebSocket communication and SQLite for message persistence.",
      image: chatapp,
      tags: ["Python", "Django", "SQLite"],
      github: "https://github.com/theahmed619/Python-Lab/tree/main/Django/DevChat",
      webapp: "https://devchat-alri.onrender.com/",
    },
    {
      id: 4,
      title: "Hospital Management System",
      description:
        "A full-stack web application built with Java Spring Boot and PostgreSQL. Features server-side rendering with Thymeleaf for managing patient, doctor, and appointment data.",
      image: hms,
      tags: ["Java", "SpringBoot", "Thymeleaf", "PostgreSQL"],
      github: "https://github.com/theahmed619/SpringFramework-Lab",
      webapp: "https://hms-3es8.onrender.com/",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/theahmed619/WebDev",
      webapp: "https://github.com/theahmed619/WebDev",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://github.com/theahmed619/WebDev",
      webapp: "https://github.com/theahmed619/WebDev",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/theahmed619/WebDev",
      webapp: "https://github.com/theahmed619/WebDev",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/theahmed619/WebDev",
      webapp: "https://github.com/theahmed619/WebDev",
    },
  ];  