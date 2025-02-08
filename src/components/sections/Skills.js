import React from "react";
import "../Main.css";

import {
  images,
  FE_Images,
  BE_Images,
  DB_Images,
  version_images,
  other_images,
} from "../../assets/index";

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
        {/* <b>Frontend development</b> — HTML, CSS, Javascript, ReactJs, Tailwind,
        Bootstrap <br></br>
        <b>Backend development</b> — Java, Javascript, Spring Boot, NodeJs,
        ExpressJs<br></br> <b>Database Management</b> — Couchbase, MongoDB, SQL
        <br></br>
        <b>Version control </b> — Git, GitHub <br></br>
        <b>Other</b> — DSA, Postman, Debugging, Docker, Kubernetes */}
        <div class=" flex flex-col  mt-5">
          <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] font-bold text-ellipsis text-[#241f66e2] ">
            Technologies and tools
          </h3>
          <div class="flex mt-5 flex-row flex-wrap justify-center gap-10 ">
            {images.map((img, i) => (
              <TechCard imguri={img} i={i} />
            ))}
          </div>
        </div>
        {/* <h3 class=" mb-0 md:text-[1.75rem] text-[1.20rem] font-bold text-ellipsis text-[#241f66e2] ">
            Frontend development
          </h3>
          <div class="md:text-[1.5rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
            HTML, CSS, Javascript, ReactJs, Tailwind, Bootstrap
          </div>
          <div class="flex mt-5 flex-row flex-wrap gap-10 ">
            {FE_Images.map((img, i) => (
              <TechCard imguri={img} i={i} />
            ))}
          </div>
        </div>
        <div class=" flex flex-col  mt-5">
          <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] font-bold text-ellipsis text-[#241f66e2] ">
            Backend development
          </h3>
          <div class="flex mt-5 flex-row flex-wrap gap-10 ">
            {BE_Images.map((img, i) => (
              <TechCard imguri={img} i={i} />
            ))}
          </div>
        </div>
        <div class=" flex flex-col  mt-5">
          <h3 class=" mb-0 md:text-[1.75rem]  text-[1.20rem] font-bold text-ellipsis text-[#241f66e2] ">
            Database
          </h3>
          <div class="flex mt-5 flex-row flex-wrap gap-10 ">
            {DB_Images.map((img, i) => (
              <TechCard imguri={img} i={i} />
            ))}
          </div>
        </div>
        <div class=" flex flex-col  mt-5">
          <h3 class=" mb-0 md:text-[1.75rem]  text-[1.20rem] font-bold text-ellipsis text-[#241f66e2] ">
            Version control
          </h3>
          <div class="flex mt-5 flex-row flex-wrap gap-10 ">
            {version_images.map((img, i) => (
              <TechCard imguri={img} i={i} />
            ))}
          </div>
        </div>
        <div class=" flex flex-col  mt-5">
          <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] font-bold text-ellipsis text-[#241f66e2] ">
            Other
          </h3>
          <div class="flex mt-5 flex-row flex-wrap gap-10 ">
            {other_images.map((img, i) => (
              <TechCard imguri={img} i={i} />
            ))}
          </div> 
        </div>*/}
      </div>
    </section>
  );
}

export default Skills;
