<template>
  <div class="testimonial-section py-5" data-aos="slide-up" data-aos-once="false">
    <div class="container">
      <!-- Section heading -->
      <div class="text-center mb-5">
        <h2 class="client-title fw-bold">Testimoni dan Pengalaman Client</h2>
        <p class="client-subtitle">
          Cerita, kesan, dan pengalaman dari client yang telah bekerja sama dengan kami.
        </p>
      </div>

      <!-- Testimonials grid -->
      <div class="row g-4">
        <div
          v-for="item in testimoni"
          :key="item.id"
          class="col-12 col-md-6 col-xl-4"
          data-aos="flip-right"
          data-aos-once="false"
        >
          <div class="testimonial-card h-100">
            <!-- Card header -->
            <div
              class="d-flex align-items-center mb-3"
              :class="item.gambar ? '' : 'justify-content-between'"
            >
              <!-- Client image -->
              <img
                v-if="item.gambar"
                :src="item.gambar"
                :alt="item.nama"
                class="testimonial-image"
              />

              <!-- Client name and date -->
              <div class="ms-3 flex-grow-1">
                <h5 class="mb-1 fw-semibold">
                  {{ item.nama }}
                </h5>

                <small class="testimonial-date">
                  {{ item.tanggal }}
                </small>
              </div>
            </div>

            <!-- Rating display -->
            <div class="d-flex align-items-center mb-3">
              <div class="stars me-2">
                <span v-for="star in generateStars(item.rating)" :key="star"> ⭐ </span>
              </div>

              <span class="rating-number">
                {{ item.rating }}
              </span>
            </div>

            <!-- Testimonial text -->
            <p class="testimonial-desc text-dark mb-0">
              {{ item.deskripsi }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { testimoni } from '@/data/portofolio/TestimoniData.js'

const generateStars = (rating) => {
  return Math.round(rating)
}
</script>

<style scoped>
.testimonial-section {
  position: relative;
  overflow: hidden;
}

/* Title */
.section-title {
  font-size: 2.2rem;
}

.section-subtitle {
  color: #9ca3af;
  max-width: 600px;
  margin: auto;
}

/* Card */
.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 24px;

  padding: 1.5rem;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  min-height: 220px;
  max-height: 420px;

  overflow: hidden;
}

.testimonial-card:hover {
  transform: translateY(-8px);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  border-color: rgba(255, 255, 255, 0.18);
}

/* Image */
.testimonial-image {
  width: 58px;
  height: 58px;

  border-radius: 50%;

  object-fit: cover;

  flex-shrink: 0;

  border: 2px solid rgba(255, 255, 255, 0.1);
}

/* Date */
.testimonial-date {
  color: #9ca3af;
}

/* Rating */
.stars {
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.rating-number {
  font-weight: 600;
  color: #facc15;
}

/* Description */
.testimonial-desc {
  color: #d1d5db;

  line-height: 1.7;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  overflow: hidden;
}
</style>
