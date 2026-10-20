# Sigma Borneo — Platform Travel Pontianak-Kuching & Rental Mobil

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-green?style=flat-square&logo=node.js)](https://nodejs.org/)

## 📋 Deskripsi Proyek

**Sigma Borneo** adalah platform digital resmi untuk layanan transportasi lintas negara (Pontianak ⇆ Kuching PP) dengan sistem _door-to-door_ eksekutif serta penyedia layanan rental dan sewa mobil terpercaya di Pontianak. Website ini dirancang dengan standar performa tinggi, UI/UX modern berbasis animasi halus, serta optimasi SEO teknis yang komprehensif untuk mendominasi pencarian lokal maupun lintas batas.

---

## 🚀 Fitur Utama

### 1. Layanan Travel Door-to-Door

- Rute resmi lintas negara **Pontianak — Kuching** via PLBN Entikong.
- Armada nyaman, ber-AC, bersih, serta didampingi pengemudi profesional berpengalaman.
- Layanan antar-jemput langsung dari alamat Anda menuju destinasi tujuan.

### 2. Paket Wisata & Tour Kuching

- Informasi destinasi ikonik dan kuliner legendaris (Tugu Khatulistiwa, Waterfront Kuching, dll.).
- Paket perjalanan lengkap (durasi 3H2M) dengan fasilitas akomodasi dan transportasi terbaik.

### 3. Sewa Mobil Terpercaya di Pontianak

- Pilihan armada terlengkap mulai dari MPV (Avanza, Innova Reborn, Zenix Hybrid), SUV (Fortuner GR Sport), hingga kendaraan mewah (Alphard Transformer, Hiace Commuter).
- Opsi sewa harian, mingguan, bulanan, dengan pilihan lepas kunci (_self-drive_) maupun dengan pengemudi berpengalaman.

### 4. Optimasi SEO Teknis & Modern

- **Next.js App Router Metadata API:** Pengaturan dynamic title, meta description, dan Open Graph social sharing tags.
- **Schema Markup (JSON-LD):** Implementasi data terstruktur `LocalBusiness`, `TravelAgency`, dan `BreadcrumbList` untuk mendukung _rich snippets_ Google.
- **Sitemap Otomatis:** Pembuatan `sitemap.xml` dan indeks sitemap berjenjang (`sitemap-0.xml`) menggunakan `next-sitemap`.
- **Mobile Responsive & Semantic HTML:** Struktur heading (H1–H3) yang bersih serta dukungan _accessibility_ penuh.

---

## 📁 Struktur Direktori Utama

```text
src/
├── app/                  → Halaman & routing berbasis Next.js App Router
│   ├── layout.tsx        → Root layout, metadata global, & JSON-LD Schema
│   ├── page.tsx          → Halaman Beranda (Home)
│   ├── vehicles/         → Halaman daftar armada & rental mobil
│   ├── gallery/          → Galeri foto & dokumentasi perjalanan
│   └── wisata-pontianak/ → Halaman destinasi wisata & kuliner
├── components/           → Komponen modular interaktif (Client Components)
├── layouts/              → Komponen struktur global (Navbar, Footer)
└── sections/             → Bagian landing page utama (Hero, About, Travel, dll.)

public/
├── images/               → Aset gambar armada & logo brand
├── wisata/               → Aset gambar destinasi wisata & kuliner
├── robots.txt            → Pengaturan crawler mesin pencari
└── sitemap.xml           → Peta situs utama web
```

---

## ⚙️ Panduan Memulai (Getting Started)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal di komputer Anda:

1. **Buka folder proyek:**

   ```bash
   cd kuching
   ```

2. **Install dependensi yang diperlukan:**

   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Development Server):**

   ```bash
   npm run dev
   ```

4. **Akses aplikasi melalui browser:**
   Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasil aplikasi secara _real-time_.

---

## 📈 Panduan Pemeliharaan SEO & Konten

Untuk menjaga performa mesin pencari (_SEO_) tetap optimal dan menjaga reputasi profesional brand **Sigma Borneo**, perhatikan pedoman berikut:

- **Konsistensi Alt Text Gambar:** Setiap penambahan gambar armada, galeri, atau wisata baru wajib menyertakan atribut `alt` deskriptif yang memuat kata kunci utama (contoh: `alt="Sewa mobil pontianak Toyota Innova Reborn terpercaya"`).
- **Indeksasi Google Search Console:** Daftarkan ulang atau perbarui sitemap melalui Google Search Console menggunakan file verifikasi web yang tersedia di folder `public/`.
- **Aturan Penamaan Brand (Strict Branding Rule):** **DILARANG KERAS** menggunakan kata _"murah"_ pada setiap teks konten, heading, meta tags, maupun alt text. Selalu gunakan istilah profesional yang membangun kepercayaan seperti **"terpercaya"**, **"terbaik"**, **"premium"**, atau **"layanan unggulan"**.

---

## 👨‍💻 Hak Cipta & Pengembang

**CV Artha Royal Group**
