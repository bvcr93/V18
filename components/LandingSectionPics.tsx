import Link from 'next/link'
import { title } from 'process'
import React from 'react'

import Button from './Button'
import ProductCard from './ProductCard'

type Props = {
  src1?: string
  src2?: string
  src3?: string
  src4?: string
  price1?: number
  price2?: number
  price3?: number
  price4?: number
  title1?: string 
  title2?: string
  title3?: string
  title4?: string

}

const LandingSectionPics = ({  src1, src2, src3, src4, price1, price2, price3, price4, title1, title2, title3,title4}: Props) => {
  return (


    <main className="md:flex grid grid-cols-2 md:items-center md:justify-center mt-10 ">
       <ProductCard
        price={price1}
        text={title1}
        src={src1}
        className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
      />
       <ProductCard
        price={price2}
        text={title2}
        src={src2}
        className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
      />
       <ProductCard
        price={price3}
        text={title3}
        src={src3}
        className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
      />
       <ProductCard
        price={price4}
        text={title4}
        src={src4}
        className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
      />
    </main>

  )
}

export default LandingSectionPics