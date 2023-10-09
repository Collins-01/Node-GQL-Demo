import express, { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

export default class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.setUpMiddlewares();
  }

  getApp = (): Application => {
    return this.app;
  };

  private setUpMiddlewares = (): void => {
    this.app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        graphiql: true, // Enable the GraphQL web interface for testing
      })
    );
  };
}
