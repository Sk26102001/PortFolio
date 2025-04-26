import React,{useState} from 'react'
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';
import {Link } from "react-router-dom";


function About() {

  const [showContact,setShowContact]= useState(false);
  const handleContact=()=>{
    setShowContact(!showContact)

  };
  return (
    <>
   <hr className="w-full border-t-4 border-yellow-400  mx-auto" />

    <main className='about bg-blue-500 flex justify-center items-center 
    w-full h-full '>

    <div className='section2   justify-center items-center w-[90vw] h-[110vh] flex flex-col md:flex-row p-2'>

    <div className='c2  w-full  md:w-[50vw] h-[50vh]  md:h-[100vh] flex   justify-center items-center'>
          < motion.img
           variants={fadeIn("up",0.5)}
                                   initial="hidden"
                                   whileInView={"show"}
                                   viewport={{once: false, amount: 0.2 }}
          
          
                                   src={`${import.meta.env.BASE_URL}img-2622.png`} alt="My image"   className=' h-[40vh] justify-center items-center rounded-full   hover:bg-cyan-500 shadow-lg shadow-cyan-500/50 rotate-[-3deg]'/>
         </div>

      
    <div className="c1  w-full md:w-[50vw] h-[70vh] md:h-[100vh] flex flex-col items-center justify-center text-center p-5">
  
 
  
  <motion.div
  variants={fadeIn("up",0.5)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once: false, amount: 0.2 }}

   className='flex flex-col justify-center items-center text-center'>
    <motion.h1
     variants={fadeIn("left",0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.2 }}
    
    
    className="mt-5 leading-tight text-2xl font-serif">ABOUT ME.</motion.h1>
    <h2
     className="text-lg font-semibold text-white mt-2">
      I'M A <span className="text-red-500">FULL-STACK DEVELOPER.</span>
    </h2>
 

  <p className="mt-5 text-lg font-semibold text-white">
    Coding meets creativity in my world of web development!
  </p>

  <p className=" text-white max-w-[80%]">
    My name is <span className="text-lg text-red-700 font-bold">SUSHANT KUMAR</span>, and I am a 23-year-old web developer passionate about crafting engaging digital experiences. 
    I specialize in front-end and full-stack development, using <span className="font-semibold">React.js, Tailwind CSS, and Next.js</span> to build modern, high-performance websites. 
    With a keen eye for design and a love for animations, I create interactive and immersive user experiences.
    <span className="text-blue-200 cursor-pointer hover:text-blue-400"> More</span>
  </p>
  </motion.div>

 <motion.div 
 variants={fadeIn("up",0.5)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once: false, amount: 0.2 }}
 
 className='button flex justify-center items-center gap-6'>
  <button className=" btn1 mt-5 bg-blue-500 hover:bg-blue-700 p-2 px-7 rounded-full text-white font-semibold shadow-lg shadow-cyan-500/60"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
  onClick={handleContact}>
    CONTACT ME
  </button>
        {/* Contact Details Box */}
        {showContact && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 bg-white text-black p-4 rounded-lg shadow-lg w-[80%] md:w-[50%] text-center "
          >
            <p className="text-lg font-semibold">📞 Contact Details</p>
            <p className="text-md mt-2">📧 Email: sushantkumar@gmail.com</p>
            <p className="text-md">📞 Phone: +91 6207945708</p>
            <button
              onClick={() => setShowContact(false)}
              className="mt-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 transition"
            >
              Close
            </button>
          </motion.div>
        )}


  <button className=" mt-5 btn2 bg-blue-500 hover:bg-blue-700 p-2 px-7 rounded-full text-white font-semibold shadow-lg shadow-cyan-500/60" >
    My Portfolio
  </button>
  </motion.div>
  
  


</div>

      

       
      
    </div>
    </main>
    </>
  )
}

export default About
