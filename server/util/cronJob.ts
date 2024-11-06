import cron from "node-cron";
import { people, films, planets, starships } from "../controllers/index";

//Se ejecuta todos los dias a las 00:00 am
cron.schedule("7 16  * * *", async () => {
  console.log("Ejecutando sincronización de datos...");
  await people();
  await films();
  await planets();
  await starships();
  console.log("Sincronización completada.");
});
