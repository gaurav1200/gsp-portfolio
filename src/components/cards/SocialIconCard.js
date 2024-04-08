import React from "react";

function SocialIconCard(Component, link, flag) {
  return (
    <a
      onClick={() => window.open(`${link ? link : "#"} `, "_blank")}
      className={`${
        flag ? "w-6 h-6 bg-white p-1" : "w-9 h-9 text-l bg-[#212431] text-white"
      } m-1  flex items-center justify-center rounded-full hover:bg-sky-500 cursor-pointer`}
    >
      <Component />
    </a>
  );
}

export default SocialIconCard;
