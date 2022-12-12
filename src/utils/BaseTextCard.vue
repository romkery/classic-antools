<template>
  <div class="text-card">
    <h1 :style="{ fontSize: titleSize }">{{ titleText }}</h1>
    <div class="text-card__links" v-if="typeof subText !== 'string'">
      <p
        :style="{ fontSize: subSize }"
        v-for="(text, index) in subText"
        v-html="text"
        :key="index"
      ></p>
    </div>
    <p :style="{ fontSize: subSize }" v-else>{{ subText }}</p>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  titleSize?: string;
  titleLine?: string;
  titleText: string;
  subText: string;
  subSize?: string;
  subLine?: string;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;
@use "../assets/scss/globals" as *;

.text-card {
  display: flex;
  gap: rem(20);
  flex-direction: column;

  h1 {
    margin: 0;
    font-weight: 500;
    font-size: rem(20);
    line-height: rem(30);
    color: $white-tp-9;
  }

  p {
    line-height: rem(24);
    color: $white-tp-5;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: rem(10);
  }
}
</style>
