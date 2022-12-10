<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import Header from "@/components/Header/HeaderComponent.vue";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
  router.push({ name: "home" });
});
</script>

<template>
  <div class="App">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped></style>
