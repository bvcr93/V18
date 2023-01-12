import React from "react";
import LandingSectionNav from "./LandingSectionNav";
import ProductCard from "./ProductCard";

type Props = {
  children: React.ReactNode;
  title: string;
};

const ProductGridSection = (props: Props) => {
  return (
    <div>
      <LandingSectionNav title={props.title} />
      <main className="md:flex grid grid-cols-2 md:items-center md:justify-center mt-10 ">
        {props.children}
      </main>
    </div>
  );
};

export default ProductGridSection;
