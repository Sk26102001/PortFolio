import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';



function Project() {
  return (
   <>

   {/* Horizontal Line at the End */}
<hr className="w-full border-t-4 border-yellow-400  mx-auto" />
 

  
     <main className='about bg-blue-500 flex justify-center items-center 
    w-full h-full '>


        <div className='c1 
        w-full md:w-[50vw] h-[50vh] md:h-[100vh]  flex items-center justify-center '>

          {/* <motion.div 
          variants={fadeIn("left",0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.2 }}
          
          
          className='justify-center items-center px-20 mt-80'>
            <h1 className='text-6xl font-bold text-red-500'>WORK</h1>
            <p className='text-2xl font-semibold mt-8 text-white'>Here's how I turn languages in Immersive web experience.</p>

            <img  src="work2.gif" alt="" className='mt-5' />
            </motion.div>

            <motion.button
             variants={fadeIn("up",0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.2 }}
            
             className=' bg-blue-500 shadow-lg shadow-cyan-500/60 p-3 text-xl rounded-full mt-10'>View all Projects</motion.button> */}
             <motion.div
  variants={fadeIn("left", 0.5)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
  className="flex flex-col items-center text-center px-10 sm:px-20 mt-32   gap-6">

  {/* Title */}
  <h1 className="text-6xl font-bold text-red-500 ">WORK</h1>

  {/* Description */}
  <p className="text-2xl font-semibold text-white">
    Here's how I turn languages into immersive web experiences.
  </p>

   {/* GIF Image */}
   <img src="work2.gif" alt="Work Animation" className=" w-75 mt-0" />
 

  {/* Button */}
  <motion.button
    variants={fadeIn("up", 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
    className="bg-blue-500 shadow-lg shadow-cyan-500/60 px-6 py-3 text-xl rounded-full "
  >
    View all Projects
  </motion.button>
  </motion.div>
 

             
         
         

        </div>

        
        
      

        <div className="c2 w-full md:w-[50vw] h-[50vh] md:h-[100vh] flex flex-wrap justify-center items-center gap-6">

        <div className=" border-gray-500 w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-6">
  <img src="tic.webp" alt="Tic Tac Toe" className=" mt-15 border-4 w-32 sm:w-40 md:w-[45vw] md:h-[25vh]" />
  <img src="to do.webp" alt="To-Do App" className=" border-4 w-32 sm:w-40 md:w-[45vw] md:h-[25vh]" />
  {/* <img src="weatherss.gif" alt="Weather App" className=" border-4 w-32 sm:w-40 md:w-[45vw] md:h-[25vh]  " 
   /> */}
   <div className="relative w-32 sm:w-40 md:w-[45vw] md:h-[25vh] border-4">
  {/* GIF Image */}
  <img src="weatherss.gif" alt="Weather App" className="w-full h-full object-cover" />

  {/* Text Overlay */}
  <div className="absolute inset-0 flex items-top justify-center mt-1">
    <p className="text-cyan-300 text-lg sm:text-xl font-bold ">Weather Forecast</p>
  </div>
</div>

</div>

</div>

  
    </main>
   </>
  )
}

export default Project
