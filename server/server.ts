import express, { Request, Response } from "express";
const { people } = require("./controllers/index");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());

app.get("/api/people/", async (req: Request, res: Response) => {
  try {
    const response = await people();
    console.log(response, "SASA");
    res.status(200).send(response);
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* app.get("/api/home", (req: Request, res: Response) => {
  res.json({ message: "Hello Wolrd" });
}); */
