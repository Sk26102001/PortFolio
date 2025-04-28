import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { PiHeadCircuitFill } from "react-icons/pi";
import { MdOutlineWork, MdContactMail } from "react-icons/md";
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import {Link} from "react-router-dom";


function Navbar () {
  return (
    <main >
    <div >

    <motion.nav
     variants={fadeIn("down",0.5)}
                                       initial="hidden"
                                       whileInView={"show"}
                                       viewport={{once: false, amount: 0.2 }}
     className=' fixed bg-white/30 backdrop-blur-md top-0  shadow-lg z-50 border-transparent   mt-0 w-full h-[10vh] '>

        <ul className=' flex flex-row justify-center items-center   py-3 gap-10  lg:gap-30 '>

            <li className='text-2xl md:text-3xl  py-2 px-6 hover:bg-white/60 border-transparent rounded-sm '>
                <Link to="/Home"><FaHome  /></Link>
            </li>
            <li className='text-2xl md:text-3xl  py-2 px-6 hover:bg-white/60 border-transparent  rounded-sm '>
                <Link to="/About"><IoPerson /></Link>
            </li>
            <li className='text-2xl md:text-3xl  py-2 px-6 hover:bg-white/60 border-transparent  rounded-sm'>
                <Link to="/Skills"><PiHeadCircuitFill /></Link>
            </li>
            <li className='text-2xl md:text-3xl  py-2 px-6  hover:bg-white/60  border-transparent  rounded-sm'>
                <Link to="/Project"><MdOutlineWork /></Link>
            </li>
            <li className='text-2xl md:text-3xl  py-2 px-6 hover:bg-white/60 border-transparent rounded-sm'>
                <Link to="/Contact"><MdContactMail /></Link>
            </li>
        </ul>

    </motion.nav>
    </div>
    </main>
 
  );
}

export default Navbar




