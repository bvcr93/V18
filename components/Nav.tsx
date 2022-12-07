import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./NavLinks";
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
      <div className="bg-white sticky top-0 px-20  w-full h-[70px] flex    items-center justify-between  z-50  ">
        <div className="flex  items-center">
          <h1>V18</h1>
          <form>
            <button>
              <SearchIcon className="z-2 relative  " />
            </button>

            <input
              type="text"
              placeholder="Search outdoor equipment"
              className="border  w-[300px] py-2 z-3 "
            />
          </form>
        </div>
        <div className="space-x-8 lg:flex hidden">
         <NavLinks/>
          <SearchIcon />
        </div>
        <div className="lg:hidden flex">
          <button onClick={openNav} className="md:hidden flex">
            {!nav ? <ReorderIcon /> : <CloseIcon />}
          </button>

          <ShoppingCartOutlinedIcon />
          <button className="rounded-lg border px-2">Login</button>
        </div>
      </div>
      <div
        className={
          nav
            ? "absolute w-full top-[70px] bg-white flex flex-col items-center space-y-4"
            : "absolute left-[-100%]"
        }
      >
        <Link href="/blog">Blog</Link>
        <Link href="/about">Camping</Link>
        <Link href="/">Climbing</Link>
        <Link href="/cameras">Cameras</Link>
        <Link href="/food">Food</Link>
      </div>
    </>
  );
};

export default Nav;
