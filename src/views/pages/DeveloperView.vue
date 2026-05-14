<script setup>
import DeveloperData from '@/data/dev/DeveloperData'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: false,
})

</script>

<template>
  <div>
    <!-- HERO -->

    <section class="position-relative vh-100 overflow-hidden">
      <!-- Background -->
      <img
        src="https://placehold.co/1600x900"
        alt="Hero Background"
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      <!-- Overlay -->
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      <!-- Content -->
      <div
        class="container position-absolute top-50 start-50 translate-middle text-center text-white"
      >
        <span class="badge bg-warning text-dark px-3 py-2 mb-3"> Makna Consulting </span>

        <h1 class="display-3 fw-bold mb-4">Pengembang Website</h1>

        <p class="lead col-lg-8 mx-auto text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, impedit.
        </p>
      </div>
    </section>
    <!-- ABOUT -->

    <section class="container py-5 text-center">
      <h2 class="fw-bold mb-3">
        {{ DeveloperData.about.title }}
      </h2>

      <p class="text-muted mx-auto" style="max-width: 800px">
        {{ DeveloperData.about.description }}
      </p>
    </section>

    <!-- TEAM -->

    <section class="container py-5">
      <div class="row g-4">
        <div
          v-for="(member, index) in DeveloperData.members"
          :key="index"
          class="col-lg-4 col-md-6"
        >
          <div class="card h-100 border-0 shadow-sm overflow-hidden">
            <!-- IMAGE -->

            <img
              :src="member.photo"
              class="card-img-top"
              style="height: 300px; object-fit: cover"
            />

            <div class="card-body p-4">
              <div class="mb-3">
                <h4 class="fw-bold mb-1">
                  {{ member.name }}
                </h4>

                <span class="badge bg-warning text-dark">
                  {{ member.role }}
                </span>
              </div>

              <p class="text-muted">
                {{ member.bio }}
              </p>

              <div class="bg-light rounded p-3 small fst-italic mb-3">
                {{ member.quote }}
              </div>

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

    <!-- CTA -->

    <section class="bg-light py-5">
      <div class="container text-center">
        <h2 class="fw-bold">Mari Berkembang Bersama</h2>

        <p class="text-muted">
          Kolaborasi, pembelajaran, dan pengalaman menjadi bagian dari perjalanan kami.
        </p>
      </div>
    </section>
  </div>
</template>
