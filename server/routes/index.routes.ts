const { people, starships, films, planets } = require("../controllers/index");
import Character from "../schemas/People";
import Film, { IFilmDB } from "../schemas/Films";
import Starship, { IStarshipDB } from "../schemas/Starships";
import Planet, { IPlanetDB } from "../schemas/Planets";
import { Router, Request, Response } from "express";

const router = Router();

//People
router.get("/api/people/", async (req: Request, res: Response) => {
  try {
    const allCharacters = await Character.find();
    res.status(200).json(allCharacters);
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
//Get 1 character
router.get(
  "/api/people/:id",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const { id } = req.params;
      //Caso id en params
      if (id) {
        const character = await Character.findById(id);
        if (!character) {
          return res.status(404).json({ error: "Character not found" });
        }
        return res.status(200).json(character);
      }
    } catch (error) {
      console.error("Error al obtener personajes:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
);

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
//Get 1 film
router.get(
  "/api/films/:id",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const { id } = req.params;
      //Caso id en params
      if (id) {
        const film = await Film.findById(id);
        if (!film) {
          return res.status(404).json({ error: "Film not found" });
        }
        return res.status(200).json(film);
      }
    } catch (error) {
      console.error("Error al obtener peliculas:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
);

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
//Get 1 starship
router.get(
  "/api/starships/:id",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const { id } = req.params;
      //Caso id en params
      if (id) {
        const starship = await Starship.findById(id);
        if (!starship) {
          return res.status(404).json({ error: "Starship not found" });
        }
        return res.status(200).json(starship);
      }
    } catch (error) {
      console.error("Error al obtener naves:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
);

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
//Get 1 planet
router.get(
  "/api/planets/:id",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const { id } = req.params;
      //Caso id en params
      if (id) {
        const planet = await Planet.findById(id);
        if (!planet) {
          return res.status(404).json({ error: "Planet not found" });
        }
        return res.status(200).json(planet);
      }
    } catch (error) {
      console.error("Error al obtener planetas:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
