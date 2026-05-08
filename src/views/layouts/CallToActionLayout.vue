<template>
  <section class="home-cta-section py-5 text-center text-white">
    <div class="container">
      <div class="cta-content mx-auto">
        <h2 class="fw-bold mb-3 text-dark px-2">Lorem ipsum dolor sit, amet</h2>

        <p class="mb-4 text-dark px-2">Konsultasikan kebutuhan Anda sekarang</p>

        <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
          <router-link to="/contact" class="btn btn-dark px-4 py-2 w-100 w-sm-auto">
            Hubungi Kami
          </router-link>

          <router-link to="/services" class="btn btn-outline-dark px-4 py-2 w-100 w-sm-auto">
            Lihat Layanan
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-cta-section {
  background: #ffc107;
}

.cta-content {
  max-width: 700px;
}

/* Mobile */
@media (max-width: 576px) {
  .home-cta-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  h2 {
    font-size: 1.6rem;
    line-height: 1.4;
  }

  p {
    font-size: 1rem;
  }

  .btn {
    width: 100%;
    max-width: 280px;
  }
}

/* Tablet */
@media (min-width: 577px) and (max-width: 991px) {
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }
}

/* Desktop */
@media (min-width: 992px) {
  h2 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.15rem;
  }
}
</style>
