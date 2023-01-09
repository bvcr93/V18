import Link from "next/link";
import React from "react";
import EquipmentHeader from "../../components/EquipmentHeader";
import ProductCard from "../../components/ProductCard";
import { dataItems } from "../../data";
const Camping = () => {
  return (
    <div className="max-w-[80%] mx-auto ">
      <EquipmentHeader headerCategory="Equipment/Camping" category="Camping" />
      <div className="md:grid-cols-2  lg:grid-cols-4 grid grid-cols-2 place-items-center">
        {dataItems.map((item) => (
          <Link href={`/camping/${item.id}`}>
            <ProductCard
              text={item.name}
              src={item.img}
              price={item.price}
              id={item.id}
            />
          </Link>
        ))}
      </div>
      <div className="max-w-[90%]">
        <h1 className="text-xl">winter tens</h1>
      </div>
    </div>
  );
};

export default Camping;
