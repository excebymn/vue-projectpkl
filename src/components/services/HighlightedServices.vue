<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Outbound
import outbound1 from '@/assets/services/highlighted/outbound/1.png'
import outbound2 from '@/assets/services/highlighted/outbound/2.png'
import outbound3 from '@/assets/services/highlighted/outbound/3.png'

// SDM
import sdm1 from '@/assets/services/highlighted/sdm/1.png'
import sdm2 from '@/assets/services/highlighted/sdm/2.png'
import sdm3 from '@/assets/services/highlighted/sdm/3.png'
import sdm4 from '@/assets/services/highlighted/sdm/4.png'
import sdm5 from '@/assets/services/highlighted/sdm/5.png'

// Pemerintahan
import pemerintahan1 from '@/assets/services/highlighted/pemerintahan/1.png'
import pemerintahan2 from '@/assets/services/highlighted/pemerintahan/2.png'
import pemerintahan3 from '@/assets/services/highlighted/pemerintahan/3.png'
import pemerintahan4 from '@/assets/services/highlighted/pemerintahan/4.png'
import pemerintahan5 from '@/assets/services/highlighted/pemerintahan/5.png'

const imageIndex = ref(0)
let interval = null

const outboundImages = [outbound1, outbound2, outbound3]

const sdmImages = [sdm1, sdm2, sdm3, sdm4, sdm5]

const pemerintahanImages = [
  pemerintahan1,
  pemerintahan2,
  pemerintahan3,
  pemerintahan4,
  pemerintahan5,
]

const services = computed(() => [
  {
    title: 'Outbound Training',
    description: 'Program team building dan aktivitas outdoor profesional',
    image: outboundImages[imageIndex.value % outboundImages.length],
    category: 'Popular',
    duration: '2-3 hari',
  },
  {
    title: 'Pengembangan SDM',
    description: 'Pelatihan peningkatan kompetensi SDM',
    image: sdmImages[imageIndex.value % sdmImages.length],
    category: 'Training',
    duration: '1 minggu',
  },
  {
    title: 'Manajemen Pemerintahan',
    description: 'Pendampingan SOP dan reformasi birokrasi',
    image: pemerintahanImages[imageIndex.value % pemerintahanImages.length],
    category: 'Consulting',
    duration: 'Custom',
  },
])

onMounted(() => {
  interval = setInterval(() => {
    imageIndex.value++
  }, 2000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section class="container px-4 py-5" id="custom-cards">
    <div class="text-center mb-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="false">
      <h2 class="fw-bold display-5">Layanan Kami</h2>
      <p class="text-muted">Solusi profesional untuk kebutuhan bisnis Anda</p>
    </div>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
      <div
        class="col"
        v-for="(service, i) in services"
        :key="i"
        data-aos="flip-left"
        data-aos-duration="700"
        data-aos-once="false"
      >
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
          <div class="d-flex flex-column h-100 p-5 pb-3">
            <span
              v-if="service.category"
              class="badge bg-warning text-dark w-fit mb-3"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="100"
            >
              {{ service.category }}
            </span>

            <h2
              class="pt-5 mt-5 mb-4 display-7 lh-1 fw-bold"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              {{ service.title }}
            </h2>

            <p
              class="small text-light"
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-delay="100"
            >
              {{ service.description }}
            </p>

            <div
              class="mt-auto d-flex justify-content-between align-items-center"
            >
              <small v-if="service.duration">
                {{ service.duration }}
              </small>

              <router-link
                to="/services"
                class="btn btn-warning rounded-pill px-4"
              >
                Detail
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

img {
  transition: all 0.4s ease;
}

img:hover {
  transform: scale(1.02);
}
</style>
