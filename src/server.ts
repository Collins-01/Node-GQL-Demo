import App from "./app";
import { Database } from "./database/database";
const bootstrap = async () => {
  const instance = new App();
  const db = new Database();
  const app = instance.getApp();

  await db
    .initialize()
    .then(() => {
      app.listen(3000, () => {
        console.log(`App listening on port 3000`);
      });
    })
    .catch((error) => {
      console.error(`Error starting app: ${error}`);
    });
};

bootstrap();
