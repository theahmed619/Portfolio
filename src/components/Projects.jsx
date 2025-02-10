import React from "react";
import java from "../img/java.png";
import spring from "../img/spring.png";
import react from "../img/react.png";

const Projects = () => {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Java",
    },
    {
      id: 2,
      logo: spring,
      name: "SpringBoot",
    },
    {
      id: 3,
      logo: react,
      name: "ReactJS",
    },
  ];
  return (
    <>
      <div
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16 my-30"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-10 text-center">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300  "
                key={id}
              >
                <div className="flex justify-center">
                  <img
                    src={logo}
                    className="w-[120px] h-[120px] p-1 rounded-full border-[2px] "
                    alt=""
                  />
                </div>
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className=" px-6 py-4 space-x-3 justify-around">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <hr />
    </>
  );
};

export default Projects;
