import React from "react";
import Link from "next/link";
import Card from "../../components/Card";
import RootLayout from "../layout";
const Blog = () => {
  return (

    <div>
      <div className='px-20 text-white space-y-8 bg-cover  flex flex-col justify-center w-full h-[750px] bg-[url("https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80")]  '>
        <p className="tracking-widest">LATEST STORY</p>
        <h1 className="text-2xl md:text-6xl w-[50%] font-bold leading-8 ">V18 Rentals: An Environmental and Ethos Based Take on the Gear Rental Industry</h1>
        <Link href="/blog/first">
          <button className="rounded py-3 border bg-transparent px-4 hover:text-black hover:bg-slate-50">
            START READING
          </button>
        </Link>
      </div>

      <div className="p-2 grid place-items-center">
        <div className="flex flex-start md:w-[90%] w-full   mt-16 ">
          <h2 className="grid place-items-start text-xl font-bold p-2 ">Our stories</h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 m-4 ">
          <Link href={"/blog/first"}>
          <Card
            text="Location Highlight: Yosemite National Park Bouldering"
            img="https://images.unsplash.com/photo-1516372048654-2e06f99e1382?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            
          />
          </Link>
          <Card
            text="Location Highlight: Salt Point Bouldering"
            img="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80"
          />
          <Card
            text="Tribute to Jesse Schouboe"
            img="https://images.unsplash.com/photo-1605548109944-9040d0972bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <Card
            text="lLocation Highlight: Mount Tam Bouldering "
            img="https://images.unsplash.com/photo-1588869222183-9269c9a5d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        
        </div>
      </div>
    </div>
   
  );
};

export default Blog;
