<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import AboutData from '@/data/about/AboutData'

import img1 from '@/assets/services/hero/1.png'
import img2 from '@/assets/services/hero/2.png'
import img3 from '@/assets/services/hero/3.png'
const images = [img1, img2, img3]
const currentImage = ref(0)
let interval = null
onMounted(() => {
  interval = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.length
  }, 2000)
})
onUnmounted(() => {
  clearInterval(interval)
})

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
  <div>
    <!-- ========================
         HERO SECTION
    ========================= -->

    <!-- Fullscreen hero section with background image -->
    <section
      class="position-relative vh-100 overflow-hidden"
      data-aos="zoom-in"
      data-aos-once="false"
    >
      <!-- Background image -->
      <img
        :key="currentImage"
        :src="images[currentImage]"
        alt="Hero Background"
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      <!-- Dark overlay for better text readability -->
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      <!-- Hero content -->
      <div
        class="container position-absolute top-50 start-50 translate-middle text-center text-white"
      >
        <!-- Small brand badge -->
        <span class="badge bg-warning text-dark px-3 py-2 mb-3"> Makna Consulting </span>

        <!-- Main hero title -->
        <h1 class="display-3 fw-bold mb-4" ref="targetSection">Tentang Kami</h1>

        <!-- Hero description -->
        <p class="lead col-lg-8 mx-auto text-light">
          "Kami hadir sebagai lembaga konsultasi terpercaya yang memadukan keahlian tim profesional
          dan pendekatan berbasis data untuk mendukung pertumbuhan serta kesuksesan jangka panjang
          mitra kami."
        </p>
      </div>
    </section>

    <!-- ========================
         STORY SECTION
    ========================= -->

    <section class="py-5" data-aos="zoom-in-up" data-aos-once="false">
      <div class="container" data-aos="slide-up" data-aos-once="false">
        <!-- Loop through all story items -->
        <div
          v-for="(item, index) in AboutData.stories"
          :key="index"
          class="row align-items-center g-5 mb-5"
          :class="{ 'flex-row-reverse': item.reverse }"
          data-aos="flip-right"
          data-aos-once="false"
        >
          <!-- Story image -->
          <div class="col-lg-6" data-aos="flip-left" data-aos-once="false">
            <img :src="item.image" class="img-fluid rounded-4 shadow" />
          </div>

          <!-- Story content -->
          <div class="col-lg-6" data-aos="flip-right" data-aos-once="false">
            <!-- Story number -->
            <span class="text-warning fw-bold"> 0{{ index + 1 }} </span>

            <!-- Story title -->
            <h2 class="fw-bold mb-4" data-aos="flip-left" data-aos-once="false">
              {{ item.title }}
            </h2>

            <!-- Story description -->
            <p
              v-if="item.description"
              class="text-secondary"
              data-aos="flip-right"
              data-aos-once="false"
            >
              {{ item.description }}
            </p>

            <!-- Story values list -->
            <ul
              v-if="item.values"
              class="list-group list-group-flush"
              data-aos="flip-left"
              data-aos-once="false"
            >
              <li
                v-for="(value, i) in item.values"
                :key="i"
                class="list-group-item px-0 bg-cream"
                data-aos="flip-right"
                data-aos-once="false"
              >
                <!-- Check icon -->
                <i class="bi bi-check-circle-fill text-warning me-2"></i>

                {{ value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         SERVICES SECTION
    ========================= -->

    <section class="py-5 services">
      <div class="container" data-aos="slide-up" data-aos-once="false">
        <!-- Section heading -->
        <div class="text-center mb-5">
          <h2 class="fw-bold">
            {{ AboutData.services.title }}
          </h2>

          <p class="text-muted">Layanan unggulan Makna Consulting</p>
        </div>

        <!-- Services grid -->
        <div class="row g-4" data-aos="slide-down" data-aos-once="false">
          <!-- Loop through all services -->
          <div
            v-for="(service, index) in AboutData.services.items"
            :key="index"
            class="col-md-4"
            data-aos="flip-up"
            data-aos-once="false"
          >
            <!-- Service card -->
            <div class="card bg-cream h-100 border-0 shadow-sm p-4 text-center">
              <!-- Service icon -->
              <i :class="['bi', service.icon, 'display-4', 'text-warning']"></i>

              <!-- Service title -->
              <h4 class="mt-3">
                {{ service.title }}
              </h4>

              <!-- Service description -->
              <p class="text-muted">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         TEAM SECTION
    ========================= -->

    <section class="py-5">
      <div class="container">
        <!-- Team heading -->
        <div class="text-center mb-5">
          <h2 class="fw-bold">
            {{ AboutData.team.title }}
          </h2>
        </div>

        <!-- Team members grid -->
        <div class="row g-4" data-aos="flip-right" data-aos-once="false">
          <!-- Loop through team members -->
          <div v-for="(member, index) in AboutData.team.members" :key="index" class="col-md-4">
            <!-- Team member card -->
            <div class="card bg-cream border-0 shadow-sm text-center p-4">
              <!-- Member image -->
              <img
                :src="member.image"
                class="rounded-circle team-image mx-auto mb-3"
                data-aos="slide-left"
                data-aos-once="false"
              />

              <!-- Member name -->
              <h5 class="fw-bold" data-aos="slide-right" data-aos-once="false">
                {{ member.name }}
              </h5>

              <!-- Member position -->
              <p class="text-muted" data-aos="slide-left" data-aos-once="false">
                {{ member.position }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         CTA SECTION
    ========================= -->

    <section class="py-5 bg-cream">
      <div class="container">
        <div class="row align-items-center">
          <!-- CTA image -->
          <div class="col-lg-5">
            <img
              :src="AboutData.cta.image"
              class="img-fluid rounded-4 shadow"
              data-aos="flip-left"
              data-aos-once="false"
            />
          </div>

          <!-- CTA content -->
          <div class="col-lg-6 offset-lg-1">
            <!-- CTA badge -->
            <span class="text-warning fw-bold" data-aos="slide-left" data-aos-once="false">
              {{ AboutData.cta.badge }}
            </span>

            <!-- CTA title -->
            <h2 class="display-6 fw-bold my-4" data-aos="slide-left" data-aos-once="false">
              {{ AboutData.cta.title }}
            </h2>

            <!-- CTA description -->
            <p class="text-muted" data-aos="slide-left" data-aos-once="false">
              {{ AboutData.cta.description }}
            </p>

            <!-- CTA button -->
            <div class="pt-3">
              <router-link
                to="/contact"
                class="btn btn-warning px-4 rounded-pill"
                data-aos="flip-right"
                data-aos-once="false"
              >
                Hubungi Kami
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services{
  background-color: #ffc107;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
}

/* ========================
   HERO SECTION
======================== */

/* Hero section container */
.hero-section {
  min-height: 70vh;
  display: flex;
  align-items: center;
}

/* Hero background image */
.hero-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
}

/* Dark overlay on top of hero background */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

/* ========================
   TEAM SECTION
======================== */

/* Team member profile image */
.team-image {
  width: 130px;
  height: 130px;
  object-fit: cover;
}

/* ========================
   CARD COMPONENT
======================== */

/* Shared card styling */
.card {
  border-radius: 24px;
  transition: 0.3s;
}

/* Hover effect for cards */
.card:hover {
  transform: translateY(-6px);
}
</style>
