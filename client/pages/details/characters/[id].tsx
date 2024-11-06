import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ICharacter } from "../../../../server/interfaces";
//Components
import CardDetail from "@/components/CardDetail";
import DetailNav from "@/components/DetailNav";

const CharacterDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState<ICharacter>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  return (
    <>
      <DetailNav />
      <div className="flex justify-center items-center h-screen bg-[#0a0a0a] mt-10">
        {character && (
          <CardDetail data={character} bg_color="#ffcc00" text_color="#000" />
        )}
      </div>
    </>
  );
};

export default CharacterDetails;
