import { createRouter, createWebHistory } from 'vue-router'

// Import page components used for route mapping.
import HomeView from '../views/pages/HomeView.vue'
import AboutView from '../views/pages/AboutView.vue'
import ContactView from '../views/pages/ContactView.vue'
import ServicesView from '../views/pages/ServicesView.vue'
import PortofolioView from '../views/pages/PortofolioView.vue'
import DeveloperView from '../views/pages/DeveloperView.vue'

// Configure application routes and browser history mode.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // Define all application routes and related metadata.
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home',
        description:
          'Makna Consulting (CV. Mapah Karya Natar) adalah lembaga konsultasi SDM dan pengembangan organisasi di Surabaya, Jawa Timur, menyediakan pelatihan profesional, pendampingan SOP, reformasi birokrasi, dan outbound training.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About',
        description:
          'Tentang Makna Consulting (CV. Mapah Karya Natar): lembaga konsultasi SDM dan pengembangan organisasi terpercaya berbasis di Surabaya, Jawa Timur, bersertifikasi ISO 9001:2015.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact',
        description:
          'Hubungi Makna Consulting untuk konsultasi SDM, pengembangan organisasi, dan pelatihan profesional di Surabaya, Jawa Timur.',
      },
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
      meta: {
        title: 'Our Service',
        description:
          'Layanan Makna Consulting: konsultasi SDM, pendampingan SOP, reformasi birokrasi, outbound training, dan pengembangan tata kelola organisasi.',
      },
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: PortofolioView,
      meta: {
        title: 'Portofolio',
        description:
          'Portofolio proyek Makna Consulting bersama instansi pemerintah, lembaga pendidikan, dan organisasi dari berbagai sektor.',
      },
    },
    {
      path: '/developer',
      name: 'developer',
      component: DeveloperView,
      meta: { title: 'Developer' },
    },
  ],
})

// Dynamically update the browser tab title and meta description after every route navigation.
router.afterEach((to) => {
  const CompanyName = 'Makna Consulting'

  // Fallback to company name if route metadata title is unavailable.
  document.title = to.meta.title ? `${CompanyName} - ${to.meta.title}` : CompanyName

  // Update meta description per route so each page carries a distinct, relevant description.
  if (to.meta.description) {
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', to.meta.description)
  }
})

export default router
