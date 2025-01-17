import { Body, Controller, Post } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleDTO } from './dto/schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async getSchedule(
    @Body() body: { cityId: number },
  ): Promise<{ data: ScheduleDTO }> {
    const { cityId } = body;
    const schedule = await this.scheduleService.fetchSchedule(cityId);
    return { data: schedule };
  }
}
