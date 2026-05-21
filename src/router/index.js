import { createRouter, createWebHistory } from 'vue-router'

// Import page components used for route mapping.
import HomeView1 from '../views/pages/HomeView1.vue'
import HomeView2 from '../views/pages/HomeView2.vue'
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
      component: HomeView1,
      meta: { title: 'Home' },
    },
    {
      path: '/home2',
      name: 'Home2',
      component: HomeView2,
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
  const CompanyName = 'Makna Computing'

  // Fallback to company name if route metadata title is unavailable.
  if (!to.meta.title) {
    document.title = `${CompanyName}`
  } else {
    document.title = `${CompanyName} - ${to.meta.title}`
  }
})

export default router
