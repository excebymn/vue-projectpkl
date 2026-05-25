<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { Tooltip } from 'bootstrap'
import { images } from '@/data/home/TooltipData.js'
import { highlightedServices } from '@/data/services/ServiceData'
import WaveOne from '@/data/home/wave1.vue'

/*
|--------------------------------------------------------------------------
| Home View
|--------------------------------------------------------------------------
| Main landing page for Makna Consulting.
|
| Sections included:
| - Hero slider
| - About introduction
| - Services preview
| - Portfolio CTA
| - Trusted by section
| - Why choose us section
|
| Features:
| - Auto hero slider
| - Bootstrap tooltip integration
| - Infinite marquee logo animation
| - AOS animation support
|--------------------------------------------------------------------------
*/

/* ==========================================================================
   HERO SLIDER DATA
   ========================================================================== */

/*
|--------------------------------------------------------------------------
| Hero slides data
|--------------------------------------------------------------------------
| Each object contains:
| - image : background image URL
| - title : headline text
| - desc  : short description
|--------------------------------------------------------------------------
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
| Current active slide index
|--------------------------------------------------------------------------
*/
const currentSlide = ref(0)

/*
|--------------------------------------------------------------------------
| Slider interval reference
|--------------------------------------------------------------------------
*/
let interval = null

/*
|--------------------------------------------------------------------------
| Move to next slide
|--------------------------------------------------------------------------
*/
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
}

/* ==========================================================================
   COMPONENT LIFECYCLE
   ========================================================================== */

/*
|--------------------------------------------------------------------------
| onMounted
|--------------------------------------------------------------------------
| - Start auto slider
| - Initialize Bootstrap tooltips
|--------------------------------------------------------------------------
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
| onUnmounted
|--------------------------------------------------------------------------
| Clear interval to prevent memory leak
|--------------------------------------------------------------------------
*/
onUnmounted(() => {
  clearInterval(interval)
})

/* ==========================================================================
   TRUSTED LOGO MARQUEE
   ========================================================================== */

/*
|--------------------------------------------------------------------------
| Original logo list
|--------------------------------------------------------------------------
*/
const imageList = ref(images)

/*
|--------------------------------------------------------------------------
| Duplicate images for seamless infinite scrolling
|--------------------------------------------------------------------------
*/
const loopImages = computed(() => [...imageList.value, ...imageList.value])

/* ==========================================================================
   WHY CHOOSE US SECTION
   ========================================================================== */

/*
|--------------------------------------------------------------------------
| Feature highlight cards
|--------------------------------------------------------------------------
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
| Reference for target section
|--------------------------------------------------------------------------
*/
const targetSection = ref(null)

/*
|--------------------------------------------------------------------------
| Auto scroll to target section after component rendered
|--------------------------------------------------------------------------
*/
onMounted(async () => {
  await nextTick()

  targetSection.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
})
</script>

<template>
  <!-- =========================================================
       HERO & SVG WAVE SECTION
       ========================================================= -->
  <section ref="targetSection">
    <WaveOne />
  </section>

  <!-- =========================================================
       ABOUT INTRO SECTION
       ========================================================= -->
  <section class="home-about-section container my-5" data-aos="fade-right" data-aos-once="false">
    <div class="text-center mb-4">
      <!-- Section Title -->
      <h2 class="fw-bold text-uppercase">Makna Consulting</h2>

      <!-- Short Description -->
      <p class="text-muted">
        Solusi terpadu untuk meningkatkan kualitas SDM dan tata kelola organisasi
      </p>
    </div>
  </section>

  <!-- =========================================================
       SERVICES SECTION
       ========================================================= -->
  <section class="container px-4 py-5" id="custom-cards">
    <!-- Section Heading -->
    <div class="text-center mb-5" data-aos="fade-left" data-aos-once="false">
      <h2 class="fw-bold display-5">Our Services</h2>

      <p class="text-muted">Solusi profesional untuk kebutuhan bisnis Anda</p>
    </div>

    <!-- Services Grid -->
    <div
      class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4"
      data-aos="flip-left"
      data-aos-once="false"
      data-aos-duration="600"
    >
      <div class="col" v-for="(service, i) in highlightedServices" :key="i">
        <!-- Service Card -->
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
          <div class="d-flex flex-column h-100 p-5 pb-3" data-aos="flip-left" data-aos-once="false">
            <!-- Category Badge -->
            <span v-if="service.category" class="badge bg-warning text-dark w-fit mb-3">
              {{ service.category }}
            </span>

            <!-- Service Title -->
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              {{ service.title }}
            </h2>

            <!-- Service Description -->
            <p class="small text-light">
              {{ service.description }}
            </p>

            <!-- Footer -->
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <small v-if="service.duration">
                {{ service.duration }}
              </small>

              <!-- Detail Button -->
              <router-link to="/services" class="btn btn-warning rounded-pill px-4">
                Detail
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- =========================================================
       PORTFOLIO CTA SECTION
       ========================================================= -->
  <section class="portfolio-cta py-5">
    <div class="container">
      <div
        class="row align-items-center bg-light rounded-4 overflow-hidden shadow-sm"
        data-aos="fade-right"
        data-aos-once="false"
      >
        <!-- Portfolio Image -->
        <div class="col-md-6 p-0">
          <img
            src="https://placehold.co/1600x800"
            alt="Our Works"
            class="img-fluid w-100 h-100"
            style="object-fit: cover; min-height: 300px"
          />
        </div>

        <!-- Portfolio Description -->
        <div class="col-md-6 p-5" data-aos="fade-left" data-aos-once="false">
          <h2 class="fw-bold mb-3">Hasil Karya Kami</h2>

          <p class="text-muted mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio magnam quo rerum
            assumenda porro minima necessitatibus beatae perferendis minus odit earum perspiciatis
            placeat aliquid, saepe ullam consequuntur qui tenetur in?
          </p>

          <!-- Portfolio Button -->
          <router-link to="/portofolio" class="btn btn-warning btn-lg px-4 shadow-sm">
            Lihat Portofolio
            <i class="bi bi-arrow-right ms-2"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- =========================================================
       TRUSTED BY SECTION
       ========================================================= -->
  <section
    class="home-trusted-section container py-4 bg-white"
    data-aos="flip-up"
    data-aos-once="false"
  >
    <!-- Section Label -->
    <p class="text-center fw-semibold">Dipercaya oleh:</p>

    <!-- Logo Marquee -->
    <div class="marquee-wrapper" data-aos="flip-down" data-aos-once="false">
      <div class="marquee-track">
        <!-- Logo Item -->
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

  <!-- =========================================================
       WHY CHOOSE US SECTION
       ========================================================= -->
  <section class="home-why-section bg-light py-5">
    <div class="container text-center">
      <!-- Section Title -->
      <h2 class="fw-bold mb-3">Kenapa Makna Consulting?</h2>

      <!-- Why Cards -->
      <div class="row g-4 mt-3" data-aos="flip-up" data-aos-once="false">
        <div class="col-md-4" v-for="(item, index) in whyItems" :key="index">
          <router-link :to="item.link" class="text-decoration-none">
            <div class="p-4 bg-white shadow rounded h-100 why-card">
              <!-- Icon -->
              <i :class="['bi', item.icon, 'fs-1', 'mb-3', 'text-warning']"></i>

              <!-- Title -->
              <h5 class="text-dark">
                {{ item.title }}
              </h5>

              <!-- Description -->
              <p class="text-muted">
                {{ item.desc }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   HERO SECTION
   ========================================================= */

.hero-carousel {
  height: 70vh;
  min-height: 400px;
}

/* Full slide height */
.carousel-item,
.hero-bg {
  height: 70vh;
  min-height: 400px;
}

/* Hero background image */
.hero-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

/* Dark overlay for readability */
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

/* =========================================================
   HERO RESPONSIVE
   ========================================================= */

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

/* =========================================================
   HERO NAVIGATION BUTTONS
   ========================================================= */

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

/* =========================================================
   HERO DOT INDICATORS
   ========================================================= */

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

/* =========================================================
   MARQUEE SECTION
   ========================================================= */

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

/* Pause animation on hover */
.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

/* Logo item */
.marquee-item {
  flex: 0 0 auto;
  position: relative;

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

/* Logo image hover */
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

/* =========================================================
   WAVE SECTION
   ========================================================= */

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

/* =========================================================
   SERVICE CARDS
   ========================================================= */

.service-card {
  background-size: cover;
  background-position: center;
  transition: 0.35s ease;
  min-height: 420px;
}

/* Card hover effect */
.service-card:hover {
  transform: translateY(-10px) scale(1.02);
}

/* Utility width fit */
.w-fit {
  width: fit-content;
}

.ls-wide {
  font-size: 0.85rem;
}

/* =========================================================
   GLOBAL IMAGE EFFECT
   ========================================================= */

img {
  transition: all 0.4s ease;
}

img:hover {
  transform: scale(1.02);
}

/* =========================================================
   MOBILE FIX
   ========================================================= */

/* Remove negative margin on smaller screens */
@media (max-width: 991px) {
  .ms-n2 {
    margin-left: 0 !important;
  }
}
</style>
