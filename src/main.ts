import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: 'http://localhost:3000'});
  await app.listen(process.env.NODE_PORT || 5000);
}
bootstrap();
