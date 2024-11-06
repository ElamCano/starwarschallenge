import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IFilm } from "../../../../server/interfaces";
//Components
import DetailNav from "@/components/DetailNav";
import CardDetail from "@/components/CardDetail";

const FilmDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [film, setFilm] = useState<IFilm>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/films/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "asaasasaa");
        setFilm(data);
      });
  }, [id]);

  return (
    <>
      <DetailNav />
      <div className="flex justify-center items-center h-screen bg-[#1f1f1f] mt-10">
        {film && (
          <CardDetail data={film} bg_color="#333333" text_color="#fff" />
        )}
      </div>
    </>
  );
};

export default FilmDetails;
