import React from "react";
import "../Main.css";
import Works from "../Works";
function Projects() {
  return (
    <section
      id="projects"
      className="section flex flex-col text-wrap w-full  px-7 justify-center text-black box-border"
    >
      <div className="pb-5">
        <h2 class="mb-5 md:text-[2.75rem] text-[2.25rem] text-[#241f66] font-extrabold uppercase">
          My Work
        </h2>
        <h2 className="mb-5 w-[5rem] border-b-4 border-[#241f66]"></h2>
        <Works />
      </div>
    </section>
  );
}

export default Projects;
