import React,{useState} from 'react'
import Service from '../reusable/Service'

const CallBanner = () => {
    const[mechanicServices, setMechanicServices]=useState([
        {id:1,title:"Entretien recommandés"},
        {id:2,title:"Electricite et Electronique"},
        {id:3,title:"Rénovation des phares"},
        {id:4,title:"Carroserrie et Peinture"},
        {id:7,title:"Tolerie et Soudure"},
      
    ])
    return (
       <div className="w-full  bg-mainOrange mt-24">
           <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-start place-items-between py-16 px-4">
                <div>
                    <h2 className="text-3xl font-bold text-mainBlue mb-10">Pourquoi nous?</h2>
                    {
                        mechanicServices.map((service)=>(
                            <div className="flex items-start gap-3 md:w-full mb-4" key={service.id}>
                                <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mainBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <span className="font-semibold text-sm md:text-xl text-mainBlue">
                                    {service.title}
                                </span>
                                
                            </div>
                        ))
                    }

                    <a href="tel:+2774-085-2041" className="hidden md:flex items-center justify-between border-2 border-mainBlue mx-auto w-44 px-6 md:mx-0 py-3 text-mainBlue rounded-full font-semibold over:bg-mainOrange over:text-white mt-8">
                                Appelez <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mainBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                    </a>

                </div>

                <img src="./mazda.png"/>

            
           </div>
       </div>
    )
}

export default CallBanner
