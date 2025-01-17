import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { ScheduleDTO } from './dto/schedule.dto';

@Injectable()
export class ScheduleService {
  async fetchSchedule(cityId?: number): Promise<ScheduleDTO> {
    const baseUrl = cityId
      ? `https://jadwalsholat.org/jadwal-sholat/monthly.php?id=${cityId}`
      : 'https://jadwalsholat.org/jadwal-sholat/monthly.php';
    const response = await axios.get(baseUrl);
    const html = response.data;
    const $ = cheerio.load(html);

    const location = $('h1.h1_edit').text().split(',')[0].trim();
    const date = $('h2.h2_edit').text().trim();

    const scheduleDTO: ScheduleDTO = {
      location: location,
      date: date,
      schedule: [],
    };

    $('table.table_adzan tr.table_light, tr.table_dark').each((index, row) => {
      const columns = $(row).find('td');
      if (columns.length > 0) {
        scheduleDTO.schedule.push({
          date: $(columns[0]).text().trim() || '',
          imsyak: $(columns[1]).text().trim() || '',
          fajr: $(columns[2]).text().trim() || '',
          sunrise: $(columns[3]).text().trim() || '',
          dhuha: $(columns[4]).text().trim() || '',
          zuhr: $(columns[5]).text().trim() || '',
          asr: $(columns[6]).text().trim() || '',
          maghrib: $(columns[7]).text().trim() || '',
          isha: $(columns[8]).text().trim() || '',
        });
      }
    });

    return scheduleDTO;
  }
}
