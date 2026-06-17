<script setup>
// Services page component: manages featured services, searchable service list, and highlight rendering.
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { allServices } from '@/data/services/ServiceData'
import HighlightedServices from '@/components/services/HighlightedServices.vue'

import img1 from '@/assets/services/hero/1.png'
import img2 from '@/assets/services/hero/2.png'
import img3 from '@/assets/services/hero/3.png'
const images = [img1, img2, img3]
const currentImage = ref(0)
let interval = null
onMounted(() => {
  interval = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.length
  }, 2000)
})
onUnmounted(() => {
  clearInterval(interval)
})

const search = ref('')
const filteredServices = computed(() => {
  if (!search.value) return allServices

  return allServices.filter((service) =>
    (service.title + ' ' + service.description).toLowerCase().includes(search.value.toLowerCase()),
  )
})

const highlightText = (text) => {
  if (!search.value) return text

  const regex = new RegExp(`(${search.value})`, 'gi')

  return text.replace(regex, `<mark>$1</mark>`)
}

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
  <div class="service-page">
    <!-- Hero section with background image and overlay -->
    <section class="position-relative vh-100 overflow-hidden" data-aos="zoom-in">
      <!-- Background image layer -->
      <img
        :key="currentImage"
        :src="images[currentImage]"
        alt="Hero Background"
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      <!-- Dark overlay for contrast -->
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      <!-- Hero content centered in the viewport -->
      <div
        class="container position-absolute top-50 start-50 translate-middle text-center text-white"
      >
        <span class="badge bg-warning text-dark px-3 py-2 mb-3"> Makna Consulting </span>

        <h1 class="display-3 fw-bold mb-4" ref="targetSection">Layanan Kami</h1>

        <p class="lead col-lg-8 mx-auto text-light">
          "Kami menyediakan berbagai layanan konsultasi strategis dan solusi bisnis terintegrasi
          yang dirancang khusus untuk mendorong pertumbuhan serta efisiensi operasional organisasi
          Anda."
        </p>
      </div>
    </section>

    <HighlightedServices />

    <!-- Search input section -->
    <section class="container" data-aos="flip-right">
      <div class="search-wrapper">
        <i class="bi bi-search"></i>

        <input v-model="search" class="form-control bg-cream" placeholder="Cari layanan..." />
      </div>
    </section>

    <!-- All services listing section -->
    <section class="container py-5 allServices">
      <div class="d-flex justify-content-between mb-4" data-aos="zoom-in-up">
        <h2 class="fw-bold">Semua Layanan</h2>

        <span class="badge bg-dark text-light">
          {{ filteredServices.length }}
        </span>
      </div>

      <div class="row g-4">
        <div
          class="col-md-6 col-lg-4"
          v-for="(service, i) in filteredServices"
          :key="i"
          data-aos="zoom-in-up"
        >
          <div class="card h-100 service-card bg-cream border-0">
            <div class="card-body">
              <h5 class="fw-bold" v-html="highlightText(service.title)" />

              <p class="text-muted" v-html="highlightText(service.description)" />
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredServices.length === 0" class="text-center py-5">
        <h5>No results found</h5>

        <p class="text-muted">Try a different search term</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.service-page {
  background-color: #ffd01f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FFC107'/%3E%3Cstop offset='1' stop-color='%23FFD01F'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23ffc913'/%3E%3Cstop offset='1' stop-color='%23FFD01F'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

.service-hero-section {
  background: linear-gradient(135deg, #fff, #fff7db);
}

.highlight-card {
  overflow: hidden;
  border-radius: 25px;
  transition: 0.3s;
}

.highlight-card img {
  height: 220px;
  object-fit: cover;
}

.highlight-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.search-wrapper {
  position: relative;
  max-width: 700px;
  margin: auto;
}

.search-wrapper i {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.search-wrapper input {
  padding-left: 50px;
  height: 55px;
  border-radius: 50px;
  border: none;
  background: #f5f5f5;
}

.search-wrapper input:focus {
  box-shadow: none;
  background: white;
  border: 1px solid #ffc107;
}

.service-card {
  border-radius: 20px;
  transition: 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
}

:deep(mark) {
  background: #ffe96e;
  padding: 2px 4px;
  border-radius: 6px;
}
</style>
