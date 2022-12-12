<template>
  <section id="brands" class="section-brands pt-200">
    <div class="section-brands__content">
      <h3 class="section-brands__content_title">
        Trusted more than 150+ brand
      </h3>
      <div class="section-brands__content_companies">
        <IconComponent
          v-for="brand in brands"
          :key="brand"
          :name="brand + 'Icon'"
          folder="brands"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import IconComponent from "@/utils/IconComponent";

const brands = ["Microsoft", "Google", "Slack", "WordPress"];
</script>

<style scoped lang="scss">
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.section-brands {
  @include breakpoint-down(sm) {
    padding-top: rem(100);
    text-align: center;
  }

  &__content {
    position: relative;
    bottom: rem(10);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: rem(55) rem(85);
    background: rgba(44, 53, 61, 0.2);
    border-radius: rem(25);
    gap: rem(55);

    &::after {
      position: absolute;
      z-index: -1;
      padding: rem(1);
      background: transparent;
      background: radial-gradient(
        circle farthest-side at 0% 0%,
        $pink-highlight,
        rgba(44, 53, 61, 0.2) 20%
      );
      border-radius: rem(25);
      content: "";
      inset: 0;
    }

    &::before {
      position: absolute;
      z-index: -1;
      padding: rem(1);
      background: transparent;
      background: linear-gradient(
        120deg,
        $pink-highlight 0%,
        rgba(44, 53, 61, 0.5) 100%
      );
      border-radius: rem(25);
      content: "";
      inset: 0;
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
    }

    &_title {
      margin: 0;
      color: $white-tp-8;
      font-size: rem(24);
      font-weight: 500;
      line-height: rem(36);
    }

    &_companies {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;

      @include breakpoint-down(sm) {
        flex-direction: column;
        gap: rem(20);
      }

      svg {
        @include breakpoint-down(sm) {
        }
      }
    }
  }
}
</style>
