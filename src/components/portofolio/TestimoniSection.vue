<script setup>
import { testimoni } from '@/data/portofolio/TestimoniData.js'
const generateStars = (rating) => {
  return Math.round(rating)
}
</script>
<template>
          <!-- Testimonial panel -->

          <div class="container">
            <!-- Section heading -->
            <div class="text-center mb-5">
              <h2 class="fw-bold section-title">Client Testimonial</h2>
              <p class="section-subtitle">Beberapa pengalaman dan feedback dari client</p>
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
</template>
