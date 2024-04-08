import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Header from "./Header";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:flex md:flex-shrink-0 md:fixed w-[19rem]">
      <Transition
        show={isOpen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-black ">
            <div className="absolute top-0 right-0 -mr-14 p-1 ">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600 "
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
            <div className="flex-1 h-0 overflow-y-auto">
              {/* Sidebar content here */}
              <Header setIsOpen={setIsOpen} flag={true}></Header>
            </div>
          </div>
          <div className="flex-shrink-0 w-14">
            {/* Empty div to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Transition>
      <div className="hidden md:flex md:flex-shrink-0 w-full">
        {/* Sidebar content here */}
        <Header setIsOpen={setIsOpen} flag={false}></Header>
      </div>
      <div className="flex-shrink-0 w-14">
        {/* Empty div to force sidebar to shrink to fit close icon */}
      </div>
      <div className="fixed md:hidden z-10">
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed top-0 right-0 p-4 m-4 rounded-full bg-gray-800 text-white focus:outline-none ${
            isOpen ? "hidden" : ""
          } `}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
