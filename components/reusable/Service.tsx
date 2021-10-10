import React from 'react'

type Serviceprops ={
    service: {
        id: number;
        title: string;
    }
}

const Service:React.FC<Serviceprops> = ({service}: Serviceprops) => {
    return (
        <div className="flex items-start gap-2 md:w-full mb-3">
            <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mainOrange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
            <span className="font-semibold text-lg md:text-xl text-mainBlue">
                {service.title}
            </span>
            
        </div>
    )
}

export default Service
