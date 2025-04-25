import React from 'react'
import { FaHtml5,FaCss3Alt,FaReact,FaJs,FaBootstrap,FaNode } from "react-icons/fa";
import { SiVite ,SiExpress} from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { GrMysql } from "react-icons/gr";
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';

function Skills() {
  return (
    <>
    <hr className="w-full border-t-4 border-yellow-400  mx-auto" />
    
        <main className='about bg-blue-500 flex justify-center items-center 
    w-full h-full '>

    <div className='section3  justify-center items-center w-[90vw] h-[100vh] flex flex-col md:flex-row p-2'>

        <div className='c1 
        w-full md:w-[40vw] h-[50vh] md:h-[100vh]  flex justify-center items-center'>
            <motion.div
            variants={fadeIn("left",0.5)}
                          initial="hidden"
                          whileInView={"show"}
                          viewport={{once: false, amount: 0.2 }}
             className='px-30'>
            <h2 className=' text-1xl font-semibold '>MY PROFESSIONAL</h2>
           <h1 className=' text-4xl mt-4 font-bold text-red-500'>Background Skills and Accomplishments</h1> 
           </motion.div>
        </div>

        <div className='c2  w-full  md:w-[50vw] h-[50vh]  md:h-[100vh] flex  justify-center items-center'>

            
                 <ul
                   variants={fadeIn("up",0.5)}
                           initial="hidden"
                           whileInView={"show"}
                           viewport={{once: false, amount: 0.2 }}
                 
                 className=' border-2 border-transparent  w-[85vw] md:w-[48vw] h-auto  justify-center items-center flex flex-wrap gap-6 text-7xl p-5 rounded-lg  backdrop-blur-lg bg-white/70 '>
                <li>
                <FaHtml5 className=' bg-white text-orange-400 animate-bounce'/>
                </li>
                <li>
                <FaCss3Alt className=' bg-white text-blue-400 animate-bounce' />
                </li>
                <li>
                <FaJs className=' bg-white text-yellow-400 animate-bounce' />
                </li>
                <li>
                <FaReact className="text-cyan-400 animate-[spin_4s_linear_infinite] "  /> 
                </li>
                <li>
                <SiVite className=' bg-vibrant blue-400 text-blue-400 animate-bounce'/>
                </li>
                <li>
                <RiTailwindCssFill className=' text-blue-400 animate-bounce' />   
                </li>
                <li>
                <FaBootstrap className=' bg-white text-purple-400 animate-bounce' /> 
                </li>
                <li>
                <GrMysql className=' bg-blue-400 text-white animate-bounce'  /> 
                </li>
                <li>
                <FaNode className=' bg-white text-green-600 animate-bounce' />
                </li>
                <li>
                <SiExpress className=' bg-white animate-bounce' />
                </li>

               
               
            </ul>
       
            
        </div>
      
    </div>
    </main>
 
    </>
  )
}

export default Skills
