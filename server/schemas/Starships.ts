import mongoose from "mongoose";

export interface IStarshipDB {
  _id: mongoose.Types.ObjectId;
  name: string;
  passengers: string;
  model: string;
  consumables: string;
  url: string;
  MGLT: string;
  cargo_capacity: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
}

const starshipSchema = new mongoose.Schema({
  name: String,
  passengers: String,
  model: String,
  consumables: String,
  url: String,
  MGLT: String,
  cargo_capacity: String,
  cost_in_credits: String,
  created: String,
  crew: String,
  edited: String,
  hyperdrive_rating: String,
  length: String,
  manufacturer: String,
});

const Starship = mongoose.model<IStarshipDB>("Starship", starshipSchema);

export default Starship;
