import Image from 'next/image'
import React from 'react'


type Props = {
    text: string
    price: string
   src: string
}

const ProductCard = ({text, src,price}:Props) => {
  return (
    <div className = "h-[300px] w-[200px] border bg-white shadow-lg flex flex-col items-center justify-center">
        
        {/* <Image width={0} height={0} alt="" src="" /> */}
        <img src={src} alt="" />
      
        <p>{text}</p>
        <p className='text-slate-500'>{price}</p>
    </div>
  )
}

export default ProductCard