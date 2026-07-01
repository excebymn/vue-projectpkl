<script setup>
import { ref, computed, watch } from 'vue'
import { images } from '@/data/home/TooltipData.js'

const props = defineProps({
  initialSearch: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['go-to-project'])

const searchQuery = ref(props.initialSearch)

// Kalau parent mengirim search baru (misal klik logo lagi dari Home)
watch(
  () => props.initialSearch,
  (val) => {
    searchQuery.value = val
  }
)

const filteredImages = computed(() => {
  return images.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>
<template>
  <div class="client-section py-5" data-aos="slide-up" data-aos-once="false">
    <div class="container">
      <!-- Section heading -->
      <div class="text-center mb-5">
        <h2 class="client-title fw-bold">Dipercaya Berbagai Instansi & Perusahaan</h2>
        <p class="client-subtitle">
          Beberapa client dan partner yang pernah bekerja sama dengan kami.
        </p>
      </div>

      <!-- Client search input -->
      <div class="row justify-content-center mb-5">
        <div class="col-md-6">
          <div class="input-group shadow-sm">
            <span class="input-group-text bg-cream">
              <i class="bi bi-search bg-cream"></i>
            </span>

            <input
              v-model="searchQuery"
              type="text"
              class="form-control bg-cream"
              placeholder="Cari client atau instansi..."
            />
          </div>
        </div>
      </div>

      <!-- Client logo grid -->
      <div class="row g-4 justify-content-center">
        <div
          v-for="(item, index) in filteredImages"
          :key="index"
          class="col-6 col-sm-4 col-md-3 col-lg-2 bg-cream"
          data-aos="flip-right"
          data-aos-once="false"
        >
          <div class="client-card bg-cream" @click="emit('go-to-project', item.name)">
            <!-- Client logo -->
            <div class="client-logo-wrapper">
              <img :src="item.src" :alt="item.name" class="client-logo" />
            </div>

            <!-- Client name -->
            <p class="client-name mb-0">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.client-section {
  position: relative;
}

/* Heading */
.client-title {
  font-size: 2.2rem;
  color: #1f2937;
}

.client-subtitle {
  color: #6b7280;
  max-width: 650px;
  margin: auto;
}

/* Card */
.client-card {
  background: white;

  border-radius: 22px;

  padding: 1.4rem 1rem;

  border: 1px solid #e5e7eb;

  height: 100%;

  text-align: center;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  cursor: pointer;
}

.client-card:hover {
  transform: translateY(-6px);

  border-color: rgba(255, 193, 7, 0.4);

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

/* Logo */
.client-logo-wrapper {
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;
}

.client-logo {
  max-width: 100%;
  max-height: 70px;

  object-fit: contain;

  filter: grayscale(100%);

  opacity: 0.8;

  transition:
    filter 0.3s ease,
    opacity 0.3s ease,
    transform 0.3s ease;
}

.client-card:hover .client-logo {
  filter: grayscale(0%);

  opacity: 1;

  transform: scale(1.05);
}

/* Name */
.client-name {
  font-size: 0.9rem;

  color: #4b5563;

  line-height: 1.5;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;

  min-height: 65px;
}

/* Mobile */
@media (max-width: 576px) {
  .client-title {
    font-size: 1.8rem;
  }

  .client-card {
    padding: 1rem 0.8rem;
  }

  .client-logo-wrapper {
    height: 75px;
  }

  .client-logo {
    max-height: 55px;
  }
}

@media (max-width: 768px) {
  .client-logo {
    filter: grayscale(0%);
    opacity: 1;
  }

  .client-card:hover {
    transform: none;
  }
}
</style>
