<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Logo from '/images/PrimaryLogo/Logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: true,
})

const router = useRouter()

const searchQuery = ref('')
const isFocused = ref(false)

const menus = [
  {
    name: 'Home1',
    path: '/',
    keywords: ['home', 'beranda', 'utama', 'landing', 'awal'],
  },

  {
    name: 'Home2',
    path: '/home2',
    keywords: ['home baru', 'beranda', 'versi baru', 'landing'],
  },

  {
    name: 'Portofolio',
    path: '/portofolio',
    keywords: [
      'portfolio',
      'portofolio',
      'project',
      'projek',
      'hasil',
      'karya',
      'showcase',
      'galeri',
      'client',
      'desain',
    ],
  },

  {
    name: 'Services',
    path: '/services',
    keywords: ['service', 'layanan', 'jasa', 'fitur', 'solusi', 'konsultasi', 'paket'],
  },

  {
    name: 'About',
    path: '/about',
    keywords: ['tentang', 'tentang kami', 'siapa kami', 'profil', 'company', 'tim', 'sejarah'],
  },

  {
    name: 'Contact',
    path: '/contact',
    keywords: [
      'contact',
      'kontak',
      'hubungi',
      'customer service',
      'cs',
      'whatsapp',
      'wa',
      'admin',
      'email',
    ],
  },
]

const filteredResults = computed(() => {
  const q = searchQuery.value.toLowerCase().trim()

  if (!q) return []

  return menus
    .map((menu) => {
      let score = 0
      let matchedKeyword = ''
      let highestKeywordScore = 0
      let isPageMatch = false

      const menuName = menu.name.toLowerCase()

      if (menuName.includes(q)) {
        score += 25
        isPageMatch = true
      }

      if (menuName.startsWith(q)) {
        score += 15
      }

      menu.keywords.forEach((keyword) => {
        const k = keyword.toLowerCase()

        let localScore = 0

        if (k.includes(q)) localScore += 10

        if (k.startsWith(q)) localScore += 5

        if (q.length > 3 && Math.abs(k.length - q.length) <= 2 && k.includes(q.slice(0, 3))) {
          localScore += 3
        }

        score += localScore

        if (localScore > highestKeywordScore) {
          highestKeywordScore = localScore
          matchedKeyword = keyword
        }
      })

      return {
        ...menu,
        score,
        matchedKeyword,
        isPageMatch,
      }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
})

const goTo = (path) => {
  searchQuery.value = ''
  isFocused.value = false
  router.push(path)
}

const searchEnter = () => {
  if (filteredResults.value.length) {
    goTo(filteredResults.value[0].path)
  }
}
</script>

<template data-aos="zoom-in-down" data-aos-duration="1500">

    <nav
      class="navbar navbar-expand-lg bg-body-tertiary shadow-lg position-fixed top-0 start-50 translate-middle-x mt-3 px-3 rounded"
      style="width: 90%; z-index: 999"
    >
      <div class="container-fluid">
        <!-- Logo -->

        <router-link to="/" class="navbar-brand d-flex align-items-center gap-2">
          <img :src="Logo" height="32" alt="Logo" />

          <span class="fw-bold text-capitalize d-none d-lg-inline"> Makna Consulting </span>
        </router-link>

        <!-- Toggle -->

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarContent" class="collapse navbar-collapse">
          <!-- MENU -->

          <ul class="navbar-nav mx-auto align-items-lg-center w-100 w-lg-auto">
            <li v-for="menu in menus" :key="menu.path" class="nav-item">
              <router-link
                :to="menu.path"
                class="nav-link px-3 py-2"
                active-class="fw-bold text-warning"
              >
                {{ menu.name }}
              </router-link>
            </li>
          </ul>

          <hr class="d-lg-none my-2" />

          <!-- SEARCH -->

          <div class="position-relative ms-lg-auto w-100" style="max-width: 320px">
            <div class="d-flex">
              <input
                v-model="searchQuery"
                @focus="isFocused = true"
                @keyup.enter="searchEnter"
                @blur="setTimeout(() => (isFocused = false), 150)"
                class="form-control"
                type="search"
                placeholder="Cari halaman..."
              />

              <button class="btn btn-warning ms-2 d-none d-lg-block" @click="searchEnter">
                Search
              </button>
            </div>

            <!-- RESULT -->

            <ul
              v-if="isFocused && filteredResults.length"
              class="list-group position-absolute top-100 start-0 w-100 shadow mt-2 rounded overflow-auto"
              style="z-index: 999; max-height: 260px"
            >
              <li
                v-for="item in filteredResults"
                :key="item.path"
                @mousedown.prevent="goTo(item.path)"
                class="list-group-item list-group-item-action py-3"
              >
                <div v-if="item.isPageMatch">📄 Buka {{ item.name }}</div>

                <div v-else>🔍 Cari "{{ searchQuery }}" → {{ item.matchedKeyword }}</div>

                <small class="text-muted d-block mt-1"> Halaman {{ item.name }} </small>
              </li>
            </ul>

            <!-- EMPTY -->

            <div
              v-if="isFocused && searchQuery && !filteredResults.length"
              class="position-absolute top-100 start-0 w-100 p-3 bg-body border rounded shadow mt-2"
              style="z-index: 999"
            >
              Tidak ditemukan hasil untuk "{{ searchQuery }}"
            </div>
          </div>
        </div>
      </div>
    </nav>

</template>

<style scoped>
@media (max-width: 991px) {
  .navbar-nav {
    align-items: flex-start !important;
    width: 100%;
  }

  .nav-link {
    width: 100%;
    text-align: left !important;
    border-radius: 12px;
    padding: 0.8rem 1rem !important;
  }

  .nav-link:active {
    transform: scale(0.98);
  }

  .navbar-collapse {
    padding-top: 0.5rem;
  }

  .list-group-item:active {
    transform: scale(0.98);
  }
}

@media (min-width: 992px) {
  .navbar-nav {
    align-items: center !important;
  }

  .nav-link {
    text-align: center !important;
  }
}
</style>
