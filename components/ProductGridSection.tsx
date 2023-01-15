import React from "react";
import LandingSectionNav from "./LandingSectionNav";
import ProductCard from "./ProductCard";

type Props = {
  children: React.ReactNode;
  title: string;
  Button?: React.ComponentType<any>;
  

};

const ProductGridSection = ({title, children, Button = undefined}:Props) => {
  return (
    <div className="mt-10">
      <LandingSectionNav title={title}   Button = {Button} />
      <main className="md:flex grid grid-cols-2 md:items-center md:justify-center mt-10 ">
     
        {children}
      </main>
    </div>
  );
};

export default ProductGridSection;
