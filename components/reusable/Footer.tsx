import React from 'react'
import Link from 'next/link'
import { ServicesData } from '../../data/FooterData'


const Footer:React.FC = () => {
    return (
        <footer className="bg-mainBlue">
            <div className="container mx-auto pt-20 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center mb-32 gap-10 px-10 sm:px-0">
                  <div>
                    <h3 className="text-white text-xs md:text-sm font-semibold mb-5 uppercase">Royal Services</h3>
                    <ul className="flex flex-col gap-3">
                       <p className="text-white text-xs sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nisi porro hic dolores, cum quaerat ad eos odio consequuntur ullam!</p>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white text-xs md:text-sm font-semibold mb-5 uppercase">Services</h3>
                    <ul className="flex flex-col gap-3">
                        {
                            ServicesData.map((service)=>(
                                <Link key={service.label} href={service.path}>
                                    <a className="text-white text-xs font-bold sm:text-sm sm:font-semibold">{service.label}</a>
                                </Link>
                            ))
                        }
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white text-xs md:text-sm font-semibold mb-5 uppercase">Location</h3>
                    <ul className="flex flex-col gap-2 text-white">
                       <span className="text-white text-xs sm:text-sm">BP:  157 Point-Noire</span>
                       <span className="text-white text-xs sm:text-sm">Siege:  48 rue Likouala,</span>
                       <span className="text-white text-xs sm:text-sm">7-7 de Dany Mbota</span>
                       <span className="text-white text-xs sm:text-sm">Tel:  (+242) 06-625-1799 / 05-625-1799</span>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white text-xs md:text-sm font-semibold mb-5 uppercase">Newsletter</h3>
                    <ul className="flex flex-col gap-3">
                        <p className="text-white text-xs sm:text-sm">Sign Up And Recieve Exclusive Offers.</p>
                        <form className="flex flex-col gap-3">
                            <input type="text" placeholder="Email" className="px-3 py-2 rounded-full"/>
                            <button type="submit" className="bg-mainOrange px-8 py-2 text-xs md:text-base text-white w-24 md:w-32 shadow-2xl rounded-full font-bold">Submit</button>
                        </form>
                       
                    </ul>
                  </div>
                </div>
                <p className="text-center text-xs text-white">Copyright 2021 | All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
