'use client'
import React from 'react'
import Theme from './Theme'
import { useStore } from "../components/Theme";
import Image from 'next/image'
import github from '../public/githubPhone.svg'

import Resume from './Resume'
const Sidebar = () => {
  const { theme } = useStore();
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      // Only apply scroll behavior on small screens
      if (window.innerWidth < 1024) {
        setIsScrolling(true);
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpen(false);
    }
  };

  return (
	<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={()=> setOpen(!open)}  className={`lg:scale-150 lg:origin-top-left lg:top-10 lg:left-6  fixed flex left-2 bottom-2 lg:bottom-auto z-50 transition-all duration-280  ${open ? "w-[230px]" : "w-[38px]"}   ${isScrolling ? "h-[32px]" : "h-32"} lg:h-32 max-h-32 rounded-lg p-1 backdrop-blur-lg border border-${theme === "red-500" ? "red-500" : theme === "blue-500" ? "blue-500" : theme === "green-500" ? "green-500" : theme === "yellow-500" ? "yellow-500" : "purple-500"} `}>
		<div className={ `flex flex-col justify-between ${!open ? 'lg:pointer-events-auto pointer-events-none' : 'pointer-events-auto'} items-start h-full overflow-hidden`}>
			<Theme open={open} />
			<div className={`pl-[2px] flex flex-row items-center ${isScrolling ? 'hidden' : 'visible'}`}>
        <a href="https://github.com/benshaw3283" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex-shrink-0">
        <Image src={github} alt="github" width={24} height={24} className={`cursor-pointer w-full h-full`}/>
      </a>
      {open && <p className='text-white font-semibold pl-2'>GitHub</p>}
      </div>
      

          <div className=" pl-[2px] flex flex-row">
            <svg  width="24" height="24"  viewBox="0 49.4 512 399.42"><g fill="none" fillRule="evenodd"><g fillRule="nonzero"><path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"/><path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"/><path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"/></g><path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"/><path fill="#c5221f" fillRule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"/></g></svg>
            {open && <p className='text-white font-semibold pl-2 '>benshaw.dev@gmail.com</p>}
          </div>
          <div className=" flex flex-row ">
            <Resume />
            {open && <p className='text-white font-semibold pl-2 '>Resume</p>}
          </div>
		</div>
	</div>
  )
}

export default Sidebar

