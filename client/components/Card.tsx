import Link from "next/link";

interface Props {
  id: string;
  path: string;
  title: string;
  prop1: string;
  prop2: string;
  prop3?: string;
  prop4?: string;
  bg_color: string;
  bg_title: string;
}

const Card = ({
  id,
  path,
  title,
  prop1,
  prop2,
  prop3,
  prop4,
  bg_color,
  bg_title,
}: Props) => {
  return (
    <Link
      href={`/details/${path}/${id}`}
      className="w-48 h-48 rounded-lg flex flex-col justify-start items-center text-white hover:scale-105 text-center"
      style={{ backgroundColor: `${bg_color}` }}
    >
      <h1
        className="text-2xl w-full min-h-12 py-2 font-semibold rounded-md "
        style={{ backgroundColor: `${bg_title}` }}
      >
        {title}
      </h1>
      <p className="text-md font-medium ">{prop1}</p>
      <p className="text-md font-medium">{prop2}</p>
      <p className="text-md font-medium">{prop3}</p>
      {prop4 && <p className="text-md font-medium">{prop4}</p>}
    </Link>
  );
};

export default Card;
