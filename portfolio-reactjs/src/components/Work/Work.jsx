import React, { useState } from "react";
import { projects } from "../../constants";

// How many projects to load initially
const INITIAL_LOAD = 4;
// How many projects to load when 'Load More' is clicked
const PROJECTS_TO_LOAD = 2;

const Work = () => {
  // State to track the number of visible projects
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_LOAD);

  // Function to handle loading more projects
  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleCount) => prevVisibleCount + PROJECTS_TO_LOAD);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 font-sans relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A showcase of the projects I have worked on, highlighting my skills
            and experience in various technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid gap-12 grid-cols-1 md:grid-cols-2"
        >
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              // --- UPDATED ---
              // Added h-full and flex flex-col to make cards equal height
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              
              {/* --- UPDATED --- */}
              {/* Added flex flex-col flex-grow to make content fill height */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* --- NEW BUTTONS --- */}
                {/* mt-auto pushes these buttons to the bottom of the card */}
                <div className="mt-auto pt-4 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors duration-300"
                  >
                    View Code
                  </a>
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors duration-300"
                  >
                    View Live
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button Container */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-16">
            <button
              onClick={handleLoadMore}
              className="rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* --- REMOVED --- */}
      {/* The entire Modal Container JSX has been deleted. */}
    </section>
  );
};

export default Work;