```vue
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Tooltip } from 'bootstrap'
import { images } from '@/data/home/TooltipData.js'

const router = useRouter()

const imageList = ref(images)

const loopImages = computed(() => [
  ...imageList.value,
  ...imageList.value,
])

onMounted(() => {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
    new Tooltip(el)
  })
})

const goToClient = (name) => {
  router.push({
    path: '/portofolio',
    query: {
      tab: 'client',
      search: name,
    },
  })
}
</script>

<template>
  <section
    class="home-trusted-section container my-5"
    data-aos="flip-up"
    data-aos-once="false"
  >
    <div class="trusted-card">
      <div class="text-center mb-5">
        <h2 class="fw-bold mb-2">Telah dipercaya</h2>
        <p class="mb-0">
          Berbagai perusahaan, instansi, dan organisasi telah mempercayai layanan kami.
        </p>
      </div>

      <div
        class="marquee-wrapper"
        data-aos="flip-down"
        data-aos-once="false"
      >
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
            <img
              :src="img.src"
              :alt="img.name"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-trusted-section {
  padding: 0;
}

.trusted-card {
  background: var(--brand-yellow);
  border-radius: 24px;
  padding: 3rem 2rem;
  overflow: hidden;
}

.trusted-card h2 {
  color: #212529;
}

.trusted-card p {
  color: rgba(33, 37, 41, 0.75);
}

.marquee-wrapper {
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
}

.marquee-wrapper::before,
.marquee-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  width: 120px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(
    to right,
    var(--brand-yellow),
    transparent
  );
}

.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(
    to left,
    var(--brand-yellow),
    transparent
  );
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 2rem;
  align-items: center;
  animation: marquee 25s linear infinite;
}

.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-item {
  flex: 0 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.marquee-item img {
  max-height: 70px;
  width: auto;
  object-fit: contain;
  transition: all 0.35s ease;
}

.marquee-item:hover img {
  transform: scale(1.15);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
```
