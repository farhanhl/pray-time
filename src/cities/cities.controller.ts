import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { Cities } from './dto/cities.dto';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async getCities(): Promise<{ data: Cities[] }> {
    const cities = await this.citiesService.fetchCities();
    return { data: cities };
  }
}
