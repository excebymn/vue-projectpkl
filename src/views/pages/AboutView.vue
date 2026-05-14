<script setup>
import AboutData from '@/data/about/AboutData'
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
    <!-- Hero Section -->
    <!-- Hero Section dengan Gambar Latar Belakang -->
    <section class="position-relative vh-100 overflow-hidden" data-aos="zoom-in">
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

        <h1 class="display-3 fw-bold mb-4">Tentang Kami</h1>

        <p class="lead col-lg-8 mx-auto text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, impedit.
        </p>
      </div>
    </section>

    <!-- STORY SECTION -->

    <section class="py-5" data-aos="zoom-in-up">
      <div class="container" data-aos="slide-up">
        <div
          v-for="(item, index) in AboutData.stories"
          :key="index"
          class="row align-items-center g-5 mb-5"
          :class="{ 'flex-row-reverse': item.reverse }"
          data-aos="flip-right"
        >
          <div class="col-lg-6" data-aos="flip-left">
            <img :src="item.image" class="img-fluid rounded-4 shadow" />
          </div>

          <div class="col-lg-6" data-aos="flip-right">
            <span class="text-warning fw-bold"> 0{{ index + 1 }} </span>

            <h2 class="fw-bold mb-4" data-aos="flip-left">
              {{ item.title }}
            </h2>

            <p v-if="item.description" class="text-secondary" data-aos="flip-right">
              {{ item.description }}
            </p>

            <ul v-if="item.values" class="list-group list-group-flush" data-aos="flip-left">
              <li v-for="(value, i) in item.values" :key="i" class="list-group-item px-0" data-aos="flip-right">
                <i class="bi bi-check-circle-fill text-warning me-2"></i>

                {{ value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->

    <section class="py-5 bg-light">
      <div class="container" data-aos="slide-up">
        <div class="text-center mb-5">
          <h2 class="fw-bold">
            {{ AboutData.services.title }}
          </h2>

          <p class="text-muted">Layanan unggulan Makna Consulting</p>
        </div>

        <div class="row g-4" data-aos="slide-down">
          <div v-for="(service, index) in AboutData.services.items" :key="index" class="col-md-4" data-aos="flip-up">
            <div class="card h-100 border-0 shadow-sm p-4 text-center">
              <i :class="['bi', service.icon, 'display-4', 'text-warning']"></i>

              <h4 class="mt-3">
                {{ service.title }}
              </h4>

              <p class="text-muted">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM -->

    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">
            {{ AboutData.team.title }}
          </h2>
        </div>

        <div class="row g-4" data-aos="flip-right">
          <div v-for="(member, index) in AboutData.team.members" :key="index" class="col-md-4">
            <div class="card border-0 shadow-sm text-center p-4">
              <img :src="member.image" class="rounded-circle team-image mx-auto mb-3" data-aos="slide-left" />

              <h5 class="fw-bold" data-aos="slide-right">
                {{ member.name }}
              </h5>

              <p class="text-muted" data-aos="slide-left">
                {{ member.position }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->

    <section class="py-5 bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <img :src="AboutData.cta.image" class="img-fluid rounded-4 shadow" data-aos="flip-left" />
          </div>

          <div class="col-lg-6 offset-lg-1">
            <span class="text-warning fw-bold" data-aos="slide-left">
              {{ AboutData.cta.badge }}
            </span>

            <h2 class="display-6 fw-bold my-4" data-aos="slide-left">
              {{ AboutData.cta.title }}
            </h2>

            <p class="text-muted" data-aos="slide-left">
              {{ AboutData.cta.description }}
            </p>

            <div class="pt-3">
              <router-link to="/contact" class="btn btn-warning px-4 rounded-pill" data-aos="flip-right">
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
.hero-section {
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

.team-image {
  width: 130px;
  height: 130px;
  object-fit: cover;
}

.card {
  border-radius: 24px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-6px);
}
</style>
