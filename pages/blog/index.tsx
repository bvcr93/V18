import React from 'react'
import Link from "next/link"
import Card from '../../components/Card'
const Blog = () => {
  return (
    <div >
   

 
      <div className=' text-white bg-cover  flex flex-col justify-center w-screen h-[500px] bg-[url("https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80")]  '>



<h1>BLOG PAGE</h1>
        <Link href="/blog/first">
          <button className='p-2 border bg-black text-white '>
            start reading
          </button>
        </Link>
      </div>

      <div className="p-2 grid place-items-center">
        <div>
          <h2 className='grid place-items-start'>our stories</h2>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 m-4 p-4'>
          <Card text="loremlreom" img='https://v1.tailwindcss.com/img/card-top.jpg' />
          <Card text="loremlreom" img='https://v1.tailwindcss.com/img/card-top.jpg' />
          <Card text="loremlreom" img='https://v1.tailwindcss.com/img/card-top.jpg' />
          <Card text="loremlreom" img='https://v1.tailwindcss.com/img/card-top.jpg' />
          <Card text="loremlreom" img='https://v1.tailwindcss.com/img/card-top.jpg' />
          <Card text="loremlreom" img='https://v1.tailwindcss.com/img/card-top.jpg' />
        </div>
      </div>
    </div>
  )
}

export default Blog