import { Transition } from "@headlessui/react";
import React, { useState } from "react";

const Alert = ({ type, message, handleClose }) => {
  const alertClasses = {
    success: "bg-[#040b14] text-white",
    fail: "bg-red-100 border-red-400 text-red-700",
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-[#050d187b]">
        <div
          className={`flex w-[360px] h-[160px] border items-center justify-center border-gray-300 shadow-md rounded-md p-4 ${alertClasses[type]}`}
        >
          <p className="text-lg font-medium">{message}</p>
          <button
            onClick={handleClose}
            className={`absolute top-0 right-0 p-2 m-2 rounded-full focus:outline-none hover:bg-slate-500  ${alertClasses[type]}`}
          >
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default Alert;
