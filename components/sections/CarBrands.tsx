import React ,{useState} from 'react'

const CarBrands = () => {
    const[brands, setBrands] = useState([
        {brand:"./carIcons/bmw.svg",id:1},
        {brand:"./carIcons/honda.svg",id:2},
        {brand:"./carIcons/toyota.svg",id:3},
        {brand:"./carIcons/group.svg",id:4},
        {brand:"./carIcons/land-rover.svg",id:5},
        {brand:"./carIcons/volkswagen.svg",id:6},
        {brand:"./carIcons/brand_3.png",id:7},
        {brand:"./carIcons/brand_4.png",id:8},
    ])
    return (
        <div className="grid grid-cols-8 items-center justify-items-center gap-6 mb-10">
            {
                brands.map((brand)=>(
                    <img key={brand.id} src={brand.brand} className="w-28 justify-baseline"/>
                ))
            }
        </div>
    )
}

export default CarBrands
