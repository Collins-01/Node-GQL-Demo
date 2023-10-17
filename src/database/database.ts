
import { Config } from "../utils";
import { Sequelize } from "sequelize";


export class Database {
  config: Config;
  constructor(config: Config) {
    this.config = config;
  }

  initialize = async () => {
    console.log(`Database name: ${this.config.DATABASE}`);
    const sequelize = new Sequelize(
      // `postgres://${this.config.USERNAME}:${this.config.PASSWORD}:5432/${this.config.DATABASE}`
      {
        database: this.config.DATABASE,
        dialect: "postgres",
        password: this.config.PASSWORD,
        username: this.config.USERNAME,
        host: this.config.HOST,
        port: 5432,
      }
    ); // Example for postgres

    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
}
