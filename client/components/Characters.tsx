import { useEffect, useState } from "react";
import { ICharacterDB } from "../../server/schemas/People";
//Components
import Title from "./Title";
import Input from "./Input";
import Card from "./Card";
import Paging from "./Paging";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputWord, setInputWord] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState<ICharacterDB[]>(
    []
  );
  const [cardsInPage] = useState(8);

  const indexOfLastCard = currentPage * cardsInPage;
  const indexOfFirstCard =
    currentPage === 1 ? 0 : indexOfLastCard - cardsInPage;

  const currentCards = characters.slice(indexOfFirstCard, indexOfLastCard);
  const currentCardsFiltered = filteredCharacters.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paging = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/people")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "charar");
        setCharacters(data);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    e.preventDefault();
    const newValue = e.target.value;
    setInputWord(newValue);
    const filtered = characters.filter((planet: ICharacterDB) =>
      planet.name.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };
  console.log(filteredCharacters, "characterss", characters);
  return (
    <section
      className=" w-full min-h-[650px] h-auto flex flex-col px-20 justify-between gap-10 bg-[#0a0a0a]"
      id="characters"
    >
      <div className="w-full flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-end">
        <Title color="#fff" title="Characters" />
        <Input
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e)
          }
          placeholder="Character Name"
          value={inputWord}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mx-auto mb-12">
        {filteredCharacters.length > 0
          ? currentCardsFiltered.map(
              (character: ICharacterDB, index: number) => {
                const id = character._id.toString();
                return (
                  <Card
                    key={index}
                    id={id}
                    path="characters"
                    title={character.name}
                    prop1={`Homeworld: ${character.homeworld}`}
                    prop2={`Height: ${character.height}`}
                    bg_color="#242424"
                    bg_title="#ffcc00"
                  />
                );
              }
            )
          : currentCards.map((character: ICharacterDB, index: number) => {
              const id = character._id.toString();
              return (
                <Card
                  key={index}
                  id={id}
                  path="characters"
                  title={character.name}
                  prop1={`Homeworld: ${character.homeworld}`}
                  prop2={`Height: ${character.height}`}
                  bg_color="#242424"
                  bg_title="#ffcc00"
                />
              );
            })}
      </div>
      {filteredCharacters.length ? (
        <Paging
          cardsInPage={cardsInPage}
          allCards={filteredCharacters?.length}
          paging={paging}
          active={currentPage}
          bg_color="#ffcc00"
          color="#242424"
        />
      ) : (
        <Paging
          cardsInPage={cardsInPage}
          allCards={characters?.length}
          paging={paging}
          active={currentPage}
          bg_color="#ffcc00"
          color="#242424"
        />
      )}
    </section>
  );
};

export default Characters;
