import React from "react";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-8xl">
        this is some fuckin shit and you need to leave it now!!!!
      </h1>
      <Link href="/" className="bg-indigo-500 ">
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
