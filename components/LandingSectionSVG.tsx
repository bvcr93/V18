import React from 'react'
import ProductCard from './ProductCard'
import SearchIcon from "@mui/icons-material/Search";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TerrainIcon from "@mui/icons-material/Terrain";
import PanToolIcon from "@mui/icons-material/PanTool";

type Props = {}

const LandingSectionSVG = (props: Props) => {
  return (
<main>
          <nav className="text-center text-4xl font-bold mt-10">
            <p>How it works</p>
            <p className="h-[5px] w-[50%] bg-black mx-auto mt-10"></p>
          </nav>
          <main className="md:flex grid grid-cols-2 gap-5  md:items-center md:justify-center mt-16 justify-center">
            <ProductCard
              text="Choose Your Gear"
              src=""
              className=" text-center  xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-gray-100  "
              SearchIcon={SearchIcon}
            />
            <ProductCard
              text="We bring the gear to your location"
              src=""
              className="text-center  xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-gray-100 "
              LocalShippingIcon={LocalShippingIcon}
            />
            <ProductCard
              text="Go adventuring"
              src=""
              className="text-center  xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-gray-100 "
              TerrainIcon={TerrainIcon}
            />
            <ProductCard
              text="When you're done, we come and pick it up"
              src={""}
              className="text-center  xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-gray-100 "
              PanToolIcon={PanToolIcon}
            />
          </main>
        </main>
  )
}

export default LandingSectionSVG