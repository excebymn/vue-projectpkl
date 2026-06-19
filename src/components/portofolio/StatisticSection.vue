<template>
  <section class="py-5 bg-cream" data-aos="slide-up" data-aos-once="false">
    <div class="container">
      <!-- Section heading -->
      <div class="text-center mb-5">
        <h2 class="client-title fw-bold">Pencapaian dalam Angka</h2>
        <p class="client-subtitle">
          Gambaran rekam jejak, jangkauan layanan, dan hasil kerja berdasarkan data.
        </p>
      </div>

      <!-- Statistics cards grid -->
      <div class="row g-4">
        <div v-for="(item, index) in statistik" :key="index" class="col-12 col-sm-6 col-xl-3">
          <div class="card border shadow-sm h-100 statistik-card bg-cream">
            <div class="card-body text-center p-4">
              <!-- Metric icon -->
              <div
                class="d-inline-flex align-items-center justify-content-center rounded-4 bg-warning bg-opacity-10 text-warning statistik-icon mb-4"
              >
                <i :class="item.icon"></i>
              </div>

              <!-- Animated metric value -->
              <h2 class="fw-bold text-warning mb-3">
                {{ animatedNumbers[index] }}{{ item.suffix }}
              </h2>

              <!-- Metric title -->
              <h5 class="fw-semibold mb-3">
                {{ item.title }}
              </h5>

              <!-- Metric description -->
              <p class="text-body-secondary mb-0">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { statistik } from '@/data/portofolio/StatistikData.js'

const animatedNumbers = ref([])

const animateValue = (start, end, duration, index) => {
  let startTimestamp = null

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp

    const progress = Math.min((timestamp - startTimestamp) / duration, 1)

    animatedNumbers.value[index] = Math.floor(progress * (end - start) + start)

    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

onMounted(() => {
  animatedNumbers.value = statistik.map(() => 0)

  statistik.forEach((item, index) => {
    animateValue(0, item.value, 1800, index)
  })
})
</script>

<style scoped>
/* Style statistik belum ada pada style yang kamu kirim sebelumnya.
   Kalau ada CSS statistik di bagian bawah file asli,
   kirim nanti dan tinggal ditempel di sini. */
</style>
