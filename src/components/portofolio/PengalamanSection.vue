<script setup>
import { projects } from '@/data/portofolio/PengalamanData.js'
import { ref, computed } from 'vue'

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


</script>
<template>
  <h4 class="fw-bold mb-4 text-center" bg-light>Portfolio Proyek</h4>
  <p text-center class="text-secondary mb-4">
    Rekam jejak ini mencerminkan kompetensi kami dalam menangani berbagai proyek strategis, mulai
    dari audit sistem manajemen hingga penyusunan kebijakan teknis. Setiap baris data ini adalah
    bukti nyata dedikasi kami dalam memberikan solusi yang patuh standar dan berdampak positif bagi
    klien.
  </p>

  <div
    class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4"
  >
    <p class="mb-0 text-center text-md-start">ketuk untuk baca selengkapnya</p>

    <input
      v-model="searchQuery"
      type="text"
      class="form-control"
      placeholder="atau cari berdasarkan nama proyek, klien, kategori, dll..."
      style="max-width: 500px"
    />
  </div>

  <div class="accordion" id="projectAccordion">
    <div class="accordion-item" v-for="(project, index) in filteredProjects" :key="project.id">
      <!-- Project summary header -->
      <h2 class="accordion-header" data-aos="zoom-in" data-aos-once="false">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse${index}`"
        >
          <div class="d-flex flex-column text-start">
            <span class="fw-semibold" v-html="highlightText(project.title)"></span>

            <small
              class="text-secondary"
              v-html="highlightText(`${project.client} • ${project.year}`)"
            ></small>
          </div>
        </button>
      </h2>

      <!-- Project details section -->
      <div
        :id="`collapse${index}`"
        class="accordion-collapse collapse"
        data-bs-parent="#projectAccordion"
      >
        <div class="accordion-body">
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
</template>
