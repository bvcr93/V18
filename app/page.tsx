"use client";

import React, { useState } from "react";
import Button from "../components/Button";
import Calendar from "../components/Calendar";

import ProductCard from "../components/ProductCard";

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
    <div className=" ">
      <header className='bg-cover text-white h-[700px]  flex justify-center md:justify-start md:px-16 items-center bg-[url("https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2022/03/03122909/best-waterproof-tents-header-16.jpg")] '>
        <div className="p-4 h-[500px] w-[400px] bg-white">
          <div className="flex space-x-5">
            <p
              onClick={() => handleClick(1)}
              className={`w-[50px] h-[5px] cursor-pointer ${
                activeTag === 1 ? " bg-black" : "bg-slate-300"
              }`}
            ></p>
            <p
              onClick={() => handleClick(2)}
              className={`w-[50px] h-[5px] cursor-pointer ${
                activeTag === 2 ? " bg-black" : "bg-slate-300"
              }`}
            ></p>
            <p
              onClick={() => handleClick(3)}
              className={`w-[50px] h-[5px] cursor-pointer ${
                activeTag === 3 ? " bg-black" : "bg-slate-300"
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
      <main className=" py-20 h-full w-[85%] mx-auto">
        <nav className=" flex justify-between  ">
          <p className="text-2xl font-bold">Most popular</p>
          <Button
            className="p-1 border border-black rounded-sm tracking-wider text-sm "
            value="SEE MORE"
          />
        </nav>
        <section className="md:flex grid grid-cols-2 md:items-center md:justify-center mt-10 ">
          <ProductCard
                      price={16}
                      text="Organic Big Pad"
                      src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
                      id={0} className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"          />
          <ProductCard
                      price={16}
                      text="Organic Big Pad"
                      src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
                      id={0} className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"        />
          <ProductCard
                      price={16}
                      text="Organic Big Pad"
                      src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
                      id={0} className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"        />
          <ProductCard
                      price={16}
                      text="Organic Big Pad"
                      src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L7-1?t=1607738237111094"
                      id={0} className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"        />
        </section>
        <section>
          <nav className="text-center text-4xl font-bold mt-10">
            <p>How it works</p>
            <p className="h-[5px] w-[50%] bg-black mx-auto mt-10"></p>
          </nav>
          
        </section>
      </main>
    </div>
  );
};

export default HomePage;
