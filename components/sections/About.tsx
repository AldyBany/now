import React ,{useState} from 'react'
import {motion} from 'framer-motion'

const About = () => {
    const[isAnimating, setIsAnimating] = useState(false)

  
    return (
        <section className="container mx-auto px-8 sm:px-16 md:px-24 lg:px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  md:-mt-12" id="aboutUs">
            <motion.div 
                className="shadow-custom rounded-full h-80 bg-mainOrange p-4 cursor-pointer"
                whileHover={{
                    y:-10
                }}
                
            >
                <div className="h-16 w-16 mx-auto rounded-full mb-8 bg-white flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mainOrange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-xl font-semibold text-mainBlue text-center">On-time Deliveries</h2>
                <p className="text-white font-semibold my-4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo  consectetur adipisicing facilis</p>

            </motion.div>
            <motion.div 
                className="shadow-custom rounded-full h-80 bg-white p-4 cursor-pointer"
                whileHover={{
                    y:-10
                }}
            >
                <div className="h-16 w-16 mx-auto rounded-full mb-8 bg-mainOrange flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h2 className="text-xl font-semibold text-mainBlue text-center">On-time Deliveries</h2>
                <p className="text-gray-600 font-semibold my-4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing consectetur adipisicing elit. Quo facilis</p>

            </motion.div>
            <motion.div 
                className="shadow-custom rounded-full h-80 bg-white p-4 cursor-pointer"
                whileHover={{
                    y:-10
                }}
            >
                <div className="h-16 w-16 mx-auto rounded-full mb-8 bg-mainOrange flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
                <h2 className="text-xl font-semibold text-mainBlue text-center">Services by Experts</h2>
                <p className="text-gray-600 font-semibold my-4 text-center">Lorem ipsum, consectetur adipisicing dolor sit amet consectetur adipisicing elit. Quo facilis</p>
            </motion.div>

        </section>
    )
}

export default About
