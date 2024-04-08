import { FaArrowUp } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`flex justify-center items-center fixed h-9 w-9 bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
