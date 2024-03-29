import Link from 'next/link'
import React from 'react'

type Props = {
    title: string
    Button?: React.ComponentType<any>;
}

const LandingSectionNav = ({title, Button = undefined}:Props) => {
  return (
    <nav className=" flex justify-between mb-10  ">
    <p className="text-2xl font-bold">{title}</p>
    <Link href="/camping">
     {Button && <Button
        className="hover:bg-black hover:text-white px-2 py-1  border border-black rounded tracking-wider text-lg "
        value="SEE MORE"
      />}
    </Link>
  </nav>
  )
}

export default LandingSectionNav