<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/components/portofolio/pengalaman.js'

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

  return escapeHtml(text).replace(regex, (match) => `<mark class="bg-warning text-dark">${match}</mark>`)
}

const activeTab = ref('testimoni')
</script>

<template>
  <section class="container py-5">
    <!-- Header -->
    <div class="text-center mb-5">
      <p class="text-secondary mb-2">Portofolio Perusahaan</p>

      <h2 class="fw-bold">Data & Riwayat Kerja</h2>
    </div>

    <!-- Tab Buttons -->
    <div class="pill-tabs d-flex flex-wrap gap-2 justify-content-center mb-4">
  <button
    class="tab-pill-btn"
    :class="{ active: activeTab === 'testimoni' }"
    @click="activeTab = 'testimoni'"
  >
    Testimoni
  </button>

  <button
    class="tab-pill-btn"
    :class="{ active: activeTab === 'pengalaman' }"
    @click="activeTab = 'pengalaman'"
  >
    Pengalaman
  </button>

  <button
    class="tab-pill-btn"
    :class="{ active: activeTab === 'client' }"
    @click="activeTab = 'client'"
  >
    Client
  </button>

  <button
    class="tab-pill-btn"
    :class="{ active: activeTab === 'statistik' }"
    @click="activeTab = 'statistik'"
  >
    Statistik
  </button>
</div>

    <!--
    ╔══════════════════════════════════════╗
    ║               CONTENT                ║
    ╚══════════════════════════════════════╝
    -->
    <div class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4">
        <!--
        ╔══════════════════════════════════════╗
        ║              TESTIMONI               ║
        ╚══════════════════════════════════════╝
        -->
        <div v-if="activeTab === 'testimoni'">
          <h4 class="fw-bold mb-4">Testimoni Client</h4>

          <div class="row g-4">
            <div class="col-md-6">
              <div class="border rounded-4 p-4 h-100">
                <p class="mb-3">"Pelayanan sangat profesional dan hasil sangat memuaskan."</p>

                <h6 class="fw-bold mb-0">PT Digital Nusantara</h6>
              </div>
            </div>

            <div class="col-md-6">
              <div class="border rounded-4 p-4 h-100">
                <p class="mb-3">"Pengerjaan cepat dengan komunikasi yang baik."</p>

                <h6 class="fw-bold mb-0">CV Teknologi Indonesia</h6>
              </div>
            </div>
          </div>
        </div>

        <!--
        ╔══════════════════════════════════════╗
        ║             PENGALAMAN               ║
        ╚══════════════════════════════════════╝
        -->

        <div v-if="activeTab === 'pengalaman'">
          <h4 class="fw-bold mb-4 text-center" bg-light >Portfolio Proyek</h4>
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
              class="form-control"
              placeholder="atau cari berdasarkan nama proyek, klien, kategori, dll..."
              style="max-width: 500px"
            />
          </div>

          <div class="accordion" id="projectAccordion">
            <div
              class="accordion-item"
              v-for="(project, index) in filteredProjects"
              :key="project.id"
            >
              <!-- HEADER -->
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${index}`"
                >
                  <div class="d-flex flex-column text-start">
                    <span class="fw-semibold" v-html="highlightText(project.title)"></span>

                    <small class="text-secondary" v-html="highlightText(`${project.client} • ${project.year}`)"></small>
                  </div>
                </button>
              </h2>

              <!-- DETAIL -->
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

                    <div class="col-md-6">
                      <strong>Nilai</strong>
                      <p class="mb-0">{{ project.value }}</p>
                    </div>

                    <div class="col-md-6">
                      <strong>Nomor Kontrak</strong>
                      <p class="mb-0">{{ project.contract }}</p>
                    </div>

                    <div class="col-md-6">
                      <strong>Tanggal</strong>
                      <p class="mb-0">{{ project.date }}</p>
                    </div>

                    <div class="col-md-6">
                      <strong>Status</strong>
                      <p class="mb-0" v-html="highlightText(project.status)"></p>
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

        <!--
        ╔══════════════════════════════════════╗
        ║                CLIENT                ║
        ╚══════════════════════════════════════╝
        -->
        <div v-if="activeTab === 'client'">
          <h4 class="fw-bold mb-4">Daftar Client</h4>

          <div class="row g-4">
            <div class="col-md-4">
              <div class="border rounded-4 p-4 text-center h-100">
                <h6 class="fw-bold">Bappeda Makassar</h6>
                <p class="text-secondary mb-0">Audit ISO 9001:2015</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="border rounded-4 p-4 text-center h-100">
                <h6 class="fw-bold">Dinas Perindustrian Jawa Timur</h6>
                <p class="text-secondary mb-0">Survey Industri</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="border rounded-4 p-4 text-center h-100">
                <h6 class="fw-bold">Dinas Kelautan Sidoarjo</h6>
                <p class="text-secondary mb-0">Penyusunan SOP</p>
              </div>
            </div>
          </div>
        </div>

        <!--
        ╔══════════════════════════════════════╗
        ║              STATISTIK               ║
        ╚══════════════════════════════════════╝
        -->
        <div v-if="activeTab === 'statistik'">
          <h4 class="fw-bold mb-4">Statistik Performa</h4>

          <div class="row g-4">
            <div class="col-md-3">
              <div class="border rounded-4 p-4 text-center h-100">
                <h2 class="fw-bold text-primary">15+</h2>
                <p class="mb-0">Proyek Selesai</p>
              </div>
            </div>

            <div class="col-md-3">
              <div class="border rounded-4 p-4 text-center h-100">
                <h2 class="fw-bold text-success">98%</h2>
                <p class="mb-0">Kepuasan Client</p>
              </div>
            </div>

            <div class="col-md-3">
              <div class="border rounded-4 p-4 text-center h-100">
                <h2 class="fw-bold text-warning">5</h2>
                <p class="mb-0">Tahun Pengalaman</p>
              </div>
            </div>

            <div class="col-md-3">
              <div class="border rounded-4 p-4 text-center h-100">
                <h2 class="fw-bold text-info">24/7</h2>
                <p class="mb-0">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.pill-tabs .tab-pill-btn {
  border-radius: 50px;
  padding: 0.6rem 1.8rem;
  font-weight: 500;
  border: 2px solid #495057;
  background: transparent;
  color: #495057;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

/* Hover: naik sedikit + bayangan halus */
.pill-tabs .tab-pill-btn:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

/* Active: pill terisi + scale halus */
.pill-tabs .tab-pill-btn.active {
  background-color: #212529;
  color: #ffffff;
  border-color: #212529;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(33, 37, 41, 0.25);
}

/* Klik: efek "tekan" kecil */
.pill-tabs .tab-pill-btn:active {
  transform: scale(0.98);
  transition-duration: 0.1s;
}
</style>
