import mongoose from "mongoose";

export interface IPlanetDB {
  _id: mongoose.Types.ObjectId;
  name: string;
  gravity: string;
  climate: string;
  population: string;
  url: string;
  created: string;
  diameter: string;
  edited: string;
  orbital_period: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
}

const planetSchema = new mongoose.Schema({
  name: String,
  gravity: String,
  climate: String,
  population: String,
  url: String,
  created: String,
  diameter: String,
  edited: String,
  orbital_period: String,
  rotation_period: String,
  surface_water: String,
  terrain: String,
});

const Planet = mongoose.model<IPlanetDB>("Planet", planetSchema);

export default Planet;
