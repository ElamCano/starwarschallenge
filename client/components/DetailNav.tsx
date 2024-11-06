import Image from "next/image";
import logo from "../public/logo.jpg";
import Link from "next/link";

const DetailNav = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-2 bg-black fixed top-0 left-0 w-full z-50 ">
      <Link href={"/"}>
        <Image
          src={logo}
          width={150}
          height={150}
          alt="logo"
          className="cursor-pointer rounded-full ml-1 mt-1 mb-1"
        />
      </Link>
    </header>
  );
};

export default DetailNav;
