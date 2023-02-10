import Link from "next/link";
import React from "react";
import EquipmentHeader from "../../components/EquipmentHeader";
import ProductCard from "../../components/ProductCard";
import { winterTents } from "../../data";
import { campingTents } from "./[itemId]/types";
const Camping = () => {
  return (
    <div className="max-w-[80%] mx-auto ">
      <EquipmentHeader
        text="Tents"
        headerCategory="Equipment/Camping"
        category="Camping"
      />
      <div className="md:grid-cols-2  lg:grid-cols-4 grid grid-cols-2 place-items-center">
        {campingTents.map((item) => (
          <Link href={`/camping/${item.id}`}>
            <ProductCard
              className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
              text={item.name}
              src={item.img}
              price={item.price}
              id={item.id}
            />
          </Link>
        ))}
      </div>
      <div className="max-w-[90%]">
        <EquipmentHeader text="Winter tents" />
        <div className="md:grid-cols-2  lg:grid-cols-4 grid grid-cols-2 place-items-center">
          {winterTents.map((item) => (
            <Link href={`/camping/${item.id}`}>
              <ProductCard
                className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
                text={item.name}
                src={item.img}
                price={item.price}
                id={item.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Camping;
