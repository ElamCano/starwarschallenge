import { ICharacter, IFilm, IPlanet, IStarship } from "../interfaces";

interface Props {
  data: ICharacter | IFilm | IStarship | IPlanet;
  bg_color: string;
  text_color: string;
}

const CardDetail = ({ data, bg_color, text_color }: Props) => {
  return (
    <div
      className="w-72 h-auto md:w-min md:max-w-min md:max-h-min rounded-lg shadow-lg p-4 space-y-2 text-md md:text-2xl hover:shadow-[#979797] cursor-pointer"
      style={{
        backgroundColor: `${bg_color}`,
        color: `${text_color}`,
      }}
    >
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="flex justify-between md:gap-10">
          <span className="font-bold">{key}:</span>
          <span className="max-w-96 truncate">{String(value)}</span>
        </div>
      ))}
    </div>
  );
};

export default CardDetail;
