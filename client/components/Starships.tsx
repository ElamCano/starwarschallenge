import { useEffect, useState } from "react";
import { IStarshipDB } from "../../server/schemas/Starships";
//Components
import Title from "./Title";
import Input from "./Input";
import Card from "./Card";
import Paging from "./Paging";

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputWord, setInputWord] = useState("");
  const [filteredStarships, setFilteredStarships] = useState<IStarshipDB[]>([]);
  const [cardsInPage] = useState(8);

  const indexOfLastCard = currentPage * cardsInPage;
  const indexOfFirstCard =
    currentPage === 1 ? 0 : indexOfLastCard - cardsInPage;

  const currentCards = starships.slice(indexOfFirstCard, indexOfLastCard);
  const currentCardsFiltered = filteredStarships.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paging = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/starships")
      .then((res) => res.json())
      .then((data) => {
        setStarships(data);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    e.preventDefault();
    const newValue = e.target.value;
    setInputWord(newValue);
    const filtered = starships.filter((starship: IStarshipDB) =>
      starship.name.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  return (
    <section
      className=" w-full min-h-[650px] h-auto flex flex-col px-20 justify-between gap-10 bg-[#002f6c]"
      id="starships"
    >
      <div className="w-full flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-end">
        <Title color="#fff" title="Starships" />
        <Input
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e)
          }
          placeholder="Starship Name"
          value={inputWord}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mx-auto mb-12">
        {filteredStarships.length > 0
          ? currentCardsFiltered.map((starship: IStarshipDB, index: number) => {
              const id = starship._id.toString();
              return (
                <Card
                  key={index}
                  id={id}
                  path="starships"
                  title={starship.name}
                  prop2={`Model: ${starship.model}`}
                  prop1={`Passengers: ${starship.passengers}`}
                  prop3={`Consumables: ${starship.consumables}`}
                  bg_color="#1d2b44"
                  bg_title="#a1d9c2"
                />
              );
            })
          : currentCards.map((starship: IStarshipDB, index: number) => {
              const id = starship._id.toString();
              return (
                <Card
                  key={index}
                  id={id}
                  path="starships"
                  title={starship.name}
                  prop2={`Model: ${starship.model}`}
                  prop1={`Passengers: ${starship.passengers}`}
                  prop3={`Consumables: ${starship.consumables}`}
                  bg_color="#1d2b44"
                  bg_title="#a1d9c2"
                />
              );
            })}
      </div>
      {filteredStarships.length ? (
        <Paging
          cardsInPage={cardsInPage}
          allCards={filteredStarships?.length}
          paging={paging}
          active={currentPage}
          bg_color="#a1d9c2"
          color="#1d2b44"
        />
      ) : (
        <Paging
          cardsInPage={cardsInPage}
          allCards={starships?.length}
          paging={paging}
          active={currentPage}
          bg_color="#a1d9c2"
          color="#1d2b44"
        />
      )}
    </section>
  );
};

export default Starships;
