
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

function Project() {
  return (
    <>
      {/* Horizontal Line at the End */}
      <hr className="w-full border-t-4 border-yellow-400 mx-auto" />

      <main className="about bg-blue-500 flex flex-col md:flex-row justify-center items-center w-full min-h-screen px-4 sm:px-6 md:px-12 py-10 gap-10">

        {/* Left Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center text-center gap-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500">
              WORK
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Here's how I turn languages into immersive web experiences.
            </p>

            <img
              src="work2.gif"
              alt="Work Animation"
              className="w-full max-w-md h-auto"
            />

            <motion.button
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="bg-blue-500 shadow-lg shadow-cyan-500/60 px-6 py-3 text-lg sm:text-xl rounded-full mt-4"
            >
              View all Projects
            </motion.button>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-6 items-center w-full">

            {/* Project 1 */}
            <img
              src="tic.webp"
              alt="Tic Tac Toe"
              className="border-4 w-full max-w-md h-auto"
            />

            {/* Project 2 */}
            <img
              src="to do.webp"
              alt="To-Do App"
              className="border-4 w-full max-w-md h-auto"
            />

            {/* Project 3 with overlay */}
            <div className="relative w-full max-w-md border-4">
              <img
                src="weatherss.gif"
                alt="Weather App"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex items-start justify-center mt-2">
                <p className="text-cyan-300 text-lg sm:text-xl font-bold bg-black bg-opacity-50 px-2 rounded">
                  Weather Forecast
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default Project;
