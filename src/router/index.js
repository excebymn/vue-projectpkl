import { createRouter, createWebHistory } from 'vue-router'

//? import pages
import HomeView from '../views/pages/HomeView.vue'
import AboutView from '../views/pages/AboutView.vue'
import ContactView from '../views/pages/ContactView.vue'
import ServicesView from '../views/pages/ServicesView.vue'
import PortofolioView from '@/views/pages/PortofolioView.vue'
import DeveloperView from '@/views/pages/DeveloperView.vue'

//? add route pages
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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

//? update title for each page
router.afterEach((to) => {
  const CompanyName = 'Makna Computing'

  if (!to.meta.title) {
    document.title = `${CompanyName}`
  } else {
    document.title = `${CompanyName} - ${to.meta.title}`
  }
})

//? export route page
export default router
