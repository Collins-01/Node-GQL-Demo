import { DataSource } from "typeorm";
import { Config } from "../utils";

export class Database {
  constructor(config: Config) {
    this.config = config;
    this.appDataSource = new DataSource({
      type: "postgres",
      host: this.config.HOST,
      port: 3306,
      username: this.config.USERNAME,
      password: this.config.PASSWORD,
      database: this.config.DATABASE,
    });
  }
  private config: Config;
  private appDataSource: DataSource;

  initialize = async () => {
    await this.appDataSource
      .initialize()
      .then(() => {
        console.log(`Database initialized succssfully`);
      })
      .catch((err) => {
        console.log(`Failed to initialize database: ${err}`);
      });
  };
}
