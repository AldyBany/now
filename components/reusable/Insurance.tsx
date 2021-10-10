import React,{useState} from 'react'
import Service from './Service'

const Insurance = () => {

    const[assurancesLeft, setAssurancesLeft]=useState([
        {id:1, title:"Professionnelle"},
        {id:2, title:"Chef d'entreprise"},
        {id:3, title:"Automobile & tous dommages"},
        {id:4, title:"Technique"},
        {id:5, title:"Incendie & Dégats des eaux"},
        {id:6, title:"Risque informatique"},
        {id:7, title:"Transport(maritime, aériens)"},
        {id:8, title:"Bris des machine"},
        {id:9, title:"Voyage accident rapatrement"},
    ])

    const[assurancesRight, setAssurancesRight]=useState([
        {id:1, title:"Bris des machines"},
        {id:2, title:"Bris des glaces"},
        {id:3, title:"Multi-risque habitation"},
        {id:4, title:"Scolaire"},
        {id:5, title:"Crédit caution"},
        {id:6, title:"Sportives"},
        {id:7, title:"Tous chantier"},
        {id:8, title:"Individuel accident corporel"},
        {id:9, title:"Prévoyance retraite"},
    ])
    return (
        <div className="mt-16 lg:h-screen">

                
                    <h2 className="col-start-1 col-end-2 sm:text-xl lg:text-2xl font-bold md:font-semibold text-mainBlue mb-12 uppercase text-center">assurances reponsabilité civile</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center place-items-center gap-3">

                        <div className="flex flex-col gap-3">
                            {
                                assurancesLeft.map((service)=>(
                                    <Service key={service.id} service={service}/>
                                ))
                            }
                        </div>

                        <div className="flex flex-col gap-3">
                            {
                                assurancesRight.map((service)=>(
                                    <Service key={service.id} service={service}/>
                                ))
                            }
                        </div>
                       
                    </div>
            
            </div> 
    )
}

export default Insurance
