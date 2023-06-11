import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerService } from './infrastructure';

async function bootstrap() {
  // Initialize App
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
void bootstrap();
