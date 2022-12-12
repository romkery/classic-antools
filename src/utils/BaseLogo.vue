<template>
  <div class="base-logo">
    <IconComponent name="LogoIcon" />
    <span>antools.</span>
  </div>
</template>

<script setup>
import IconComponent from "@/utils/IconComponent";
</script>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;
@use "../assets/scss/globals" as *;

.base-logo {
  display: flex;
  align-items: center;
  color: $white-tp-9;
  font-size: rem(22);
  font-weight: 600;
  gap: rem(12);

  svg {
    cursor: pointer;
  }
}
</style>
