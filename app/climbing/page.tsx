import React from "react";
import EquipmentHeader from "../../components/EquipmentHeader";
import ProductCard from "../../components/ProductCard";
import { ClimgbingCrashPads } from "./ClimbingProducts";
import { Brushes } from "./ClimbingProducts";
import ProductGridSection from "../../components/ProductGridSection";
const Climbing = () => {
  return (
    <div className="max-w-[80%] mx-auto ">
      <EquipmentHeader
        text=""
        headerCategory={"Equipment/Climbing"}
        category={"Climbing"}
      />

      <ProductGridSection title={"Organic Crash Pads"}>
        {ClimgbingCrashPads.map((item) => (
          <ProductCard
            key={item.id}
            text={item.name}
            src={item.img}
            className={
              "xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"
            }
          />
        ))}
      </ProductGridSection>
      <ProductGridSection title={"Brushes"}>
        {Brushes.map(brush => (
          <ProductCard text={brush.name} src={brush.img} price = {brush.price} className={"xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl"} />
        ))}
      </ProductGridSection>

    </div>
  );
};

export default Climbing;
