import { FaGithub, FaLink } from "react-icons/fa";
import { Tilt } from "react-tilt";
import SocialIconCard from "./SocialIconCard";
import ImageSlider from "../ImageSlider";
import axios from "axios";
import { useEffect, useState } from "react";
const visitEndpoint = process.env.REACT_APP_VISIT_API_ENDPOINT;
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  visit_link,
  visitName,
}) => {
  const [visits, setVisits] = useState(0);
  useEffect(() => {
    const webSiteName = "portfolio";

    axios
      .get(`${visitEndpoint}/visit/` + visitName)
      .then((response) => {
        console.log(response);
        setVisits(response.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 150,
        }}
        className="p-5 mt-3 rounded-2xl md:w-[360px] w-[300px] shadow-[0_5px_20px_3px_rgba(0,0,0,0.3)]"
      >
        <div className="relative w-full h-[230px]  ">
          {/* <img
            src={image}
            alt={name}
            className="w-full h-full object-cover border-[1px] rounded-2xl"
          /> */}
          <ImageSlider data={image} />
          <div className="absolute flex m-3">
            <div className="  rounded-full flex justify-center items-center text-black">
              <a
                onClick={() => window.open(source_code_link, "_blank")}
                className="items-baseline"
              >
                {SocialIconCard(FaGithub, source_code_link, true)}
              </a>
              <a onClick={() => window.open(visit_link, "_blank")}>
                {SocialIconCard(FaLink, visit_link, true)}
              </a>
            </div>
          </div>
          <span className=" flex text-[#241f66e2] font-bold justify-end">
            Got visits {visits}
          </span>
        </div>
        <div className="">
          <h3 className="text-[#241f66e2] font-bold text-[24px]">{name}</h3>
          <p className="no-scrollbar mt-2 text-secondary text-[14px] overflow-y-scroll scroll-smooth h-20">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

export default ProjectCard;
