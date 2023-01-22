import React from 'react'
import { useState } from 'react'

type ModalProps = {
    
    setModalIsOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({setModalIsOpen}:ModalProps) => {
 
   const closeModal = () => {
    setModalIsOpen(false)
   }


    
  return (
    <>
  <div className=" bg-white  p-6 rounded-lg left-[40%] top-[30%] fixed w-[400px] h-[400px] ">
    <div className="absolute top-0 right-0 p-1">
      <button onClick={closeModal}  className="text-gray-500 focus:outline-none">
        <svg  className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <h3 className="text-lg leading-6 font-medium text-gray-900">Modal Title</h3>
    <div className="mt-2">
      <p className="text-sm leading-5 text-gray-500">Modal Content goes here</p>
    </div>
    <div className="mt-5">
      <span className="inline-flex rounded-md shadow-sm">
        <button type="button" className="py-2 px-4 border border-gray-300 
        rounded-md text-sm leading-5 font-medium text-gray-700
         hover:text-gray-500 focus:outline-none focus:border-blue-300 
         focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
          Cancel
        </button>
        <button type="button" className="ml-3 py-2 px-4 border
         border-gray-300 rounded-md text-sm leading-5 font-medium
          text-gray-700 hover:text-gray-500 focus:outline-none
           focus:border-blue-300 focus:shadow-outline-blue
            active:bg-gray-50 active:text-gray-800">
          Save
        </button>
      </span>
    </div>
  </div> 
   
  </>
  )
}

export default Modal

