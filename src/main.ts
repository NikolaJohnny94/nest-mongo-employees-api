import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'


async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api/v1')
  const config = new DocumentBuilder()
    .setTitle('Employees CRUD')
    .setDescription('Employees CRUD with soft delete')
    .setVersion('1.0')
    .addTag('employees')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000)
  console.log('\nServer is running on http://localhost:3000')
}
bootstrap()
