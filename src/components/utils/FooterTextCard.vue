<template>
  <div class="text-card">
    <h3 :style="{ fontSize: titleSize }">{{ titleText }}</h3>
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
  titleText: any;
  subText: any;
  subSize?: string;
  subLine?: string;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
@use "../../assets/scss/util/index" as *;
@use "../../assets/scss/globals/index" as *;

.text-card {
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  gap: rem(20);

  h3 {
    margin: 0;
    color: $white-tp-9;
    font-size: rem(20);
    font-weight: 500;
    line-height: rem(30);
  }

  p {
    color: $white-tp-5;
    line-height: rem(24);
  }

  &__links {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    gap: rem(10);
  }
}
</style>
