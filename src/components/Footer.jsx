import { assets } from "../assets/asset";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="pt-10 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
    >
      <div className="container flex flex-col md:flex-row justify-between ">
        <div className="w-full md:w-1/3 mb-8 md:flex-row">
          <img className="h-10" src={assets.logo} alt="" />
          <p className="text-gray-400 mt-4 tracking-wide">
            Our vision goes beyond individual homes—we're building communities
            rooted in nature. By developing sustainable housing in forested
            regions, we’re fostering neighborhoods where people live in sync
            with the land. 
          </p>
        </div>
        <div className="w-full md:w-1/5 md:mb-0 mb-8">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <Link
              to="Home"
              smooth={true}
              duration={700}
              className=" cursor-pointer hover:text-white"
            >
              Home
            </Link>
            <Link
              to="About"
              smooth={true}
              duration={700}
              className=" cursor-pointer hover:text-white"
            >
              About
            </Link>
            <Link
              to="Projects"
              smooth={true}
              duration={700}
              className="cursor-pointer hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="Contact"
              smooth={true}
              duration={700}
              className=" cursor-pointer hover:text-white"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our land auction newletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80 ">
            Latest news of land/house for sale in lush nature
          </p>
          <div className="flex gap-2">
            <input
              className="bg-gray-800 text-gray-100 p-2 rounded border border-gray-700 focus:outline-gray-400"
              type="email"
              placeholder="Enter Your Email"
              name=""
              id=""
            />
            <button className="bg-blue-500 rounded py-2 px-4 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* COPY RIGHT MESSAGE */}
      <div className=" border-t border-gray-700 py-3 text-center text-gray-500">
        Copyright 2024 © Jayesh Sawant. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
