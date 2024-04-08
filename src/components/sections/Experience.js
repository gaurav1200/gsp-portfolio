import React from "react";
import "../Main.css";
import Card from "../cards/Card";
const data = [
  {
    role: "BackEnd Developer",

    company: "Mavenir Systems Pvt Ltd",

    location: "Bangalore, India",
    description: [
      "Developed and maintained Spring Boot microservices for a Telecom project, utilizing NoSQL databases such as Couchbase.",
      "Worked on the development of primary microservices including Account Management, Bill Generation Service, Quote Management, User Management, and Case Management, ensuring their functionality and efficiency.",
      "Built a special utility microservice using Spring Boot for data remediation in lower environments and production, demonstrating strong problem-solving skills and attention to detail.",
      "Upgraded the Spring Boot major version for a microservice and resolved issues related to upgraded dependencies, ensuring compatibility and stability of the application.",
      "Optimized code in the Bill Generation Service to address memory outage issues, improving the service's performance and reliability.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products, ensuring alignment with project requirements and objectives.",
      " Participated in code reviews and provided constructive feedback to other developers, contributing to the overall improvement of code quality and best practices within the team.",
      // "Primarily worked on Spring boot microservices and NoSqldatabase such as Couchbase on a Telcom project.",
      // "Worked on primary microservices such as Account Management,Billgeneration Service, Quote Management, User Management and Case Management.",
      // "Built special utility microservice using spring boot for data remediation in lower environment and production.",
      // "Upgraded the spring boot major version for microservice and resolved issue related to upgrade dependencies.",
      // "In Billgenration service did code optimization for memory outage issue.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
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
      "Maintained code quality by resolving SonarQube issues and code smells, ensuring adherence to best practices and standards.",
      "Increased code coverage for various microservices for legacy code by using JUnit and Mockito, improving the overall reliability and stability of the codebase.",
      "Implemented new RESTful APIs to meet specific project requirements and Enhanced existing RESTful APIs, based on project requirements",
      "Collaborated with the testing team to identify and fix bugs, demonstrating strong troubleshooting and problem-solving skills.",
      // "Primarily worked on Spring Boot and Microservice architecture.",
      // "Worked on maintaining code quality by resolving sonarqube issues and code smell's.",
      // "Increased code coverage for various microservices for legacy code by using Junit and Mockito.",
      // "Debugging and resolving the issue during testing phase.",
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
