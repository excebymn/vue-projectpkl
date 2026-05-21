<script setup>
import HeaderLayout from './views/layouts/headerLayout.vue'
import FooterLayout from './views/layouts/footerLayout.vue'
import FloatingButtons from './views/layouts/FloatingButtons.vue'
import CallToActionLayout from './views/layouts/CallToActionLayout.vue'
</script>

<template>
  <HeaderLayout />
  <RouterView />
  <FloatingButtons />
  <CallToActionLayout />
  <FooterLayout />
</template>

<style scoped></style>
