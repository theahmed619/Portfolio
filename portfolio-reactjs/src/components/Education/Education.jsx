import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      // Removed vw padding
      className="py-24 pb-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Added max-width container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title (No changes) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            My education has been a journey of learning and development. Here
            are the details of my academic background
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical line:
            - Centered on mobile (left-4) and desktop (sm:left-1/2)
          */}
          <div className="absolute left-4 sm:left-1/2 w-1 bg-white h-full transform -translate-x-1/2"></div>

          {/* Education Entries */}
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                // This logic is correct: even(0) on left, odd(1) on right
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Circle: Aligned with the vertical line */}
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Section
                - ml-12: Mobile, pushes card right of the 4rem line
                - sm:ml-0: Resets mobile margin on desktop
                - sm:w-1/2: Makes card 50% width on desktop
                - Conditional padding: adds space from the center line
              */}
              <div
                className={`w-full p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                  transform transition-transform duration-300 hover:scale-105
                  ml-12 sm:ml-0 sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                  }`}
              >
                {/* Flex container for image and text (No changes) */}
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {edu.school}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">
                  Grade: {edu.grade}
                </p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;