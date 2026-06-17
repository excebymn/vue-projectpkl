<script setup>
import Logo from '/images/PrimaryLogo/Logo.png'

// ========================================
// SOCIAL MEDIA LINKS
// ========================================
// Stores all social media icons and URLs
const socials = [
  { icon: 'bi-google', link: 'https://google.com' },
  { icon: 'bi-facebook', link: '#' },
  { icon: 'bi-instagram', link: '#' },
  { icon: 'bi-tiktok', link: '#' },
]

// ========================================
// FOOTER NAVIGATION LINKS
// ========================================
// Main pages displayed inside footer
const pages = [
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <!-- ========================================
       FOOTER SECTION
  ========================================= -->
  <footer class="footer-custom text-cream pt-5">
    <!-- ========================================
         TOP SOCIAL SECTION
    ========================================= -->
    <div class="container border-bottom pb-4">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-3"
      >
        <!-- Short introduction text -->
        <p class="mb-0">Connect with us:</p>

        <!-- Social media icons -->
        <div class="d-flex justify-content-center">
          <a v-for="s in socials" :key="s.icon" :href="s.link" class="social-link">
            <i :class="['bi', s.icon]"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- ========================================
         MAIN FOOTER CONTENT
    ========================================= -->
    <div class="container py-5">
      <div class="row g-4 text-center text-md-start">
        <!-- ========================================
             BRAND INFORMATION
        ========================================= -->
        <div class="col-12 col-md-6 col-lg-4">
          <!-- Logo and company name -->
          <div
            class="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-3"
          >
            <img :src="Logo" height="35" />

            <h5 class="mb-0 text-uppercase">Makna Consulting</h5>
          </div>

          <!-- Company description -->
          <p class="footer-muted small mb-0">
            Professional and trusted human resource and organizational development solutions.
          </p>
        </div>

        <!-- ========================================
             QUICK NAVIGATION LINKS
        ========================================= -->
        <div class="col-6 col-md-6 col-lg-4">
          <h6 class="fw-bold mb-3">Pages</h6>

          <ul class="list-unstyled m-0">
            <li v-for="p in pages" :key="p.path" class="mb-2">
              <router-link :to="p.path" class="footer-link">
                {{ p.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- ========================================
             CONTACT INFORMATION
        ========================================= -->
        <div class="col-6 col-md-12 col-lg-4">
          <h6 class="fw-bold mb-3">Contact</h6>

          <p class="small mb-2">📍 Surabaya, East Java</p>

          <p class="small mb-2">📧 makna.team@gmail.com</p>

          <p class="small mb-0">📞 +62 813 3175 5314</p>
        </div>
      </div>
    </div>

    <!-- ========================================
         COPYRIGHT SECTION
    ========================================= -->
    <div class="text-center py-3 border-top small px-3">
      © 2026 Makna Consulting —

      <router-link to="/Developer" class="dev-link"> by Developer </router-link>
    </div>
  </footer>
</template>

<style scoped>
/* ========================================
   MAIN FOOTER BACKGROUND
======================================== */
.footer-custom {
  background: #212529;
}

/* ========================================
   MUTED FOOTER TEXT
======================================== */
.footer-muted {
  color: rgba(255, 255, 255, 0.7);
}

/* ========================================
   FOOTER NAVIGATION LINKS
======================================== */
.footer-link {
  text-decoration: none;
  color: #ffffff;
  transition: 0.3s;
}

/* Hover effect for footer links */
.footer-link:hover {
  color: #0dcaf0;
}

/* ========================================
   SOCIAL MEDIA ICON LINKS
======================================== */
.social-link {
  color: #ffffff;
  font-size: 1.2rem;
  margin-left: 12px;
  margin-right: 12px;
  transition: 0.3s;
}

/* Hover animation for social icons */
.social-link:hover {
  color: #0dcaf0;
  transform: translateY(-2px);
}

/* ========================================
   DEVELOPER CREDIT LINK
======================================== */
.dev-link {
  color: lightblue;
  text-decoration: none;
}

/* Hover effect for developer link */
.dev-link:hover {
  text-decoration: underline;
}

/* ========================================
   MOBILE RESPONSIVE
======================================== */
@media (max-width: 768px) {
  /* Reduce icon spacing on mobile */
  .social-link {
    margin: 0 10px;
  }

  /* Smaller company title */
  h5 {
    font-size: 1rem;
  }

  /* Smaller section headings */
  h6 {
    font-size: 0.95rem;
  }
}
</style>
