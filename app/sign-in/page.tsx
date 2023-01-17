
import React from "react";
import Button from "../../components/Button";
import RootLayout from "../layout";

const SignInForm = () => {
  return (
 
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-lg">
        <header className="text-xl font-medium mb-4 ml-6">Sign In</header>
        <form className="bg-white p-6 rounded-lg ">
          <div className="flex flex-col mb-4">
            <input
              type="text"
              placeholder="Email"
              className="border-b border-gray-400 outline-none p-2"
            />
            <input
              type="password"
              className="border-b border-gray-400 outline-none p-2"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-gray-700">Remember me</p>
            </label>
            <a href="#" className="text-blue-500">
              Password help
            </a>
          </div>
          <button className="w-full bg-stone-800 text-white py-3 rounded hover:bg-stone-900">
            Sign In
          </button>
        </form>
        <div className="text-center text-gray-600">
          <p className="m-3">Don't have an account?</p>
          <a href="#" className="text-blue-500 ">
            Create one now
          </a>
        </div>
      </div>

    </div>
  
  );
};


export default SignInForm;

