import { DataSource } from "typeorm";

export class Database {
  private appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
  });

  initialize = () => {
    this.appDataSource
      .initialize()
      .then(() => {
        console.log(`Database initialized succssfully`);
      })
      .catch((err) => {
        console.log(`Failed to initialize database: ${err}`);
      });
  };
}
