<template>
  <div data-aos="zoom-in" data-aos-once="false">
    <h4 class="fw-bold mb-4 text-center" bg-cream>Portfolio Proyek</h4>

    <p text-center class="text-secondary mb-4">
      Rekam jejak ini mencerminkan kompetensi kami dalam menangani berbagai proyek strategis,
      mulai dari audit sistem manajemen hingga penyusunan kebijakan teknis. Setiap baris data
      ini adalah bukti nyata dedikasi kami dalam memberikan solusi yang patuh standar dan
      berdampak positif bagi klien.
    </p>

    <div
      class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4"
    >
      <p class="mb-0 text-center text-md-start">ketuk untuk baca selengkapnya</p>

      <input
        v-model="searchQuery"
        type="text"
        class="form-control bg-cream border-yellow"
        placeholder="atau cari berdasarkan nama proyek, klien, kategori, dll..."
        style="max-width: 500px"
      />
    </div>

    <div class="accordion" id="projectAccordion">
      <div
        class="accordion-item bg-cream"
        v-for="(project, index) in filteredProjects"
        :key="project.id"
      >
        <h2 class="accordion-header" data-aos="zoom-in" data-aos-once="false">
          <button
            class="accordion-button collapsed bg-cream"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${index}`"
          >
            <div class="d-flex flex-column text-start">
              <span
                class="fw-semibold"
                v-html="highlightText(project.title)"
              ></span>

              <small
                class="text-secondary"
                v-html="highlightText(`${project.client} • ${project.year}`)"
              ></small>
            </div>
          </button>
        </h2>

        <div
          :id="`collapse${index}`"
          class="accordion-collapse collapse bg-cream"
          data-bs-parent="#projectAccordion"
        >
          <div class="accordion-body bg-cream">
            <div class="row g-3">
              <div class="col-md-6">
                <strong>Klien</strong>
                <p class="mb-0" v-html="highlightText(project.client)"></p>
              </div>

              <div class="col-md-6">
                <strong>Lokasi</strong>
                <p class="mb-0" v-html="highlightText(project.location)"></p>
              </div>

              <div class="col-12">
                <strong>Kategori</strong>
                <p class="mb-0" v-html="highlightText(project.category)"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/portofolio/PengalamanData.js'

const searchQuery = ref('')

const filteredProjects = computed(() => {
  return projects.filter((project) => {
    const query = searchQuery.value.toLowerCase()

    return (
      project.title.toLowerCase().includes(query) ||
      project.client.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query) ||
      project.status.toLowerCase().includes(query) ||
      String(project.year).includes(query)
    )
  })
})

const escapeHtml = (text) => {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const highlightText = (text) => {
  const query = searchQuery.value.trim()

  if (!query) return escapeHtml(text)

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(escapedQuery, 'gi')

  return escapeHtml(text).replace(
    regex,
    (match) => `<mark class="bg-yellow text-dark">${match}</mark>`,
  )
}
</script>

<style scoped>
/* Tidak ada style khusus pada section ini.
   Seluruh tampilan menggunakan Bootstrap classes bawaan. */
</style>
