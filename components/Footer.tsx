
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import Card from './Card'


type Props = {}

const Footer = (props: Props) => {

  return (
 
 
      <div className='bg-gray-200 h-full py-5'>
      <div className='w-[80%] mx-auto md:flex grid grid-cols-1 py-10'>
   <div className='w-[400px]' >
    <h1 className='py-10 text-md font-bold space-y-4'>ABOUT</h1>
    <p>About</p>
    <p>Contact</p>
    <p>Terms</p>
    <p>Privacy</p>
    <Link href= "/faq">FAQ</Link>
   </div>
   <div className='w-[400px]' >
    <h1 className='py-10 text-md font-bold'>ADVENTURES</h1>
    <p>Climbing</p>
    <p>Camping</p>
    <p>Cameras</p>
    <p>Surfing</p>
    <p>Blog</p>
   </div>
   <div className='w-[400px]' >
    <h1 className='py-10 text-md font-bold'>SOCIAL MEDIA</h1>
    <p>Facebook</p>
    <p>Instagram</p>

   </div>
   
   </div>
   
   <div className='flex justify-center items-center border-t border-gray-600'>
 <p className='mt-10'>  Copyright © 2020 V18 Rentals. All Rights Reserved.</p>
   </div>
    </div>
 
   
  )
}

export default Footer