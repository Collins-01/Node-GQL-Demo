import App from "./app";
const bootstrap = () => {
  const instance = new App();
  const app = instance.getApp();

  app.listen(3000, () => {
    console.log(`App listening on port 3000`);
  });
};

bootstrap();
