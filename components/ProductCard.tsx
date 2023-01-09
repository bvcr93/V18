import Image from "next/image";
import React from "react";

type Props = {
  text: string;
  price: number;
  src: string;
  id: number;
};

const ProductCard = ({ text, src, price }: Props) => {
  return (
    <div className=" xl:border-l mt-4  sm:h-64 sm:w-64  md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-160 xl:w-160 flex  flex-col items-center justify-center bg-white hover:shadow-xl">
      <Image src={src} alt="" width={200} height={300} />

      <p>{text}</p>
      <p className="text-base">${price} today</p>
    </div>
  );
};

export default ProductCard;
