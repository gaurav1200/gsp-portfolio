import React from "react";
import { FaDownload } from "react-icons/fa";
import Glogowhite from "../../assets/img/gwhite.png";
import { CiSaveDown2 } from "react-icons/ci";
import sample from "../../assets/sample.pdf";
import resume from "../../assets/Gaurav-Patil-Resume.pdf";
function Section2() {
  const downloadFile = () => {
    const link = document.createElement("a");
    const data = resume;

    link.href = data;

    link.download = "Gaurav_Patil_Resume.pdf";
    link.click();
    URL.revokeObjectURL(link.href);
  };
  return (
    <section
      id="hero"
      className="section flex  bg-[url('/src/assets/img/hero_bg_3.jpg')] bg-cover bg-center h-screen text-white font-bold box-border"
    >
      <div className="flex md:flex-row flex-col px-10 z-10 justify-center items-center gap-5">
        <div className=" flex flex-col  ">
          <img
            src={Glogowhite}
            alt="logo"
            className="w-16 h-16 object-contain  "
          />
          <h1 className="flex text-5xl md:text-7xl  ">Hi! I am</h1>
          <h1 className="flex text-5xl md:text-7xl"> Gaurav Patil</h1>

          <p className="flex text-xl md:text-3xl font-light ">
            Backend Developer
          </p>
        </div>
        <div className="flex flex-col m-8 justify-center items-center">
          <div
            className="flex m-8 justify-center items-center hover:bg-[#050d184d] border-[1px]   p-2 font-normal rounded-sm  cursor-pointer gap-2 flex-wrap"
            onClick={downloadFile}
          >
            Resume
            <a href="#" className=" text-xl  ">
              <CiSaveDown2 />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
