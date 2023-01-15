import Image from "next/image";
import React from "react";


type Props = {
  text: string | undefined
  price?: number;
  src?: string;
  id?: number;
  className: string;
  SearchIcon?: React.ComponentType<any>;
  LocalShippingIcon?: React.ComponentType<any>;
  TerrainIcon?: React.ComponentType<any>;
  PanToolIcon?: React.ComponentType<any>;

};

const ProductCard = ({ text, src, price, className, SearchIcon = undefined,PanToolIcon = undefined, TerrainIcon = undefined, LocalShippingIcon = undefined }: Props) => {
  return (
    <div className={className}>
      {SearchIcon && <SearchIcon className=" md:text-8xl text-4xl mt-5" />}
      {LocalShippingIcon && <LocalShippingIcon className=" md:text-8xl text-4xl mt-5" />}
      {TerrainIcon && <TerrainIcon className=" md:text-8xl text-4xl mt-5" />}
      {PanToolIcon && <PanToolIcon className=" md:text-8xl text-4xl mt-5" />}
      {src && <Image src={src} alt="" width={240} height={320} />}
      <p className="mt-10 text-gray-600 md:text-xl">{text}</p>
      {price && <p className="text-base mt-2">${price} today</p>}
    </div>
  );
};

export default ProductCard;
