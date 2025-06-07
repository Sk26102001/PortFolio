

import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaBootstrap,
  FaNode
} from "react-icons/fa";
import { SiVite, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

function Skills() {
  return (
    <>
      {/* Divider */}
      <hr className="w-full border-t-4 border-yellow-400 mx-auto" />

      <main className="about bg-blue-500 w-full min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-10 py-10">
        <div className="section3 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10">

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="text-center md:text-left px-4"
            >
              <h2 className="text-3xl
              sm:text-5xl md:text-6xl font-semibold text-white">MY PROFESSIONAL</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mt-4">
                Background, Skills & Accomplishments
              </h1>
            </motion.div>
          </div>

          {/* Icons Section */}
          <motion.ul
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full md:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center items-center bg-white/70 p-6 rounded-xl backdrop-blur-lg text-5xl sm:text-6xl"
          >
            <li><FaHtml5 className="text-orange-400 animate-bounce" /></li>
            <li><FaCss3Alt className="text-blue-400 animate-bounce" /></li>
            <li><FaJs className="text-yellow-400 animate-bounce" /></li>
            <li><FaReact className="text-cyan-400 animate-[spin_4s_linear_infinite]" /></li>
            <li><SiVite className="text-purple-500 animate-bounce" /></li>
            <li><RiTailwindCssFill className="text-blue-400 animate-bounce" /></li>
            <li><FaBootstrap className="text-purple-400 animate-bounce" /></li>
            <li><GrMysql className="text-blue-600 animate-bounce" /></li>
            <li><FaNode className="text-green-600 animate-bounce" /></li>
            <li><SiExpress className="text-black animate-bounce" /></li>
          </motion.ul>

        </div>
      </main>
    </>
  );
}

export default Skills;
