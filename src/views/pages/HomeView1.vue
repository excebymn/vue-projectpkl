<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { Tooltip } from 'bootstrap'
import { images } from '@/data/home/TooltipData.js'
import { highlightedServices } from '@/data/services/ServiceData'
import AOS from 'aos'
import 'aos/dist/aos.css'
 import WaveOne from '@/data/home/wave1.vue'
//import WaveTwo from '@/data/home/wave2.vue'

AOS.init({
  duration: 800,
  once: false,
})

// ===============================
// HERO SLIDES (PAKAI LINK)
// ===============================
const heroSlides = ref([
  {
    image: 'https://placehold.co/1600x800',
    title: 'Solusi Memberi Arti',
    desc: 'Mitra strategis pengembangan SDM & tata kelola instansi',
  },
  {
    image: 'https://placehold.co/1600x800/black/blue',
    title: 'Transformasi Digital',
    desc: 'Meningkatkan efisiensi melalui teknologi',
  },
])
const currentSlide = ref(0)
let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 5000)

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

  tooltipTriggerList.forEach((el) => {
    new Tooltip(el)
  })
})

onUnmounted(() => {
  clearInterval(interval)
})

const imageList = ref(images)

// duplicated track (biar looping seamless)
const loopImages = computed(() => [...imageList.value, ...imageList.value])

const whyItems = [
  {
    title: 'Profesional',
    desc: 'Tim berpengalaman',
    icon: 'bi-person-badge',
    link: '/services',
  },
  {
    title: 'Terpercaya',
    desc: 'Dipercaya banyak instansi',
    icon: 'bi-building',
    link: '/about',
  },
  {
    title: 'Berorientasi Hasil',
    desc: 'Fokus pada impact',
    icon: 'bi-graph-up',
    link: '/services',
  },
]

const targetSection = ref(null)

onMounted(async () => {
  await nextTick()

  targetSection.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
})
</script>

<template>
  <!--
╔══════════════════════════════════════╗
║           HERO & WAVE SVG           ║
╚══════════════════════════════════════╝
-->
  <section>
    <WaveOne />
  </section>
  <!--
╔══════════════════════════════════════╗
║      DESKRIPSI PENDEK DI AWAL       ║
╚══════════════════════════════════════╝
-->
  <section class="home-about-section container my-5" data-aos="fade-right">
    <div class="text-center mb-4">
      <h2 class="fw-bold text-uppercase">Makna Consulting</h2>
      <p class="text-muted">
        Solusi terpadu untuk meningkatkan kualitas SDM dan tata kelola organisasi
      </p>
    </div>
  </section>

  <!--
╔══════════════════════════════════════╗
║         CTA KE PAGE SERVICES        ║
╚══════════════════════════════════════╝
-->
  <section class="container px-4 py-5" id="custom-cards">
    <div class="text-center mb-5" data-aos="fade-left">
      <h2 class="fw-bold display-5">Our Services</h2>
      <p class="text-muted">Solusi profesional untuk kebutuhan bisnis Anda</p>
    </div>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4" data-aos="flip-left">
      <div class="col" v-for="(service, i) in highlightedServices" :key="i">
        <div
          class="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg service-card"
          :style="{
            backgroundImage: `
          linear-gradient(
          rgba(0,0,0,.45),
          rgba(0,0,0,.65)
          ),
          url(${service.image})
          `,
          }"
        >
          <div class="d-flex flex-column h-100 p-5 pb-3" data-aos="flip-left">
            <span v-if="service.category" class="badge bg-warning text-dark w-fit mb-3">
              {{ service.category }}
            </span>

            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              {{ service.title }}
            </h2>

            <p class="small text-light">
              {{ service.description }}
            </p>

            <div class="mt-auto d-flex justify-content-between align-items-center">
              <small v-if="service.duration">
                {{ service.duration }}
              </small>

              <router-link to="/services" class="btn btn-warning rounded-pill px-4">
                Detail
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--
╔══════════════════════════════════════╗
║       CTA KE PAGE PORTOFOLIO        ║
╚══════════════════════════════════════╝
-->
  <section class="portfolio-cta py-5">
    <div class="container">
      <div
        class="row align-items-center bg-light rounded-4 overflow-hidden shadow-sm"
        data-aos="fade-right"
      >
        <!-- Bagian Foto -->
        <div class="col-md-6 p-0">
          <img
            src="https://placehold.co/1600x800"
            alt="Our Works"
            class="img-fluid w-100 h-100"
            style="object-fit: cover; min-height: 300px"
          />
        </div>

        <!-- Bagian Deskripsi -->
        <div class="col-md-6 p-5" data-aos="fade-left">
          <h2 class="fw-bold mb-3">Hasil Karya Kami</h2>
          <p class="text-muted mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio magnam quo rerum
            assumenda porro minima necessitatibus beatae perferendis minus odit earum perspiciatis
            placeat aliquid, saepe ullam consequuntur qui tenetur in?
          </p>

          <!-- Tombol Arahkan ke PortofolioView.vue -->
          <router-link to="/portofolio" class="btn btn-warning btn-lg px-4 shadow-sm">
            Lihat Portofolio <i class="bi bi-arrow-right ms-2"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <!--
╔══════════════════════════════════════╗
║              TRUSTED BY              ║
╚══════════════════════════════════════╝
-->
  <section class="home-trusted-section container py-4 bg-white" data-aos="flip-up">
    <p class="text-center fw-semibold">Dipercaya oleh:</p>
    <div class="marquee-wrapper" data-aos="flip-down">
      <div class="marquee-track">
        <div
          v-for="(img, i) in loopImages"
          :key="i"
          class="marquee-item"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          :title="img.name"
        >
          <img :src="img.src" :alt="img.name" />
        </div>
      </div>
    </div>
  </section>

  <section class="home-why-section bg-light py-5">
    <div class="container text-center">
      <h2 class="fw-bold mb-3">Kenapa Makna Consulting?</h2>

      <div class="row g-4 mt-3" data-aos="flip-up">
        <div class="col-md-4" v-for="(item, index) in whyItems" :key="index">
          <router-link :to="item.link" class="text-decoration-none">
            <div class="p-4 bg-white shadow rounded h-100 why- ard">
              <i :class="['bi', item.icon, 'fs-1', 'mb-3', 'text-warning']"></i>
              <h5 class="text-dark">{{ item.title }}</h5>
              <p class="text-muted">{{ item.desc }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-carousel {
  height: 70vh;
  min-height: 400px;
}

/* setiap slide full tinggi */
.carousel-item,
.hero-bg {
  height: 70vh;
  min-height: 400px;
}

/* background image */
.hero-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

/* overlay biar teks kebaca */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

/* content */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero-carousel,
  .carousel-item,
  .hero-bg {
    height: auto;
    min-height: auto;
  }

  .hero-bg {
    padding: 80px 20px;
  }

  .hero-content {
    text-align: center;
    margin: auto;
  }
}
/* NAV */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 50%;
  z-index: 2;
}

.nav.left {
  left: 20px;
}
.nav.right {
  right: 20px;
}

/* DOT */
.dots {
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 2;
}

.dots span {
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.dots span.active {
  background: white;
}

/* MARQUEE */
.marquee-wrapper {
  overflow: hidden;
  padding: 14px 0; /* ruang atas bawah */
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
  gap: 16px;
  align-items: center;
}

.marquee-item {
  flex: 0 0 auto;
  padding: 0;
}

/* pause saat hover */
.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-item {
  flex: 0 0 auto;
  position: relative;

  height: 45px; /* penting: lebih besar dari img */
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;
}

.marquee-item:hover {
  transform: scale(1.2);
  z-index: 10;
}

.marquee-item img {
  max-height: 50px;
  width: auto;
  object-fit: contain;
  display: block;
}

.marquee-item:hover img {
  transform: scale(1.2);
  z-index: 10;
}

/* KEYFRAME FIX */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.wave-container {
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave-svg {
  display: block;
  width: 100%;
  height: auto;
}

.service-card {
  background-size: cover;
  background-position: center;
  transition: 0.35s ease;
  min-height: 420px;
}

.service-card:hover {
  transform: translateY(-10px) scale(1.02);
}

.w-fit {
  width: fit-content;
}

.ls-wide {
  font-size: 0.85rem;
}
img {
  transition: all 0.4s ease;
}
img:hover {
  transform: scale(1.02);
}
/* Menghilangkan margin negatif di mobile agar tidak overlap */
@media (max-width: 991px) {
  .ms-n2 {
    margin-left: 0 !important;
  }
}
</style>
