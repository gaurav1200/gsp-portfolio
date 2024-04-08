import React from "react";
import "../Main.css";
import Card from "../cards/Card";
const data = [
  {
    colleage: "IACSD Pune (C-DAC)",
    course: "PG-DAC",
    location: "Pune, India",
    description: [
      "I have completed My Post Graduate Diploma in Advanced Computing from IACSD Pune (C-DAC) in 2022.",
      "Where I learned about Software Development, Web Development, Database Management, and Networking.",
      "I learned Full Stack Development and worked on various projects.",
      "I have learned various technologies like Java, Advanced Java, HTML, CSS, JavaScript, MySQL, MongoDB, Node and React.",
    ],

    startDate: "Sep 2021",
    endDate: "Apr 2022",
    dataType: "education",
  },
  {
    colleage: "North Maharashtra University",
    course: "Bacholer of Engineering",
    location: "Jalgaon, India",
    description: [
      "I have completed my Bachelor of Engineering from North Maharashtra University in 2019.",
    ],

    startDate: "Sep 2015",
    endDate: "Nov 2019",
    dataType: "education",
  },
  {
    colleage: "Shri Gulabrao Deokar College of Polytechnic",
    course: "Engineering Diploma",
    location: "Jalgaon, India",
    description: [
      "I have completed my Diploma in Engineering from Shri Gulabrao Deokar College of Polytechnic in 2015.",
    ],
    startDate: "Sep 2012",
    endDate: "Jun 2015",
    dataType: "education",
  },
];
function Education() {
  return (
    <section
      id="education"
      className="section flex flex-col text-wrap w-full  px-7 justify-center text-black box-border"
    >
      <div>
        <h2 class="mb-5 md:text-[2.75rem] text-[2.25rem] text-[#241f66] font-extrabold uppercase">
          Education
        </h2>
        <h2 className="mb-5 w-[5rem] border-b-4 border-[#241f66]"></h2>

        {data.map((d) => (
          <Card data={d} />
        ))}
      </div>
    </section>
  );
}

export default Education;
