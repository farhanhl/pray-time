export class ScheduleDTO {
  location: string;
  date: string;
  schedule: {
    date: string;
    imsyak: string;
    fajr: string;
    sunrise: string;
    dhuha: string;
    zuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
  }[];
}
