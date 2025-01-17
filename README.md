# Pray-Time

Pray-Time adalah aplikasi berbasis NestJS yang menyediakan jadwal sholat dan pilihan kota yang tersedia. Data dalam aplikasi ini diambil dari sumber terpercaya yaitu [JadwalSholat.org](https://jadwalsholat.org).

## Fitur

- **/schedule**: Endpoint untuk menampilkan jadwal sholat berdasarkan kota.
- **/cities**: Endpoint untuk menampilkan daftar kota yang tersedia.

## Teknologi yang Digunakan

- ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white) [NestJS](https://nestjs.com/): Framework untuk membangun aplikasi server-side yang kuat dan modular.

- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) [Axios](https://axios-http.com/): Digunakan untuk melakukan fetch data dari API eksternal.

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini secara lokal:

1. Clone repository ini:

   ```bash
   git clone https://github.com/farhanhl/pray-time.git
   cd pray-time
   ```

2. Install dependensi:

   ```bash
   npm install
   ```

3. Jalankan aplikasi:

   ```bash
   npm run start:dev
   ```

4. Akses aplikasi di `http://localhost:3000`.

## Penggunaan Endpoint

### 1. Jadwal Sholat

**Endpoint:** `POST /schedule`

**Body Request:**

```json
{
  "cityId": 308
}
```

**Contoh Request:**

```bash
POST http://localhost:3000/schedule
Content-Type: application/json

{
    "cityId": 308
}
```

**Response:**

```json
{
  "data": {
    "location": "Jadwal Sholat untuk Jakarta Pusat",
    "date": "Januari 2025",
    "schedule": [
      {
        "date": "01",
        "imsyak": "04:08",
        "fajr": "04:18",
        "sunrise": "05:39",
        "dhuha": "06:03",
        "zuhr": "11:58",
        "asr": "15:25",
        "maghrib": "18:12",
        "isha": "19:28"
      },
      {
        "date": "02",
        "imsyak": "04:09",
        "fajr": "04:19",
        "sunrise": "05:40",
        "dhuha": "06:04",
        "zuhr": "11:58",
        "asr": "15:25",
        "maghrib": "18:12",
        "isha": "19:29"
      }
    ]
  }
}
```

### 2. Pilihan Kota

**Endpoint:** `GET /cities`

**Response:**

```json
{
  "data": [
    {
      "id": 317,
      "name": "Aceh Barat"
    },
    {
      "id": 318,
      "name": "Aceh Barat Daya"
    }
  ]
}
```
