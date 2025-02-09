import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-14 ">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaTwitter size={25} />
              <FaGithub size={25} />
              <FaLinkedin size={25} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex-col items-center">
              <p>Thanks for visit ❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
