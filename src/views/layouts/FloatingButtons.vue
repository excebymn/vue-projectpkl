<template>
  <div class="floating-buttons">
    <!-- WhatsApp Floating Button -->
    <a
      href="https://wa.me/6281331755314"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-success rounded-pill shadow-lg fab-wa d-flex align-items-center p-0 overflow-hidden"
      :style="{ bottom: waBottom + 'px' }"
      aria-label="WhatsApp"
    >
      <!-- WhatsApp Icon -->
      <span
        class="d-flex justify-content-center align-items-center flex-shrink-0"
        style="width: 58px; height: 58px"
      >
        <i class="bi bi-whatsapp fs-3"></i>
      </span>

      <!-- Expandable Label -->
      <span class="fab-label pe-3 fw-semibold"> Free Consultation </span>
    </a>

    <!-- Scroll To Top Button -->
    <button
      v-show="showTop"
      @click="scrollToTop"
      class="btn btn-warning rounded-circle shadow-lg fab-top d-flex justify-content-center align-items-center"
      :style="{ bottom: topBottom + 'px' }"
      aria-label="Back To Top"
    >
      <i class="bi bi-arrow-up fs-5"></i>
    </button>
  </div>
</template>

<script>
export default {
  // Component name
  name: 'FloatingButtons',

  data() {
    return {
      // Controls visibility of the scroll-to-top button
      showTop: false,

      // Dynamic bottom spacing for WhatsApp button
      waBottom: 24,

      // Dynamic bottom spacing for top button
      topBottom: 94,
    }
  },

  mounted() {
    // Wait until DOM is fully rendered
    this.$nextTick(() => {
      // Initial position calculation
      this.handleFloating()

      // Recalculate on scroll
      window.addEventListener('scroll', this.handleFloating, {
        passive: true,
      })

      // Recalculate on resize
      window.addEventListener('resize', this.handleFloating)

      // Recalculate when page fully loads
      window.addEventListener('load', this.handleFloating)
    })
  },

  beforeUnmount() {
    // Remove all event listeners to prevent memory leaks
    window.removeEventListener('scroll', this.handleFloating)
    window.removeEventListener('resize', this.handleFloating)
    window.removeEventListener('load', this.handleFloating)
  },

  methods: {
    // Handles floating button behavior and footer collision
    handleFloating() {
      // Show top button after scrolling down
      this.showTop = window.scrollY > 250

      // Select footer element
      const footer = document.querySelector('footer')

      // Detect mobile screen
      const isMobile = window.innerWidth <= 576

      // Default spacing values
      const defaultWa = isMobile ? 18 : 24
      const defaultTop = isMobile ? 84 : 94

      // If footer doesn't exist, use default positions
      if (!footer) {
        this.waBottom = defaultWa
        this.topBottom = defaultTop
        return
      }

      // Get footer position relative to viewport
      const rect = footer.getBoundingClientRect()

      // Calculate overlap between viewport and footer
      const overlap = window.innerHeight - rect.top

      // Move buttons upward when footer becomes visible
      if (overlap > 0) {
        this.waBottom = defaultWa + overlap
        this.topBottom = defaultTop + overlap
      } else {
        // Reset to default positions
        this.waBottom = defaultWa
        this.topBottom = defaultTop
      }
    },

    // Smooth scroll to top
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
/* ========================
   FLOATING BUTTON CONTAINER
======================== */
.floating-buttons {
  z-index: 1080;
}

/* ========================
   SHARED BUTTON STYLES
======================== */
.fab-wa,
.fab-top {
  position: fixed;
  right: 22px;
  transition: all 0.25s ease;
}

/* Hover animation */
.fab-wa:hover,
.fab-top:hover {
  transform: scale(1.05);
}

/* Click animation */
.fab-wa:active,
.fab-top:active {
  transform: scale(0.95);
}

/* ========================
   WHATSAPP BUTTON
======================== */
.fab-wa {
  width: 58px;
  height: 58px;
}

/* Hidden expandable text */
.fab-label {
  white-space: nowrap;
  max-width: 0;
  opacity: 0;
  transition: all 0.25s ease;
}

/* Expand button on hover */
.fab-wa:hover {
  width: 235px;
}

/* Reveal label on hover */
.fab-wa:hover .fab-label {
  max-width: 180px;
  opacity: 1;
}

/* ========================
   SCROLL TO TOP BUTTON
======================== */
.fab-top {
  width: 52px;
  height: 52px;
  opacity: 1;
}

/* Hide transition state */
.fab-top[v-cloak],
.fab-top[style*='display: none'] {
  opacity: 0;
}

/* ========================
   MOBILE RESPONSIVE
======================== */
@media (max-width: 576px) {
  /* Move buttons closer to edge */
  .fab-wa,
  .fab-top {
    right: 14px;
  }

  /* Disable expansion effect on mobile */
  .fab-wa:hover {
    width: 58px;
  }

  /* Hide label on mobile hover */
  .fab-wa:hover .fab-label {
    max-width: 0;
    opacity: 0;
  }

  /* Smaller WhatsApp button */
  .fab-wa {
    width: 54px;
    height: 54px;
  }

  /* Smaller top button */
  .fab-top {
    width: 48px;
    height: 48px;
  }
}
</style>
