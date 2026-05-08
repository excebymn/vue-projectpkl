<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Tooltip } from 'bootstrap'
import { images } from '@/components/home/TooltipComponent'

const Hero2 = 'https://placehold.co/1600x800/orange/white'

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

const TestLogo = Hero2

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
</script>

<template>
  <!-- ========================= -->
  <!-- HERO Carousel-->
  <!-- ========================= -->
  <div id="myCarousel" class="carousel slide hero-carousel" data-bs-ride="carousel">
    <!-- INDICATORS -->
    <div class="carousel-indicators">
      <button
        v-for="(slide, i) in heroSlides"
        :key="i"
        type="button"
        data-bs-target="#myCarousel"
        :data-bs-slide-to="i"
        :class="{ active: i === 0 }"
      ></button>
    </div>

    <!-- SLIDES -->
    <div class="carousel-inner">
      <div
        v-for="(slide, i) in heroSlides"
        :key="i"
        class="carousel-item"
        :class="{ active: i === 0 }"
      >
        <!-- BACKGROUND IMAGE -->
        <div class="hero-bg" :style="{ backgroundImage: `url(${slide.image})` }">
          <div class="overlay"></div>

          <!-- CONTENT -->
          <div class="container h-100 d-flex align-items-center">
            <div class="hero-content text-white">
              <h1 class="fw-bold display-4">
                {{ slide.title }}
              </h1>

              <p class="lead">
                {{ slide.desc }}
              </p>

              <div class="d-flex gap-2">
                <router-link to="/services" class="btn btn-warning"> Pelajari Layanan </router-link>

                <router-link to="/contact" class="btn btn-outline-light">
                  Hubungi Kami
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTROL -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>

    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>

  <!-- ========================= -->
  <!-- SEMUA BAGIAN BAWAH TIDAK DIUBAH -->
  <!-- ========================= -->

  <section class="home-about-section container my-5">
    <div class="text-center mb-4">
      <h2 class="fw-bold text-uppercase">Makna Consulting</h2>
      <p class="text-muted">
        Solusi terpadu untuk meningkatkan kualitas SDM dan tata kelola organisasi
      </p>
    </div>
  </section>

  <section class="home-services-section container py-5">
    <h2 class="fw-bold mb-4 text-center">Services</h2>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="i in 3" :key="i">
        <div class="card h-100 shadow-sm">
          <img :src="TestLogo" class="card-img-top" style="height: 200px; object-fit: cover" />

          <div class="card-body d-flex flex-column">
            <h5 class="fw-bold">Service {{ i }}</h5>
            <p class="text-muted">Deskripsi singkat layanan untuk menarik user.</p>

            <router-link to="/services" class="btn btn-warning mt-auto"> Selengkapnya </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="home-why-section bg-light py-5">
    <div class="container text-center">
      <h2 class="fw-bold mb-3">Kenapa Makna Consulting?</h2>

      <div class="row g-4 mt-3">
        <div class="col-md-4" v-for="(item, index) in whyItems" :key="index">
          <router-link :to="item.link" class="text-decoration-none">
            <div class="p-4 bg-white shadow rounded h-100 why-card">
              <i :class="['bi', item.icon, 'fs-1', 'mb-3', 'text-warning']"></i>
              <h5 class="text-dark">{{ item.title }}</h5>
              <p class="text-muted">{{ item.desc }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="home-trusted-section container py-4 bg-white">
    <p class="text-center fw-semibold">Dipercaya oleh:</p>
    <div class="marquee-wrapper">
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
</style>
