import { DataSource } from "typeorm";
import { Config } from "../utils";

export class Database {
  constructor(config: Config) {
    console.log(`Database name: ${config.DATABASE}`);
    // this.appDataSource = new DataSource({
    //   type: "postgres",
    //   host: config.HOST,
    //   port: 5432,
    //   username: config.USERNAME,
    //   password: config.PASSWORD,
    //   database: config.DATABASE,
    // });
  }

  // private appDataSource: DataSource;

  initialize = async () => {
    const appDataSource = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "admin",
      password: "test1234",
      database: "gql-demo",
    });
    await appDataSource
      .initialize()
      .then(() => {
        console.log(`Database initialized succssfully`);
      })
      .catch((err) => {
        console.log(`Failed to initialize database: ${err}`);
      });
  };
}
