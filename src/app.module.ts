import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { ScheduleModule } from './schedule/schedule.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ScheduleModule, CitiesModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
