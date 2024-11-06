import mongoose from "mongoose";

export interface IFilmDB {
  _id: mongoose.Types.ObjectId;
  title: string;
  director: string;
  episode: string;
  population: string;
  url: string;
  created: string;
  edited: string;
  opening_crawl: string;
  producer: string;
  release_date: string;
}

const filmSchema = new mongoose.Schema({
  title: String,
  director: String,
  episode: String,
  url: String,
  created: String,
  edited: String,
  opening_crawl: String,
  producer: String,
  release_date: String,
});

const Film = mongoose.model<IFilmDB>("Film", filmSchema);

export default Film;
