const { people, starships, films, planets } = require("../controllers/index");
import { Router, Request, Response } from "express";
import Character, { ICharacterDB } from "../schemas/People";
import Film, { IFilmDB } from "../schemas/Films";
import Starship, { IStarshipDB } from "../schemas/Starships";
import Planet, { IPlanetDB } from "../schemas/Planets";

const router = Router();

//People
router.get("/api/people", async (req: Request, res: Response) => {
  try {
    let allCharacters = await Character.find();
    //Si recibo por query un name, hago el filtrado
    const name = req.query.name as string;
    const filteredCharacters = name
      ? allCharacters.filter((character: ICharacterDB) =>
          character.name.toLowerCase().includes(name.toLowerCase())
        )
      : allCharacters;

    res.status(200).json(filteredCharacters);
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

//Films
router.get("/api/films", async (req: Request, res: Response) => {
  try {
    let allFilms = await Film.find();
    const title = req.query.title as string;
    const filteredFilms = title
      ? allFilms.filter((film: IFilmDB) =>
          film.title.toLowerCase().includes(title.toLowerCase())
        )
      : allFilms;

    res.status(200).send(filteredFilms);
  } catch (error) {
    console.error("Error al obtener peliculas:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

//Starships
router.get("/api/starships", async (req: Request, res: Response) => {
  try {
    let allStarships = await Starship.find();
    const name = req.query.name as string;
    const filteredStarships = name
      ? allStarships.filter((starship: IStarshipDB) =>
          starship.name.toLowerCase().includes(name.toLowerCase())
        )
      : allStarships;
    res.status(200).send(filteredStarships);
  } catch (error) {
    console.error("Error al obtener naves:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

//Planets
router.get("/api/planets", async (req: Request, res: Response) => {
  try {
    let allPlanets = await Planet.find();
    const name = req.query.name as string;
    const filteredPlanet = name
      ? allPlanets.filter((planet: IPlanetDB) =>
          planet.name.toLowerCase().includes(name.toLowerCase())
        )
      : allPlanets;
    res.status(200).send(filteredPlanet);
  } catch (error) {
    console.error("Error al obtener planetas:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = router;
