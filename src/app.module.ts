import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.modules';
import config from 'config/config';

@Module({
  imports: [EmployeesModule, MongooseModule.forRoot(config.MONGO_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
