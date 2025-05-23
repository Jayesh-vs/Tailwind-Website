import { useEffect, useState } from "react";
import { assets } from "../assets/asset";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute t-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <div className="flex h-auto items-center">
          <img src={assets.logo} className="h-15" alt="" />
          {/* <h1 className="text-white  text-3xl ">West Land</h1> */}
        </div>

        <ul className="hidden md:flex gap-7 text-white">
          <Link to="Home" className="cursor-pointer hover:text-gray-400">
            Home
          </Link>
          <Link
            to="About"
            smooth={true}
            duration={700}
            className="cursor-pointer hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={700}
            className="cursor-pointer hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            to="Contact"
            smooth={true}
            duration={700}
            className="cursor-pointer hover:text-gray-400"
          >
            Contact
          </Link>
        </ul>
        <button className=" hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>

        <img
          onClick={() => setshowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer "
          alt=""
        />
      </div>
      {/* MOBILE MENU */}
      <div
        className={`md:hidden ${
          showMobileMenu ? `fixed w-full` : "w-0 h-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setshowMobileMenu(false)}
            className="w-6 "
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};
//
export default Navbar;
