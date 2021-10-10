import React from 'react'
import Image from 'next/image'
import Navbar from '../reusable/Navbar'

import {motion} from 'framer-motion'

const Banner:React.FC = () => {

    const container = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
    
            transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
            }
        }
    }
  
    const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
    }
    return (
        <motion.section 
        className="items-center overflow-hidden w-full h-screen relative banner" id="homebanner"
        variants={container}
        initial="hidden"
        animate="visible"
        
        >
            <div className="flex flex-col gap-3 w-full h-full">
                <Navbar/>
                <div 
                className="container flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 mx-auto">
                    <motion.div 
                        className="flex flex-col"
                        variants={item} 
                    >
                        <h2 className="text-center md:text-left text-2xl sm:text-3xl md:text-5xl text-mainBlue font-bold mb-5">Car Services</h2>
                        <p className="text-center md:text-left md:text-base font-semibold text-gray-500 sm:text-base text-sm mb-10 md:w-96 md:mx-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dolorum consequatur.</p>
                        <button className="flex items-center justify-between border-2 border-mainOrange mx-auto w-40 px-6 md:mx-0 py-3 text-mainOrange rounded-full font-semibold over:bg-mainOrange over:text-white">
                            Appelez <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mainOrange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                        </button>
                    </motion.div>
                    <motion.div 
                        className="relative pt-10 flex items-center"
                        variants={item} 
                    >
                        {/* <div className="w-52 h-52 bg-mainOrange rounded-full -ml-40"></div> */}
                        <img src="./mazda.png" className="w-80 md:w-full"/>
                    </motion.div>
                </div>
            </div>
            
           
           

        </motion.section>
    )
}

const styles ={
    bacK:{
        backgroundImage:`url('./bgBanner.png')`
    } as React.CSSProperties
}

export default Banner
