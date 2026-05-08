# 🚀 Makna Consulting Website

![Vue](https://img.shields.io/badge/Vue-3-42b883?logo=vue.js)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Development-yellow)

Website company profile untuk **Makna Consulting** — dibangun menggunakan Vue 3 dengan pendekatan modular, clean, dan scalable.

---

## ✨ Fitur Utama

* 🎯 Hero slider interaktif
* 🧩 Struktur modular (layout + pages)
* 🧑‍💼 About dengan zig-zag layout
* 🛠 Services (kategori + detail)
* 📊 Portfolio dengan filter
* 👨‍💻 Developer team (interactive card)
* 📞 Contact multi-platform
* 🤝 Trusted client (marquee logo)
* 📱 Responsive design

---

## 🛠 Tech Stack

| Tech         | Keterangan                         |
| ------------ | ---------------------------------- |
| Vue 3        | Composition API (`<script setup>`) |
| Bootstrap 5  | Layout & responsive                |
| Vue Router   | Routing                            |
| Font Awesome | Icon                               |

---

## 📁 Struktur Project

```bash
src/
├── views/
│   ├── layouts/
│   │   ├── HomeLayout.vue
│   │   └── FooterLayout.vue
│   │
│   └── pages/
│       ├── HomeView.vue
│       ├── AboutView.vue
│       ├── ServiceView.vue
│       ├── PortfolioView.vue
│       ├── DeveloperView.vue
│       └── ContactView.vue
│
├── router/
│   └── index.js
│
└── App.vue


public/
└── images/
    ├── PrimaryLogo/
    │   └── Logo.png
    │
    ├── SecondaryLogo/
    │   ├── 1.png
    │   ├── 2.png
    │   └── ...
    │
    └── Content/
        └── (asset gambar konten)
```

---

## ⚙️ Instalasi & Setup

```bash
# Clone repo
git clone https://github.com/username/makna-consulting.git

# Masuk folder
cd makna-consulting

# Install dependency
npm install

# Run dev server
npm run dev
```

---

## 🧠 Arsitektur

Project ini menggunakan pendekatan:

### 1. Layout-based Structure

* `layouts/` → komponen global (header, footer, dll)
* `pages/` → halaman utama

### 2. Section-based UI

Setiap halaman dibangun dari section modular:

```
[page]-[section]-section
```

Contoh:

* `home-hero-section`
* `service-detail-section`
* `portfolio-grid-section`

---

## 🎨 Design System

* 🎨 Primary color: `#ffc107`
* 📦 Card-based layout
* 📐 Bootstrap grid system
* 💡 Clean & minimal UI

---

## 🔧 Best Practices

* Scoped CSS (hindari konflik global)
* Data-driven UI (loop & reactive state)
* Konsistensi naming class
* Struktur siap di-refactor ke component reusable

---

## 🚧 Roadmap / Improvement

* [ ] Refactor ke reusable components (`Hero`, `Card`, dll)
* [ ] Tambahkan animation (Vue Transition)
* [ ] Lazy loading image
* [ ] Integrasi API (dynamic data)
* [ ] Cleanup interval (`onUnmounted`)
* [ ] SEO optimization

---

## 🤝 Kontribusi

1. Fork repository
2. Buat branch (`feature/nama-fitur`)
3. Commit perubahan
4. Pull request

---

## 📄 License

MIT License

---

## ⚡ Catatan Developer

* Asset gambar disimpan di `public/images`
* Logo client (trusted) auto-load dari folder `SecondaryLogo`
* Struktur sudah disiapkan untuk scale ke project production

