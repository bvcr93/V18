import Link from 'next/link'
import React from 'react'

import Button from './Button'
import ProductCard from './ProductCard'

type Props = {}

const LandingSectionPics = (props: Props) => {
  return (
 
  
    <main className="md:flex grid grid-cols-2 md:items-center md:justify-center mt-10 ">
      <ProductCard
        price={16}
        text="Organic Big Pad"
        src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
        id={0}
        className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
      />
      <ProductCard
        price={16}
        text="Organic Big Pad"
        src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
        id={0}
        className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
      />
      <ProductCard
        price={16}
        text="Organic Big Pad"
        src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
        id={0}
        className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
      />
      <ProductCard
        price={16}
        text="Organic Big Pad"
        src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
        id={0}
        className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
      />
    </main>
  
  )
}

export default LandingSectionPics