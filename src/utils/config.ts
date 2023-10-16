import dotenv from "dotenv";

export class Config {
  constructor() {
    dotenv.config();
  }
  HOST = process.env.HOST;
  PORT = process.env.PORT;
  USERNAME = process.env.POSTGRES_USER;
  PASSWORD = process.env.POSTGRES_PASSWORD;
  DATABASE = process.env.POSTGRES_DB_NAME;
}
