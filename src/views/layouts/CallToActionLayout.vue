<template>
  <!-- Section CTA / Call To Action -->
  <section class="home-cta-section py-5 text-center text-white">
    <div class="container">
      <!-- Wrapper isi CTA agar lebar konten tidak terlalu full -->
      <div class="cta-content mx-auto">
        <!-- Judul utama CTA -->
        <h2 class="fw-bold mb-3 text-dark px-2 text-capitalize">bahagia tanpa koma</h2>

        <!-- Deskripsi / subtitle CTA -->
        <p class="mb-4 text-dark px-2">Konsultasikan kebutuhan Anda sekarang</p>

        <!-- Container tombol CTA -->
        <!--
          flex-column      = tombol vertikal di mobile
          flex-sm-row      = berubah horizontal mulai breakpoint sm
          justify-content-center = posisi tengah horizontal
          align-items-center     = posisi tengah vertical
          gap-3                  = jarak antar tombol
        -->
        <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
          <!-- Tombol menuju halaman contact -->
          <router-link to="/contact" class="btn btn-dark px-4 py-2 w-100 w-sm-auto">
            Hubungi Kami
          </router-link>

          <!-- Tombol menuju halaman services -->
          <router-link to="/services" class="btn btn-outline-dark px-4 py-2 w-100 w-sm-auto">
            Lihat Layanan
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================
   SECTION CTA
========================= */

/* Background utama section CTA */
.home-cta-section {
  background: #ffc107;
}

/* Membatasi lebar maksimal konten */
.cta-content {
  max-width: 700px;
}

/* =========================
   RESPONSIVE - MOBILE
   max-width: 576px
========================= */
@media (max-width: 576px) {
  /* Mengatur padding atas & bawah khusus mobile */
  .home-cta-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  /* Ukuran heading di mobile */
  h2 {
    font-size: 1.6rem;
    line-height: 1.4;
  }

  /* Ukuran paragraf di mobile */
  p {
    font-size: 1rem;
  }

  /* Tombol full width di mobile */
  .btn {
    width: 100%;
    max-width: 280px;
  }
}

/* =========================
   RESPONSIVE - TABLET
   577px - 991px
========================= */
@media (min-width: 577px) and (max-width: 991px) {
  /* Ukuran heading tablet */
  h2 {
    font-size: 2rem;
  }

  /* Ukuran paragraf tablet */
  p {
    font-size: 1.1rem;
  }
}

/* =========================
   RESPONSIVE - DESKTOP
   min-width: 992px
========================= */
@media (min-width: 992px) {
  /* Ukuran heading desktop */
  h2 {
    font-size: 2.4rem;
  }

  /* Ukuran paragraf desktop */
  p {
    font-size: 1.15rem;
  }
}
</style>
