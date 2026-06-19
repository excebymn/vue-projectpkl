<script setup>
import { ref, onMounted } from 'vue'
import { projects } from '@/data/portofolio/GaleriData.js'

/**
 * LOAD MEDIA (Vite safe map)
 */
const mediaFiles = import.meta.glob('/src/assets/portofolio/galeri/*', {
  eager: true,
  import: 'default',
})

const getMediaUrl = (filename) => {
  const path = `/src/assets/portofolio/galeri/${filename}`
  return mediaFiles[path] || ''
}

/**
 * SHUFFLE (sekali doang biar stabil)
 */
const shuffleArray = (arr) => {
  const newArr = [...arr]
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }
  return newArr
}

const shuffledProjects = ref([])

/**
 * MODAL STATE
 */
const selectedProject = ref(null)
const mediaRatio = ref('16 / 9') // default aman

const openPreview = (project) => {
  selectedProject.value = project

  // reset dulu biar gak flicker
  mediaRatio.value = project.type === 'video' ? '16 / 9' : 'auto'
}

/**
 * detect image ratio biar popup ngikutin file asli
 */
const onImageLoad = (e) => {
  const img = e.target
  const ratio = img.naturalWidth / img.naturalHeight

  // clamp biar gak aneh banget
  if (ratio > 1.8) mediaRatio.value = '16 / 9'
  else if (ratio < 0.8) mediaRatio.value = '3 / 4'
  else mediaRatio.value = `${ratio}`
}

onMounted(() => {
  shuffledProjects.value = shuffleArray(projects)
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
      v-for="(project, index) in shuffledProjects"
      :key="project.client + index"
      class="gallery-item"
      @click="openPreview(project)"
      data-bs-toggle="modal"
      data-bs-target="#galleryModal"
    >
      <!-- VIDEO -->
      <template v-if="project.type === 'video'">
        <img
          :src="`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`"
          class="gallery-media"
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
        loading="lazy"
        @load="onImageLoad"
      />

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

        <div v-if="selectedProject" class="preview-wrapper">
          <!-- MEDIA WRAPPER BIAR RASIO DINAMIS -->
          <div class="media-box" :style="{ aspectRatio: mediaRatio }">
            <!-- VIDEO -->
            <iframe
              v-if="selectedProject.type === 'video'"
              :src="`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1`"
              class="preview-media"
              allowfullscreen
            />

            <!-- IMAGE -->
            <img v-else :src="getMediaUrl(selectedProject.file)" class="preview-media" />
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

.gallery-media {
  width: 100%;
  display: block;
  transition: 0.3s ease;
}

.gallery-item:hover .gallery-media {
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

.media-box {
  width: 100%;
  max-height: 85vh;
  background: black;
}

.preview-media {
  width: 100%;
  height: 100%;
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
