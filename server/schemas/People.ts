import mongoose from "mongoose";

export interface ICharacterDB {
  _id: mongoose.Types.ObjectId;
  name: string;
  homeworld: string;
  height: string;
  url: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  mass: string;
  skin_color: string;
  created: string;
}

const characterSchema = new mongoose.Schema({
  name: String,
  homeworld: String,
  height: String,
  url: String,
  birth_year: String,
  eye_color: String,
  gender: String,
  hair_color: String,
  mass: String,
  skin_color: String,
  created: String,
});

const Character = mongoose.model<ICharacterDB>("Character", characterSchema);

export default Character;
