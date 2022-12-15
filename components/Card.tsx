import React from "react";
import { JsxElement } from "typescript";
import Button from "./Button";

type Props = {
  img?: string;
  text: string;
 
};

const Card = ({ img, text }: Props) => {
  return (
    <div className="max-w-[500px] rounded  shadow-2xl h-[540px]  m-4 relative">
      <img src={img} alt="" className="h-full " />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2  text-white absolute top-[50%] left-[50%]">
          {text}
        </div>
        <Button
          value="start reading"
          className=" absolute top-[85%] right-5 cursor-pointer bg-black  text-white font-bold py-2 px-4 rounded"
        />
      </div>
    </div>
  );
};

export default Card;
