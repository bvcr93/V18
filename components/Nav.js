import React from 'react'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Nav = () => {
  return (
    <div className='bg-white sticky top-0 px-20 w-full h-[70px] flex  items-center justify-between  z-50  '>
        <div className='flex  items-center'>
          <h1 >V18</h1>
          <form >
            <button>
            <SearchIcon className='z-2 relative  '/>
            </button>
         
          <input type="text" placeholder='Search outdoor equipment'
     
           className='border  w-[300px] py-2 z-3 '/>
               </form>
        </div>
        <div className='space-x-8 md:flex hidden'>
            <Link href="/">Climbing</Link>
            <Link href = "/about">Camping</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/cameras">Cameras</Link>
            <Link href="/food">Food</Link>
            <SearchIcon/>
          
<ShoppingCartIcon/>
<button className='rounded-lg border px-2'>Login</button>
        </div>
    </div>
  )
}

export default Nav