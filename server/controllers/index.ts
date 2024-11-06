import { ICharacter, IFilm, IPlanet, IStarship } from "../interfaces/index";
import Film from "../schemas/Films";
import Character from "../schemas/People";
import Planet from "../schemas/Planets";
import Starship from "../schemas/Starships";
import { getApi } from "../util/getApi";

//Get people
export const people = async () => {
  const allCharacters = await getApi("people");

  await Promise.all(
    allCharacters.map(async (e: ICharacter) => {
      const characterData = {
        name: e.name,
        homeworld: e.mass,
        height: e.height,
        url: e.url,
        birth_year: e.birth_year,
        eye_color: e.eye_color,
        gender: e.gender,
        hair_color: e.hair_color,
        mass: e.mass,
        skin_color: e.skin_color,
        created: e.created,
      };
      try {
        await Character.findOneAndUpdate({ url: e.url }, characterData, {
          upsert: true,
        });
      } catch (error) {
        console.error(
          "Error al guardar el personaje en la base de datos:",
          error
        );
      }

      return characterData; // Retorna el personaje
    })
  );

  return allCharacters;
};

//Get starships
export const starships = async () => {
  const allStarships = await getApi("starships");
  await Promise.all(
    allStarships.map(async (e: IStarship) => {
      const starshipData = {
        name: e.name,
        passengers: e.passengers,
        model: e.model,
        consumables: e.consumables,
        url: e.url,
        MGLT: e.MGLT,
        cargo_capacity: e.cargo_capacity,
        cost_in_credits: e.cost_in_credits,
        created: e.created,
        crew: e.crew,
        edited: e.edited,
        hyperdrive_rating: e.hyperdrive_rating,
        length: e.length,
        manufacturer: e.manufacturer,
      };
      try {
        await Starship.findOneAndUpdate({ url: e.url }, starshipData, {
          upsert: true,
        });
      } catch (error) {
        console.error("Error al guardar la nave en la base de datos:", error);
      }
    })
  );
  return allStarships;
};

//Get films
export const films = async () => {
  const allFilms = await getApi("films");
  await Promise.all(
    allFilms.map(async (e: IFilm) => {
      const filmData = {
        title: e.title,
        director: e.director,
        episode: e.episode_id,
        url: e.url,
        created: e.created,
        edited: e.edited,
        opening_crawl: e.opening_crawl,
        producer: e.producer,
        release_date: e.release_date,
      };
      try {
        await Film.findOneAndUpdate({ url: e.url }, filmData, { upsert: true });
      } catch (error) {
        console.error(
          "Error al guardar la pelicula en la base de datos:",
          error
        );
      }
    })
  );
  return allFilms;
};

//Get planets
export const planets = async () => {
  const allPlanets = await getApi("planets");
  await Promise.all(
    allPlanets.map(async (e: IPlanet) => {
      const planetData = {
        name: e.name,
        gravity: e.gravity,
        climate: e.climate,
        population: e.population,
        url: e.url,
        created: e.created,
        diameter: e.diameter,
        edited: e.edited,
        orbital_period: e.rotation_period,
        rotation_period: e.rotation_period,
        surface_water: e.surface_water,
        terrain: e.terrain,
      };

      try {
        await Planet.findOneAndUpdate({ url: e.url }, planetData, {
          upsert: true,
        });
      } catch (error) {
        console.error(
          "Error al guardar el planeta en la base de datos:",
          error
        );
      }
    })
  );
  return allPlanets;
};
