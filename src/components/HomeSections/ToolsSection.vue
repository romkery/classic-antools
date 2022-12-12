<template>
  <section id="tools" class="section-tools">
    <div class="section-tools__title">
      <h2>Most Popular Tools</h2>
      <p>
        Tools for the best Designers and Developers <br />
        most popularly used in the world
      </p>
    </div>
    <div class="section-tools__grid">
      <ToolCard v-for="(tool, index) in toolsData" :tool="tool" :key="index" />
    </div>
    <button class="section-tools__more">Load more</button>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import ToolCard from "@/utils/ToolCard.vue";

interface ITool {
  name: string;
  license: string;
  description: string;
  isLiked: boolean;
  link: string;
}

const toolsData = reactive<ITool[]>([
  {
    name: "FIGMA",
    license: "Free",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isLiked: false,
    link: "https://www.figma.com/",
  },
  {
    name: "Sketch",
    license: "Trial & Paid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isLiked: true,
    link: "https://www.sketch.com/",
  },
  {
    name: "Visual Studio Code",
    license: "Free",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isLiked: false,
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Notion",
    license: "Free & Paid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isLiked: false,
    link: "https://www.notion.so/",
  },
  {
    name: "Slack",
    license: "Free & Paid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isLiked: false,
    link: "https://slack.com/",
  },
  {
    name: "Invision",
    license: "Trial & Paid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isLiked: false,
    link: "https://www.invisionapp.com/",
  },
]);
</script>

<style scoped lang="scss">
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.section-tools {
  $section-tools: &;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: rem(100);

  &__title {
    h2 {
      padding-bottom: rem(25);
      margin: 0;
      color: $white-tp-9;
      text-align: center;
      font-size: rem(48);
      font-weight: 500;
      line-height: rem(62);
    }

    p {
      color: $white-tp-5;
      text-align: center;
      font-size: rem(18);
      line-height: rem(30);
    }
  }

  &__grid {
    display: grid;
    justify-content: center;
    grid-gap: rem(24);
    grid-template-columns: repeat(3, minmax(0, rem(392)));
    width: 100%;
  }

  &__more {
    width: rem(185);
    padding: rem(17) rem(38);
    border: rem(1) solid $white-tp-1;
    border-radius: rem(8);
    cursor: pointer;
    color: $orange-main;
    @include transition();

    &:hover {
      border: rem(1) solid $white-tp-3;
      color: $orange-main-700;
    }
  }
}
</style>
