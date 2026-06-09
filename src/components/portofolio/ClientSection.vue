<script setup>

</script>
<template>
  <div class="container">
    <!-- Section heading -->
    <div class="text-center mb-5">
      <h2 class="client-title fw-bold">Dipercaya Berbagai Instansi & Perusahaan</h2>

      <p class="client-subtitle">Beberapa client dan partner yang pernah bekerja sama</p>
    </div>

    <!-- Client search input -->
    <div class="row justify-content-center mb-5">
      <div class="col-md-6">
        <div class="input-group shadow-sm">
          <span class="input-group-text">
            <i class="bi bi-search"></i>
          </span>

          <input
            v-model="searchQuery"
            type="text"
            class="form-control"
            placeholder="Cari client atau instansi..."
          />
        </div>
      </div>
    </div>

    <!-- Client logo grid -->
    <div class="row g-4 justify-content-center">
      <div
        v-for="(item, index) in filteredImages"
        :key="index"
        class="col-6 col-sm-4 col-md-3 col-lg-2"
        data-aos="flip-right"
        data-aos-once="false"
      >
        <div class="client-card" @click="goToProject(item.name)">
          <!-- Client logo -->
          <div class="client-logo-wrapper">
            <img :src="item.src" :alt="item.name" class="client-logo" />
          </div>

          <!-- Client name -->
          <p class="client-name mb-0">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
