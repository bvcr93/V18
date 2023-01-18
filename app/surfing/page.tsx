import Link from 'next/link'
import React from 'react'
import EquipmentHeader from '../../components/EquipmentHeader'
import LandingSectionNav from '../../components/LandingSectionNav'
import ProductCard from '../../components/ProductCard'
import { menSuits, surfBoards, womenSuits } from './types'



const Surfing = () => {


  return (
    <div className='max-w-[80%] mx-auto'>
      <EquipmentHeader
        text="Surfboards"
        headerCategory="Equipment/Surfing"
        category="Surfing"
      />
      <div className="md:grid-cols-2  lg:grid-cols-4 grid grid-cols-2 place-items-center">

        {surfBoards.map(item => (
          <Link href={`/surfing/${item.id}`}>
            <ProductCard className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128
             lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
              text={item.name}
              src={item.img}
              price={item.price}
              id={item.id} />
          </Link>
        ))}
      </div>
      <EquipmentHeader text='Womans wetsuits' />
      <div className="md:grid-cols-2  lg:grid-cols-4 grid grid-cols-2 place-items-center">

        {womenSuits.map(item => (
          <Link href={`/surfing/${item.id}`}>
            <ProductCard className=" 
          xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160
           xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
              text={item.name}
              src={item.img}
              price={item.price}
              id={item.id} />
          </Link>
        ))}
      </div>
      <EquipmentHeader text="Men's Wetsuits"/>
      <div className="md:grid-cols-2  lg:grid-cols-4 grid grid-cols-2 place-items-center">

        {menSuits.map(item => (
          <Link href={`/surfing/${item.id}`}>
            <ProductCard className=" 
          xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160
           xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
              text={item.name}
              src={item.img}
              price={item.price}
              id={item.id} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Surfing