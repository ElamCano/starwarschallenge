import localFont from "next/font/local";
//Components
import Characters from "@/components/Characters";
import Cover from "@/components/Cover";
import Films from "@/components/Films";
import Navbar from "@/components/Navbar";
import Planets from "@/components/Planets";
import Starships from "@/components/Starships";

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
