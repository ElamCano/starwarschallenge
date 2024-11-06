import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IStarship } from "../../../../server/interfaces";
//Components
import DetailNav from "@/components/DetailNav";
import CardDetail from "@/components/CardDetail";

const StarshipsDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [starships, setStarships] = useState<IStarship>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/starships/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "asaasasaa");
        setStarships(data);
      });
  }, [id]);

  return (
    <>
      <DetailNav />
      <div className="flex justify-center items-center h-screen bg-[#002f6c] mt-12">
        {starships && (
          <CardDetail data={starships} bg_color="#1d2b44" text_color="#fff" />
        )}
      </div>
    </>
  );
};

export default StarshipsDetails;
