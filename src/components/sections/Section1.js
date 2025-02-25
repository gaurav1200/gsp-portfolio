import React from "react";
import { FaDownload, FaFileDownload } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import Glogowhite from "../../assets/img/gwhite.png";
import resume from "../../assets/GauravPatil_BackEndDev-Resume-3Yrs.pdf";
function Section1({ id, bg, text }) {
  const downloadFile = () => {
    const link = document.createElement("a");
    const data = resume;

    link.href = data;

    link.download = "GauravPatil_BackEndDev-Resume-3Yrs.pdf";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <section
      id={id}
      className={`section flex  bg-[url(/src/assets/img/hero_bg_4.jpg)] bg-cover bg-center h-screen text-white font-bold box-border`}
    >
      <div className="flex md:flex-row flex-col px-10 z-[3] justify-center items-center gap-5">
        <div className=" flex flex-col  ">
          <img
            src={Glogowhite}
            alt="logo"
            className="w-16 h-16 object-contain  "
          />
          <h1 className="flex text-5xl md:text-7xl  ">Hi! I am</h1>
          <h1 className="flex text-5xl md:text-7xl"> Gaurav Patil</h1>

          <p className="flex text-xl md:text-3xl font-light ">
            {text}
            Full Stack Web Developer
          </p>
        </div>
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
    </section>
  );
}

export default Section1;
