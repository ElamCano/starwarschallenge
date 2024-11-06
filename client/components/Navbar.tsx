"use client";
import Image from "next/image";
import logo from "../public/logo.jpg";

export const smoothScroll = (e: React.SyntheticEvent, target: string) => {
  e.preventDefault();
  const section = document.getElementById(target);
  if (section) {
    //section.scrollIntoView({ behavior: "smooth" });
    const navbarHeight = document.querySelector(".navbar")?.clientHeight || 0; // Obtén la altura del Navbar
    const yOffset = -navbarHeight; // Ajusta el offset de acuerdo a la altura del Navbar
    const yPosition =
      section.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <header className="navbar flex flex-col items-center justify-center gap-2 bg-black fixed top-0 left-0 w-full z-50 ">
      <Image
        src={logo}
        width={150}
        height={150}
        alt="logo"
        className="cursor-pointer rounded-full ml-1 mt-1 mb-1"
        onClick={(e) => smoothScroll(e, "section0")}
      />
      <nav className="w-full flex justify-center items-center  text-white border-t border-b border-slate-500">
        <div
          className="cursor-pointer border-r border-l border-slate-500 px-2 py-2 sm:px-6 sm:py-4 hover:bg-white hover:text-black duration-300"
          onClick={(e) => smoothScroll(e, "films")}
        >
          Films
        </div>
        <div
          className="cursor-pointer border-r border-slate-500 px-2 py-2 sm:px-6 sm:py-4 hover:bg-white hover:text-black duration-300"
          onClick={(e) => smoothScroll(e, "characters")}
        >
          Characters
        </div>
        <div
          className="cursor-pointer border-r border-slate-500 px-2 py-2 sm:px-6 sm:py-4 hover:bg-white hover:text-black duration-300"
          onClick={(e) => smoothScroll(e, "starships")}
        >
          Starships
        </div>
        <div
          className="cursor-pointer border-r border-slate-500 px-2 py-2 sm:px-6 sm:py-4 hover:bg-white hover:text-black duration-300"
          onClick={(e) => smoothScroll(e, "planets")}
        >
          Planets
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
