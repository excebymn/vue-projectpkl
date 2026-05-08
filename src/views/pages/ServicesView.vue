<script setup>
// =========================
// IMPORT
// =========================
import { ref } from 'vue'

// =========================
// DATA SERVICES (LOCAL STATE)
// =========================
const services = ref([
  {
    title: 'Outbound Training',
    desc: 'Team building, event organizer, dan tour',
    items: ['Team Building', 'Paintball', 'Rafting'],
  },
  {
    title: 'Pengembangan SDM',
    desc: 'Pelatihan soft skill dan kompetensi',
    items: ['Public Speaking', 'Service Excellence', 'ISO Training'],
  },
  {
    title: 'Manajemen Pemerintahan',
    desc: 'Konsultasi SOP, ISO, dan reformasi birokrasi',
    items: ['SOP & ISO', 'Survey IKM', 'Reformasi Birokrasi'],
  },
])
</script>

<template>
  <div class="service-page">
    <!-- ========================= -->
    <!-- HERO SECTION -->
    <!-- ========================= -->
    <section class="service-hero-section py-5">
      <div class="container text-center">
        <h1 class="fw-bold">Layanan Kami</h1>
        <p class="text-muted">Solusi profesional untuk pengembangan SDM dan organisasi</p>
      </div>
    </section>

    <!-- ========================= -->
    <!-- CATEGORY SECTION -->
    <!-- ========================= -->
    <section class="service-category-section container py-5">
      <div class="row g-4">
        <div class="col-md-4" v-for="(service, i) in services" :key="i">
          <div class="card service-card h-100 p-3">
            <h5 class="fw-bold">{{ service.title }}</h5>
            <p class="text-muted">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= -->
    <!-- DETAIL ZIGZAG SECTION -->
    <!-- ========================= -->
    <section class="service-detail-section py-5">
      <div class="container">
        <div
          class="row align-items-center mb-5"
          v-for="(service, i) in services"
          :key="'detail' + i"
        >
          <!-- IMAGE -->
          <div class="col-md-6" :class="{ 'order-md-2': i % 2 !== 0 }">
            <img src="https://placehold.co/500" class="img-fluid rounded" />
          </div>

          <!-- TEXT -->
          <div class="col-md-6">
            <h3 class="fw-bold">{{ service.title }}</h3>

            <ul>
              <li v-for="(item, j) in service.items" :key="j">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ========================= */
/* BASE PAGE */
/* ========================= */
.service-page {
  background: #ffffff;
}

/* ========================= */
/* HERO */
/* ========================= */
.service-hero-section {
  background: linear-gradient(to right, #fff, #fff8e1);
}

/* ========================= */
/* CARD */
/* ========================= */
.service-card {
  transition: 0.3s;
  border: none;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* ========================= */
/* DETAIL */
/* ========================= */
.service-detail-section {
  background: #f9f9f9;
}
</style>
