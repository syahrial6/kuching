# 🚗 Sigma Delta — Travel Pontianak ⇆ Kuching & Rental Mobil Premium

Sigma Delta adalah layanan transportasi lintas negara yang menyediakan perjalanan **Pontianak ⇆ Kuching**, serta layanan **rental mobil premium** dengan unit terbaik dan pelayanan profesional.

Website ini dibuat untuk menampilkan informasi layanan, galeri dokumentasi, sistem pesan cepat via WhatsApp, dan fitur-fitur lain yang mendukung pengalaman pengguna.

---

## ✨ Fitur Utama

### 🔹 Travel Pontianak → Kuching
Layanan travel door-to-door dengan armada nyaman, driver berpengalaman, dan proses perjalanan yang aman serta resmi.

### 🔹 Rental Mobil Pontianak
Pilihan mobil mulai dari Avanza, Reborn, hingga Fortuner. Mendukung opsi lepas kunci atau include driver.

### 🔹 Galeri Dokumentasi
Galeri foto & video dengan *auto-detect orientation* (portrait / landscape), modal preview, dan tampilan yang responsif.

### 🔹 Floating WhatsApp Multi-Admin
Tombol WhatsApp melayang dengan animasi:
- Klik untuk membuka pilihan  
- Admin 1 & Admin 2 tersedia  
- Animasi smooth menggunakan Framer Motion

### 🔹 Desain Modern & Responsif
UI berbasis:
- **Next.js App Router**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**

---

## 🚀 Tech Stack

- **Next.js 14+**
- **React 18**
- **Tailwind CSS**
- **TypeScript**
- **Framer Motion**
- **Next/Image Optimization**

---

## 📁 Struktur Proyek

```
/app
├── page.tsx                 → Halaman utama (Hero, Travel, Rental)
├── travel                   → Section Travel Kuching
├── vehicles                 → Halaman Rental Mobil
├── gallery                  → Galeri foto/video
├── components               → Komponen reusable
└── hooks                    → Custom hooks (misal: useImageOrientation)

/public
└── documentation/pictures   → File gambar dokumentasi
```

---

## 🔧 Cara Menjalankan Project

Pastikan Node.js sudah terinstall, lalu jalankan:

```bash
npm install
```

Untuk menjalankan server development:

```bash
npm run dev
```

Akses melalui browser:

👉 http://localhost:3000

Perubahan akan otomatis ter-*update* berkat fitur hot reload.

---

## 🛠 Development Notes

- Semua file foto diletakkan di `/public/documentation/pictures`
- Sistem galeri otomatis mendeteksi portrait/landscape
- Video dapat ditambahkan kapan saja (struktur sudah siap)
- Styling menggunakan Tailwind agar cepat dan konsisten
- Animasi menggunakan Framer Motion

---

## 📦 Deployment

Rekomendasi platform deploy: **Vercel**

Deploy langsung:

https://vercel.com/new

Dokumentasi:

https://nextjs.org/docs/app/building-your-application/deploying

---

## 👨‍💻 Developer

Website & sistem dikembangkan oleh:

**Eunoia Digital Creations**
