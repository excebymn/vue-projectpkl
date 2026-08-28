// Import global application styles.
import './assets/main.css'

// Import Vue core, root component, and application router.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap framework styles, icons, and JavaScript bundle.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

// Import and configure AOS (Animate On Scroll) for scroll-based animations.
import 'aos/dist/aos.css'
import AOS from 'aos'

import { onMounted } from 'vue'

AOS.init({
  duration: 800, // Animation duration in milliseconds.
  once: false, // Re-trigger animations every time elements re-enter the viewport.
  mirror: true
})

// Initialize and mount the Vue application instance.
const app = createApp(App)

app.use(router) // Register Vue Router plugin.
app.mount('#app') // Mount application to the root DOM element.


onMounted(() => {
  // Memaksa AOS menghitung ulang posisi koordinat semua elemen di layar
  AOS.refresh()
})
