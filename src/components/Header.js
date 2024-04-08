import React, { useEffect, useState } from "react";
import profileimage from "../assets/img/profile-img.jpg";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaUserGraduate,
} from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { GiSkills } from "react-icons/gi";

import GlogoBlack from "../assets/img/gauravBlack.png";
import "./Header.css";
import SocialIconCard from "./cards/SocialIconCard";
import { socialIcons } from "../assets/index";

function Header({ setIsOpen, flag }) {
  console.log(socialIcons);
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };
  useEffect(() => {
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.firstChild.classList.add("active");
          navbarlink.lastChild.classList.add("active1");
        } else {
          navbarlink.firstChild.classList.remove("active");
          navbarlink.lastChild.classList.remove("active1");
        }
      });
    };

    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);
  }, []);

  const scrollToSection = (index) => {
    flag && setIsOpen(false);
    const sections = document.querySelectorAll(".scrollto");
    const section = sections[index];

    sections.forEach((section, i) => {
      if (i !== index) {
        section.firstChild.classList.remove("active");
        section.lastChild.classList.remove("active1");
      }
    });
    section.firstChild.classList.add("active");
    section.lastChild.classList.add("active1");

    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" flex h-screen bg-[#040b14] flex-col text-white w-full ">
      <div className="flex flex-col w-full mt-5 ">
        <img
          src={GlogoBlack}
          alt=""
          className="w-28 h-28 m-auto justify-center rounded-full bg-slate-100 ring-8 ring-[#2c2f3f]"
        />
        <h1 className="flex flex-row w-full mt-4 mb-3 justify-center">
          <a
            href="#"
            className="text-2xl font-bold flex items-center justify-center"
          >
            Gaurav Patil
          </a>
        </h1>
        <div className="flex flex-row w-full justify-center">
          {socialIcons.map((data) => SocialIconCard(data.component, data.link))}
        </div>
      </div>
      <div
        id="navbar"
        className="no-scrollbar flex flex-col ml-9  items-baseline overflow-y-scroll"
      >
        <a
          href="#hero"
          className="flex flex-row mt-7 group text-[#a8a9b4] focus:text-white hover:text-white scrollto"
          onClick={() => scrollToSection(0)}
        >
          <HiOutlineHome className=" text-2xl mr-2 text-[#6f7180] group-focus:text-sky-500 group-hover:text-sky-500"></HiOutlineHome>
          <span className="flex">Home</span>
        </a>

        <a
          href="#about"
          className="flex flex-row mt-7 group text-[#a8a9b4] focus:text-white hover:text-white scrollto"
          onClick={() => scrollToSection(1)}
        >
          <CgProfile className=" text-2xl mr-2 text-[#6f7180] group-focus:text-sky-500 group-hover:text-sky-500"></CgProfile>
          <span>About</span>
        </a>
        <a
          href="#skills"
          className="flex flex-row mt-7 group text-[#a8a9b4] focus:text-white hover:text-white scrollto"
          onClick={() => scrollToSection(3)}
        >
          <GiSkills className=" text-2xl text-[#6f7180] group-focus:text-sky-500 group-hover:text-sky-500  mr-2"></GiSkills>
          <span>Skills</span>
        </a>
        <a
          href="#experience"
          className="flex flex-row mt-7 group text-[#a8a9b4] focus:text-white hover:text-white scrollto"
          onClick={() => scrollToSection(2)}
        >
          <MdOutlineWorkHistory className="text-2xl mr-2 text-[#6f7180] group-focus:text-sky-500 group-hover:text-sky-500"></MdOutlineWorkHistory>
          <span>Experience</span>
        </a>

        <a
          href="#education"
          className="flex flex-row mt-7 group text-[#a8a9b4] focus:text-white hover:text-white scrollto"
          onClick={() => scrollToSection(3)}
        >
          <FaUserGraduate className=" text-2xl text-[#6f7180] group-focus:text-sky-500 group-hover:text-sky-500  mr-2"></FaUserGraduate>
          <span>Education</span>
        </a>

        <a
          href="#projects"
          className="flex flex-row mt-7 group text-[#a8a9b4] focus:text-white hover:text-white scrollto"
          onClick={() => scrollToSection(4)}
        >
          <GrProjects className="flex-1 text-2xl text-[#6f7180] group-focus:text-sky-500 group-hover:text-sky-500  mr-2"></GrProjects>
          <span>Projects</span>
        </a>

        <a
          href="#contact"
          className="flex flex-row mt-7 group text-[#a8a9b4] focus:text-white hover:text-white scrollto"
          onClick={() => scrollToSection(5)}
        >
          <TiMessages className="text-2xl text-[#6f7180] group-focus:text-sky-500 group-hover:text-sky-500 mr-2"></TiMessages>
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
