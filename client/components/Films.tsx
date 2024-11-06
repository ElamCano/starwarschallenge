import { useEffect, useState } from "react";
import { IFilmDB } from "../interfaces";
//Components
import Title from "./Title";
import Input from "./Input";
import Card from "./Card";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputWord, setInputWord] = useState("");
  const [filteredFilms, setFilteredFilms] = useState<IFilmDB[]>([]);
  const [cardsInPage] = useState(8);

  const indexOfLastCard = currentPage * cardsInPage;
  const indexOfFirstCard =
    currentPage === 1 ? 0 : indexOfLastCard - cardsInPage;

  const currentCards = films.slice(indexOfFirstCard, indexOfLastCard);
  const currentCardsFiltered = filteredFilms.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paging = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = e.target.value;
    setInputWord(newValue);
    const filtered = films.filter((planet: IFilmDB) =>
      planet.title.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredFilms(filtered);
  };

  return (
    <section
      className=" w-full min-h-[650px] h-auto flex flex-col px-20 justify-between gap-10 bg-[#1f1f1f]"
      id="films"
    >
      <div className="w-full flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-end">
        <Title color="#fff" title="Films" />
        <Input
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e)
          }
          placeholder="Film Name"
          value={inputWord}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mx-auto mb-12">
        {filteredFilms.length > 0
          ? currentCardsFiltered.map((film: IFilmDB, index: number) => {
              const id = film._id.toString();
              return (
                <Card
                  key={index}
                  id={id}
                  path="films"
                  title={film.title}
                  prop1={`Director: ${film.director}`}
                  prop2={`Episode: ${film.episode}`}
                  bg_color="#333333"
                  bg_title="#e60000"
                />
              );
            })
          : currentCards.map((film: IFilmDB, index: number) => {
              const id = film._id.toString();
              return (
                <Card
                  key={index}
                  id={id}
                  path="films"
                  title={film.title}
                  prop1={`Director: ${film.director}`}
                  prop2={`Episode: ${film.episode}`}
                  bg_color="#333333"
                  bg_title="#e60000"
                />
              );
            })}
      </div>
    </section>
  );
};

export default Films;
