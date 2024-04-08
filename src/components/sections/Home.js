import React, { useEffect, useRef, useState } from "react";
import Glogowhite from "../../assets/img/gwhite.png";
import "../Main.css";
import { FaDownload } from "react-icons/fa";
import ImageSlider from "../ImageSlider";
import Slider from "react-slick";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import axios from "axios";

// const data = [
//   <section
//     id="hero"
//     className="section flex  bg-[url('/src/assets/img/hero_bg_4.jpg')] bg-cover bg-center h-screen text-white font-bold box-border"
//   >
//     <div className="flex md:flex-row flex-col px-10 z-10 justify-center items-center">
//       <div className=" flex flex-col  ">
//         <img
//           src={Glogowhite}
//           alt="logo"
//           className="w-16 h-16 object-contain  "
//         />
//         <h1 className="flex text-5xl md:text-7xl  ">Hi! I am</h1>
//         <h1 className="flex text-5xl md:text-7xl"> Gaurav Patil</h1>

//         <p className="flex text-xl md:text-3xl font-light ">
//           Full Stack Web Developer
//         </p>
//       </div>
//       <div className="flex flex-col m-8 justify-center items-center">
//         <a
//           href="#"
//           className="w-9 h-9 ml-10 text-l flex items-center justify-center rounded-full  bg-[#212431] hover:bg-sky-500 "
//         >
//           <FaDownload />
//         </a>
//       </div>
//     </div>
//   </section>,
//   <section
//     id="hero2"
//     className="section flex   bg-[url('/src/assets/img/hero_bg_2.jpg')] bg-cover bg-center h-screen text-white font-bold box-border"
//   >
//     <div className="flex md:flex-row flex-col px-10 z-10 justify-center items-center">
//       <div className=" flex flex-col  ">
//         <img
//           src={Glogowhite}
//           alt="logo"
//           className="w-16 h-16 object-contain  "
//         />
//         <h1 className="flex text-5xl md:text-7xl  ">Hi! I am</h1>
//         <h1 className="flex text-5xl md:text-7xl"> Gaurav Patil</h1>

//         <p className="flex text-xl md:text-3xl font-light ">
//           Backend Developer
//         </p>
//       </div>
//       <div className="flex flex-col m-8 justify-center items-center">
//         <a
//           href="#"
//           className="w-9 h-9 ml-10 text-l flex items-center justify-center rounded-full  bg-[#212431] hover:bg-sky-500 "
//         >
//           <FaDownload />
//         </a>
//       </div>
//     </div>
//   </section>,
// ];
const visitEndpoint = process.env.REACT_APP_VISIT_API_ENDPOINT;
const data = [Section1, Section2];
function Home() {
  let sliderRef = useRef(null);
  const [count, setCount] = useState(0);
  const [visits, setVisits] = useState(0);
  const play = () => {
    sliderRef.slickPlay();
  };
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (sliderRef === null) {
        setCount(count + 1);
      } else {
        sliderRef.slickPlay();
        setCount(count + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count, sliderRef]);
  useEffect(() => {
    axios
      .get(`${visitEndpoint}/visit/portfolio`)
      .then((response) => {
        console.log("response count", response);
        setVisits(response.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <>
      {/* <span onClick={play} className="absolute top-0 right-0 z-10 text-red-800">
        {visits}
      </span> */}
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {data.map((item) => Section3(item))}
        {/* <div>
        <section
          id="hero1"
          className="section flex bg-fixed  bg-[url('/src/assets/img/hero_bg_4.jpg')] bg-cover bg-center h-screen text-white font-bold box-border"
        >
          <div className="flex md:flex-row flex-col px-10 z-[1] justify-center items-center">
            <div className=" flex flex-col  ">
              <img
                src={Glogowhite}
                alt="logo"
                className="w-16 h-16 object-contain  "
              />
              <h1 className="flex text-5xl md:text-7xl  ">Hi! I am</h1>
              <h1 className="flex text-5xl md:text-7xl"> Gaurav Patil</h1>

              <p className="flex text-xl md:text-3xl font-light ">
                Full Stack Web Developer
              </p>
            </div>
            <div className="flex flex-col m-8 justify-center items-center">
              <a
                href="#"
                className="w-9 h-9 ml-10 text-l flex items-center justify-center rounded-full  bg-[#212431] hover:bg-sky-500 "
              >
                <FaDownload />
              </a>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          id="hero2"
          className="section flex bg-fixed  bg-[url('/src/assets/img/hero_bg_2.jpg')] bg-cover bg-center h-screen text-white font-bold box-border"
        >
          <div className="flex md:flex-row flex-col px-10 z-[1] justify-center items-center">
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
              <a
                href="#"
                className="w-9 h-9 ml-10 text-l flex items-center justify-center rounded-full  bg-[#212431] hover:bg-sky-500 "
              >
                <FaDownload />
              </a>
            </div>
          </div>
        </section>
      </div> */}
      </Slider>
      {/* <div style={{ textAlign: "center" }} className="z-30">
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}
    </>
    // <section
    //   id="hero"
    //   className="section flex bg-fixed  bg-[url('/src/assets/img/hero_bg_4.jpg')] bg-cover bg-center h-screen text-white font-bold box-border"
    // >

    //   <div className="flex md:flex-row flex-col px-10 z-[1] justify-center items-center">
    //     <div className=" flex flex-col  ">
    //       <img
    //         src={Glogowhite}
    //         alt="logo"
    //         className="w-16 h-16 object-contain  "
    //       />
    //       <h1 className="flex text-5xl md:text-7xl  ">Hi! I am</h1>
    //       <h1 className="flex text-5xl md:text-7xl"> Gaurav Patil</h1>

    //       <p className="flex text-xl md:text-3xl font-light ">
    //         Full Stack Web Developer
    //       </p>
    //     </div>
    //     <div className="flex flex-col m-8 justify-center items-center">
    //       <a
    //         href="#"
    //         className="w-9 h-9 ml-10 text-l flex items-center justify-center rounded-full  bg-[#212431] hover:bg-sky-500 "
    //       >
    //         <FaDownload />
    //       </a>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Home;
