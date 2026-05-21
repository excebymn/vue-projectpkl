<script setup>
import DeveloperData from '@/data/dev/DeveloperData'

/*
|--------------------------------------------------------------------------
| Developer Page
|--------------------------------------------------------------------------
| This page introduces the website development team behind
| Makna Consulting. It contains:
|
| - Hero section
| - About section
| - Developer team cards
| - Closing CTA section
|
| All content is dynamically loaded from DeveloperData.
|--------------------------------------------------------------------------
*/
</script>

<template>
  <div>
    <!-- =========================================================
         HERO SECTION
         ========================================================= -->
    <section class="position-relative vh-100 overflow-hidden">
      <!-- Background Image -->
      <img
        src="https://placehold.co/1600x900"
        alt="Hero Background"
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      <!-- Dark Overlay -->
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      <!-- Hero Content -->
      <div
        class="container position-absolute top-50 start-50 translate-middle text-center text-white"
      >
        <!-- Small Label -->
        <span class="badge bg-warning text-dark px-3 py-2 mb-3"> Makna Consulting </span>

        <!-- Main Title -->
        <h1 class="display-3 fw-bold mb-4">Website Developers</h1>

        <!-- Short Description -->
        <p class="lead col-lg-8 mx-auto text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, impedit.
        </p>
      </div>
    </section>

    <!-- =========================================================
         ABOUT SECTION
         ========================================================= -->
    <section class="container py-5 text-center">
      <!-- Section Title -->
      <h2 class="fw-bold mb-3">
        {{ DeveloperData.about.title }}
      </h2>

      <!-- Section Description -->
      <p class="text-muted mx-auto" style="max-width: 800px">
        {{ DeveloperData.about.description }}
      </p>
    </section>

    <!-- =========================================================
         TEAM SECTION
         ========================================================= -->
    <section class="container py-5">
      <div class="row g-4">
        <!-- Team Member Card -->
        <div
          v-for="(member, index) in DeveloperData.members"
          :key="index"
          class="col-lg-4 col-md-6"
        >
          <div class="card h-100 border-0 shadow-sm overflow-hidden">
            <!-- Member Photo -->
            <img
              :src="member.photo"
              class="card-img-top"
              style="height: 300px; object-fit: cover"
            />

            <!-- Card Body -->
            <div class="card-body p-4">
              <!-- Member Identity -->
              <div class="mb-3">
                <h4 class="fw-bold mb-1">
                  {{ member.name }}
                </h4>

                <!-- Member Role -->
                <span class="badge bg-warning text-dark">
                  {{ member.role }}
                </span>
              </div>

              <!-- Short Biography -->
              <p class="text-muted">
                {{ member.bio }}
              </p>

              <!-- Personal Quote -->
              <div class="bg-light rounded p-3 small fst-italic mb-3">
                {{ member.quote }}
              </div>

              <!-- Social Media Buttons -->
              <div class="d-flex gap-2">
                <a
                  v-for="(social, i) in member.socials"
                  :key="i"
                  :href="social.link"
                  target="_blank"
                  class="btn btn-outline-dark rounded-circle"
                >
                  <i :class="['bi', social.icon]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         CTA SECTION
         ========================================================= -->
    <section class="bg-light py-5">
      <div class="container text-center">
        <!-- CTA Title -->
        <h2 class="fw-bold">Let’s Grow Together</h2>

        <!-- CTA Description -->
        <p class="text-muted">
          Collaboration, learning, and experience are all part of our journey.
        </p>
      </div>
    </section>
  </div>
</template>
