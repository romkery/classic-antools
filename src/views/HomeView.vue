<template>
  <main>
    <div class="container">
      <HeroSection />
      <ToolsSection />
      <BrandsSection />
      <NewcomerSection />
      <FeedbackSection />
      <ContactSection />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;
@use "../assets/scss/globals" as *;

main {
  height: 100%;
  width: 100%;
}
.container {
  height: 100%;
  max-width: rem(1225);
  padding: 0 rem(20);
  margin: 0 auto;
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
