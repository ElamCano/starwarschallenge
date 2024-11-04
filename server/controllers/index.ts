import { ICharacter, IFilm, IPlanet, IStarship } from "../interfaces/index";
import Film from "../schemas/Films";
import Character from "../schemas/People";
import Planet from "../schemas/Planets";
import Starship from "../schemas/Starships";
import { getApi } from "../util/getApi";

//Get people
export const people = async () => {
  const allCharacters = await getApi("people");

  allCharacters.map(async (e: ICharacter) => {
    const id = e.url.split("/").slice(-2, -1)[0];
    const characterData = {
      id: id,
      name: e.name,
      homeworld: e.mass,
      height: e.height,
      url: e.url,
    };
    try {
      await Character.updateOne({ id: id }, characterData, { upsert: true });
    } catch (error) {
      console.error(
        "Error al guardar el personaje en la base de datos:",
        error
      );
    }

    return characterData; // Retorna el personaje
  });

  return allCharacters;
};

//Get starships
export const starships = async () => {
  const data = await getApi("starships");
  const allStarships = await data.map(async (e: IStarship) => {
    const id = e.url.split("/").slice(-2, -1)[0];
    const starshipData = {
      id: id,
      name: e.name,
      passengers: e.passengers,
      model: e.model,
      consumables: e.consumables,
      url: e.url,
    };
    try {
      await Starship.updateOne({ id: id }, starshipData, { upsert: true });
    } catch (error) {
      console.error("Error al guardar la nave en la base de datos:", error);
    }
  });
  return allStarships;
};

//Get films
export const films = async () => {
  const data = await getApi("films");
  const allFilms = await data.map(async (e: IFilm) => {
    const id = e.url.split("/").slice(-2, -1)[0];
    const filmData = {
      id: id,
      title: e.title,
      director: e.director,
      episode: e.episode_id,
      url: e.url,
    };
    try {
      await Film.updateOne({ id: id }, filmData, { upsert: true });
    } catch (error) {
      console.error("Error al guardar la pelicula en la base de datos:", error);
    }
  });
  return allFilms;
};

//Get planets
export const planets = async () => {
  const data = await getApi("planets");
  const allPlanets = await data.map(async (e: IPlanet) => {
    const id = e.url.split("/").slice(-2, -1)[0];
    const planetData = {
      id: id,
      name: e.name,
      gravity: e.gravity,
      climate: e.climate,
      population: e.population,
      url: e.url,
    };

    try {
      await Planet.updateOne({ id: id }, planetData, { upsert: true });
    } catch (error) {
      console.error("Error al guardar el planeta en la base de datos:", error);
    }
  });
  return allPlanets;
};
