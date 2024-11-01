import { Router, Request, Response } from "express";
const app = Router();

app.get("/people", async (req: Request, res: Response) => {
  try {
    let allCharacters = await people();
    res.status(200).send(allCharacters);
  } catch (error) {
    console.log(error);
  }
});
