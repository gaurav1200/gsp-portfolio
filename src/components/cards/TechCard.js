import { Tilt } from "react-tilt";

const TechCard = ({ imguri, i }) => {
  console.log(imguri);
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 350,
      }}
    >
      <img
        key={i}
        src={imguri}
        alt="java"
        class="w-20 h-20 p-2 mr-2 mb-4 rounded-lg shadow-[0_5px_20px_3px_rgba(0,0,0,0.3)]"
      />
    </Tilt>
  );
};

export default TechCard;
