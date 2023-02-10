"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";
import Calendar from "./Calendar";
import SearchField from "./SearchField";

const Nav = () => {
  const [search, setSearch] = useState(false);
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const openNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  useEffect(() => {
    setNav(false);
  }, [router]);
const pathname = usePathname()
  return (
    <>
      <div className={ pathname !== "/" ? "  w-full border-b sticky top-0 z-50  bg-white  " : "w-full h-0  sticky top-0 z-50 bg-transparent   "}>
        <div className=" max-w-[1470px] mx-auto  w-full h-[90px] flex items-center justify-between   ">
          <div className="flex  items-center">
            <Link href="/">
              <Image
                width={60}
                height={100}
                src={
                  "https://www.v18rentals.com/src/images/v18-logo.7aabcca883b8a0975dc0c5672469ff1d.svg"
                }
                alt={""}
              />
            </Link>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="md:border ml-10 flex "
            >
              <button onClick={() => setSearch(!search)} className="mr-10">
                <SearchIcon className="z-2 relative ml-5 " />
              </button>
  
                <SearchField className="hidden  md:flex w-300px py-2 z-3  outline-none " />

            </form>

            <div className="hidden md:flex p-3">
            { pathname !== "/" &&  <Calendar />}
            </div>
          </div>
          <div className="flex items-center">
          <div className="space-x-8 lg:flex hidden  ">
            <NavLinks />
          </div>
          <div className=" flex space-x-4 items-center">
            <button onClick={openNav} className="lg:hidden flex ">
              {!nav ? <ReorderIcon className="text-2xl" /> : <CloseIcon />}
            </button>
            <Link href="/cart">
              <ShoppingCartOutlinedIcon />
            </Link>
            <Link href = "/sign-in"><button className="rounded-full  border p-1 px-4">Sign In</button></Link>
            
          </div>
          </div>
        </div>
        <div
          className={
            nav
              ? "absolute w-full top-[90px] bg-white flex flex-col items-center space-y-4"
              : "absolute left-[-100%] "
          }
        >
      
          <div className="h-[300px]  flex items-center justify-center">
            <NavLinks />
          </div>
        </div>
        <div className="md:hidden  ">
          {!search ? (
            <Calendar />
          ) : (
            <SearchField className="border p-3" SearchIcon={SearchIcon} />
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
