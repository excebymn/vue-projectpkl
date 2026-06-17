<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import ClientSection from '@/components/portofolio/ClientSection.vue'
import PengalamanSection from '@/components/portofolio/PengalamanSection.vue'
import TestimoniSection from '@/components/portofolio/TestimoniSection.vue'
import StatistikSection from '@/components/portofolio/StatisticSection.vue'
// import ReferensiSection from '@/components/portofolio/ReferenceSection.vue'

import img1 from '@/assets/portofolio/hero/1.png'
import img2 from '@/assets/portofolio/hero/2.png'
import img3 from '@/assets/portofolio/hero/3.png'
import img4 from '@/assets/portofolio/hero/4.png'
import img5 from '@/assets/portofolio/hero/5.png'

const images = [img1, img2, img3, img4, img5]

const currentImage = ref(0)

let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.length
  }, 3000) // ganti setiap 3 detik
})

onUnmounted(() => {
  clearInterval(interval)
})
const route = useRoute()

const activeTab = ref(route.query.tab || 'testimoni')

// ERROR NYA BIARIN WOY EMANG GITU YANG ClientName
const goToProject = (clientName) => {
  activeTab.value = 'pengalaman'

  setTimeout(() => {
    document.getElementById('projectAccordion')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, 100)
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
  <div class="background-wrapper">
    <!-- Hero section -->
    <section
      class="position-relative vh-100 overflow-hidden"
      data-aos="zoom-in"
      data-aos-once="false"
    >
      <img
        :key="currentImage"
        :src="images[currentImage]"
        alt="Hero Background"
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      <div
        class="container position-absolute top-50 start-50 translate-middle text-center text-white"
      >
        <span class="badge bg-warning text-dark px-3 py-2 mb-3"> Makna Consulting </span>

        <h1 class="display-3 fw-bold mb-4" ref="targetSection">Portofolio Kami</h1>

        <p class="lead col-lg-8 mx-auto text-light">
          "Kumpulan rekam jejak dan kisah sukses kami dalam membantu berbagai bisnis berkembang,
          bertransformasi, dan mencapai potensi maksimalnya melalui solusi konsultasi yang tepat
          sasaran."
        </p>
      </div>
    </section>

    <section class="container py-5">
      <div class="text-center mb-5" data-aos="flip-down" data-aos-once="false">
        <p class="text-secondary mb-2">Portofolio Perusahaan</p>

        <h2 class="fw-bold">Data & Riwayat Kerja</h2>
      </div>

      <!-- Navigation -->
      <div
        class="pill-tabs d-flex flex-wrap gap-2 justify-content-center mb-4"
        data-aos="slide-up"
        data-aos-once="false"
      >
        <button
          class="tab-pill-btn"
          :class="{ active: activeTab === 'testimoni' }"
          @click="activeTab = 'testimoni'"
        >
          Testimoni
        </button>

        <button
          class="tab-pill-btn"
          :class="{ active: activeTab === 'pengalaman' }"
          @click="activeTab = 'pengalaman'"
        >
          Pengalaman
        </button>

        <button
          class="tab-pill-btn"
          :class="{ active: activeTab === 'client' }"
          @click="activeTab = 'client'"
        >
          Client
        </button>

        <button
          class="tab-pill-btn"
          :class="{ active: activeTab === 'statistik' }"
          @click="activeTab = 'statistik'"
        >
          Statistik
        </button>

        <!--   <button
        class="tab-pill-btn"
        :class="{ active: activeTab === 'referensi' }"
        @click="activeTab = 'referensi'"
      >
        Referensi
      </button> -->
      </div>

      <!-- Content -->
      <div class="card border-0 shadow-sm rounded-4">
        <div class="card-body p-4 bg-cream">
          <TestimoniSection v-if="activeTab === 'testimoni'" />
          <PengalamanSection v-if="activeTab === 'pengalaman'" />
          <ClientSection v-if="activeTab === 'client'" @go-to-project="goToProject" />
          <StatistikSection v-if="activeTab === 'statistik'" />
          <!-- <ReferensiSection v-if="activeTab === 'referensi'" /> -->
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.background-wrapper {
  background-color: #ffd01f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FFC107'/%3E%3Cstop offset='1' stop-color='%23FFD01F'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23ffc913'/%3E%3Cstop offset='1' stop-color='%23FFD01F'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
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

.pill-tabs .tab-pill-btn:hover {
  background-color: #FFF4CC;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.pill-tabs .tab-pill-btn.active {
  background-color: #212529;
  color: #ffffff;
  border-color: #212529;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(33, 37, 41, 0.25);
}

.pill-tabs .tab-pill-btn:active {
  transform: scale(0.98);
  transition-duration: 0.1s;
}
</style>
