<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Logo from '/images/PrimaryLogo/Logo.png'

const router = useRouter()
const searchQuery = ref('')
const isFocused = ref(false)

const menus = [
  { name: 'Home', path: '/', keywords: ['home', 'beranda'] },
  { name: 'Portofolio', path: '/portofolio', keywords: ['portfolio', 'project'] },
  { name: 'Services', path: '/services', keywords: ['service', 'layanan'] },
  { name: 'About', path: '/about', keywords: ['about', 'tentang'] },
  { name: 'Contact', path: '/contact', keywords: ['contact', 'kontak'] },
]

const filteredResults = computed(() => {
  if (!searchQuery.value) return []

  const q = searchQuery.value.toLowerCase()

  return menus
    .filter(
      (menu) => menu.name.toLowerCase().includes(q) || menu.keywords.some((k) => k.includes(q)),
    )
    .slice(0, 5)
})

const goTo = (path) => {
  searchQuery.value = ''
  isFocused.value = false
  router.push(path)
}
</script>

<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary shadow-lg position-fixed top-0 start-50 translate-middle-x mt-3 px-3 rounded"
    style="width: 90%; z-index: 999"
  >
    <div class="d-flex align-items-center container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-2">
        <img :src="Logo" alt="Logo" height="32" />
        <span class="fw-bold text-capitalize d-none d-lg-inline"> makna consulting </span>
      </router-link>

      <!-- Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Content -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- MENU (kiri / auto) -->
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li v-for="menu in menus" :key="menu.path" class="nav-item">
            <router-link
              :to="menu.path"
              class="nav-link text-capitalize text-center"
              active-class="active fw-bold text-warning"
            >
              {{ menu.name }}
            </router-link>
          </li>
        </ul>

        <!-- SEARCH (kanan) -->
        <div class="position-relative d-flex mx-auto mx-lg-0" style="max-width: 300px; width: 100%">
          <input
            v-model="searchQuery"
            @focus="isFocused = true"
            @blur="setTimeout(() => (isFocused = false), 150)"
            class="form-control me-2"
            type="search"
            placeholder="Search"
          />

          <button
            class="btn btn-outline-success"
            type="button"
            @click="filteredResults.length && goTo(filteredResults[0].path)"
          >
            Search
          </button>

          <!-- Dropdown hasil -->
          <ul
            v-if="isFocused && filteredResults.length"
            class="list-group position-absolute top-100 start-0 w-100 shadow"
            style="z-index: 999"
          >
            <li
              v-for="item in filteredResults"
              :key="item.path"
              class="list-group-item list-group-item-action"
              @mousedown.prevent="goTo(item.path)"
            >
              {{ item.name }}
            </li>
          </ul>

          <!-- No result -->
          <div
            v-if="isFocused && searchQuery && !filteredResults.length"
            class="position-absolute top-100 start-0 bg-white w-100 p-2 border shadow"
            style="z-index: 999"
          >
            Tidak ditemukan
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
