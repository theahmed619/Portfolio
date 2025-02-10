import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-10 ">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-14 ">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://x.com/theahmedshaikh" target="_blank">
                <FaTwitter size={25} />
              </a>
              <a href="https://github.com/theahmed619" target="_blank">
                <FaGithub size={25} />
              </a>
              <a href="https://www.linkedin.com/in/ahmed619/" target="_blank">
                <FaLinkedin size={25} />
              </a>
            </div>
            <div className="mt-3 border-t border-gray-700 pt-8 flex-col items-center">
              <p>Thanks for visit ❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
