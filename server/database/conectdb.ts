const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();
const MONGOURL = process.env.MONGO_URL;

//Conection
mongoose
  .connect(MONGOURL)
  .then((db) => console.log("Database is connected"))
  .catch((err: unknown) => console.log(err));
