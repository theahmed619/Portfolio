import React, { useState } from "react";
import pic from "../img/zaemon.jpeg";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-14 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-14">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full"></img>
            <h1 className="font-semibold text-xl cursor-pointer">
              Ahmed
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          {/*desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8 ">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="text-center hover:scale-105 duration-200 cursor-pointer "
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <RxCross2 size={24} /> : <MdMenu size={24} />}
            </div>
          </div>
        </div>

        {/*mobile navbar */}
        {menu && (
          <div className="bg-white ">
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-4 text-xl ">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="text-center hover:scale-105 duration-200 cursor-pointer  font-semibold "
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
