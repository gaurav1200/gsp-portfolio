import React from "react";
import "../Main.css";

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

        <div class=" flex sm:flex-row flex-col ">
          <ul className="  pl-4 leading-relaxed md:text-[1rem] text-[.75rem] list-disc">
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
              Accomplished professional with <b>over 3 years of experience</b>{" "}
              in Software Development, targeting opportunities as a Backend
              Developer across PAN- India. My results-driven and quality-minded
              approach, coupled with a proven ability to quickly master new
              tools and technologies, reflects my genuine interest in gaining
              and sharing knowledge.
            </li>
            <li className=" mb-2">
              <b>Extensive knowledge of the Software Development Lifecycle</b>{" "}
              right from requirement analysis, documentation (functional
              specifications, technical design), coding, and testing
              (preparation of test cases along with implementation) to the
              maintenance of proposed applications.
            </li>
            <li className=" mb-2">
              <b>
                Effective in developing solutions for given technical
                specifications;
              </b>{" "}
              installing application software & deploying customizations;
              contributing to code reviews.
            </li>
            <li className=" mb-2">
              <b>
                Excellence in evaluating end-user requirements and
                troubleshooting
              </b>{" "}
              for complex problems, analysing bug patterns, and providing
              insights and practices to the development team for the prevention
              of high-priority/severity bugs.
            </li>
            <li className=" mb-2">
              <b>Knowledge in manual and API testing,</b> with a keen eye for
              identifying defects and ensuring software quality.
            </li>
            <li className=" mb-2">
              <b>Proficient in collaborating with cross-functional teams</b>{" "}
              including designers, product managers, and other developers to
              create high quality products, ensuring alignment with project
              requirements and objectives.
            </li>
            <li className=" mb-2">
              Gaining practical experience in b
              <b>
                Java, Advanced Java, HTML, CSS, JavaScript, MySQL, MongoDB,
                Node.js, and React.
              </b>
            </li>
            <li className=" mb-2">
              Skilled in developing ideas for new programs, products, or
              features by monitoring industry developments and trends.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
