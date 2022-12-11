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
      <div
        class="section-tools__card"
        v-for="(tool, index) in toolsData"
        :key="tool.name"
      >
        <div class="section-tools__card_header">
          <img :src="tool.img" :alt="tool.name.toLowerCase() + ' logo'" />
          <p>
            {{ tool.name }}<br />
            <span>{{ tool.license }}</span>
          </p>
        </div>
        <div class="section-tools__card_main">
          <p>{{ tool.description }}</p>
        </div>
        <div class="section-tools__card_footer">
          <div class="section-tools__card_footer-icons">
            <IconComponent
              name="HeartIcon"
              @click="setIsLiked(index)"
              :isLiked="tool.isLiked"
            />
            <IconComponent name="FolderIcon" />
          </div>
          <button>Visit</button>
        </div>
      </div>
    </div>
    <button class="section-tools__more">Load more</button>
  </section>
</template>

<script setup lang="ts">
/* eslint-disable no-undef */
import { reactive } from "vue";
import IconComponent from "@/utils/IconComponent.vue";

interface ITool {
  name: string;
  license: string;
  description: string;
  img: string;
  isLiked: boolean;
  link: string;
}

const toolsData = reactive<ITool[]>([
  {
    name: "FIGMA",
    license: "Free",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: require("@/assets/img/popular-tools/figma.png"),
    isLiked: false,
    link: "https://www.figma.com/",
  },
  {
    name: "Sketch",
    license: "Trial & Paid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: require("@/assets/img/popular-tools/sketch.png"),
    isLiked: true,
    link: "https://www.sketch.com/",
  },
  {
    name: "Visual Studio Code",
    license: "Free",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: require("@/assets/img/popular-tools/vscode.png"),
    isLiked: false,
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Notion",
    license: "Free & Paid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: require("@/assets/img/popular-tools/notion.png"),
    isLiked: false,
    link: "https://www.notion.so/",
  },
  {
    name: "Slack",
    license: "Free & Paid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: require("@/assets/img/popular-tools/slack.png"),
    isLiked: false,
    link: "https://slack.com/",
  },
  {
    name: "Invision",
    license: "Trial & Paid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: require("@/assets/img/popular-tools/invision.png"),
    isLiked: false,
    link: "https://www.invisionapp.com/",
  },
]);

const setIsLiked = (index: number) => {
  toolsData[index].isLiked = !toolsData[index].isLiked;
};
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

    #{$section-tools}__card {
      display: flex;
      flex-direction: column;
      background: transparent;
      opacity: 0.5;
      @include transition();
      position: relative;
      justify-content: space-between;
      padding: rem(30);
      border-radius: rem(15);
      gap: rem(30);

      &::after {
        position: absolute;
        z-index: -1;
        padding: rem(1);
        background: transparent;
        border-radius: rem(15);
        content: "";
      }

      &::before {
        position: absolute;
        z-index: -1;
        padding: rem(1);
        background: transparent;
        border-radius: rem(15);
        content: "";
      }

      &:hover {
        opacity: 1;
        transition: background 0ms;
        background: rgba(40, 48, 54, 0.5);

        &::before {
          background: linear-gradient(
              145deg,
              $white-tp-2 0,
              rgba(40, 48, 54, 0.5) 20%
            ),
            radial-gradient(
              circle farthest-side at 90% 10%,
              $orange-main,
              rgba(40, 48, 54, 0.1) 25%
            );
          inset: 0;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        }

        &::after {
          inset: 0;
          background: radial-gradient(
            circle farthest-side at 90% 10%,
            rgba(255, 109, 46, 0.2),
            rgba(40, 48, 54, 0.1) 25%
          );
        }
      }

      &_header {
        position: relative;
        display: flex;
        gap: rem(30);

        img {
          max-width: rem(64);
          max-height: rem(64);
        }

        p {
          font-size: rem(24);
          font-weight: 500;
          line-height: rem(36);
          span {
            color: $orange-main;
            font-size: rem(18);
            font-weight: 300;
            line-height: rem(27);
          }
        }
      }

      &_main {
        p {
          font-size: rem(16);
          font-weight: 300;
          line-height: rem(30);
        }
      }

      &_footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        user-select: none;

        &-icons {
          display: flex;
          gap: rem(12);

          svg {
            padding: rem(8);
            cursor: pointer;

            &:hover {
              box-shadow: 0 5px 10px -3px rgba(18, 18, 18, 0.15);
              background: #283036;
              border-radius: 8px;
            }
          }
        }

        button {
          width: rem(130);
          height: rem(48);
          background: $orange-main;
          border-radius: rem(8);
          cursor: pointer;
          @include transition();
          &:hover {
            background: $orange-main-700;
          }
        }
      }
    }
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
