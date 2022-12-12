<template>
  <div class="base-input">
    <IconComponent :name="icon" :folder="iconFolder ?? ''" />
    <input
      type="text"
      :placeholder="placeholder ?? 'find more than 430+ tools...'"
    />
    <BaseButton :style="{ width: '12.5rem', height: '3rem' }">
      {{ buttonText ?? "Search" }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/utils/BaseButton";
import IconComponent from "@/utils/IconComponent.vue";

interface IProps {
  icon?: string;
  iconFolder?: string;
  buttonText: string;
  placeholder: string;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;
@use "../assets/scss/globals" as *;

.base-input {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: rem(500);
  background: $background-main;
  border-radius: rem(15);
  border: rem(1) solid transparent;
  padding: rem(0) rem(11) rem(0) rem(18);
  gap: rem(14);

  &:focus-within,
  &:hover {
    @include transition();
    border: rem(1) solid $orange-main;
  }

  input {
    width: 100%;
    padding: rem(20) 0;
  }

  svg {
    width: rem(35);
    height: rem(35);
  }
}
</style>
