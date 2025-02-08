import React from "react";

import parse from "html-react-parser";

function Card({ data }) {
  // const data = {
  //   title: "Experience",
  //   role: "Software Developer",
  //   colleage: "University of Mumbai",
  //   company: "Google",
  //   course: "B.Tech in Computer Science",
  //   location: "Mumbai, India",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  //   startDate: "May-2023",
  //   endDate: "present",
  //   dataType: "experience",
  // };
  return (
    <div class=" flex flex-row flex-wrap mb-5 p-5 rounded-lg shadow-[0_5px_20px_3px_rgba(0,0,0,0.3)]">
      <div class="sm:flex-1  mr-auto pr-5">
        <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
          {data?.dataType === "experience" ? data.role : ""}
          {data?.dataType === "education" ? data.colleage : ""}
        </h3>
        <div class="md:text-[1.5rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
          {data?.dataType === "experience" ? data.company : ""}
          {data?.dataType === "education" ? data.course : ""}
        </div>
        <div class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f668f] italic">
          {data?.location}
        </div>
        {/* <p className=" mb-4 leading-relaxed md:text-[1rem] text-[.75rem] indent-8"> */}

        {/* </p> */}
      </div>
      <div class=" flex md:flex-col flex-row  items-center mb-3">
        <span class="text-[#241f66bb] font-bold font">
          {data?.startDate}&nbsp;-&nbsp;{data?.endDate}
        </span>
        {/* <img
          src="https://pbs.twimg.com/profile_images/1381436398771798018/9T0i0DTh_400x400.jpg"
          alt="logo"
          className=" flex md:w-36 w-16 p-3 object-contain justify-center items-center "
        /> */}
      </div>
      <ul className="mb-4 pl-4 leading-relaxed md:text-[1rem] text-[.75rem] list-disc">
        {data?.description?.map((point, i) => (
          <li>{parse(point)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
