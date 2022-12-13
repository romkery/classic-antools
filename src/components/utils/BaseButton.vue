<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "../../assets/scss/util/index" as *;
@use "../../assets/scss/globals/index" as *;

.base-button {
  width: rem(100);
  height: rem(36);
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
