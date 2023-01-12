"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/Button";
import Calendar from "../components/Calendar";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "../components/ProductCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TerrainIcon from "@mui/icons-material/Terrain";
import PanToolIcon from "@mui/icons-material/PanTool";
import LandingSectionPics from "../components/LandingSectionPics";
import LandingSectionNav from "../components/LandingSectionNav";
import LandingSectionSVG from "../components/LandingSectionSVG";
import OrganicBigPad from "organic-big-pad.jpeg";

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

      <section className=" py-20 h-full w-[85%] mx-auto">
        <LandingSectionNav title="Most popular" Button={Button}/>
        <LandingSectionPics 
        
        />

        <LandingSectionSVG />
      </section>

      <section className=" py-20 h-full w-[85%] mx-auto">
        <LandingSectionNav title="Climbing" Button={Button}/>
        <LandingSectionPics 

          src1="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L457-1?t=1607943249874937"
          src2={
            "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L150-1?t=1607901879503845"
          }
          src3={
            "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L256-1?t=1568433703589904"
          }
          src4={
            "https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L267-1?t=1577179047023696"
          }
          price1={20}
          price2={30}
          price3={40}
          price4={50}
          title1 = "Organic Big Pad" 
          title2="Organic Simple Pad" 
          title3="DeWoodstok Hold Brush" 
          title4="Portable LED Light"/>
      </section>
      <section className=" py-20 h-full w-[85%] mx-auto">
      <LandingSectionNav title="Last from us" />
      <div className=""></div>
      </section>
    </div>
  );
};

export default HomePage;
