import React,{useState} from "react";
import { TbFileCv } from "react-icons/tb";
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';



  

function Home() {

  const resumeUrl = "/SUSHANT KUMAR CV.pdf"; 

  const handleOpen = () => {
    window.open(resumeUrl, "_blank");
  };

  const[showContact, setShowContact] = useState(false);

  const handleContact = () => {
    setShowContact(!showContact);
  

  };


   
  return (
    <>

   
      <main className="home w-full h-full bg-blue-500 flex justify-center items-center">
        {/* Main Container */}
        <div className="section1  w-[90vw] h-[100vh] flex flex-col md:flex-row justify-center items-center  p-2">

             {/* Right Section */}
             <div className="c2  w-full md:w-[50vw] h-[50vh] md:h-[100vh] flex flex-col justify-center items-center md:mt-0 overflow-hidden p-4">

            <motion.img
              variants={fadeIn("up",0.5)}
                         initial="hidden"
                         whileInView={"show"}
                         viewport={{once: false, amount: 0.2 }}
            
            
            
                         src={`${import.meta.env.BASE_URL}img.png`} alt="My image" 
                       

            className="h-[45vh] justify-center items-center   rounded-full
            rotate-2    shadow-lg shadow-cyan-500  -mt-10" /> 
          </div>

          {/* Left Section */}
          <div className="c1 relative  w-full md:w-[50vw] h-[40vh] md:h-[100vh] flex flex-col items-center justify-center p-4">

            
           
            <motion.p
            variants={fadeIn("left",0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.2 }}
             className="text-4xl md:text-5xl font-bold text-white mt-8">SUSHANT KUMAR</motion.p>
            <motion.p
            variants={fadeIn("up",0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.2 }}
             className="text-2xl md:text-3xl text-white mt-2">
              I AM A{" "}
              <span className="text-red-500 font-bold">FULL-STACK DEVELOPER</span>
              </motion.p>
            

            <motion.p
            variants={fadeIn("up",0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.2 }}

             className="text-lg md:text-xl text-white mt-5 font-semibold">
              Transforming ideas into stunning experiences,{" "}
              <motion.span className="text-white font-semibold">
                Blending creativity with code to build the future of the web.
              </motion.span>
            </motion.p>

            {/* Contact Button */}
            <motion.button
           
            
            className="bg-blue-500 text-lg md:text-xl hover:bg-blue-700 text-white rounded-full shadow-md py-2 px-4 mt-10 transition duration-300 w-[30vw] shadow-lg shadow-cyan-500/60"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleContact}>
              
              Contact Me
            </motion.button>

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

            {/* Social Icons */}
            <motion.ul
            variants={fadeIn("up",0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.2 }}
            
            className="text-3xl flex flex-row  justify-center items-center gap-10 mt-10">
              <li>
                <a
                  href="https://github.com/Sk26102001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition duration-300"
                >
                  <i className="bi bi-github shadow-lg shadow-black"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sushant-kumar-166165217" className="hover:text-blue-400 transition duration-300">
                  <i className="bi bi-linkedin shadow-lg shadow-cyan-500/60"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sushantkumar68" className="hover:text-pink-500 transition duration-300">
                  <i className="bi bi-instagram shadow-lg shadow-pink-500/60 "></i>
                </a>
              </li>

              <button className=" bg-blue-500 hover:text-pink-500 transition duration-300 rounded-2xl shadow-lg shadow-cyan-500/60">
              
               <TbFileCv className="text-4xl animate-bounce " onClick={handleOpen} /> {/* Icon Size */}
      
              </button>
            </motion.ul><br />
           


          </div>

       

        </div>

      </main>
    </>
  );
}


export default Home;
