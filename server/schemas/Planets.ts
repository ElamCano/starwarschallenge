import mongoose from "mongoose";

export interface IPlanetDB {
  id: string;
  name: string;
  gravity: string;
  climate: string;
  population: string;
  url: string;
}

const planetSchema = new mongoose.Schema({
  id: String,
  name: String,
  gravity: String,
  climate: String,
  population: String,
  url: String,
});

const Planet = mongoose.model<IPlanetDB>("Planet", planetSchema);

export default Planet;
