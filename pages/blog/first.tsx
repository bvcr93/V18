import React from "react";
import Button from "../../components/Button";

const firstBlog = () => {
  return (
    <div>
      <img
        className=" bg-cover object-cover w-full h-[503px]"
        src="https://images.unsplash.com/photo-1578886141033-b9f066572135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
      <div className="absolute top-[50%] left-[50%] text-center text-white text-4xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        eligendi.
      </div>

    </div>
  );
};

export default firstBlog;
