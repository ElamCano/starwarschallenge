import Image from "next/image";
import bg_planets from "../public/bg_planets.jpg";
import Title from "./Title";

const Planets = () => {
  return (
    <div className="w-full h-screen bg-slate-950 relative" id="planets">
      <Image
        src={bg_planets}
        alt="planets"
        className="w-full h-screen object-cover"
      />
      <div className="flex flex-col p-20 top-0 w-full gap-10 absolute">
        <Title color="#fff" title="Planets" />
      </div>
    </div>
  );
};

export default Planets;
