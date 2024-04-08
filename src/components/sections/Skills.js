import React from "react";
import "../Main.css";

import { images } from "../../assets/index";

import TechCard from "../cards/TechCard";

function Skills() {
  return (
    <section
      id="skills"
      className="section flex flex-col text-wrap w-full  px-7 justify-center text-black box-border"
    >
      <div className=" ">
        <h2 class="mb-5 md:text-[2.75rem] text-[2.25rem] text-[#241f66] font-extrabold uppercase">
          Skillls
        </h2>
        <div className="mb-5 w-[5rem] border-b-4 border-[#241f66]"></div>
        <div class=" flex flex-col  mt-5">
          <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
            Languages and Tools
          </h3>
          <div class="flex mt-5 flex-row flex-wrap justify-center gap-10 ">
            {images.map((img, i) => (
              <TechCard imguri={img} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
