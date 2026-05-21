<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Tooltip } from 'bootstrap'
import { images } from '@/data/home/TooltipData.js'

/*
|--------------------------------------------------------------------------
| Static Assets
|--------------------------------------------------------------------------
| Placeholder image used for service cards.
|
*/
const Hero2 = 'https://placehold.co/1600x800/orange/white'

/*
|--------------------------------------------------------------------------
| Hero Carousel Data
|--------------------------------------------------------------------------
| List of slides displayed inside the homepage carousel.
| Each slide contains:
| - image : background image
| - title : main heading
| - desc  : short description
|
*/
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

/*
|--------------------------------------------------------------------------
| Carousel State
|--------------------------------------------------------------------------
| currentSlide : stores active slide index
| interval     : autoplay interval reference
|
*/
const currentSlide = ref(0)
let interval = null

/*
|--------------------------------------------------------------------------
| Move To Next Slide
|--------------------------------------------------------------------------
| Automatically cycles through hero slides.
|
*/
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

/*
|--------------------------------------------------------------------------
| Lifecycle - Mounted
|--------------------------------------------------------------------------
| - Start autoplay carousel
| - Initialize Bootstrap tooltips
|
*/
onMounted(() => {
  interval = setInterval(nextSlide, 5000)

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

  tooltipTriggerList.forEach((el) => {
    new Tooltip(el)
  })
})

/*
|--------------------------------------------------------------------------
| Lifecycle - Unmounted
|--------------------------------------------------------------------------
| Clear interval to avoid memory leaks.
|
*/
onUnmounted(() => {
  clearInterval(interval)
})

/*
|--------------------------------------------------------------------------
| Trusted Client Logo Marquee
|--------------------------------------------------------------------------
| imageList  : original logo list
| loopImages : duplicated list for seamless infinite scrolling
|
*/
const imageList = ref(images)

const loopImages = computed(() => [...imageList.value, ...imageList.value])

/*
|--------------------------------------------------------------------------
| Service Placeholder Image
|--------------------------------------------------------------------------
|
*/
const TestLogo = Hero2

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
| Used for navigation and dynamic portfolio filtering.
|
*/
const router = useRouter()

/*
|--------------------------------------------------------------------------
| Navigate To Client Portfolio
|--------------------------------------------------------------------------
| Redirects user to portfolio page and automatically
| filters based on selected client name.
|
*/
const goToClient = (name) => {
  router.push({
    path: '/portofolio',
    query: {
      tab: 'client',
      search: name,
    },
  })
}

/*
|--------------------------------------------------------------------------
| Why Choose Us Section Data
|--------------------------------------------------------------------------
| Content displayed inside "Why Makna Consulting?" cards.
|
*/
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
  <!-- HERO Carousel -->
  <!-- ========================= -->
  <div id="myCarousel" class="carousel slide hero-carousel" data-bs-ride="carousel">
    <!-- Carousel Indicators -->
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

    <!-- Carousel Slides -->
    <div class="carousel-inner">
      <div
        v-for="(slide, i) in heroSlides"
        :key="i"
        class="carousel-item"
        :class="{ active: i === 0 }"
      >
        <!-- Background Image -->
        <div class="hero-bg" :style="{ backgroundImage: `url(${slide.image})` }">
          <!-- Dark Overlay -->
          <div class="overlay"></div>

          <!-- Hero Content -->
          <div class="container h-100 d-flex align-items-center">
            <div class="hero-content text-white">
              <h1 class="fw-bold display-4">
                {{ slide.title }}
              </h1>

              <p class="lead">
                {{ slide.desc }}
              </p>

              <!-- Hero Buttons -->
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

    <!-- Previous Button -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>

    <!-- Next Button -->
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
  <!-- ABOUT SECTION -->
  <!-- ========================= -->
  <section class="home-about-section container my-5">
    <div class="text-center mb-4">
      <h2 class="fw-bold text-uppercase">Makna Consulting</h2>

      <p class="text-muted">
        Solusi terpadu untuk meningkatkan kualitas SDM dan tata kelola organisasi
      </p>
    </div>
  </section>

  <!-- ========================= -->
  <!-- SERVICES SECTION -->
  <!-- ========================= -->
  <section class="home-services-section container py-5">
    <h2 class="fw-bold mb-4 text-center">Services</h2>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="i in 3" :key="i">
        <div class="card h-100 shadow-sm">
          <!-- Service Image -->
          <img :src="TestLogo" class="card-img-top" style="height: 200px; object-fit: cover" />

          <!-- Card Content -->
          <div class="card-body d-flex flex-column">
            <h5 class="fw-bold">Service {{ i }}</h5>

            <p class="text-muted">Deskripsi singkat layanan untuk menarik user.</p>

            <router-link to="/services" class="btn btn-warning mt-auto"> Selengkapnya </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================= -->
  <!-- WHY CHOOSE US -->
  <!-- ========================= -->
  <section class="home-why-section bg-light py-5">
    <div class="container text-center">
      <h2 class="fw-bold mb-3">Kenapa Makna Consulting?</h2>

      <div class="row g-4 mt-3">
        <div class="col-md-4" v-for="(item, index) in whyItems" :key="index">
          <router-link :to="item.link" class="text-decoration-none">
            <div class="p-4 bg-white shadow rounded h-100 why-card">
              <i :class="['bi', item.icon, 'fs-1', 'mb-3', 'text-warning']"></i>

              <h5 class="text-dark">
                {{ item.title }}
              </h5>

              <p class="text-muted">
                {{ item.desc }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================= -->
  <!-- TRUSTED CLIENTS -->
  <!-- ========================= -->
  <section class="home-trusted-section container py-4 bg-white">
    <p class="text-center fw-semibold">Dipercaya oleh:</p>

    <div class="marquee-wrapper">
      <div class="marquee-track">
        <div
          v-for="(img, i) in loopImages"
          :key="i"
          class="marquee-item"
          @click="goToClient(img.name)"
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
/* ========================================
   HERO CAROUSEL
======================================== */

.hero-carousel {
  height: 70vh;
  min-height: 400px;
}

/* Each carousel slide takes full hero height */
.carousel-item,
.hero-bg {
  height: 70vh;
  min-height: 400px;
}

/* Hero background image styling */
.hero-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

/* Dark overlay for better text readability */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

/* Hero text content */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

/* ========================================
   RESPONSIVE HERO
======================================== */

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

/* ========================================
   CUSTOM NAVIGATION BUTTONS
======================================== */

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

/* ========================================
   CUSTOM DOT INDICATORS
======================================== */

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

/* ========================================
   TRUSTED CLIENT MARQUEE
======================================== */

.marquee-wrapper {
  overflow: hidden;
  padding: 14px 0;
}

.marquee-track {
  display: flex;
  width: max-content;

  animation: marquee 25s linear infinite;

  gap: 16px;
  align-items: center;
}

/* Pause marquee animation on hover */
.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

/* Individual logo item */
.marquee-item {
  flex: 0 0 auto;
  position: relative;

  cursor: pointer;

  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;
}

/* Hover effect */
.marquee-item:hover {
  transform: scale(1.2);
  z-index: 10;
}

/* Logo image */
.marquee-item img {
  max-height: 50px;
  width: auto;

  object-fit: contain;
  display: block;
}

/* Additional hover scaling */
.marquee-item:hover img {
  transform: scale(1.2);
  z-index: 10;
}

/* Infinite marquee animation */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
