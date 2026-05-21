<script setup>
import { contactData } from '@/data/contact/ContactData'
</script>

<template>
  <!-- ========================
       HERO SECTION
  ========================= -->

  <!-- Fullscreen hero section with background image -->
  <section class="position-relative vh-100 overflow-hidden" data-aos="zoom-in">
    <!-- Background image -->
    <img
      src="https://placehold.co/1600x900"
      alt="Hero Background"
      class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
    />

    <!-- Dark overlay for better text readability -->
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

    <!-- Hero content -->
    <div
      class="container position-absolute top-50 start-50 translate-middle text-center text-white"
    >
      <!-- Brand badge -->
      <span class="badge bg-warning text-dark px-3 py-2 mb-3"> Makna Consulting </span>

      <!-- Main hero title -->
      <h1 class="display-3 fw-bold mb-4">Hubungi Kami</h1>

      <!-- Hero description -->
      <p class="lead col-lg-8 mx-auto text-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, impedit.
      </p>
    </div>
  </section>

  <!-- ========================
       CONTACT SECTION
  ========================= -->

  <section class="py-5 bg-body">
    <div class="container">
      <!-- Section heading -->
      <div class="text-center mb-5" data-aos="slide-up">
        <h1 class="display-5 fw-bold text-body-emphasis" data-aos="flip-right">Hubungi Kami</h1>

        <p class="text-secondary col-lg-6 mx-auto" data-aos="flip-left">
          Pilih platform favoritmu dan hubungi kami
        </p>
      </div>

      <!-- Contact cards grid -->
      <div class="row g-4 justify-content-center" data-aos="slide-up">
        <!-- Loop through all contact items -->
        <div
          v-for="item in contactData"
          :key="item.title"
          class="col-md-6 col-lg-3"
          data-aos="flip-right"
        >
          <!-- Clickable contact card -->
          <a :href="item.link" target="_blank" class="text-decoration-none text-reset">
            <!-- Contact card -->
            <div class="card h-100 border-0 shadow-sm text-center p-4 contact-card">
              <!-- Contact platform icon -->
              <div class="contact-icon mx-auto" :class="[item.iconBg, item.iconColor]">
                <i :class="['bi', item.icon]"></i>
              </div>

              <!-- Platform title -->
              <h5 class="fw-bold">
                {{ item.title }}
              </h5>

              <!-- Platform description -->
              <p class="text-secondary mb-3">
                {{ item.description }}
              </p>

              <!-- Username or contact label -->
              <span class="badge text-bg-light border">
                {{ item.username }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========================
   CONTACT CARD
======================== */

/* Main contact card styling */
.contact-card {
  transition: 0.3s;
  border-radius: 1.3rem;
}

/* Hover animation effect */
.contact-card:hover {
  transform: translateY(-8px);
}

/* ========================
   CONTACT ICON
======================== */

/* Circular icon container */
.contact-icon {
  width: 75px;
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;

  border-radius: 50%;

  margin-bottom: 20px;
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
</style>
