<template>
  <div class="floating-buttons">
    <!-- WhatsApp -->
    <a
      href="https://wa.me/6281331755314"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-success rounded-pill shadow-lg fab-wa d-flex align-items-center p-0 overflow-hidden"
      :style="{ bottom: waBottom + 'px' }"
      aria-label="WhatsApp"
    >
      <span
        class="d-flex justify-content-center align-items-center flex-shrink-0"
        style="width: 58px; height: 58px"
      >
        <i class="bi bi-whatsapp fs-3"></i>
      </span>

      <span class="fab-label pe-3 fw-semibold"> Konsultasi Gratis </span>
    </a>

    <!-- Scroll Top -->
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
  name: 'FloatingButtons',

  data() {
    return {
      showTop: false,
      waBottom: 24,
      topBottom: 94,
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.handleFloating()

      window.addEventListener('scroll', this.handleFloating, {
        passive: true,
      })

      window.addEventListener('resize', this.handleFloating)
      window.addEventListener('load', this.handleFloating)
    })
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleFloating)
    window.removeEventListener('resize', this.handleFloating)
    window.removeEventListener('load', this.handleFloating)
  },

  methods: {
    handleFloating() {
      this.showTop = window.scrollY > 250

      const footer = document.querySelector('footer')

      const isMobile = window.innerWidth <= 576

      const defaultWa = isMobile ? 18 : 24
      const defaultTop = isMobile ? 84 : 94

      if (!footer) {
        this.waBottom = defaultWa
        this.topBottom = defaultTop
        return
      }

      const rect = footer.getBoundingClientRect()

      const overlap = window.innerHeight - rect.top

      if (overlap > 0) {
        this.waBottom = defaultWa + overlap
        this.topBottom = defaultTop + overlap
      } else {
        this.waBottom = defaultWa
        this.topBottom = defaultTop
      }
    },

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
.floating-buttons {
  z-index: 1080;
}

/* ========================
   SHARED
======================== */
.fab-wa,
.fab-top {
  position: fixed;
  right: 22px;
  transition: all 0.25s ease;
}

.fab-wa:hover,
.fab-top:hover {
  transform: scale(1.05);
}

.fab-wa:active,
.fab-top:active {
  transform: scale(0.95);
}

/* ========================
   WA BUTTON
======================== */
.fab-wa {
  width: 58px;
  height: 58px;
}

.fab-label {
  white-space: nowrap;
  max-width: 0;
  opacity: 0;
  transition: all 0.25s ease;
}

.fab-wa:hover {
  width: 235px;
}

.fab-wa:hover .fab-label {
  max-width: 180px;
  opacity: 1;
}

/* ========================
   TOP BUTTON
======================== */
.fab-top {
  width: 52px;
  height: 52px;
  opacity: 1;
}

.fab-top[v-cloak],
.fab-top[style*="display: none"] {
  opacity: 0;
}


/* ========================
   MOBILE
======================== */
@media (max-width: 576px) {
  .fab-wa,
  .fab-top {
    right: 14px;
  }

  .fab-wa:hover {
    width: 58px;
  }

  .fab-wa:hover .fab-label {
    max-width: 0;
    opacity: 0;
  }

  .fab-wa {
    width: 54px;
    height: 54px;
  }

  .fab-top {
    width: 48px;
    height: 48px;
  }
}
</style>
