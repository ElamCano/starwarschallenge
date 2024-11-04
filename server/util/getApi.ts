const axios = require("axios");
const apiUrl = "https://swapi.dev/api/";

export const getApi = async (endpoint: string) => {
  let allCharacters = [];
  let nextPage = apiUrl + endpoint;

  while (nextPage) {
    const response = await axios.get(nextPage);
    const data = response.data;
    allCharacters = [...allCharacters, ...data.results];
    nextPage = data.next;
  }
  return allCharacters;
};
