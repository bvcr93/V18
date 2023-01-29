import Link from "next/link";
import React from "react";
import EquipmentHeader from "../../components/EquipmentHeader";
import ProductCard from "../../components/ProductCard";
import { mockSurfingRes } from "./types";
const Surfing = () => {

  
  return (
    <div className="max-w-[80%] mx-auto">
      <EquipmentHeader
        text="Surfboards"
        headerCategory="Equipment/Surfing"
        category="Surfing"
      />
      <div className="md:grid-cols-2  lg:grid-cols-4 grid grid-cols-2 place-items-center">
        {mockSurfingRes.items
          .filter((item) => item.category === "surfboards")
          .map((it) => (
            <Link href={`/surfing/ ${it.id}`}>
              <ProductCard
                text={it.name}
                className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128
                lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
                src={it.img}
                price={it.price}
                id={it.id}
              />
            </Link>
          ))}
      </div>
      <EquipmentHeader text="Womans wetsuits" />

      <EquipmentHeader text="Men's Wetsuits" />
    </div>
  );
};

export default Surfing;
