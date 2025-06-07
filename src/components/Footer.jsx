import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className=' bg-blue-900 w-full height full flex justify-left items-left'>
    <div className=' h-[10vh] w-full'>
    <div className="flex items-center justify-left px-2 sm:px-6 md:px-10 h-10">
  <p className="flex items-center text-xs sm:text-sm md:text-base">
    <i className="mr-2">
      <FaRegCopyright />
    </i>
    2025 SUSHANT KUMAR. All rights reserved.
  </p>
</div>


<div className="flex items-center justify-left px-5  sm:px-6 md:px-14 h-0">
  <p className="flex items-center text-xs sm:text-sm md:text-base text-white space-x-2">
    <i className="text-xl"></i>
    <span>Design By SUSHANT KUMAR</span>
  </p>
    
</div>

    </div>
    </footer>
  )
}

export default Footer
