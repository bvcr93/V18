import React from 'react'
import ProductCard from './ProductCard'

type Props = {
  children: React.ReactNode;
}


const ClimbingSectionPics = (props: Props) => {
  return (
    <main className="md:flex grid grid-cols-2 md:items-center md:justify-center mt-10 ">

{props.children}

    </main>

  )
}

export default ClimbingSectionPics