import React from 'react'
import EquipmentHeader from '../../components/EquipmentHeader'
import ProductCard from '../../components/ProductCard'
import { cameras } from './types'



const Camera = () => {
  return (
    <div className='max-w-[80%] mx-auto'>
      <EquipmentHeader
        text="Cameras"
        headerCategory="Equipment/Cameras"
        category="Cameras"
      />
      <div className="md:grid-cols-2  lg:grid-cols-4 grid grid-cols-2 place-items-center">

        {cameras.map(camera => (
          <ProductCard text={camera.name} src = {camera.img}
           className=" xl:border-l border-b sm:h-64 sm:w-64 
            md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col 
            items-center justify-center bg-white hover:shadow-xl"/>
        ))}
      </div>
    </div>
  
  )
}

export default Camera