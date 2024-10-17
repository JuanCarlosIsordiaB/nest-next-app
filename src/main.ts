import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // /api/:

  const config = new DocumentBuilder()
    .setTitle('Products CRUD')
    .setDescription('The products API description')
    .setVersion('1.0')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //localhost:4000/api to see the swagger documentation

  app.enableCors(); // Enable CORS make calls from different origins




  await app.listen(4000);
}
bootstrap();
