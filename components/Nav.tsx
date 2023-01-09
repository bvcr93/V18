"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const openNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  useEffect(() => {
    setNav(false);
  }, [router]);

  return (
    <>
      <div className="w-full border-b sticky top-0 z-50  bg-white  ">
        <div className=" max-w-[1470px] mx-auto  w-full h-[90px] flex items-center justify-between   ">
          <div className="flex  items-center">
            <Image
              width={60}
              height={100}
              src={
                "https://www.v18rentals.com/src/images/v18-logo.7aabcca883b8a0975dc0c5672469ff1d.svg"
              }
              alt={""}
            />

            <form className="md:border ml-10 flex">
              <button className="mr-10">
                <SearchIcon className="z-2 relative ml-5 " />
              </button>

              <input
                type="text"
                placeholder="Search..."
                className="hidden md:flex w-300px py-2 z-3 m-2 outline-none"
              />
            </form>
          </div>
          <div className="space-x-8 lg:flex hidden ">
            <NavLinks />
            <SearchIcon />
          </div>
          <div className="lg:hidden flex space-x-4 items-center">
            <button onClick={openNav} className="md:hidden flex">
              {!nav ? <ReorderIcon /> : <CloseIcon />}
            </button>
            <Link href="/cart">
              <ShoppingCartOutlinedIcon />
            </Link>
            <button className="rounded-full  border p-1 px-4">Sign In</button>
          </div>
        </div>
        <div
          className={
            nav
              ? "absolute w-full top-[90px] bg-white flex flex-col items-center space-y-4"
              : "absolute left-[-100%] "
          }
        >
          {/* <Link href="/blog">Blog</Link>
        <Link href="/Camping">Camping</Link>
        <Link href="/climbing">Climbing</Link>
        <Link href="/cameras">Cameras</Link>
        <Link href="/food">Food</Link> */}
          <div className="h-[300px]  flex items-center justify-center">
            <NavLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
