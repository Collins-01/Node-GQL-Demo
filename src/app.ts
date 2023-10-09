import express, { Application } from "express";

export default class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  getApp = (): Application => {
    return this.app;
  };
}
