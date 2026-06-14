<script setup>
import { ref, onMounted, onUnmounted} from 'vue'
import { useRoute } from 'vue-router'
import ClientSection from '@/components/portofolio/ClientSection.vue'
import PengalamanSection from '@/components/portofolio/PengalamanSection.vue'
import TestimoniSection from '@/components/portofolio/TestimoniSection.vue'
import StatistikSection from '@/components/portofolio/StatisticSection.vue'
import ReferensiSection from '@/components/portofolio/ReferenceSection.vue'


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
onMounted(() => {
  images.forEach(src => {
    const img = new Image()
    img.src = src
  })
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
</script>

<template>
  <!-- Hero section -->
  <section
    class="position-relative vh-100 overflow-hidden"
    data-aos="zoom-in"
    data-aos-once="false"
  >
    <Transition name="fade" mode="out-in">
      <img
        :key="currentImage"
        :src="images[currentImage]"
        alt="Hero Background"
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />
    </Transition>

    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

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

      <button
        class="tab-pill-btn"
        :class="{ active: activeTab === 'referensi' }"
        @click="activeTab = 'referensi'"
      >
        Referensi
      </button>
    </div>

    <!-- Content -->
    <div class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4">
        <TestimoniSection v-if="activeTab === 'testimoni'" />
        <PengalamanSection v-if="activeTab === 'pengalaman'" />
        <ClientSection v-if="activeTab === 'client'" @go-to-project="goToProject" />
        <StatistikSection v-if="activeTab === 'statistik'" />
        <ReferensiSection v-if="activeTab === 'referensi'" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
  background-color: #f8f9fa;
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
