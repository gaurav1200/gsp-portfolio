import React from "react";
import "../Main.css";
import Card from "../cards/Card";
const data = [
  {
    role: "BackEnd Developer",

    company: "Mavenir Systems Pvt Ltd",

    location: "Bangalore, India",
    description: [
      "Contributed to a Telecom BSS-based Microservice Project, focusing on enhancing and expanding the functionalities of existing APIs in the CRM, utilizing <b>NoSQL</b> databases such as <b>Couchbase and Spring Boot framework.</b>",
      "Worked on the <b>development of primary microservices</b> including Account Management, Bill Generation Service, Quote Management, User Management, and Case Management, ensuring their functionality and efficiency.",
      "Built a <b>special utility microservice</b> using Spring Boot for data remediation in lower environments and production, which <b>reduced the data remediation time by 70%.</b>",
      "<b>Upgraded the Spring Boot</b> major version for a microservice and resolved issues related to upgraded dependencies, ensuring compatibility and stability of the application.",
      "Optimized code in the Bill Generation Service to address memory outage issues, <b>improving the service's performance by 30% and reliability</b>",
      "<b>Collaborated with cross-functional teams</b> including designers, product managers, and other developers to create high-quality products, ensuring alignment with project requirements and objectives.",
      "Participated in <b>code reviews</b> and provided constructive feedback to other developers, contributing to the overall improvement of code quality and best practices within the team.",
    ],
    startDate: "May 2023",
    endDate: "Present",
    dataType: "experience",
  },
  {
    role: "Associate Developer",

    company: "Mavenir Systems Pvt Ltd",

    location: "Bangalore, India",
    description: [
      "<b>Maintained code quality</b> by resolving <b>SonarQube</b> issues and code smells, ensuring adherence to best practices and standards.",
      "<b>Increased code coverage in SonarQube upto 90%</b> for various microservices for legacy code by using <b>JUnit and Mockito</b>, improving the overall reliability and stability of the codebase.",
      "Implemented new <b>RESTful APIs</b> to meet specific project requirements and Enhanced existing RESTful APIs, based on project requirements",
      "Collaborated with the testing team to identify and fix bugs, demonstrating strong <b>troubleshooting and problem-solving</b> skills.",
    ],
    startDate: "May 2022",
    endDate: "May 2023",
    dataType: "experience",
  },
];
function Experience() {
  return (
    <section
      id="experience"
      className="section flex flex-col text-wrap w-full  px-7 justify-center text-black box-border"
    >
      <div>
        <h2 class="mb-5 md:text-[2.75rem] text-[2.25rem] text-[#241f66] font-extrabold uppercase">
          Experience
        </h2>
        <h2 className="mb-5 w-[5rem] border-b-4 border-[#241f66]"></h2>
        {data.map((d) => (
          <Card data={d} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
