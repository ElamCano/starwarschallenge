import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: String,
  films: [String],
  vehicles: [String],
  starships: [String],
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
