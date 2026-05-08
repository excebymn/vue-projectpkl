<script setup>
// =========================
// IMPORT
// =========================
import { ref } from 'vue'

// =========================
// DATA TEAM
// =========================
const team = ref([
  {
    name: 'bima',
    role: 'Leader',
    photo: '/images/Content/test.jpg',
    links: [
      { name: 'Instagram', url: '#' },
      { name: 'GitHub', url: '#' },
      { name: 'Portfolio', url: '#' },
    ],
  },
  {
    name: 'abid',
    role: 'Enginer',
    photo: '/images/Content/test.jpg',
    links: [
      { name: 'Instagram', url: '#' },
      { name: 'GitHub', url: '#' },
    ],
  },
  {
    name: 'syifa',
    role: 'Designer',
    photo: '/images/Content/test.jpg',
    links: [
      { name: 'Instagram', url: '#' },
      { name: 'Dribbble', url: '#' },
    ],
  },
])

// =========================
// STATE
// =========================
const activeIndex = ref(null)

// =========================
// METHODS
// =========================
const toggle = (i) => {
  activeIndex.value = activeIndex.value === i ? null : i
}
</script>

<template>

  <!-- ========================= -->
  <!-- HEADER SECTION -->
  <!-- ========================= -->
  <section class="developer-header-section py-5 text-center text-white" style="background: #ffc107">
    <div class="container">
      <h1 class="fw-bold text-dark">Tim Pengembang</h1>
      <p class="text-dark">Orang-orang di balik website ini</p>
    </div>
  </section>


  <!-- ========================= -->
  <!-- ABOUT TEAM SECTION -->
  <!-- ========================= -->
  <section class="developer-about-section container py-5 text-center">
    <h2 class="fw-bold mb-3">Tentang Tim</h2>
    <p class="text-muted mx-auto" style="max-width: 700px">
      Tim ini terdiri dari siswa PKL SMK Negeri Mojoagung yang terlibat dalam proses perancangan dan
      pengembangan website ini. Bagi kami, proyek ini bukan hanya sekadar tugas, tetapi juga
      pengalaman berharga untuk belajar, berkolaborasi, dan menciptakan sesuatu yang dapat
      memberikan manfaat nyata.
    </p>
  </section>


  <!-- ========================= -->
  <!-- TEAM LIST SECTION -->
  <!-- ========================= -->
  <section class="developer-team-section container py-5">

    <div v-for="(member, i) in team" :key="i" class="mb-4">

      <!-- CARD MEMBER -->
      <div class="card shadow-sm border-0 p-3 team-card" @click="toggle(i)">

        <div class="d-flex align-items-center gap-3">

          <!-- PHOTO -->
          <img
            :src="member.photo"
            class="rounded-circle"
            style="width: 70px; height: 70px; object-fit: cover"
          />

          <!-- INFO -->
          <div>
            <h5 class="fw-bold mb-1">{{ member.name }}</h5>
            <p class="text-muted small mb-0">{{ member.role }}</p>
          </div>

        </div>

        <!-- EXPAND DETAIL -->
        <div v-if="activeIndex === i" class="mt-3">
          <hr />

          <!-- SOCIAL LINKS -->
          <div class="d-flex flex-wrap gap-2">
            <a
              v-for="(link, j) in member.links"
              :key="j"
              :href="link.url"
              target="_blank"
              class="btn btn-outline-warning btn-sm"
            >
              {{ link.name }}
            </a>
          </div>

        </div>

      </div>

    </div>

  </section>


  <!-- ========================= -->
  <!-- CTA SECTION -->
  <!-- ========================= -->
  <section class="developer-cta-section py-5 text-center bg-light">
    <div class="container">
      <h2 class="fw-bold mb-3">
        Tertarik untuk mengenal lebih jauh?
      </h2>

      <p class="text-muted">
        Kamu bisa langsung menghubungi kami melalui kontak yang tersedia di atas
      </p>
    </div>
  </section>

</template>

<style scoped>
/* ========================= */
/* TEAM CARD */
/* ========================= */
.team-card {
  cursor: pointer;
  transition: 0.3s;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
