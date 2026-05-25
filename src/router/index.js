import { createRouter, createWebHistory } from 'vue-router'

// Import page components used for route mapping.
import HomeView from '../views/pages/HomeView.vue'
import AboutView from '../views/pages/AboutView.vue'
import ContactView from '../views/pages/ContactView.vue'
import ServicesView from '../views/pages/ServicesView.vue'
import PortofolioView from '@/views/pages/PortofolioView.vue'
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
      meta: { title: 'Home' },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'About' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { title: 'Contact' },
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
      meta: { title: 'Our Service' },
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: PortofolioView,
      meta: { title: 'Portofolio' },
    },
    {
      path: '/developer',
      name: 'developer',
      component: DeveloperView,
      meta: { title: 'Developer' },
    },
  ],
})

// Dynamically update the browser tab title after every route navigation.
router.afterEach((to) => {
  const CompanyName = 'Makna Consulting'

  // Fallback to company name if route metadata title is unavailable.
  if (!to.meta.title) {
    document.title = `${CompanyName}`
  } else {
    document.title = `${CompanyName} - ${to.meta.title}`
  }
})

export default router
