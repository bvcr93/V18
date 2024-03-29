"use client";

import { campingTents } from "./types";
import { useMockState } from "../../../hooks/useMockState";
import { DetailsDescription } from "../../../components/DetailsDescription";
import Spinner from "../../../components/Spinner";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import Button from "../../../components/Button";

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
    <div className="h-full py-20 flex justify-around  md:w-[85%] mx-auto ">
      {loading ? (
        <Spinner />
      ) : (
        <div className="md:flex grid grid-cols-1 w-[90%] justify-between ">
          <div className=" p-10">
            <img src={data?.img} alt="" className="w-[600px]" />
            <div className="flex items-center justify-center">
              {" "}
              <p className="w-[30px] h-[10px] bg-slate-300 mr-5 rounded "></p>
              <p className="w-[30px] h-[10px] bg-slate-500 rounded"></p>
            </div>
          </div>
          <div className="ml-20">
            <DetailsDescription
              params={{
                category: "Climbing",
              }}
            />
            <p className="text-4xl my-5">{data?.name}</p>
            <p>{data?.desc}</p>
            <hr />
            <div>
              <div className="flex  w-1/2 py-8 my-8">
                <p className="text-sm font-bold">AVAILABILITY</p>
                <p className="bg-red-600 px-4 tracking-widest rounded-full text-white ml-10">
                  SOLD OUT
                </p>
              </div>
              <div className="flex  w-1/2">
                <div>
                  <p>price</p>
                  <p className="text-2xl font-bold mt-5">${data?.price}</p>
                </div>
                <div className=" flex flex-col ml-20 w-[150px] ">
                  <p className="">quantity</p>

                  <div className="flex justify-between mt-5">
                    <RemoveCircleOutlineRoundedIcon
                      className="text-slate-400"
                      sx={{ fontSize: "40px" }}
                    />
                    <p className="text-2xl">0</p>
                    <AddCircleOutlineRoundedIcon
                      className="text-slate-400"
                      sx={{ fontSize: "40px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="py-8 my-8">
                <Button
                  className={"bg-gray-400 p-3 text-white rounded"}
                  value={"Add to cart"}
                />
              </div>
            </div>
          </div>
          <hr />
        </div>
      )}
    </div>
  );
}

export default ItemPage;
