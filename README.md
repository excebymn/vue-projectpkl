# Makna Consulting — Company Profile Website

Website company profile untuk **Makna Consulting**, sebuah lembaga konsultasi SDM dan pengembangan organisasi. Dibangun menggunakan **Vue 3 (Composition API)**, **Vue Router**, dan **Bootstrap 5** (dengan Bootstrap Icons), dilengkapi animasi scroll menggunakan **AOS (Animate On Scroll)**.

## ✨ Fitur Utama

- **Navbar responsif** dengan fitur pencarian halaman pintar (keyword + fuzzy matching) yang mengarahkan pengguna ke halaman yang relevan.
- **Hero section dinamis** di setiap halaman (About, Contact, Portofolio, Services) dengan slideshow gambar background otomatis.
- **Floating action buttons**: tombol WhatsApp (dengan label yang muncul saat hover) dan tombol "back to top", keduanya otomatis menyesuaikan posisi agar tidak menabrak footer.
- **Halaman Portofolio** dengan sistem tab (Testimoni, Pengalaman, Client, Statistik, Galeri) yang dapat dikontrol lewat query parameter URL.
- **Halaman Services** dengan pencarian layanan real-time serta highlight kata kunci pada hasil pencarian.
- **Call-to-Action (CTA) section** yang reusable dengan tombol menuju halaman Contact dan Services.
- **Footer** berisi info kontak, social media, dan navigasi cepat ke halaman-halaman utama.
- Desain **fully responsive** (mobile, tablet, desktop) dengan breakpoint kustom di tiap komponen.

## 🗂️ Struktur Komponen

| Komponen | Deskripsi |
|---|---|
| `Header.vue` | Navbar utama + search bar dengan algoritma scoring (page match, keyword match, fuzzy match) |
| `Footer.vue` | Footer dengan brand info, navigasi halaman, kontak, dan social links |
| `Cta.vue` | Section ajakan bertindak (Call To Action) berwarna kuning khas brand |
| `FloatingButtons.vue` | Tombol mengambang WhatsApp & scroll-to-top yang auto-reposisi terhadap footer |
| `About.vue` | Halaman "Tentang Kami": hero, story/values, layanan unggulan, tim, dan CTA |
| `Contact.vue` | Halaman "Hubungi Kami": hero dan kartu-kartu kontak (WhatsApp, email, dll) |
| `Home.vue` | Halaman utama: hero, intro perusahaan, highlight layanan, showcase portofolio, alasan memilih Makna Consulting |
| `Portofolio.vue` | Halaman portofolio dengan tab navigasi (testimoni, pengalaman, client, statistik, galeri) |
| `Services.vue` | Halaman layanan dengan pencarian & highlight teks hasil pencarian |

## 🛠️ Teknologi

- **Vue 3** (`<script setup>`, Composition API: `ref`, `computed`, `onMounted`, `onUnmounted`, `nextTick`)
- **Vue Router** (navigasi antar halaman, termasuk query parameter untuk tab aktif)
- **Bootstrap 5** (grid system, utility classes, komponen UI)
- **Bootstrap Icons** (`bi bi-*`)
- **AOS (Animate on Scroll)** (`data-aos="..."`) untuk animasi saat scroll
- Data-driven content dipisah ke folder `@/data/...` (mis. `AboutData`, `ContactData`, `ServiceData`)

## 🎨 Tema Desain

- Warna utama: **kuning/emas (`#ffc107`)** sebagai identitas brand, dipadukan dengan warna **cream** dan **dark (`#212529`)**.
- Banyak section menggunakan **background SVG pattern** (geometris & gelombang) yang di-encode langsung sebagai `background-image` base64/URL-encoded SVG.
- Efek hover halus (`translateY`, `scale`) pada kartu, tombol, dan link untuk memberi kesan interaktif.

## 📱 Responsivitas

Setiap komponen memiliki breakpoint khusus:
- **Mobile**: `≤576px` / `≤768px` / `≤991px` — navigasi jadi vertikal, tombol full-width, padding diperkecil.
- **Tablet**: `577px–991px` — ukuran teks menengah.
- **Desktop**: `≥992px` — layout horizontal penuh, ukuran teks lebih besar.

## 📌 Catatan Pengembangan

- Fitur pencarian di `Header.vue` menggunakan sistem **scoring** (kecocokan nama halaman + keyword + fuzzy match sederhana) lalu diurutkan berdasarkan skor tertinggi, maksimal 5 hasil ditampilkan.
- `FloatingButtons.vue` menghitung posisi tombol secara dinamis berdasarkan `getBoundingClientRect()` dari elemen `<footer>` agar tombol tidak menutupi konten footer saat di-scroll ke bawah.
- Beberapa halaman (`About`, `Contact`, `Portofolio`, `Services`) memiliki logika slideshow hero image yang sama (interval 2–3 detik) — berpotensi diekstrak menjadi **composable** (`useHeroSlideshow`) untuk mengurangi duplikasi kode.
- Terdapat komentar developer "ERROR NYA BIARIN WOY EMANG GITU" di `Portofolio.vue` pada fungsi `goToProject` — perlu dicek apakah ini debug note yang perlu dibersihkan sebelum production.

## 🚀 Potensi Peningkatan

1. Ekstrak logika slideshow hero image (duplikasi di 4 halaman) menjadi composable bersama.
2. Tambahkan `alt` text yang lebih deskriptif pada gambar-gambar galeri/tim untuk aksesibilitas.
3. Pertimbangkan lazy-loading untuk gambar hero agar performa awal (initial load) lebih cepat.
4. Link social media (Facebook, Instagram, TikTok) di `Footer.vue` masih `#` — perlu diisi URL asli.