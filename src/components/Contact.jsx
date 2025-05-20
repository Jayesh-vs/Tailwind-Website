import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cd85e480-6b3b-4a40-874b-0bbdff645574");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Sumiitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Contact"
      className="text-center p-6 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1  font-light">
          With Us
        </span>{" "}
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* CONTACT FORM */}

      <div>
        <form
          onSubmit={onSubmit}
          action=""
          className="max-w-2xl mx-auto text-gray-600 text-center"
        >
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 text-left">
              Your Name
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                name="name"
                required
                placeholder="Your Name"
              />
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">
              Your Email
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="email"
                name="email"
                required
                placeholder=" Your Email"
              />
            </div>
          </div>
          <div className="my-6 text-left">
            Message
            <textarea
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              name="Message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-12 mb-10 rounded"
          >
            {result ? result : "send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
