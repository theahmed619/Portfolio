import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJava,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { SiDotnet, SiMysql, SiMongodb } from "react-icons/si";

// You can replace these with your actual SVG icons or image components
// For example, using a library like react-icons
const icons = {
  HTML: (
    <div className="text-5xl text-orange-600">
      <FaHtml5 />
    </div>
  ),
  CSS: (
    <div className="text-5xl text-blue-500">
      <FaCss3 />
    </div>
  ),
  Bootstrap: (
    <div className="text-5xl text-purple-600">
      <FaBootstrap />
    </div>
  ),
  JavaScript: <div className="text-5xl text-yellow-500">JS</div>,
  React: <div className="text-5xl text-blue-400">⚛</div>,
  NextJS: <div className="text-3xl font-bold">NEXT</div>,
  NodeJS: (
    <div className="text-5xl text-green-500">
      <FaNodeJs />
    </div>
  ),
  Python: (
    <div className="text-5xl text-yellow-300">
      <FaPython />
    </div>
  ),
  Flask: <div className="text-5xl text-gray-800">F</div>,
  Java: (
    <div className="text-5xl text-red-500">
      <FaJava />
    </div>
  ),
  DotNet: (
    <div className="text-5xl text-purple-600">
      <SiDotnet />
    </div>
  ),
  SQL: (
    <div className="text-5xl text-blue-500">
      <SiMysql />
    </div>
  ),
  MongoDB: (
    <div className="text-5xl text-green-500">
      <SiMongodb />
    </div>
  ),
};

const skillsData = [
  { name: "HTML", icon: icons.HTML },
  { name: "CSS", icon: icons.CSS },
  { name: "Bootstrap", icon: icons.Bootstrap },
  { name: "JavaScript", icon: icons.JavaScript },
  { name: "React.js", icon: icons.React },
  { name: "Next.js", icon: icons.NextJS },
  { name: "Node.js", icon: icons.NodeJS },
  { name: "Java", icon: icons.Java },
  { name: "DotNET", icon: icons.DotNet },
  { name: "Python", icon: icons.Python },
  { name: "SQL", icon: icons.SQL },
  { name: "MongoDB", icon: icons.MongoDB },
];

export default function Skills() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4">
      {/* BEFORE: text-gray-800 (hardcoded dark text)
        NOW:    Removed. It will now use the default text color (text-foreground) 
                which adapts to the theme.
      */}
      <h2 className="text-3xl font-bold mb-8 text-center">
        Technologies I have worked with
      </h2>

      {/* BEFORE: bg-white (hardcoded white background)
        NOW:    bg-card (adapts to light/dark) and border (theme-aware border)
      */}
      <div className="bg-card border rounded-2xl shadow-lg p-6">
        {/* Horizontally scrolling container */}
        <div className="flex items-center gap-10 overflow-x-auto pb-4 hide-scrollbar">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 flex-shrink-0"
            >
              {/* BEFORE: bg-gray-50 and border-gray-100 (hardcoded light colors)
                NOW:    bg-muted and border (theme-aware colors from shadcn)
              */}
              <div className="w-24 h-24 bg-muted rounded-2xl flex items-center justify-center border">
                {skill.icon}
              </div>
              {/* BEFORE: text-gray-600 (hardcoded medium-dark text)
                NOW:    text-muted-foreground (theme-aware muted text)
              */}
              <p className="text-sm font-medium text-muted-foreground">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
