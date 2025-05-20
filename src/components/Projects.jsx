import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/asset";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardToShow();

    window.addEventListener("resize", updateCardToShow);
    return () => window.removeEventListener("resize", updateCardToShow);
  }, []);
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Projects"
      name = "Projects"
      className="container mx-auto py-0 px-6 md:px-20 md:pt-10 lg:px-32 my-10 w-full overflow-hidden "
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1  font-light">
          Completed
        </span>{" "}
      </h1>
      <p className="text-center text-gray-500 mb-1 max-w-80 mx-auto">
        Building Spaces,Exploring Nature
      </p>

      {/* SLIDER BUTTON */}
      <div className="flex justify-end mb-8 items-center">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2 cursor-pointer"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2 cursor-pointer"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* PROJECT SLIDER */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 sm:w-1/4">
              <img src={project.image} alt={project.title} className=" mb-14" />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center ">
                <div className=" inline-block bg-white w-3/4 px-4 py-2 shadow-lg">
                  <h2 className="text-xl font-semibold ">{project.title}</h2>
                  <p className="text-gray-500 text-sm">
                     {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
