<script setup>
// Services page component: manages featured services, searchable service list, and highlight rendering.
import { ref, computed } from 'vue'
import { highlightedServices, allServices } from '@/data/services/ServiceData'

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
</script>

<template>
  <div class="service-page">
    <!-- Hero section with background image and overlay -->
    <section class="position-relative vh-100 overflow-hidden" data-aos="zoom-in">
      <!-- Background image layer -->
      <img
        src="https://placehold.co/1600x900"
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

        <h1 class="display-3 fw-bold mb-4">Layanan Kami</h1>

        <p class="lead col-lg-8 mx-auto text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, impedit.
        </p>
      </div>
    </section>

    <!-- Featured services section -->
    <section class="container py-5" data-aos="slide-up">
      <div class="d-flex justify-content-between align-items-center mb-4" data-aos="flip-left">
        <div>
          <h2 class="fw-bold">Layanan Unggulan</h2>

          <p class="text-muted mb-0">Layanan yang paling banyak dipilih</p>
        </div>
      </div>

      <div class="row g-4" data-aos="flip-right">
        <div class="col-lg-4" v-for="(service, i) in highlightedServices" :key="i">
          <div class="card border-0 h-100 highlight-card">
            <img :src="service.image" class="card-img-top" />

            <div class="card-body">
              <h5 class="fw-bold">
                {{ service.title }}
              </h5>

              <p class="text-muted">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Search input section -->
    <section class="container" data-aos="flip-right">
      <div class="search-wrapper">
        <i class="bi bi-search"></i>

        <input v-model="search" class="form-control" placeholder="Cari layanan..." />
      </div>
    </section>

    <!-- All services listing section -->
    <section class="container py-5">
      <div class="d-flex justify-content-between mb-4" data-aos="zoom-in-up">
        <h2 class="fw-bold">Semua Layanan</h2>

        <span class="badge bg-warning text-dark">
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
          <div class="card h-100 service-card border-0">
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
  background: #fff;
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
