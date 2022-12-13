<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
  router.push({ name: "home" });
});
</script>

<template>
  <div class="App">
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<style scoped>
.App {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  align-items: center;
}
</style>
