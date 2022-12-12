<template>
  <main class="container">
    <HeroSection />
    <ToolsSection />
    <BrandsSection />
    <NewcomerSection />
    <FeedbackSection />
    <ContactSection />
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;
@use "../assets/scss/globals" as *;

.container {
  display: flex;
  flex-direction: column;
  gap: rem(200);
  max-width: rem(1225);
  width: 100%;
  margin: 0 auto;
  height: 100%;
}
</style>
<script setup>
import HeroSection from "@/components/HomeSections/HeroSection.vue";
import ToolsSection from "@/components/HomeSections/ToolsSection";
import BrandsSection from "@/components/HomeSections/BrandsSection";
import NewcomerSection from "@/components/HomeSections/NewcomerSection";
import FeedbackSection from "@/components/HomeSections/FeedbackSection";
import ContactSection from "@/components/HomeSections/ContactSection";
</script>
