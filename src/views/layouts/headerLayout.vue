<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Logo from '/images/PrimaryLogo/Logo.png'

// Vue Router instance for page navigation.
const router = useRouter()

// Search input value.
const searchQuery = ref('')

// Track focus state of the search input.
const isFocused = ref(false)

// Main navigation menu list with related search keywords.
const menus = [
  {
    name: 'Home',
    path: '/',
    keywords: ['home', 'beranda', 'utama', 'landing', 'awal'],
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

// Generate filtered search suggestions based on user input.
const filteredResults = computed(() => {
  const q = searchQuery.value.toLowerCase().trim()

  // Return empty array when search input is empty.
  if (!q) return []

  return (
    menus
      .map((menu) => {
        let score = 0
        let matchedKeyword = ''
        let highestKeywordScore = 0
        let isPageMatch = false

        const menuName = menu.name.toLowerCase()

        // Boost score if query matches page name.
        if (menuName.includes(q)) {
          score += 25
          isPageMatch = true
        }

        // Extra score if page name starts with query.
        if (menuName.startsWith(q)) {
          score += 15
        }

        // Compare query with every keyword.
        menu.keywords.forEach((keyword) => {
          const k = keyword.toLowerCase()
          let localScore = 0

          // Keyword contains query.
          if (k.includes(q)) localScore += 10

          // Keyword starts with query.
          if (k.startsWith(q)) localScore += 5

          // Small fuzzy matching logic for similar length keywords.
          if (q.length > 3 && Math.abs(k.length - q.length) <= 2 && k.includes(q.slice(0, 3))) {
            localScore += 3
          }

          score += localScore

          // Save the highest matching keyword.
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

      // Only show matched results.
      .filter((item) => item.score > 0)

      // Sort results by highest score.
      .sort((a, b) => b.score - a.score)

      // Limit displayed suggestions.
      .slice(0, 5)
  )
})

// Navigate to selected page and reset search state.
const goTo = (path) => {
  searchQuery.value = ''
  isFocused.value = false
  router.push(path)
}

// Navigate to the first search result when pressing Enter.
const searchEnter = () => {
  if (filteredResults.value.length) {
    goTo(filteredResults.value[0].path)
  }
}
</script>

<template>
  <nav
    class="navbar navbar-expand-lg bg-cream shadow-lg position-fixed top-0 start-50 translate-middle-x mt-3 px-3 rounded"
    style="width: 90%; z-index: 999"
  >
    <div class="container-fluid bg-cream">
      <!-- Brand logo and company name -->
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-2 bg-cream">
        <img :src="Logo" height="32" alt="Logo" />

        <span class="fw-bold text-capitalize d-none d-lg-inline"> Makna Consulting </span>
      </router-link>

      <!-- Mobile navbar toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarContent" class="collapse navbar-collapse">
        <!-- Navigation menu list -->
        <ul
          class="navbar-nav mx-auto align-items-lg-center w-100 justify-content-center w-lg-auto mb-2 mb-lg-0"
        >
          <li v-for="menu in menus" :key="menu.path" class="nav-item">
            <router-link
              :to="menu.path"
              class="nav-link px-3 py-2"
              active-class="fw-bold text-yellow"
            >
              {{ menu.name }}
            </router-link>
          </li>
        </ul>

        <hr class="d-lg-none my-2" />

        <!-- Search bar and search suggestions -->
        <div class="position-relative ms-lg-auto w-100" style="max-width: 320px">
          <div class="d-flex">
            <!-- Search input -->
            <input
              v-model="searchQuery"
              @focus="isFocused = true"
              @keyup.enter="searchEnter"
              @blur="setTimeout(() => (isFocused = false), 150)"
              class="form-control bg-cream border-yellow"
              type="search"
              placeholder="Cari halaman..."
            />

            <!-- Desktop search button -->
            <button class="btn bg-yellow ms-2 d-none d-lg-block" @click="searchEnter">
              Search
            </button>
          </div>

          <!-- Search result dropdown -->
          <ul
            v-if="isFocused && filteredResults.length"
            class="list-group position-absolute top-100 start-0 w-100 shadow mt-2 rounded overflow-auto"
            style="z-index: 999; max-height: 260px"
          >
            <li
              v-for="item in filteredResults"
              :key="item.path"
              @mousedown.prevent="goTo(item.path)"
              class="list-group-item  bg-cream list-group-item-action py-3"
            >
              <!-- Direct page match -->
              <div v-if="item.isPageMatch">📄 Open {{ item.name }}</div>

              <!-- Keyword match -->
              <div v-else>🔍 Search "{{ searchQuery }}" → {{ item.matchedKeyword }}</div>

              <!-- Additional page label -->
              <small class="text-muted d-block mt-1"> Page {{ item.name }} </small>
            </li>
          </ul>

          <!-- No search results message -->
          <div
            v-if="isFocused && searchQuery && !filteredResults.length"
            class="position-absolute top-100 start-0 w-100 p-3 bg-body border rounded shadow mt-2"
            style="z-index: 999"
          >
            No results found for "{{ searchQuery }}"
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* ========================
   MOBILE & TABLET
======================== */
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

  /* Small press effect for mobile interaction */
  .nav-link:active {
    transform: scale(0.98);
  }

  .navbar-collapse {
    padding-top: 0.5rem;
  }

  /* Press effect for search result items */
  .list-group-item:active {
    transform: scale(0.98);
  }
}

/* ========================
   DESKTOP
======================== */
@media (min-width: 992px) {
  .navbar-nav {
    align-items: center !important;
  }

  .nav-link {
    text-align: center !important;
  }
}
</style>
