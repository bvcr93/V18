import React from "react";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-8xl ">
        Something went wrong
      </h1>
      <Link href="/" className="bg-indigo-500 text-2xl mt-10 text-white rounded-md p-2   mx-auto">
        Back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
