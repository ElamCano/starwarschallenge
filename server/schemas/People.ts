import mongoose from "mongoose";

export interface ICharacterDB {
  id: string;
  name: string;
  homeworld: string;
  height: string;
  url: string;
}

const characterSchema = new mongoose.Schema({
  id: String,
  name: String,
  homeworld: String,
  height: String,
  url: String,
});

const Character = mongoose.model<ICharacterDB>("Character", characterSchema);

export default Character;
