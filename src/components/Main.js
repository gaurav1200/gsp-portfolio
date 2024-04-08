import React from "react";

import Glogowhite from "../assets/img/gwhite.png";
import GlogoBlack from "../assets/img/gBlack2.png";
import "./Main.css";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function Main() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
      {/* <section
        id="hero"
        className="section hero flex w-full  bg-[url('/src/assets/img/hero_bg_2.jpg')] bg-cover bg-center h-screen text-white font-bold box-border"
      >
        <div className="md:p-[19rem] z-[1] flex flex-col justify-center items-center min-h-screen mx-20 h-min ">
          <img
            src={Glogowhite}
            alt="logo"
            className="w-16 h-16 object-contain  "
          />
          <h1 className="flex text-5xl md:text-7xl  ">
            Hi! I am
            
          </h1>
          <h1 className="flex text-5xl md:text-7xl"> Gaurav Patil</h1>

          <p className="flex text-xl md:text-3xl font-light ">
          
            Full Stack Web Developer
           
          </p>
        </div>
      </section>
      <section
        id="about"
        className="section flex flex-col text-wrap w-full  pl-10 justify-center text-black box-border"
      >
        <div>
          <h2 class="mb-5 md:text-[2.75rem] text-[2.25rem] text-[#241f66] font-extrabold uppercase">
            About
          </h2>
          <h2 className="mb-5 w-[5rem] border-b-4 border-[#241f66]"></h2>
          <div class=" flex sm:flex-row flex-col mb-5">
            <div class="sm:flex-1 resume-content mr-auto pr-5">
              <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
                Software Developer
              </h3>
              <div class="md:text-[1.5rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                Mavenir Systems Pvt Ltd
              </div>
              <div class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f668f] italic">
                Bangalore, India
              </div>
              <p className=" mb-4 leading-relaxed md:text-[1rem] text-[.75rem]">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
            </div>
            <div class="">
              <span class="text-[#241f66bb] font-bold font">
                May 2023 - Present
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="section flex flex-col text-wrap w-full  pl-10 justify-center text-black box-border"
      >
        <div>
          <h2 class="mb-5 md:text-[2.75rem] text-[2.25rem] text-[#241f66] font-extrabold uppercase">
            Experience
          </h2>
          <h2 className="mb-5 w-[5rem] border-b-4 border-[#241f66]"></h2>
          <div class=" flex sm:flex-row flex-col mb-5">
            <div class="sm:flex-1 resume-content mr-auto pr-5">
              <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
                Software Developer
              </h3>
              <div class="md:text-[1.5rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                Mavenir Systems Pvt Ltd
              </div>
              <div class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f668f] italic">
                Bangalore, India
              </div>
              <p className=" mb-4 leading-relaxed md:text-[1rem] text-[.75rem]">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
            </div>
            <div class="">
              <span class="text-[#241f66bb] font-bold font">
                May 2023 - Present
              </span>
            </div>
          </div>

          <div class=" flex sm:flex-row flex-col mb-5">
            <div class="sm:flex-1 resume-content mr-auto pr-5">
              <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
                Asociate Software Developer
              </h3>
              <div class="md:text-[1.5rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                Mavenir Systems Pvt Ltd
              </div>
              <div class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f668f] italic">
                Bangalore, India
              </div>
              <p className=" mb-4 leading-relaxed md:text-[1rem] text-[.75rem]">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
            </div>
            <div class="">
              <span class="text-[#241f66bb] font-bold font">
                May 2022 - May 2023
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="education"
        className="section flex flex-col text-wrap w-full  pl-10 justify-center text-black box-border"
      >
        <div>
          <h2 class="mb-5 md:text-[2.75rem] text-[2.25rem] text-[#241f66] font-extrabold uppercase">
            Education
          </h2>
          <h2 className="mb-5 w-[5rem] border-b-4 border-[#241f66]"></h2>
          <div class=" flex sm:flex-row flex-col mb-5">
            <div class="sm:flex-1 resume-content mr-auto pr-5">
              <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
                IACSD Pune (C-DAC)
              </h3>
              <div class="md:text-[1.5rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                PG-DAC
              </div>
              <div class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f668f] italic">
                Pune, India
              </div>
              <p className=" mb-4 leading-relaxed md:text-[1rem] text-[.75rem]">
                I have completed My Post Graduate Diploma in Advanced Computing
                from IACSD Pune (C-DAC) in 2022. Where I learned about Software
                Development, Web Development, Database Management, and
                Networking. I learned Full Stack Development and worked on
                various projects. I have learned various technologies like Java,
                Advanced Java, HTML, CSS, JavaScript, MySQL, MongoDB, Node and
                React.
              </p>
            </div>
            <div class="">
              <span class="text-[#241f66bb] font-bold font">
                September 2021 - April 2022
              </span>
            </div>
          </div>

          <div class=" flex sm:flex-row flex-col mb-5">
            <div class="sm:flex-1 resume-content mr-auto pr-5">
              <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
                North Maharashtra University
              </h3>
              <div class="md:text-[1.5rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                Bacholer of Engineering
              </div>
              <div class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f668f] italic">
                Jalgaon, India
              </div>
              <p className=" mb-4 leading-relaxed md:text-[1rem] text-[.75rem]">
                I have completed my Bachelor of Engineering from North
                Maharashtra University in 2019.
              </p>
            </div>
            <div class="">
              <span class="text-[#241f66bb] font-bold font">
                September 2015 - November 2019
              </span>
            </div>
          </div>

          <div class=" flex sm:flex-row flex-col mb-5">
            <div class="sm:flex-1 resume-content mr-auto pr-5">
              <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
                Shri Gulabrao Deokar College of Polytechnic
              </h3>
              <div class="md:text-[1.5rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                Engineering Diploma
              </div>
              <div class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f668f] italic">
                Jalgaon, India
              </div>
              <p className=" mb-4 leading-relaxed md:text-[1rem] text-[.75rem]">
                I have completed my Diploma in Engineering from Shri Gulabrao
                Deokar College of Polytechnic in 2015.
              </p>
            </div>
            <div class="">
              <span class="text-[#241f66bb] font-bold font">
                September 2012 - June 2015
              </span>
            </div>
          </div>
        </div>
      </section> */}
      {/*  <section
        id="projects"
        className="section flex flex-col text-wrap w-full  pl-10 justify-center text-black box-border"
      >
        <div>
          <h2 class="mb-5 md:text-[2.75rem] text-[2.25rem] text-[#241f66] font-extrabold uppercase">
            Projects
          </h2>
          <h2 className="mb-5 w-[5rem] border-b-4 border-[#241f66]"></h2>
          <div class=" flex sm:flex-row flex-col mb-5">
            <div class="sm:flex-1 resume-content mr-auto pr-5">
              <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
                Software Developer
              </h3>
              <div class="md:text-[1.5rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                Mavenir Systems Pvt Ltd
              </div>
              <div class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f668f] italic">
                Bangalore, India
              </div>
              <p className=" mb-4 leading-relaxed md:text-[1rem] text-[.75rem]">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
            </div>
            <div class="">
              <span class="text-[#241f66bb] font-bold font">
                May 2023 - Present
              </span>
            </div>
          </div>
        </div>
       </section>  */}

      {/* <section
        id="footer"
        className="section flex flex-col text-wrap w-full  pl-10 justify-center text-black box-border"
      >
        <h2 className="mb-5 border-b-4 border-[#241f66] mr-3 pr-5"></h2>

        <div class="flex flex-col mr-3  mb-5  text-[#241f66]">
          <div class="flex flex-col ">
            <div class="bg-[#f8f9fa] shadow-[0_5px_20px_3px_rgba(0,0,0,0.3)] p-5 ">
              <div className="flex flex-col justify-center items-center border-b-2 pb-5">
                <img
                  src={GlogoBlack}
                  alt="logo"
                  className=" flex w-16 h-16 object-contain justify-center items-center"
                />
                <h3 class="mb-0 md:text-[1.75rem]  ext-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
                  Gaurav Patil
                </h3>
                <p class="md:text-[1.25rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                  Mavenir Systems Pvt Ltd
                </p>
                <p class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f668f] italic">
                  Bangalore, India
                </p>
              </div>
              <div className="flex md:flex-row flex-col gap-5 pt-8 pb-5 justify-center items-center">
                <div className="flex md:flex-col flex-col gap-2 justify-center items-center">
                  <p class="md:text-[1.25rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                    Phone
                  </p>
                  <p class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f66c6] italic">
                    457455824950
                  </p>
                </div>

                <div className="flex md:flex-col flex-col gap-2 justify-center items-center">
                  <p class="md:text-[1.25rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                    Email
                  </p>
                  <p class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f66c6] italic">
                    someti@gmail.com
                  </p>
                </div>
                <div className="flex md:flex-col flex-col gap-2 justify-center items-center">
                  <p class="md:text-[1.25rem] text-[1rem] font-semibold  text-[#241f66b5] italic">
                    Website
                  </p>
                  <p class="md:text-[1rem] text-[.75rem] mb-3  text-[#241f66c6] italic">
                    www.sometithing.com
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full justify-center text-white">
                <a
                  href="#"
                  className="w-9 h-9 m-1 text-l flex items-center justify-center rounded-full  bg-[#212431] hover:bg-sky-500 "
                >
                  <FaGithub></FaGithub>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 m-1 text-l flex items-center justify-center rounded-full   bg-[#212431] hover:bg-sky-500 "
                >
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 m-1 text-l flex items-center justify-center rounded-full   bg-[#212431] hover:bg-sky-500 "
                >
                  <FaTwitter></FaTwitter>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 m-1  text-l flex items-center justify-center rounded-full   bg-[#212431] hover:bg-sky-500 "
                >
                  <FaFacebookF></FaFacebookF>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 m-1 text-l flex items-center justify-center rounded-full   bg-[#212431] hover:bg-sky-500"
                >
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Main;
