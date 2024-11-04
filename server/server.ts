import express, { Request, Response } from "express";
import "./util/cronJob";
require("./database/conectdb.ts");
const app = express();
const cors = require("cors");
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 7000;
app.use(cors());

//Routes
app.use(require("./routes/index.routes"));

//Server run
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
