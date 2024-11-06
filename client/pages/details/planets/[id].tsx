import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IPlanet } from "../../../../server/interfaces";
//Components
import DetailNav from "@/components/DetailNav";
import CardDetail from "@/components/CardDetail";

const PlanetDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [planet, setPlanet] = useState<IPlanet>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "asaasasaa");
        setPlanet(data);
      });
  }, [id]);

  return (
    <>
      <DetailNav />
      <div className="flex justify-center items-center h-screen bg-[#d4b06d] mt-10">
        {planet && (
          <CardDetail data={planet} bg_color="#f2d1a0" text_color="#333" />
        )}
      </div>
    </>
  );
};

export default PlanetDetails;
