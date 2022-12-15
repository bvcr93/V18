import React from "react";
import Card from "../../components/Card";
import ProductCard from "../../components/ProductCard";
import Tent1 from "./L300-1.jpeg";
const Camping = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <header className="h-[300px] flex flex-col justify-center space-y-8">
        <h1>Equipment/Camping</h1>
        <h1 className="text-4xl">Camping</h1>
        <p>Tents</p>
      </header>
      <div className="flex">
        <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L300-1?t=1608000868807542"
          text="The North Face Bivy"
          price="$18 first day"
        />
        <ProductCard
          src="https://storage.googleapis.com/cf-public-us/v18rentals-25195/media/L180-2?t=1608001138273779"
          text="The North Face Bivy"
          price="$24 first day"
        />
      </div>
    </div>
  );
};

export default Camping;
