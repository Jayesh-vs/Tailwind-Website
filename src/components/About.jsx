import { assets } from "../assets/asset";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-5 md:px-20 lg-px-32 w-full overflow-hidden "
      id="About"
      name ="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-1">
        Inspired by the Land, Built Around Your Vision
      </p>

      <div className="flex flex-col md:flex-row md:gap-20 ">
        <img
          src={assets.twelve}
          alt=""
          className="sm:w-sm rounded-3xl p-0 h-120 mt-10 "
        />
        <div className="flex flex-col md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full ">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg ">
            Nestled in the heart of lush, green landscapes, our company specializes in building sustainable homes that blend seamlessly with their natural surroundings. We design and construct houses in forested areas with a deep respect for the environment, using eco-friendly materials and low-impact building techniques. Our mission is to create peaceful, nature-integrated living spaces that offer comfort, beauty, and harmony with the earth. 
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded mt-3">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
