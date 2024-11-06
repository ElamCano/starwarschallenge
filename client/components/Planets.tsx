import { useEffect, useState } from "react";
import { IPlanetDB } from "../../server/schemas/Planets";

//Components
import Card from "./Card";
import Title from "./Title";
import Paging from "./Paging";
import Input from "./Input";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputWord, setInputWord] = useState("");
  const [filteredPlanets, setFilteredPlanets] = useState<IPlanetDB[]>([]);
  const [cardsInPage] = useState(8);

  const indexOfLastCard = currentPage * cardsInPage;
  const indexOfFirstCard =
    currentPage === 1 ? 0 : indexOfLastCard - cardsInPage;

  const currentCards = planets.slice(indexOfFirstCard, indexOfLastCard);
  const currentCardsFiltered = filteredPlanets.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paging = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/planets")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data);
        //console.log(data, "dataaa");
      });
  }, []);

  // console.log(filteredPlanets, inputWord, "A");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    e.preventDefault();
    const newValue = e.target.value;
    setInputWord(newValue);
    const filtered = planets.filter((planet: IPlanetDB) =>
      planet.name.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredPlanets(filtered);
  };
  return (
    <section
      className=" w-full min-h-[650px] h-auto flex flex-col px-20 justify-between gap-10 bg-[#d4b06d]"
      id="planets"
    >
      <div className="w-full flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-end">
        <Title color="#fff" title="Planets" />
        <Input
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e)
          }
          placeholder="Planet Name"
          value={inputWord}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPlanets.length > 0
          ? currentCardsFiltered.map((planet: IPlanetDB, index: number) => {
              const id = planet._id.toString();
              return (
                <Card
                  key={index}
                  id={id}
                  path="planets"
                  title={planet.name}
                  prop1={`Population: ${planet.population}`}
                  prop2={`Gravity: ${planet.gravity}`}
                  prop3={`Climate: ${planet.climate}`}
                  bg_color="#f2d1a0"
                  bg_title="#a65c2c"
                />
              );
            })
          : currentCards.map((planet: IPlanetDB, index: number) => {
              const id = planet._id.toString();
              return (
                <Card
                  key={index}
                  id={id}
                  path="planets"
                  title={planet.name}
                  prop1={`Population: ${planet.population}`}
                  prop2={`Gravity: ${planet.gravity}`}
                  prop3={`Climate: ${planet.climate}`}
                  bg_color="#f2d1a0"
                  bg_title="#a65c2c"
                />
              );
            })}
      </div>
      {filteredPlanets.length ? (
        <Paging
          cardsInPage={cardsInPage}
          allCards={filteredPlanets?.length}
          paging={paging}
          active={currentPage}
          bg_color="#a65c2c"
          color="#f2d1a0"
        />
      ) : (
        <Paging
          cardsInPage={cardsInPage}
          allCards={planets?.length}
          paging={paging}
          active={currentPage}
          bg_color="#a65c2c"
          color="#f2d1a0"
        />
      )}
    </section>
  );
};

export default Planets;
