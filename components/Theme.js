'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { create } from 'zustand'

export const useStore = create((set) => ({
  theme: 'purple-500',
  updateTheme: (newTheme) => set({ theme: newTheme }),
}))

const Theme = ({ open = false }) => {
  const { theme, updateTheme } = useStore()
  const [isOpen, setIsOpen] = useState(false)

  const containerVariants = {
    initial: { 
      width: 20,
    },
    animate: { 
      width: 140,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const buttonsVariants = {
    initial: { 
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 }
    },
    animate: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 }
    }
  }

  return (
    <div className='flex pl-1 z-50'>
        <motion.div 
          initial="initial"
          animate={(isOpen || open) ? "animate" : "initial"}
          variants={containerVariants}
          onClick={() => setIsOpen(!isOpen)}
          className='bg-slate-400  rounded-full backdrop-blur-sm opacity-80 hover:opacity-100 active:opacity-100 cursor-pointer select-none'
        >
            <div className='flex flex-row items-center py-[2px]'>
                
                  <div className='pr-2'>

                  <div className={`w-4 h-4 ml-[2px] rounded-full bg-${theme}`}></div>
                  </div>
               
                <motion.div 
                  variants={buttonsVariants}
                  className='flex flex-row items-center gap-2 overflow-hidden'
                >
                  <button className='w-4 h-4 rounded-full bg-red-500 hover:bg-red-400 active:scale-110 transition-transform' onClick={(e) => { e.stopPropagation(); updateTheme('red-500'); }}></button>
                  <button className='w-4 h-4 rounded-full bg-blue-500 hover:bg-blue-400 active:scale-110 transition-transform' onClick={(e) => { e.stopPropagation(); updateTheme('blue-500'); }}></button>
                  <button className='w-4 h-4 rounded-full bg-green-500 hover:bg-green-400 active:scale-110 transition-transform' onClick={(e) => { e.stopPropagation(); updateTheme('green-500'); }}></button>
                  <button className='w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-400 active:scale-110 transition-transform' onClick={(e) => { e.stopPropagation(); updateTheme('yellow-500'); }}></button>
                  <button className='w-4 h-4 rounded-full bg-purple-500 hover:bg-purple-400 active:scale-110 transition-transform' onClick={(e) => { e.stopPropagation(); updateTheme('purple-500'); }}></button>
                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export default Theme