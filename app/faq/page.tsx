"use client";
import React, { useState } from "react";
import { questions } from "./types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';

const page = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <div className="h-full">
  <header className="bg-white h-[400px] w-full flex items-center justify-center">
    <p className="text-6xl font-bold">FAQ</p>
  </header>
  <main className="h-screen">
    <div className=" flex flex-col space-y-4 bg-gray-200 h-full">
      {questions.map((question, index) => (
        <div
          className={`flex flex-col items-center justify-center ${
            activeIndex === index ? "mb-4" : ""
          }`}
          key={index}
        >
          <button
            className="w-1/2 bg-white p-4 flex items-start mx-auto font-bold text-xl justify-between mt-4"
            onClick={() => handleClick(index)}
          >
            {question.question}
            {activeIndex ?<AddIcon /> : <RemoveIcon/>}
          </button>
          {activeIndex === index && (
            <p className="w-1/2 bg-white p-4 text-xl">{question.answer}</p>
          )}
        </div>
      ))}
    </div>
  </main>
</div>

  );
};

export default page;
