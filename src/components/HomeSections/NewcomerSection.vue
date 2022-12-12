<template>
  <section id="newcomer" class="section-newcomer">
    <div class="section-newcomer__info">
      <h2>Newcomer tools</h2>
      <p>
        Wow! see the latest update of the most recommended tools from reliable
        designers and developers
      </p>
      <BaseButton :style="{ width: '12.5rem', height: '3rem' }"
        >Explore more</BaseButton
      >
    </div>
    <div class="section-newcomer__grid">
      <ToolCard
        v-for="tool in toolsData"
        :tool="tool"
        :key="tool.name"
        :card="{ height: '17.81rem', width: '17.81rem' }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import ToolCard from "@/utils/ToolCard.vue";
import BaseButton from "@/utils/BaseButton.vue";

interface ITool {
  name: string;
  license: string;
  description: string;
  isLiked: boolean;
  link: string;
}

const toolsData = reactive<ITool[]>([
  {
    name: "Zeplin",
    license: "Free & Paid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isLiked: false,
    link: "https://zeplin.io/",
  },
  {
    name: "PHPStorm",
    license: "Free",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isLiked: true,
    link: "https://www.jetbrains.com/ru-ru/phpstorm/",
  },
  {
    name: "Toolbox",
    license: "Free",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isLiked: false,
    link: "https://www.jetbrains.com/ru-ru/toolbox-app/",
  },
  {
    name: "Procreate",
    license: "Paid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isLiked: false,
    link: "https://procreate.com/",
  },
]);
</script>

<style scoped lang="scss">
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.section-newcomer {
  display: flex;
  width: 100%;
  justify-content: space-between;

  &__info {
    display: flex;
    flex-direction: column;
    max-width: rem(420);
    gap: rem(30);

    h2 {
      font-weight: 500;
      font-size: rem(48);
      line-height: rem(62);
      color: $white-tp-9;
      margin: 0;
    }

    p {
      font-size: rem(18);
      line-height: rem(30);
      color: $white-tp-5;
      padding-bottom: rem(30);
    }
  }
  &__grid {
    display: grid;
    grid-gap: rem(24);
    grid-template-columns: repeat(2, minmax(0, rem(285)));
  }
}
</style>
