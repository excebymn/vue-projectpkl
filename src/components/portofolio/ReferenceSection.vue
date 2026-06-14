<template>
  <section
    class="py-5 bg-body"
    data-aos="slide-up"
    data-aos-once="false"
  >
    <div class="container">
      <!-- HEADER -->
      <div class="text-center mb-5">
        <p class="text-warning fw-semibold text-uppercase small mb-2">
          Referensi Kegiatan
        </p>

        <h2 class="fw-bold mb-3">
          Dokumentasi & Aktivitas Program
        </h2>

        <p class="text-body-secondary mx-auto statistik-subtitle">
          Kumpulan dokumentasi kegiatan berdasarkan kategori pengembangan,
          pelatihan, dan kerja sama lintas sektor.
        </p>
      </div>

      <!-- CATEGORY PILL NAV -->
      <div class="d-flex justify-content-center mb-4">
        <div class="d-flex gap-2 overflow-auto px-2 pb-2 pill-wrapper">
          <button
            v-for="tab in referenceTabs"
            :key="tab.id"
            class="btn btn-sm rounded-pill flex-shrink-0"
            :class="activeReference === tab.id ? 'btn-dark' : 'btn-outline-dark'"
            @click="activeReference = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- CONTENT GRID -->
      <div class="row g-4">
        <div
          v-for="(item, index) in referenceContent[activeReference]"
          :key="index"
          class="col-12 col-sm-6 col-xl-4"
        >
          <div class="card border shadow-sm h-100 statistik-card">
            <div class="card-body p-4">

              <!-- IMAGE -->
              <div v-if="item.type === 'image'">
                <img
                  :src="item.src"
                  class="img-fluid rounded-3 mb-3"
                  style="height: 180px; object-fit: cover"
                />

                <p
                  v-if="item.caption"
                  class="text-muted small mb-0"
                >
                  {{ item.caption }}
                </p>
              </div>

              <!-- VIDEO -->
              <div v-else-if="item.type === 'video'">
                <video
                  controls
                  class="w-100 rounded-3 mb-3"
                  style="height: 180px; object-fit: cover"
                >
                  <source :src="item.src" />
                </video>

                <p
                  v-if="item.caption"
                  class="text-muted small mb-0"
                >
                  {{ item.caption }}
                </p>
              </div>

              <!-- TEXT -->
              <div v-else-if="item.type === 'text'">
                <p class="text-body-secondary mb-0">
                  {{ item.content }}
                </p>
              </div>

              <!-- PDF -->
              <div
                v-else-if="item.type === 'pdf'"
                class="d-flex flex-column gap-2"
              >
                <div class="d-flex align-items-center gap-2">
                  <i class="bi bi-file-earmark-pdf-fill text-danger fs-3"></i>

                  <div>
                    <h6 class="mb-0">{{ item.title }}</h6>
                    <small class="text-muted">
                      {{ item.description }}
                    </small>
                  </div>
                </div>

                <a
                  :href="item.file"
                  target="_blank"
                  class="btn btn-sm btn-outline-danger mt-2"
                >
                  Buka / Download PDF
                </a>
              </div>

              <!-- DOCX -->
              <div
                v-else-if="item.type === 'docx'"
                class="d-flex flex-column gap-2"
              >
                <div class="d-flex align-items-center gap-2">
                  <i class="bi bi-file-earmark-word-fill text-primary fs-3"></i>

                  <div>
                    <h6 class="mb-0">{{ item.title }}</h6>
                    <small class="text-muted">
                      {{ item.description }}
                    </small>
                  </div>
                </div>

                <a
                  :href="item.file"
                  target="_blank"
                  class="btn btn-sm btn-outline-primary mt-2"
                >
                  Buka / Download DOCX
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {
  referenceTabs,
  referenceContent,
} from '@/data/portofolio/ReferensiData'

const activeReference = ref('soft-skills')
</script>


