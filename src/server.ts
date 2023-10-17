import App from "./app";
import { Database } from "./database/database";
import dotenv from "dotenv";
import { Config } from "./utils";
const bootstrap = async () => {
  dotenv.config();
  const config = new Config();
  const db = new Database(config);
    await db.initialize();
  // const instance = new App();
  // const app = instance.getApp();
  // await db
  //   .initialize()
  //   .then(() => {
  //     app.listen(3000, () => {
  //       console.log(`App listening on port 3000`);
  //     });
  //   })
  //   .catch((error) => {
  //     console.error(`Error starting app: ${error}`);
  //   });
};

bootstrap();
