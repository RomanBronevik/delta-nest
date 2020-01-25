import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
    cors: {
      origin: true,
      allowedHeaders: ["Content-Type", "Accept", "Authorization"],
      optionsSuccessStatus: 200
    }
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  console.log("app is running on port 3000");

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
