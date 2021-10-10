import React,{useState} from 'react'
import Insurance from '../reusable/Insurance'
import LeftContent from '../reusable/LeftContent'
import RightContent from '../reusable/RightContent'


const Services = () => {

    const[value ,setValue] = useState(0)
    const[content, setContent] = useState([
        {id:1,title:<LeftContent/>},
        {id:1,title:<RightContent/>},
        {id:1,title:<Insurance/>},
    ])
    

    const handleSubmit =(e,value:number)=>{
        e.preventDefault()
        setValue(value)
    }

    const[buttons,setButtons]= useState([
        {id:1,name:"Méchanique"},
        {id:2,name:"Services"},
        {id:3,name:"Assurance"},
    ])

   
   

    return (
        <section className="container mx-auto py-4 mt-28 mb-4 px-3 md:px-0" id="services">

            <h2 className="text-2xl md:text-4xl text-mainBlue font-bold mb-5 md:mb-10 text-center">Nos Services</h2>

            <div className="flex items-center justify-center gap-2 md:gap-8 w-full  md:w-3/4 mx-auto mb-1 font-semibold">
                
               {buttons.map((button,index)=>(
                   <a href="" key={index} className="px-6 md:px-8 py-4 rounded-full text-white text-center text-xs font-bold md:font-semibold md:text-base shadow-md bg-mainOrange border-mainOrange border-2" onClick={(e)=>handleSubmit(e,index)}>{button.name}</a>
               ))}
            </div>

            <div>
                <p>{content[value].title}</p>
            </div>
        </section>
    )
}

export default Services
