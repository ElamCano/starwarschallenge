import mongoose from "mongoose";

export interface IFilmDB {
  id: string;
  title: string;
  director: string;
  episode: string;
  population: string;
  url: string;
}

const filmSchema = new mongoose.Schema({
  id: String,
  title: String,
  director: String,
  episode: String,
  url: String,
});

const Film = mongoose.model<IFilmDB>("Film", filmSchema);

export default Film;
