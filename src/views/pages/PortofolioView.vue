<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/portofolio/PengalamanData.js'
import { testimoni } from '@/data/portofolio/TestimoniData.js'
import { images } from '@/data/home/TooltipData.js'
import { statistik } from '@/data/portofolio/StatistikData.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: false,
})

const route = useRoute()
const searchQuery = ref('')

const filteredImages = computed(() => {
  return images.filter((item) => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const animatedNumbers = ref([])

const animateValue = (start, end, duration, index) => {
  let startTimestamp = null

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp

    const progress = Math.min((timestamp - startTimestamp) / duration, 1)

    animatedNumbers.value[index] = Math.floor(progress * (end - start) + start)

    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

onMounted(() => {
  animatedNumbers.value = statistik.map(() => 0)

  statistik.forEach((item, index) => {
    animateValue(0, item.value, 1800, index)
  })

  if (route.query.search) {
    searchQuery.value = route.query.search
  }
})

const generateStars = (rating) => {
  return Math.round(rating)
}

const filteredProjects = computed(() => {
  return projects.filter((project) => {
    const query = searchQuery.value.toLowerCase()

    return (
      project.title.toLowerCase().includes(query) ||
      project.client.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query) ||
      project.status.toLowerCase().includes(query) ||
      String(project.year).includes(query)
    )
  })
})

const escapeHtml = (text) => {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const highlightText = (text) => {
  const query = searchQuery.value.trim()
  if (!query) return escapeHtml(text)

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(escapedQuery, 'gi')

  return escapeHtml(text).replace(
    regex,
    (match) => `<mark class="bg-warning text-dark">${match}</mark>`,
  )
}

const activeTab = ref(route.query.tab || 'testimoni')

const goToProject = (clientName) => {
  activeTab.value = 'pengalaman'
  searchQuery.value = clientName

  // scroll halus ke atas section
  setTimeout(() => {
    document.getElementById('projectAccordion')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, 100)
}
</script>

<template>
  <!-- Hero Section -->
  <!-- Hero Section dengan Gambar Latar Belakang -->
  <section class="position-relative vh-100 overflow-hidden" data-aos="zoom-in">
    <!-- Background -->
    <img
      src="https://placehold.co/1600x900"
      alt="Hero Background"
      class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
    />

    <!-- Overlay -->
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

    <!-- Content -->
    <div
      class="container position-absolute top-50 start-50 translate-middle text-center text-white"
    >
      <span class="badge bg-warning text-dark px-3 py-2 mb-3"> Makna Consulting </span>

      <h1 class="display-3 fw-bold mb-4">Portofolio Kami</h1>

      <p class="lead col-lg-8 mx-auto text-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, impedit.
      </p>
    </div>
  </section>
  <section class="container py-5" >
    <!-- Header -->
    <div class="text-center mb-5" data-aos="flip-down">
      <p class="text-secondary mb-2">Portofolio Perusahaan</p>

      <h2 class="fw-bold">Data & Riwayat Kerja</h2>
    </div>

    <!-- Tab Buttons -->
    <div class="pill-tabs d-flex flex-wrap gap-2 justify-content-center mb-4" data-aos="slide-up">
      <!-- Testimoni -->
      <button
        class="tab-pill-btn"
        :class="{ active: activeTab === 'testimoni' }"
        @click="activeTab = 'testimoni'"
      >
        Testimoni
      </button>

      <!-- Pengalaman -->
      <button
        class="tab-pill-btn"
        :class="{ active: activeTab === 'pengalaman' }"
        @click="activeTab = 'pengalaman'"
      >
        Pengalaman
      </button>

      <!-- Client -->
      <button
        class="tab-pill-btn"
        :class="{ active: activeTab === 'client' }"
        @click="activeTab = 'client'"
      >
        Client
      </button>

      <!-- Statistik -->
      <button
        class="tab-pill-btn"
        :class="{ active: activeTab === 'statistik' }"
        @click="activeTab = 'statistik'"
      >
        Statistik
      </button>
    </div>

    <!--
    ╔══════════════════════════════════════╗
    ║               CONTENT                ║
    ╚══════════════════════════════════════╝
    -->
    <div class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4">
        <!--
        ╔══════════════════════════════════════╗
        ║              TESTIMONI               ║
        ╚══════════════════════════════════════╝
        -->
        <div v-if="activeTab === 'testimoni'" class="testimonial-section py-5" data-aos="slide-up">
          <div class="container">
            <!-- Heading -->
            <div class="text-center mb-5">
              <h2 class="fw-bold section-title">Client Testimonial</h2>
              <p class="section-subtitle">Beberapa pengalaman dan feedback dari client</p>
            </div>

            <!-- Card Grid -->
            <div class="row g-4" >
              <div v-for="item in testimoni" :key="item.id" class="col-12 col-md-6 col-xl-4" data-aos="flip-right">
                <div class="testimonial-card h-100">
                  <!-- Header -->
                  <div
                    class="d-flex align-items-center mb-3 "
                    :class="item.gambar ? '' : 'justify-content-between'"
                  >
                    <!-- Image -->
                    <img
                      v-if="item.gambar"
                      :src="item.gambar"
                      :alt="item.nama"
                      class="testimonial-image"
                    />

                    <!-- Name & Date -->
                    <div class="ms-3 flex-grow-1">
                      <h5 class="mb-1 fw-semibold">
                        {{ item.nama }}
                      </h5>

                      <small class="testimonial-date">
                        {{ item.tanggal }}
                      </small>
                    </div>
                  </div>

                  <!-- Rating -->
                  <div class="d-flex align-items-center mb-3">
                    <div class="stars me-2">
                      <span v-for="star in generateStars(item.rating)" :key="star"> ⭐ </span>
                    </div>

                    <span class="rating-number">
                      {{ item.rating }}
                    </span>
                  </div>

                  <!-- Description -->
                  <p class="testimonial-desc text-dark mb-0">
                    {{ item.deskripsi }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--
        ╔══════════════════════════════════════╗
        ║             PENGALAMAN               ║
        ╚══════════════════════════════════════╝
        -->

        <div v-if="activeTab === 'pengalaman'" data-aos="zoom-in">
          <h4 class="fw-bold mb-4 text-center" bg-light>Portfolio Proyek</h4>
          <p text-center class="text-secondary mb-4">
            Rekam jejak ini mencerminkan kompetensi kami dalam menangani berbagai proyek strategis,
            mulai dari audit sistem manajemen hingga penyusunan kebijakan teknis. Setiap baris data
            ini adalah bukti nyata dedikasi kami dalam memberikan solusi yang patuh standar dan
            berdampak positif bagi klien.
          </p>

          <div
            class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4"
          >
            <p class="mb-0 text-center text-md-start">ketuk untuk baca selengkapnya</p>

            <input
              v-model="searchQuery"
              type="text"
              class="form-control"
              placeholder="atau cari berdasarkan nama proyek, klien, kategori, dll..."
              style="max-width: 500px"
            />
          </div>

          <div class="accordion" id="projectAccordion">
            <div
              class="accordion-item"
              v-for="(project, index) in filteredProjects"
              :key="project.id"
            >
              <!-- HEADER -->
              <h2 class="accordion-header" data-aos="zoom-in">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${index}`"
                >
                  <div class="d-flex flex-column text-start">
                    <span class="fw-semibold" v-html="highlightText(project.title)"></span>

                    <small
                      class="text-secondary"
                      v-html="highlightText(`${project.client} • ${project.year}`)"
                    ></small>
                  </div>
                </button>
              </h2>

              <!-- DETAIL -->
              <div
                :id="`collapse${index}`"
                class="accordion-collapse collapse"
                data-bs-parent="#projectAccordion"
              >
                <div class="accordion-body">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <strong>Klien</strong>
                      <p class="mb-0" v-html="highlightText(project.client)"></p>
                    </div>

                    <div class="col-md-6">
                      <strong>Lokasi</strong>
                      <p class="mb-0" v-html="highlightText(project.location)"></p>
                    </div>

                    <div class="col-md-6">
                      <strong>Nilai</strong>
                      <p class="mb-0">{{ project.value }}</p>
                    </div>

                    <div class="col-md-6">
                      <strong>Nomor Kontrak</strong>
                      <p class="mb-0">{{ project.contract }}</p>
                    </div>

                    <div class="col-md-6">
                      <strong>Tanggal</strong>
                      <p class="mb-0">{{ project.date }}</p>
                    </div>

                    <div class="col-md-6">
                      <strong>Status</strong>
                      <p class="mb-0" v-html="highlightText(project.status)"></p>
                    </div>

                    <div class="col-12">
                      <strong>Kategori</strong>
                      <p class="mb-0" v-html="highlightText(project.category)"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--
        ╔══════════════════════════════════════╗
        ║                CLIENT                ║
        ╚══════════════════════════════════════╝
        -->
        <div v-if="activeTab === 'client'" class="client-section py-5" data-aos="slide-up">
          <div class="container">
            <!-- Heading -->
            <div class="text-center mb-5">
              <h2 class="client-title fw-bold">Dipercaya Berbagai Instansi & Perusahaan</h2>

              <p class="client-subtitle">Beberapa client dan partner yang pernah bekerja sama</p>
            </div>

            <!-- Search -->
            <div class="row justify-content-center mb-5">
              <div class="col-md-6">
                <div class="input-group shadow-sm">
                  <span class="input-group-text">
                    <i class="bi bi-search"></i>
                  </span>

                  <input
                    v-model="searchQuery"
                    type="text"
                    class="form-control"
                    placeholder="Cari client atau instansi..."
                  />
                </div>
              </div>
            </div>

            <!-- Grid -->
            <div class="row g-4 justify-content-center" >
              <div
                v-for="(item, index) in filteredImages"
                :key="index"
                class="col-6 col-sm-4 col-md-3 col-lg-2"
                data-aos="flip-right"
              >
                <div class="client-card" @click="goToProject(item.name)">
                  <!-- Logo -->
                  <div class="client-logo-wrapper">
                    <img :src="item.src" :alt="item.name" class="client-logo" />
                  </div>

                  <!-- Name -->
                  <p class="client-name mb-0">
                    {{ item.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--
        ╔══════════════════════════════════════╗
        ║              STATISTIK               ║
        ╚══════════════════════════════════════╝
        -->
        <section v-if="activeTab === 'statistik'" class="py-5 bg-body" data-aos="slide-up">
          <div class="container">
            <!-- Heading -->
            <div class="text-center mb-5">
              <p class="text-warning fw-semibold text-uppercase small mb-2">Statistik Perusahaan</p>

              <h2 class="fw-bold mb-3">Data & Pencapaian MAKNA Consulting</h2>

              <p class="text-body-secondary mx-auto statistik-subtitle">
                Beberapa pencapaian dan cakupan layanan profesional yang telah dipercaya berbagai
                instansi dan perusahaan.
              </p>
            </div>

            <!-- Grid -->
            <div class="row g-4">
              <div v-for="(item, index) in statistik" :key="index" class="col-12 col-sm-6 col-xl-3">
                <div class="card border shadow-sm h-100 statistik-card">
                  <div class="card-body text-center p-4">
                    <!-- Icon -->
                    <div
                      class="d-inline-flex align-items-center justify-content-center rounded-4 bg-warning bg-opacity-10 text-warning statistik-icon mb-4"
                    >
                      <i :class="item.icon"></i>
                    </div>

                    <!-- Number -->
                    <h2 class="fw-bold text-warning mb-3">
                      {{ animatedNumbers[index] }}{{ item.suffix }}
                    </h2>

                    <!-- Title -->
                    <h5 class="fw-semibold mb-3">
                      {{ item.title }}
                    </h5>

                    <!-- Desc -->
                    <p class="text-body-secondary mb-0">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pill-tabs .tab-pill-btn {
  border-radius: 50px;
  padding: 0.6rem 1.8rem;
  font-weight: 500;
  border: 2px solid #495057;
  background: transparent;
  color: #495057;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

/* Hover: naik sedikit + bayangan halus */
.pill-tabs .tab-pill-btn:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

/* Active: pill terisi + scale halus */
.pill-tabs .tab-pill-btn.active {
  background-color: #212529;
  color: #ffffff;
  border-color: #212529;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(33, 37, 41, 0.25);
}

/* Klik: efek "tekan" kecil */
.pill-tabs .tab-pill-btn:active {
  transform: scale(0.98);
  transition-duration: 0.1s;
}

.testimonial-section {
  position: relative;
  overflow: hidden;
}

/* Title */
.section-title {
  font-size: 2.2rem;
}

.section-subtitle {
  color: #9ca3af;
  max-width: 600px;
  margin: auto;
}

/* Card */
.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 24px;

  padding: 1.5rem;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  min-height: 220px;
  max-height: 420px;

  overflow: hidden;
}

.testimonial-card:hover {
  transform: translateY(-8px);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  border-color: rgba(255, 255, 255, 0.18);
}

/* Image */
.testimonial-image {
  width: 58px;
  height: 58px;

  border-radius: 50%;

  object-fit: cover;

  flex-shrink: 0;

  border: 2px solid rgba(255, 255, 255, 0.1);
}

/* Date */
.testimonial-date {
  color: #9ca3af;
}

/* Rating */
.stars {
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.rating-number {
  font-weight: 600;
  color: #facc15;
}

/* Description */
.testimonial-desc {
  color: #d1d5db;

  line-height: 1.7;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  overflow: hidden;
}
.client-section {
  position: relative;
}

/* Heading */
.client-title {
  font-size: 2.2rem;
  color: #1f2937;
}

.client-subtitle {
  color: #6b7280;
  max-width: 650px;
  margin: auto;
}

/* Card */
.client-card {
  background: white;

  border-radius: 22px;

  padding: 1.4rem 1rem;

  border: 1px solid #e5e7eb;

  height: 100%;

  text-align: center;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  cursor: pointer;
}

.client-card:hover {
  transform: translateY(-6px);

  border-color: rgba(255, 193, 7, 0.4);

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

/* Logo */
.client-logo-wrapper {
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;
}

.client-logo {
  max-width: 100%;
  max-height: 70px;

  object-fit: contain;

  filter: grayscale(100%);

  opacity: 0.8;

  transition:
    filter 0.3s ease,
    opacity 0.3s ease,
    transform 0.3s ease;
}

.client-card:hover .client-logo {
  filter: grayscale(0%);

  opacity: 1;

  transform: scale(1.05);
}

/* Name */
.client-name {
  font-size: 0.9rem;

  color: #4b5563;

  line-height: 1.5;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;

  min-height: 65px;
}

/* Mobile */
@media (max-width: 576px) {
  .client-title {
    font-size: 1.8rem;
  }

  .client-card {
    padding: 1rem 0.8rem;
  }

  .client-logo-wrapper {
    height: 75px;
  }

  .client-logo {
    max-height: 55px;
  }
}
@media (max-width: 768px) {
  .client-logo {
    filter: grayscale(0%);
    opacity: 1;
  }

  .client-card:hover {
    transform: none;
  }
}
</style>
