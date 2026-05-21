<script setup>
import AboutData from '@/data/about/AboutData'
</script>

<template>
  <div>
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
        <!-- Small brand badge -->
        <span class="badge bg-warning text-dark px-3 py-2 mb-3"> Makna Consulting </span>

        <!-- Main hero title -->
        <h1 class="display-3 fw-bold mb-4">Tentang Kami</h1>

        <!-- Hero description -->
        <p class="lead col-lg-8 mx-auto text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, impedit.
        </p>
      </div>
    </section>

    <!-- ========================
         STORY SECTION
    ========================= -->

    <section class="py-5" data-aos="zoom-in-up">
      <div class="container" data-aos="slide-up">
        <!-- Loop through all story items -->
        <div
          v-for="(item, index) in AboutData.stories"
          :key="index"
          class="row align-items-center g-5 mb-5"
          :class="{ 'flex-row-reverse': item.reverse }"
          data-aos="flip-right"
        >
          <!-- Story image -->
          <div class="col-lg-6" data-aos="flip-left">
            <img :src="item.image" class="img-fluid rounded-4 shadow" />
          </div>

          <!-- Story content -->
          <div class="col-lg-6" data-aos="flip-right">
            <!-- Story number -->
            <span class="text-warning fw-bold"> 0{{ index + 1 }} </span>

            <!-- Story title -->
            <h2 class="fw-bold mb-4" data-aos="flip-left">
              {{ item.title }}
            </h2>

            <!-- Story description -->
            <p v-if="item.description" class="text-secondary" data-aos="flip-right">
              {{ item.description }}
            </p>

            <!-- Story values list -->
            <ul v-if="item.values" class="list-group list-group-flush" data-aos="flip-left">
              <li
                v-for="(value, i) in item.values"
                :key="i"
                class="list-group-item px-0"
                data-aos="flip-right"
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

    <section class="py-5 bg-light">
      <div class="container" data-aos="slide-up">
        <!-- Section heading -->
        <div class="text-center mb-5">
          <h2 class="fw-bold">
            {{ AboutData.services.title }}
          </h2>

          <p class="text-muted">Layanan unggulan Makna Consulting</p>
        </div>

        <!-- Services grid -->
        <div class="row g-4" data-aos="slide-down">
          <!-- Loop through all services -->
          <div
            v-for="(service, index) in AboutData.services.items"
            :key="index"
            class="col-md-4"
            data-aos="flip-up"
          >
            <!-- Service card -->
            <div class="card h-100 border-0 shadow-sm p-4 text-center">
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
        <div class="row g-4" data-aos="flip-right">
          <!-- Loop through team members -->
          <div v-for="(member, index) in AboutData.team.members" :key="index" class="col-md-4">
            <!-- Team member card -->
            <div class="card border-0 shadow-sm text-center p-4">
              <!-- Member image -->
              <img
                :src="member.image"
                class="rounded-circle team-image mx-auto mb-3"
                data-aos="slide-left"
              />

              <!-- Member name -->
              <h5 class="fw-bold" data-aos="slide-right">
                {{ member.name }}
              </h5>

              <!-- Member position -->
              <p class="text-muted" data-aos="slide-left">
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

    <section class="py-5 bg-white">
      <div class="container">
        <div class="row align-items-center">
          <!-- CTA image -->
          <div class="col-lg-5">
            <img
              :src="AboutData.cta.image"
              class="img-fluid rounded-4 shadow"
              data-aos="flip-left"
            />
          </div>

          <!-- CTA content -->
          <div class="col-lg-6 offset-lg-1">
            <!-- CTA badge -->
            <span class="text-warning fw-bold" data-aos="slide-left">
              {{ AboutData.cta.badge }}
            </span>

            <!-- CTA title -->
            <h2 class="display-6 fw-bold my-4" data-aos="slide-left">
              {{ AboutData.cta.title }}
            </h2>

            <!-- CTA description -->
            <p class="text-muted" data-aos="slide-left">
              {{ AboutData.cta.description }}
            </p>

            <!-- CTA button -->
            <div class="pt-3">
              <router-link
                to="/contact"
                class="btn btn-warning px-4 rounded-pill"
                data-aos="flip-right"
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
