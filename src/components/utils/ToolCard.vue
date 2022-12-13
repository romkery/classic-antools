<template>
  <div class="card">
    <div class="card__header">
      <IconComponent :name="getIconName()" folder="tools" />
      <p>
        {{ tool.name }}<br />
        <span>{{ tool.license }}</span>
      </p>
    </div>
    <div class="card__main">
      <p>{{ tool.description }}</p>
    </div>
    <div class="card__footer">
      <div class="card__footer-icons">
        <IconComponent
          name="HeartIcon"
          @click="setIsLiked"
          :isLiked="tool.isLiked"
        />
        <IconComponent name="FolderIcon" />
      </div>
      <BaseButton :style="{ width: '6.6rem', height: '2.6rem' }">
        <a :href="tool.link">Visit</a>
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconComponent from "@/components/utils/IconComponent.vue";
import BaseButton from "@/components/utils/BaseButton.vue";

interface ITool {
  name: string;
  license: string;
  description: string;
  img: string;
  isLiked: boolean;
  link: string;
}

interface IProps {
  tool: ITool;
}

const props = defineProps<IProps>();
const tool = props.tool;

const getIconName = (): string => {
  return tool.name.split(" ").join("") + "Icon";
};

const setIsLiked = () => {
  tool.isLiked = !props.tool.isLiked;
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/util/index" as *;
@use "../../assets/scss/globals/index" as *;

.card {
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
    background: rgba(40, 48, 54, 0.5);
    opacity: 1;
    transition: background 0ms;

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
      -webkit-mask: linear-gradient(#ffffff 0 0) content-box,
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

  &__header {
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

  &__main {
    p {
      font-size: rem(16);
      font-weight: 300;
      line-height: rem(30);
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
}
</style>
