import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Cities } from './dto/cities.dto';

@Injectable()
export class CitiesService {
  async fetchCities(): Promise<Cities[]> {
    const baseUrl = 'https://jadwalsholat.org/jadwal-sholat/monthly.php';
    try {
      const response = await axios.get(baseUrl);
      const $ = cheerio.load(response.data);
      const cities: Cities[] = [];
      $('option').each((i, elem) => {
        const id = $(elem).val();
        const name = $(elem).text().trim();

        if (id && name) {
          const cityId = Array.isArray(id) ? id[0] : id;
          cities.push({ id: parseInt(cityId, 10), name });
        }
      });

      return cities;
    } catch (error) {
      console.error('Error fetching cities:', error);
      throw new Error('Failed to fetch cities');
    }
  }
}
