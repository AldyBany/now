import React from 'react'

type ServicesProps ={
    service: {
        title: string;
        id: number;
        content: string;
        logo?:string;
    }
}


const ServiceCard:React.FC<ServicesProps> = (props: ServicesProps) => {
    return (
        <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full border-2">
                <img src="./sIcon1.jpg" className="w-10"/>
            </div>
            <div className="w-80 px-2 py-3 border-2 rounded-md flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-mainBlue">{props.service.title}</h3>
                <p className="text-gray-500">{props.service.content}</p>
            </div>
           
        </div>
    )
}

export default ServiceCard
