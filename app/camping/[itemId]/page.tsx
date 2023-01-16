"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { CampingItem, campingTents } from "./types";
import { useMockState } from "../../../hooks/useMockState";
import { DetailsDescription } from "../../../components/DetailsDescription";
import Spinner from "../../../components/Spinner";

type Props = {
  params: {
    itemId: string;
  };
};

function ItemPage({ params: { itemId } }: Props) {
  const { data, loading, error } = useMockState(
    campingTents.find((item) => item.id.toString() === itemId),
    true
  );
  console.log(data, loading, error);

  return (
    
    <div className="h-screen ">
        { loading ?  <Spinner/> :<div className="flex w-[90%] justify-between">
      <div className="border">
         <img src={data?.img} alt="" className="w-[400px]" />
      </div>
      <div>
        <DetailsDescription
          params={{
            category: "Climbing",
          }}
        />
        <p>{data?.name}</p>
        <p>{data?.desc}</p>
      </div>
      </div>}
    </div>
  );
}

export default ItemPage;
