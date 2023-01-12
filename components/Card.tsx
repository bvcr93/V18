import React from "react";
import { JsxElement } from "typescript";
import Button from "./Button";

type Props = {
  img?: string;
  text: string;
  Button?: React.ComponentType<any>;
};

const Card = ({ img, text, Button = undefined }: Props) => {
  return (
    <div className="cursor-pointer  max-w-[500px] bg-white rounded  shadow-2xl h-[540px]  m-4 relative">
      <img src={img} alt="" className="h-full object-cover " />
      <div className="px-6 py-4  ">
        <div className="font-bold mr-5 text-3xl mb-2  text-white absolute top-[80%] text-center ">
          {text}
        </div>
        {Button && <Button
          value="start reading"
          className=" absolute top-[85%] right-5 cursor-pointer bg-black  text-white font-bold py-2 px-4 rounded"
        />}
      </div>
    </div>
  );
};

export default Card;
