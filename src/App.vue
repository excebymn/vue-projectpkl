<script setup>
import HeaderLayout from './views/layouts/headerLayout.vue'
import FooterLayout from './views/layouts/footerLayout.vue'
import FloatingButtons from './views/layouts/FloatingButtons.vue'
import CallToActionLayout from './views/layouts/CallToActionLayout.vue'
</script>

<template>
  <div class="bg-cream">
    <HeaderLayout />
    <RouterView />
    <FloatingButtons />
    <CallToActionLayout />
    <FooterLayout />
  </div>
</template>

<style scoped></style>
