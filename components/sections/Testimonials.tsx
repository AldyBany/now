import React from 'react'
import Slider from "react-slick"



const Testimonials:React.FC = () => {

  const NextArrow =({onClick})=>{
    return(
      <div className="Arrow absolute -right-20 bottom-28" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mainBlue cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      </div>
    )
  }

  const PrevArrow =({onClick})=>{
    return(
      <div className="Arrow absolute bottom-28 -left-20" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mainBlue cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg>
      </div>
    )
  }

  const settings = {
      infinite:true,
      lazyload:true,
      speed: 300,
      slidesToShow:1,
      centerMode:true,
      centerPadding:0,
      nextArrow: <NextArrow onClick/>, 
      prevArrow: <PrevArrow onClick/>
  };

  
      return (

        <section className="container mx-auto mt-28 h-screen" id="testimonials">
         <h2 className="text-2xl md:text-4xl text-mainBlue font-bold mb-24 text-center">Ce Que Nos Clients Disent</h2>
          <div className="w-48 sm:w-56 md:w-64 lg:w-96 mx-auto relative">
            <Slider {...settings}>
              <div className="p-4 flex flex-col items-center">
                <img className="h-36 w-36 mx-auto object-fit rounded-full mb-8" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <p className="text-xs lg:text-sm text-gray-500 mb-8 text-center font-semibold">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia voluptates ipsa eos nostrum iure.</p>

                <p className="text-base font-bold text-mainOrange text-center">Person1</p>

              </div>
              <div className="p-4 flex flex-col items-center">
                <div className="h-28 w-28 mx-auto bg-red-300 rounded-full mb-8"></div>
                <p className="text-xs lg:text-sm text-gray-500 mb-8 text-center font-semibold">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit. Nisi officia voluptates ipsa eos nostrum iure.</p>

                <p className="text-base font-bold text-mainOrange text-center">Person2</p>

              </div>
              <div className="p-4 flex flex-col items-center">
                <div className="h-28 w-28 mx-auto bg-red-300 rounded-full mb-8"></div>
                <p className="text-xs lg:text-sm text-gray-500 mb-8 text-center font-semibold">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia voluptates ipsa eos nostrum iure.</p>

                <p className="text-base font-bold text-mainOrange text-center">Person3</p>

              </div>
            </Slider>
              
          </div>
        </section>
        
        )
}

export default Testimonials
