<template>
  <main class="container">
    <HeroSection />
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;
@use "../assets/scss/globals" as *;

.container {
  max-width: rem(1225);
  width: 100%;
  margin: 0 auto;
  height: 100%;
}
</style>
<script setup>
import HeroSection from "@/components/HomeSections/HeroSection.vue";
</script>
