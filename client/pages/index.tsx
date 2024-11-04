import Characters from "@/components/Characters";
import Cover from "@/components/Cover";
import Films from "@/components/Films";
import Navbar from "@/components/Navbar";
import Planets from "@/components/Planets";
import Starships from "@/components/Starships";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/films")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data);
      });
  }, []);
  // className={`${geistSans.variable} ${geistMono.variable} `
  return (
    <main>
      <Navbar />
      <div className="w-full h-40 bg-black" id="section0"></div>
      <Cover />
      <Films />
      <Characters />
      <Starships />
      <Planets />
    </main>
  );
}
