import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className=' bg-blue-900 w-full height full flex justify-left items-left'>
    <div className=' h-[15vh] w-full'>
    <p className="flex items-center justify-start mt-10 px-4 text-sm md:text-base">
  <i className="mr-2">
    <FaRegCopyright />
  </i>
  2025 SUSHANT KUMAR. All rights reserved.
</p>
<p className=" flex  items-center justify-end text-sm md:text-base px-10 -mt-4  "> <i className='text-xl text-white'></i>
Design By SUSHANT KUMAR</p>
    </div>
    </footer>
  )
}

export default Footer
