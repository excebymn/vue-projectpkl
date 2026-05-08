<script setup>
import Logo from '/images/PrimaryLogo/Logo.png'

// ===============================
// DATA
// ===============================
const socials = [
  { icon: 'bi-google', link: 'https://google.com' },
  { icon: 'bi-facebook', link: '#' },
  { icon: 'bi-instagram', link: '#' },
  { icon: 'bi-tiktok', link: '#' },
]

const pages = [
  { name: 'Portofolio', path: '/portofolio' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <footer class="footer-custom text-light pt-5">

    <!-- SOCIAL -->
    <div class="container border-bottom pb-4">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-3"
      >
        <p class="mb-0">Terhubung dengan kami:</p>

        <div class="d-flex justify-content-center">
          <a
            v-for="s in socials"
            :key="s.icon"
            :href="s.link"
            class="social-link"
          >
            <i :class="['bi', s.icon]"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="container py-5">
      <div class="row g-4 text-center text-md-start">

        <!-- ABOUT -->
        <div class="col-12 col-md-6 col-lg-4">
          <div
            class="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-3"
          >
            <img :src="Logo" height="35" />
            <h5 class="mb-0 text-uppercase">Makna Consulting</h5>
          </div>

          <p class="footer-muted small mb-0">
            Solusi pengembangan SDM dan organisasi yang profesional dan terpercaya.
          </p>
        </div>

        <!-- PAGE -->
        <div class="col-6 col-md-6 col-lg-4">
          <h6 class="fw-bold mb-3">Halaman</h6>

          <ul class="list-unstyled m-0">
            <li v-for="p in pages" :key="p.path" class="mb-2">
              <router-link
                :to="p.path"
                class="footer-link"
              >
                {{ p.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div class="col-6 col-md-12 col-lg-4">
          <h6 class="fw-bold mb-3">Kontak</h6>

          <p class="small mb-2">📍 Surabaya, Jawa Timur</p>
          <p class="small mb-2">📧 makna.team@gmail.com</p>
          <p class="small mb-0">📞 +62 813 3175 5314</p>
        </div>

      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="text-center py-3 border-top small px-3">
      © 2026 Makna Consulting — Developed by
      <router-link to="/Developer" class="dev-link">
        Tim PKL SMK Negeri Mojoagung
      </router-link>
    </div>

  </footer>
</template>

<style scoped>
.footer-custom {
  background: #212529;
}

.footer-muted {
  color: rgba(255, 255, 255, 0.7);
}

.footer-link {
  text-decoration: none;
  color: #ffffff;
  transition: 0.3s;
}

.footer-link:hover {
  color: #0dcaf0;
}

.social-link {
  color: #ffffff;
  font-size: 1.2rem;
  margin-left: 12px;
  margin-right: 12px;
  transition: 0.3s;
}

.social-link:hover {
  color: #0dcaf0;
  transform: translateY(-2px);
}

.dev-link {
  color: lightblue;
  text-decoration: none;
}

.dev-link:hover {
  text-decoration: underline;
}

/* MOBILE */
@media (max-width: 768px) {
  .social-link {
    margin: 0 10px;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.95rem;
  }
}
</style>
