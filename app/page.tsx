"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/Button";
import Calendar from "../components/Calendar";
import ProductCard from "../components/ProductCard";
import LandingSectionNav from "../components/LandingSectionNav";
import LandingSectionSVG from "../components/LandingSectionSVG";
import ProductGridSection from "../components/ProductGridSection";
import { ClimbingProductsLanding, MostPopular } from "../data";


const HomePage = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [headerText, setHeaderText] = useState(
    "Equipment for outdoor bouldering"
  );
  const [buttonText, setButtonText] = useState("Rent Climbing Gear");
  const handleClick = (tag: any) => {
    setActiveTag(tag);
    if (tag === 1) {
      setHeaderText("Camping Gear");
      setButtonText("Rent Camping Gear");
    } else if (tag === 2) {
      setHeaderText("Hiking Equipment");
      setButtonText("Rent Hiking Equipment");
    } else if (tag === 3) {
      setHeaderText("Bouldering Gear");
      setButtonText("Rent Bouldering Gear");
    }
    const element = document.querySelector(".bg-cover");
    if (element) {
      if (tag === 1) {
        (element as HTMLElement).style.backgroundImage =
          'url("https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2022/03/03122909/best-waterproof-tents-header-16.jpg")';
      } else if (tag === 2) {
        (element as HTMLElement).style.backgroundImage =
          'url("https://images.unsplash.com/photo-1673214846075-d6c357890103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")';
      } else if (tag === 3) {
        (element as HTMLElement).style.backgroundImage =
          'url("https://images.unsplash.com/photo-1671726805768-575f88de945a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")';
      }
    }
  };

  return (
    <div className="">
      <header className='bg-cover text-white h-[700px]  flex justify-center md:justify-start md:px-16 items-center bg-[url("https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2022/03/03122909/best-waterproof-tents-header-16.jpg")] '>
        <div className="p-4 h-[500px] w-[400px] bg-white">
          <div className="flex space-x-5">
            <p
              onClick={() => handleClick(1)}
              className={`w-[50px] h-[5px] cursor-pointer ${activeTag === 1 ? " bg-black" : "bg-slate-300"
                }`}
            ></p>
            <p
              onClick={() => handleClick(2)}
              className={`w-[50px] h-[5px] cursor-pointer ${activeTag === 2 ? " bg-black" : "bg-slate-300"
                }`}
            ></p>
            <p
              onClick={() => handleClick(3)}
              className={`w-[50px] h-[5px] cursor-pointer ${activeTag === 3 ? " bg-black" : "bg-slate-300"
                }`}
            ></p>
          </div>
          <div className="py-10 h-[300px] flex">
            <p className="text-black font-bold text-4xl flex items-center justify-center">
              {headerText}
            </p>
          </div>
          <div className=" w-full">
            <div className="flex justify-around text-black">
              <p>Delivery</p>
              <p>Return</p>
            </div>
            <Calendar />
          </div>
          <Button
            className="bg-green-300 p-4 w-full text-black text-xl tracking-wider "
            value={buttonText}
          />
        </div>
      </header>

      <section className=" py-20 h-full w-[85%] mx-auto">

        <ProductGridSection title={"Most popular"} Button={Button} >
          {MostPopular.map(item => (
            <ProductCard className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl" text={item.name} src={item.img} />
          ))}
        </ProductGridSection>

        <LandingSectionSVG />
      </section>

      <section className=" py-20 h-full w-[85%] mx-auto">
        <ProductGridSection title={"Climbing"} Button={Button}>
{ClimbingProductsLanding.map(item => (
  <ProductCard price={item.price} text={item.name} src = {item.img} className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"/>
))}
        </ProductGridSection>

      </section>
      <section className=" py-20 h-full w-[85%] mx-auto ">
        <LandingSectionNav title="Latest from us"  />
   <div className='px-20 text-white space-y-8 bg-cover  flex flex-col justify-center w-full h-[750px] bg-[url("https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80")]  '>
   
   <div className="w-1/2 ">
    <p className="md:text-6xl font-bold "> V18 Rentals: An Environmental and Ethos Based Take on the Gear Rental Industry</p>
    <div className="mt-10">
    <Link href="/blog/first">
          <button className="rounded md:py-3 border bg-transparent px-4 hover:text-black hover:bg-slate-50">
            START READING
          </button>
        </Link>
        </div>
    </div>
   </div>
      </section>
      <section className="md:py-20 h-full md:w-[85%] mx-auto md:flex  grid grid-cols-1 md:px-0 px-10  ">
        <div className="md:w-1/2 h-[400px]  bg-black text-white mr-8 w-full">
          <div className="h-[200px] m-6">
            <header className="h-[50px] text-3xl font-bold">Keep in touch</header>
          
            <main className="py-10">Be the first to find out about V18 events, new store openings, and more.</main>
            <Button className={"bg-green-500 p-4 my-20 rounded text-white text-xl"} value={"Sign me up!"}/>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-[400px] bg-white mt-10 md:mt-0  text-black shadow-xl border">
        <div className="h-[200px] m-6">
            <header className="h-[50px] text-3xl font-bold">Refer a friend</header>
          
            <main className="py-10">Give a friend $5 in their account, and earn $5 in your account after their first purchase.</main>
            <Button className={"bg-green-500 p-4 my-20 rounded text-white text-xl"} value={"Invite a friend!"}/>
          </div>
        </div>
    
      </section>
   
     
    </div>
  );
};

export default HomePage;
