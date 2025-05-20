import React from "react";
import Navbar from "./Navbar"
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div id="Header" name ="Home" className="min-h-screen mb-4 bg-cover bg-center items-center w-full overflow-hidden" style={{backgroundImage:"url(./header-img.jpg)"}}>
      <Navbar/>

      <motion.div 
      initial={{opacity:0,y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className="container text-center flex flex-col mx-auto items-center justify-center h-screen text-white">
        <h2 className="text-5xl sm:text-6xl inline-block m-w-3xl font-semibold ">Live in Ghats, touch the sky</h2>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border border-white px-8 py-3 rounded">Projects</a>
          <a href="#Contact" className="bg-blue-500 border-white px-8 py-3 rounded">Contact Us</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
