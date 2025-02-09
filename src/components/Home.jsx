import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { ReactTyped, Typed } from "react-typed";
import pic from "../img/backpic.png";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-14 my-40 h-140 md:my-14 "
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white-50 via-black-500 to-black-500"></div>
        <div className="flex flex-col md:flex-row">
          {/*right*/}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-3xl text-white">Hello 👋</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="text-black font-black">Ahmed here, </h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Java Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-md text-justify text-white">
              I’m a passionate Java developer with a strong foundation in Java,
              Spring, and RESTful APIs. I enjoy solving problems and building
              efficient software solutions. As a quick learner and team player,
              I’m eager to grow and contribute in a collaborative environment.
            </p>
            <br />
            {/* social media icons */}

            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 "
          >
              <div className="  space-y-2 text-black">
                <h1 className="font-bold text-center ">Contact us</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/theahmed619" target="_blank">
                      <FaGithub className="  text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=" https://www.linkedin.com/in/ahmed619/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2 text-yellow-300">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <FaJava className=" mx-2 text-3xl cursor-pointer  " />
                  <SiSpringboot className=" mx-2 text-3xl cursor-pointer " />
                  <FaReact className=" mx-2 text-3xl cursor-pointer  " />
                  <GrMysql className=" mx-2 text-3xl cursor-pointer " />
                </div>
              </div>
            </div>

          </div>

          {/*left*/}
          <div className="md:w-1/2 flex justify-center mt-8 order-1">
            {/*  <img
              src={pic}
              className="rounded-full md:w-[300px] md:h-[300px]"
              alt=""
            />*/}
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Home;
