import Image from "next/image";
import cover from "../public/cover.jpg";
import { smoothScroll } from "./Navbar";

const Cover = () => {
  return (
    <div className="h-100vh w-full bg-white relative">
      <Image src={cover} alt="cover" className="w-full h-screen object-cover" />
      <div className="flex flex-col items-center gap-10 absolute text-white top-20 left-1/2 -translate-x-1/2 ">
        <div className="font-bold text-6xl w-72 text-[#FFE81F] text-center">
          A long time ago in a galaxy far, far away...
        </div>
        <button
          className="px-16 py-4 bg-black border border-[#FFE81F] hover:bg-[#FFE81F] hover:text-black duration-300 hover:border-black text-white font-medium rounded-md"
          onClick={(e) => smoothScroll(e, "films")}
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Cover;
