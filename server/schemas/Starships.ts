import mongoose from "mongoose";

export interface IStarshipDB {
  id: string;
  name: string;
  passengers: string;
  model: string;
  consumables: string;
  url: string;
}

const starshipSchema = new mongoose.Schema({
  id: String,
  name: String,
  passengers: String,
  model: String,
  consumables: String,
  url: String,
});

const Starship = mongoose.model<IStarshipDB>("Starship", starshipSchema);

export default Starship;
