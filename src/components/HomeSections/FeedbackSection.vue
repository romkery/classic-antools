<template>
  <section id="feedback" class="section-feedback pt-200">
    <div class="section-feedback__main">
      <FeedBackSectionInfo
        :tabs="tabs"
        :feedBackData="feedBackData"
        :isLeftSide="isLeftSide"
      />
      <div class="navigation">
        <span
          v-for="(tab, index) in tabs"
          :key="index"
          :class="tab.isShow && 'selected'"
        />
      </div>
      <div class="controls">
        <div class="controls_left" @click="slide(0)">
          <IconComponent name="ChevronIcon" />
        </div>
        <div class="controls_right" @click="slide(1)">
          <IconComponent name="ChevronIcon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import IconComponent from "@/utils/IconComponent.vue";
import FeedBackSectionInfo from "@/components/HomeSections/FeedBackSectionInfo.vue";

let isLeftSide = ref(false);

const slide = (direction: number) => {
  let active = tabs.findIndex((tab) => tab.isShow);
  tabs.forEach((tab) => (tab.isShow = !1));
  const infoCards = document.querySelectorAll("#feedback-info");
  console.log(infoCards);

  if (!direction) {
    for (let card of infoCards) {
      console.log(card);
      card.classList.remove("animation-right");
      card.classList.add("animation-left");
    }
    if (active === 0) {
      active = 3;
    }
    tabs[active - 1].isShow = !0;
  }
  if (direction) {
    for (let card of infoCards) {
      card.classList.remove("animation-left");
      card.classList.add("animation-right");
    }
    if (active === 2) {
      active = -1;
    }
    tabs[active + 1].isShow = !0;
  }
};

const tabs: { isShow: boolean }[] = reactive([
  { isShow: false },
  { isShow: true },
  { isShow: false },
]);

const feedBackData = [
  {
    name: "Steve Jobs",
    profession: "Co-Founder of Apple",
    quote:
      "The people who are crazy enough to think they can change the world are the ones who do.",
    img: "/src/assets/img/steve.png",
    id: 0,
  },
  {
    name: "Ronald Richards",
    profession: "Product Manager",
    quote:
      "Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.",
    img: "/src/assets/img/human.png",
    id: 1,
  },
  {
    name: "Pavel Durov",
    profession: "Owner of Telegram",
    quote:
      "Privacy is not for sale, and human rights should not be compromised out of fear or greed.",
    img: "/src/assets/img/pavel.png",
    id: 2,
  },
];
</script>

<style lang="scss">
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.section-feedback {
  width: 100%;
  @include breakpoint-down(sm) {
    padding-top: rem(100) !important;
  }

  &__main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: rem(100);

    .controls {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      cursor: pointer;

      &_left,
      &_right {
        display: flex;
        align-items: center;
        width: 50%;
        height: 100%;

        &:hover {
          svg {
            color: $orange-main;
          }
        }

        svg {
          @include transition();
          color: $white-tp-3;
          transform: rotate(180deg);
        }
      }

      &_right {
        justify-content: end;
        svg {
          transform: none;
        }
      }
    }

    .navigation {
      display: flex;
      gap: rem(18);

      .selected {
        background: $orange-main;
      }

      span {
        width: rem(44);
        height: rem(6);
        background: #283036;
        border-radius: rem(4);
      }
    }
  }
}
</style>
