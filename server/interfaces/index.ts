export interface ICharacter {
  birth_year: string; // Ejemplo: "19 BBY"
  eye_color: string; // Ejemplo: "Blue"
  films: string[]; // Array de URLs de películas
  gender: string; // Ejemplo: "Male"
  hair_color: string; // Ejemplo: "Blond"
  height: string; // Ejemplo: "172"
  homeworld: string; // URL del planeta de origen
  mass: string; // Ejemplo: "77"
  name: string; // Ejemplo: "Luke Skywalker"
  skin_color: string; // Ejemplo: "Fair"
  created: string; // Fecha de creación
  edited: string; // Fecha de edición
  species: string[]; // Array de URLs de especies
  starships: string[]; // Array de URLs de naves estelares
  url: string; // URL del personaje
  vehicles: string[]; // Array de URLs de vehículos
}
export interface IStarship {
  MGLT: string; // Ejemplo: "10 MGLT"
  cargo_capacity: string; // Ejemplo: "1000000000000"
  consumables: string; // Ejemplo: "3 years"
  cost_in_credits: string; // Ejemplo: "1000000000000"
  created: string; // Ejemplo: "2014-12-10T16:36:50.509000Z"
  crew: string; // Ejemplo: "342953"
  edited: string; // Ejemplo: "2014-12-10T16:36:50.509000Z"
  hyperdrive_rating: string; // Ejemplo: "4.0"
  length: string; // Ejemplo: "120000"
  manufacturer: string; // Ejemplo: "Imperial Department of Military Research, Sienar Fleet Systems"
  max_atmosphering_speed: string; // Ejemplo: "n/a"
  model: string; // Ejemplo: "DS-1 Orbital Battle Station"
  name: string; // Ejemplo: "Death Star"
  passengers: string; // Ejemplo: "843342"
  films: string[]; // Array de URLs de películas
  pilots: string[]; // Array de URLs de pilotos (puede estar vacío)
  starship_class: string; // Ejemplo: "Deep Space Mobile Battlestation"
  url: string; // URL de la nave
}

export interface IFilm {
  characters: string[]; // Array de URLs de personajes
  created: string; // Fecha de creación, ejemplo: "2014-12-10T14:23:31.880000Z"
  director: string; // Director de la película, ejemplo: "George Lucas"
  edited: string; // Fecha de edición, ejemplo: "2014-12-12T11:24:39.858000Z"
  episode_id: number; // ID del episodio, ejemplo: 4
  opening_crawl: string; // Texto de apertura de la película
  planets: string[]; // Array de URLs de planetas
  producer: string; // Productores de la película, ejemplo: "Gary Kurtz, Rick McCallum"
  release_date: string; // Fecha de lanzamiento, ejemplo: "1977-05-25"
  species: string[]; // Array de URLs de especies
  starships: string[]; // Array de URLs de naves estelares
  title: string; // Título de la película, ejemplo: "A New Hope"
  url: string; // URL de la película
  vehicles: string[]; // Array de URLs de vehículos
}

export interface IPlanet {
  climate: string; // Ejemplo: "Arid"
  created: string; // Ejemplo: "2014-12-09T13:50:49.641000Z"
  diameter: string; // Ejemplo: "10465"
  edited: string; // Ejemplo: "2014-12-15T13:48:16.167217Z"
  films: string[]; // Array de URLs de películas
  gravity: string; // Ejemplo: "1"
  name: string; // Ejemplo: "Tatooine"
  orbital_period: string; // Ejemplo: "304"
  population: string; // Ejemplo: "120000"
  residents: string[]; // Array de URLs de residentes
  rotation_period: string; // Ejemplo: "23"
  surface_water: string; // Ejemplo: "1"
  terrain: string; // Ejemplo: "Desert"
  url: string; // URL del planeta
}
