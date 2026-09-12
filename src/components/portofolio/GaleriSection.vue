<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { projects } from '../../data/portofolio/GaleriData.js'

const mediaFiles = import.meta.glob('/src/assets/portofolio/galeri/*', {
  eager: true,
  import: 'default',
})

const getMediaUrl = (filename) => {
  const path = `/src/assets/portofolio/galeri/${filename}`
  return mediaFiles[path] || ''
}

// Tracking gambar/thumbnail mana saja yang sudah selesai load,
// dipakai untuk transisi skeleton -> gambar.
const loadedItems = reactive(new Set())
const markLoaded = (index) => loadedItems.add(index)

// ===== PREVIEW MODAL =====
// Video pakai box rasio tetap 16:9 (iframe tidak punya ukuran alami).
// Gambar TIDAK dipaksa ke rasio tertentu — dibiarkan pakai ukuran alaminya
// (max-width/max-height + object-fit: contain di CSS), jadi potret & lanskap
// langsung menyesuaikan tanpa nunggu event load / hitungan JS.
const selectedIndex = ref(null)

const selectedProject = computed(() =>
  selectedIndex.value !== null ? projects[selectedIndex.value] : null
)

const openPreview = (index) => {
  selectedIndex.value = index
}

const showPrev = () => {
  if (selectedIndex.value === null) return
  selectedIndex.value = (selectedIndex.value - 1 + projects.length) % projects.length
}

const showNext = () => {
  if (selectedIndex.value === null) return
  selectedIndex.value = (selectedIndex.value + 1) % projects.length
}

const handleKeydown = (e) => {
  if (selectedIndex.value === null) return
  if (e.key === 'ArrowRight') showNext()
  else if (e.key === 'ArrowLeft') showPrev()
}

let modalEl = null
const handleModalHidden = () => {
  selectedIndex.value = null
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  modalEl = document.getElementById('galleryModal')
  modalEl?.addEventListener('hidden.bs.modal', handleModalHidden)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  modalEl?.removeEventListener('hidden.bs.modal', handleModalHidden)
})
</script>

<template>
  <div class="text-center mb-5">
    <h2 class="client-title fw-bold">Dokumentasi Kegiatan</h2>
    <p class="client-subtitle">
      Kumpulan foto dan dokumentasi dari berbagai kegiatan, pelatihan, dan kolaborasi.
    </p>
  </div>

  <div class="gallery-grid">
    <div
      v-for="(project, index) in projects"
      :key="project.client + '-' + index"
      class="gallery-item"
      @click="openPreview(index)"
      data-bs-toggle="modal"
      data-bs-target="#galleryModal"
    >
      <div class="media-wrap">
        <div class="skeleton" v-show="!loadedItems.has(index)"></div>

        <!-- VIDEO -->
        <template v-if="project.type === 'video'">
          <img
            :src="`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`"
            class="gallery-media"
            :class="{ 'is-loaded': loadedItems.has(index) }"
            loading="lazy"
            decoding="async"
            @load="markLoaded(index)"
          />
          <div class="video-badge">
            <i class="bi bi-play-circle-fill"></i>
          </div>
        </template>

        <!-- IMAGE -->
        <img
          v-else
          :src="getMediaUrl(project.file)"
          class="gallery-media"
          :class="{ 'is-loaded': loadedItems.has(index) }"
          loading="lazy"
          decoding="async"
          @load="markLoaded(index)"
        />
      </div>

      <div class="gallery-overlay">
        <span>{{ project.client }}</span>
      </div>
    </div>
  </div>

  <!-- MODAL -->
  <div class="modal fade" id="galleryModal" tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content preview-modal">
        <button
          class="btn-close btn-close-white position-absolute top-0 end-0 m-3"
          data-bs-dismiss="modal"
        />

        <button
          class="nav-btn nav-btn-prev"
          @click.stop="showPrev"
          aria-label="Sebelumnya"
        >
          <i class="bi bi-chevron-left"></i>
        </button>
        <button
          class="nav-btn nav-btn-next"
          @click.stop="showNext"
          aria-label="Berikutnya"
        >
          <i class="bi bi-chevron-right"></i>
        </button>

        <div v-if="selectedProject" class="preview-wrapper">
          <!-- VIDEO: box rasio tetap 16:9 karena iframe tidak punya ukuran alami -->
          <div v-if="selectedProject.type === 'video'" class="media-box">
            <iframe
              :key="selectedProject.youtubeId"
              :src="`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1`"
              class="preview-media"
              allowfullscreen
            />
          </div>

          <!-- IMAGE: dibiarkan pakai ukuran alaminya, lanskap/potret sama-sama
               langsung menyesuaikan tanpa nunggu JS -->
          <div v-else class="image-box">
            <img
              :key="selectedProject.file"
              :src="getMediaUrl(selectedProject.file)"
              class="preview-media-image"
            />
          </div>

          <div class="preview-info">
            <h5>{{ selectedProject.client }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-grid {
  columns: 4;
  column-gap: 1rem;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.media-wrap {
  position: relative;
  overflow: hidden;
  background: #161616;
  min-height: 140px;
}

/* skeleton shimmer sambil gambar lazy-load */
.skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #181818 25%, #262626 37%, #181818 63%);
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.gallery-media {
  width: 100%;
  display: block;
  position: relative;
  opacity: 0;
  transform: scale(1.03);
  filter: blur(8px);
  transition: opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease;
}

.gallery-media.is-loaded {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}

.gallery-item:hover .gallery-media.is-loaded {
  transform: scale(1.05);
}

/* overlay */
.gallery-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: 0.3s ease;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

/* video icon */
.video-badge {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.video-badge i {
  font-size: 2.2rem;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.6rem;
  border-radius: 50%;
}

/* MODAL */
.preview-modal {
  background: #111;
  border-radius: 1rem;
  overflow: hidden;
}

/* VIDEO: box rasio tetap 16:9 */
.media-box {
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 85vh;
  background: black;
}

.preview-media {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* IMAGE: ukuran mengikuti gambar aslinya (potret otomatis lebih ramping,
   lanskap otomatis lebih lebar), dibatasi biar tidak lebih besar dari modal */
.image-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 85vh;
  background: black;
}

.preview-media-image {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
}

.preview-info {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
}

/* nav buttons di modal */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
  transition: background 0.2s ease;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.7);
}

.nav-btn-prev {
  left: 1rem;
}

.nav-btn-next {
  right: 1rem;
}

@media (max-width: 768px) {
  .gallery-grid {
    columns: 2;
  }
}
@media (max-width: 576px) {
  .gallery-grid {
    columns: 1;
  }
}
</style>
