import React from "react";
import "../Main.css";
import ImageSlider from "../ImageSlider";
const data = [
  {
    role: "Software Developer",
    colleage: "University of Mumbai",
    company: "Google",
    course: "B.Tech in Computer Science",
    location: "Mumbai, India",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    startDate: "May-2023",
    endDate: "present",
    dataType: "experience",
  },
];
function About() {
  return (
    <section
      id="about"
      className="section flex flex-col text-wrap w-full  px-7 justify-center text-black box-border bg-[rgba(5, 13, 24, 0.3)]"
    >
      <div>
        <h2 class="mb-5 md:text-[2.75rem] text-[2.25rem] text-[#241f66] font-extrabold uppercase">
          About
        </h2>
        <h2 className="mb-5 w-[5rem] border-b-4 border-[#241f66]"></h2>

        <div class=" flex sm:flex-row flex-col mb-5">
          <ul className=" mb-4 pl-4 leading-relaxed md:text-[1rem] text-[.75rem] list-disc">
            {/* "I am a Spring Boot Developer with 2 years of experience at Mavenir
            Systems Pvt Ltd, where I focused on developing and maintaining
            applications for a Telcom project. My expertise lies in building
            RESTful web services using Spring Boot, Spring Data JPA, and Spring
            Security, along with front-end development using ReactJs. I am
            proficient with databases such as MySQL, CouchBase, and MongoDB.
            Additionally, I have hands-on experience with Docker, Kubernetes,
            Git, Jenkins, Agile methodologies (Scrum and Kanban), JIRA,
            Confluence, Prometheus, Grafana, various log management tools,
            testing frameworks like Junit and Mockito, code quality tools like
            SonarQube, and code review tools like Crucible. I am also
            well-versed in build tools like Maven and Gradle, and I have worked
            extensively with IDEs such as Eclipse and IntelliJ IDEA. */}

            <li className=" mb-2">
              I am a Spring Boot Developer with 2 years of experience at Mavenir
              Systems Pvt Ltd, specializing in developing and maintaining
              applications for a Telcom project. My expertise includes
              developing RESTful web services using Spring Boot, JDBC, and
              Spring Security, as well as front-end development using ReactJs. I
              am skilled in working with databases like MySQL, CouchBase, and
              MongoDB, and I have experience in deploying applications using
              Docker and Kubernetes.
            </li>
            <li className="mb-2 ">
              I am proficient in version control systems like Git and have
              hands-on experience with CI/CD pipelines using Jenkins. I am
              well-versed in Agile methodologies like Scrum and have effectively
              utilized tools like JIRA and Confluence for project management.{" "}
              {/*Additionally, I have experience with monitoring tools
              such as Prometheus and Grafana, as well as various log management
              tools. */}
            </li>
            <li className="mb-2">
              Furthermore, I have expertise in testing frameworks like Junit and
              Mockito, and I have used code quality tools like SonarQube. I am
              experienced in build tools like Maven, and I am proficient in
              using IDEs like VS Code, STS and IntelliJ IDEA.
            </li>
            <li>
              In addition to my technical skills, I have a strong background in
              troubleshooting and debugging, as well as a proven track record of
              teamwork and collaboration. My communication and interpersonal
              skills, coupled with my adaptability and flexibility, have allowed
              me to effectively contribute to project success.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
