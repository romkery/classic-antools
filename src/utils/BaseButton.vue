<template>
  <button class="base-button" :style="{ width: width, height: height }">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  width: string;
  height: string;
}

const { width, height } = defineProps<IProps>();
</script>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;
@use "../assets/scss/globals" as *;

.base-button {
  width: rem(50);
  height: rem(10);
  background: $orange-main;
  border-radius: rem(8);
  cursor: pointer;
  @include transition();
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: $orange-main-700;
  }
}
</style>
