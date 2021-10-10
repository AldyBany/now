import React,{useState} from 'react'
import {motion} from 'framer-motion'
import {Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {

    const[onOver, setOnOver] = useState(false)
    const[clicked, setClicked] = useState(false)

    return (
        <header className="mt-2 sticky top-0 z-20">
            <nav className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-center md:justify-between">
                <h2 className="text-center md:text-left text-3xl md:text-2xl font-bold text-mainOrange">Group Royal Services</h2>
                <ul className="flex items-center gap-16">
                    <Link className="hidden md:block cursor-pointer nav_item active text-mainBlue font-semibold" activeClass="text-mainOrange" to="homebanner" spy={true} smooth={true} duration={500}>Home</Link>
                    <Link className="hidden md:block cursor-pointer nav_item text-mainBlue font-semibold" to="aboutUs" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                    <Link className="hidden md:block cursor-pointer nav_item text-mainBlue font-semibold" to="services" spy={true} smooth={true} offset={-70} duration={500}>Services</Link>
                    <Link className="hidden md:block cursor-pointer nav_item text-mainBlue font-semibold" to="testimonials" spy={true} smooth={true} offset={-70} duration={500}>Testimonials</Link>
                   
                    <a href="tel:+2774-085-2041" className="hidden md:flex items-center justify-between border-2 border-mainOrange mx-auto w-40 px-6 md:mx-0 py-3 text-mainOrange rounded-full font-semibold over:bg-mainOrange over:text-white">
                                Appelez <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mainOrange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                    </a>

                </ul>


                <motion.ul 
                    className="lg:hidden grid grid-cols-3 place-items-center gap-4 fixed bg-white shadow-custom left-0 bottom-10 pt-5 pb-10 px-6 w-full z-20 rounded-t-xl"
                    animate={{
                        y: clicked?0:100
                    }}
                     
                >
                    <Link className=" cursor-pointer nav_item active text-mainBlue font-semibold" activeClass="text-mainOrange" to="homebanner" spy={true} smooth={true} duration={500} onClick={()=>setClicked(!clicked)}>Home</Link>
                    <Link className=" cursor-pointer nav_item text-mainBlue font-semibold" activeClass="text-mainOrange" to="aboutUs" spy={true} smooth={true} offset={-10} duration={500} onClick={()=>setClicked(!clicked)}>About</Link>
                    <Link className=" cursor-pointer nav_item text-mainBlue font-semibold" activeClass="text-mainOrange" to="services" spy={true} smooth={true} offset={-70} duration={500} onClick={()=>setClicked(!clicked)}>Services</Link>
                    <Link className=" cursor-pointer nav_item text-mainBlue font-semibold" activeClass="text-mainOrange" to="testimonials" spy={true} smooth={true} offset={-70} duration={500} onClick={()=>setClicked(!clicked)}>Testimonials</Link>
                </motion.ul>

                <ul className="lg:hidden flex items-center justify-between md:justify-center gap-4 fixed bg-mainBlue left-0 bottom-0 py-5 px-6 w-full z-20 rounded-t-xl">
                    <span className="text-white font-bold cursor-pointer">Royal</span>
                    <span onClick={()=>setClicked(!clicked)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </span>
                   
                </ul>
            </nav>

        </header>
      
    )
}

export default Navbar
