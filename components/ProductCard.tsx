import Image from "next/image";
import React from "react";

type Props = {
  text: string;
  price?: number;
  src: string;
  id: number;
  className: string
};

const ProductCard = ({ text, src, price ,className }: Props) => {
  return (
    <div className = {className}>
      <Image src={src} alt="" width={200} height={300} />

      <p>{text}</p>
      <p className="text-base">${price} today</p>
    </div>
  );
};

export default ProductCard;
