import React, { useState } from "react";
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';





function Contact() {
const [ message, setMessage]=useState(null);
const handleSubmit=(event) =>{
  event.preventDefault();
  console.log("Submit"); 
  setMessage("Message Sent");

    // Remove message after 2 seconds
    setTimeout(() => {
      setMessage(null);
    }, 2000); 
}





  return (
    <>
    <hr className="w-full border-t-4 border-yellow-400  mx-auto" />

      <main className="about bg-blue-500 flex justify-center items-center w-full h-full">
        <div className="section3  justify-center items-center w-[90vw] h-[100vh] flex flex-col md:flex-row p-2">
          {/* Left Section */}
          <div className="c1  w-full md:w-[50vw] h-[25vh] md:h-[100vh] flex items-center justify-center">
            < motion.div
            variants={fadeIn("up",0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.2 }}
             className="mb-5">
              <h1 className="text-2xl font-semibold">GET IN TOUCH</h1>
              <p className="text-4xl font-bold">Let's Work Together!</p>
          </motion.div>
          
          </div>

          {/* Right Section (Form) */}
          <div className="c2  w-full md:w-[50vw] h-[100vh] md:h-[100vh]">
            <motion.div
            variants={fadeIn("left",0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.2 }}
             className="px-10 md:px-20 mt-4 flex justify-left items-left">
              <form className="bg-white p-6 rounded-lg shadow-md shadow-blue-500 w-80 md:w-96 mt-3 md:mt-20"
              
              onSubmit={handleSubmit}
                 method="post" // Correct placement
              >
                <h2 className="text-xl font-semibold text-center mb-4">
                  Contact Us
                </h2>

                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                />

                <label className="block mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                ></textarea>

                <button
                  type="submit"
                  className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
                 
                >
                  Send Message
                </button>
              
              </form>
                   {/* Message appears OUTSIDE the form */}
      {message && (
    <p className="text-green-600 text-center mt-3 border-2 border-green-500 bg-green-100 px-6 py-2 rounded-full h-[8vh] text-xl flex items-center justify-center whitespace-nowrap ml-4 md:mt-20 ">
    {message}
  </p>
  
      )}
            </motion.div>

    


          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
