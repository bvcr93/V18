
import Link from "next/link";
import React from "react";
import ProductCard from "../../components/ProductCard";
import { dataItems } from "../../data";
const Camping = () => {
  return (

    <div className="max-w-[90%] mx-auto ">
      <header className="h-[300px] flex flex-col  justify-center space-y-8">
        <h1 className="text-slate-700">Equipment/Camping</h1>
        <h1 className="text-4xl text-slate-800 font-bold">Camping</h1>
        <p>Tents</p>
      </header>
      <div className="md:grid-cols-2  lg:grid-cols-4 grid grid-cols-2 place-items-center">
        {dataItems.map((item) => (
          <Link href={`/camping/${item.id}`} >
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
