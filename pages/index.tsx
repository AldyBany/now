import Footer from "../components/reusable/Footer";
import CTA from "../components/sections/CTA";
import CarBrands from "../components/sections/CarBrands";
import Banner from "../components/sections/Banner";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import {motion} from 'framer-motion'
import React ,{useState} from 'react'
import About from "../components/sections/About";



export default function Home() {

  const[isAnimating, setIsAnimating] = useState(false)

  return (
    <div>
      <Banner/>
      <About/>
      <Services/>
      <CTA/>
      <Testimonials/>
      <CarBrands/>
      <Footer/>
    </div>
  )
}

