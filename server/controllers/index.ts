const axios = require("axios");
const apiUrl = "https://swapi.dev/api/";
//Get people
const people = async () => {
  const data = await axios.get(`${apiUrl}/people`);
  const allCharacters = await data.data.results.map((e: any) => {
    const id = e.url.split("/").slice(-2, -1)[0];
    return {
      id: id,
      name: e.name,
      homeworld: e.mass,
      height: e.height,
    };
  });
  return allCharacters;
};
//Get starships

//Get films

//Get planets
module.exports = { people };
