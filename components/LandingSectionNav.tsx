import Link from 'next/link'
import React from 'react'

import Button from './Button'

type Props = {
    title: string
}

const LandingSectionNav = ({title}:Props) => {
  return (
    <nav className=" flex justify-between  ">
    <p className="text-2xl font-bold">{title}</p>
    <Link href="/camping">
      <Button
        className="hover:bg-black hover:text-white p-1 border border-black rounded-sm tracking-wider text-sm "
        value="SEE MORE"
      />
    </Link>
  </nav>
  )
}

export default LandingSectionNav