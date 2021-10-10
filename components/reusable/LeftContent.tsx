import React,{useState} from 'react'
import Service from './Service'

const LeftContent = () => {
    const[icons, setIcons] = useState([
        {id:1,icon:"./Batteries.png"},
        {id:2,icon:"./Body.png"},
        {id:3,icon:"./Brakes.png"},
        {id:4,icon:"./Cambelt.png"},
        {id:5,icon:"./Clutch.png"},
        {id:6,icon:"./Diagnostics.png"},
        {id:7,icon:"./Injector.png"},
        {id:8,icon:"./Engine-light.png"},
        {id:9,icon:"./Gearbox.png"},
        {id:10,icon:"./Fuel-consumption.png"},
        {id:11,icon:"./Starter.png"},
        {id:12,icon:"./Performance.png"},
    ])

    const[mechanicServices, setMechanicServices]=useState([
        {id:1,title:"Entretien recommandés"},
        {id:2,title:"Electricite et Electronique"},
        {id:3,title:"Rénovation des phares"},
        {id:4,title:"Carroserrie et Peinture"},
        {id:5,title:"Carroserrie et Peinture"},
        {id:6,title:"Carroserrie et Peinture"},
        {id:7,title:"Tolerie et Soudure"},
        {id:8,title:"Tolerie et Soudure"},
        {id:9,title:"Tolerie et Soudure"},
    ])
    return (
        <div className="items-center mt-8 md:mt-12">

                    <h2 className="sm:text-xl md:text-2xl font-bold md:font-semibold text-mainBlue text-center mb-4 md:mb-6 uppercase">Mechanique General</h2>

                    <p className="text-base md:text-xl font-semibold text-gray-400 text-center mb-4 md:mb-6 w-3/4 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat dolore soluta quos obcaecati!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-start place-items-between">
    
                        <div className="flex order-last md:order-first flex-col md:gap-3 pt-10">
                            {
                                mechanicServices.map((service)=>(
                                    <Service key={service.id} service={service}/>
                                ))
                            }
                        </div>

                        <div className="h-96 grid grid-cols-4 gap-4">
                        {
                            icons.map((icon)=>(
                                <img src={`./rsImages/${icon.icon}`} key={icon.id} className="w-5/6 md:w-full"/>
                            ))
                        }
                    </div>
                
                    </div>
                   
        </div>
                
           
        
    )
}

export default LeftContent
