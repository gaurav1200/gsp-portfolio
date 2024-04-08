import React from "react";

import lyriks1 from "../assets/projects/lyriks1.png";
import lyriks2 from "../assets/projects/lyriks2.png";
import lyriks3 from "../assets/projects/lyriks3.png";
import camp1 from "../assets/projects/ycamp1.png";
import camp2 from "../assets/projects/ycamp2.png";
import camp3 from "../assets/projects/ycamp3.png";
import camp4 from "../assets/projects/ycamp4.png";
import bcamp1 from "../assets/projects/bcamp1.png";
import bcamp2 from "../assets/projects/bcamp2.png";
import bcamp3 from "../assets/projects/bcamp3.png";
import bcamp4 from "../assets/projects/bcamp4.png";
import chatApp1 from "../assets/projects/chatApp1.png";
import chatApp2 from "../assets/projects/chatApp2.png";
import chatApp3 from "../assets/projects/chatApp3.png";
import chatApp4 from "../assets/projects/chatApp4.png";
import gsp1 from "../assets/projects/gsp1.png";
import gsp2 from "../assets/projects/gsp2.png";
import gsp3 from "../assets/projects/gsp3.png";
import gsp4 from "../assets/projects/gsp4.png";

import ProjectCard from "./cards/ProjectCard";

const projects = [
  {
    name: "Music Player",
    description:
      "Web application where users can listen to music, view lyrics, and can get information about the song and artist. Users can get top tracks and top artists. Users also can get top songs around them.",
    tags: [
      {
        name: "react",
        color: "text-blue-600",
      },

      {
        name: "tailwind",
        color: "text-pink-600",
      },
      {
        name: "redux",
        color: "text-green-600",
      },
      {
        name: "shazam API",
        color: "text-yellow-500",
      },
      {
        name: "firebase",
        color: "text-yellow-500",
      },
      {
        name: "react-router",
        color: "text-blue-600",
      },
    ],
    image: [lyriks1, lyriks2, lyriks3],
    source_code_link: "https://github.com/gaurav1200/lyriks",
    visit_link: "https://gsp-lyriks.onrender.com/",
    visitName: "lyriks",
  },
  {
    name: "Best Campgrounds (Node)",
    description:
      "Web application where users can view campgrounds, add campgrounds, and add comments on campgrounds. Users can also edit and delete their campgrounds and comments. Users can also view the location of the campground on the map. Users can also search for campgrounds by city, state or country.",
    tags: [
      {
        name: "NodeJs",
        color: "text-yellow-500",
      },
      {
        name: "ExpressJs",
        color: "text-green-600",
      },
      {
        name: "ejs",
        color: "text-pink-600",
      },
      {
        name: "MongoDB",
        color: "text-green-600",
      },
      {
        name: "Bootstrap",
        color: "text-blue-600",
      },
    ],
    image: [camp1, camp2, camp3, camp4],
    source_code_link: "https://github.com/gaurav1200/YELP-CAMP",
    visit_link: "https://gsp-campgraounds.onrender.com/",
    visitName: "YelpCamp",
  },
  {
    name: "Best Campgrounds (Spring)",
    description:
      "Web application where users can view campgrounds, add campgrounds, and add comments on campgrounds. Users can also edit and delete their campgrounds and comments. Users can also view the location of the campground on the map. Users can also search for campgrounds by city, state or country.",
    tags: [
      {
        name: "Spring Boot",
        color: "text-yellow-500",
      },
      {
        name: "ReactJs",
        color: "text-green-600",
      },
      {
        name: "redux",
        color: "text-pink-600",
      },
      {
        name: "MongoDB",
        color: "text-green-600",
      },
      {
        name: "Bootstrap",
        color: "text-blue-600",
      },
    ],
    image: [bcamp2, bcamp1, bcamp3, bcamp4],
    source_code_link: "https://github.com/gaurav1200/BestCampgrounds",
    visit_link: "https://bestcampgrounds.onrender.com/",
    visitName: "bestcampgrounds",
  },
  {
    name: "Chat App",
    description:
      "Real-time chat application where users can chat with each other. Users can create groups and chat with group members. Users can see typing status of other users.",
    tags: [
      {
        name: "RactJs",
        color: "text-blue-600",
      },
      {
        name: "ExpressJs",
        color: "text-green-600",
      },
      {
        name: "Socket.io",
        color: "text-blue-600",
      },
      {
        name: "MongoDB",
        color: "text-green-600",
      },
      {
        name: "Tailwind",
        color: "text-pink-600",
      },
    ],
    image: [chatApp1, chatApp2, chatApp3, chatApp4],
    source_code_link: "https://github.com/gaurav1200/MERN-CHAT-APP",
    visit_link: "https://gsp-mern-chat-app.onrender.com/",
    visitName: "chat-app",
  },
  {
    name: "Portfolio",
    description:
      "Personal portfolio website where users can view the projects I have worked on. Users can also view my resume and contact me.",
    tags: [
      {
        name: "RactJs",
        color: "text-blue-600",
      },

      {
        name: "Tailwind",
        color: "text-pink-600",
      },
    ],
    image: [gsp1, gsp2, gsp3, gsp4],
    source_code_link: "https://github.com/gaurav1200/gsp",
    visit_link: "https://gsp-dyly.onrender.com/",
    visitName: "gsp",
  },
];

const Works = () => {
  return (
    <>
      <div>
        <h3 class="mb-0 md:text-[1.75rem]  text-[1.20rem] uppercase font-bold text-ellipsis text-[#241f66e2] ">
          Projects
        </h3>
      </div>
      <div className="">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Here are some of the projects I have worked on. Click on the GitHub
          icon to view the source code. Please feel free to check them out by
          clicking on deployment link of each project. I have also provided a
          brief description of each project and the technologies used.
        </p>
      </div>
      <div className="mt-20 flex flex-row flex-wrap  justify-evenly gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Works;
