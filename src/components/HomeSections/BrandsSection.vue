<template>
  <section id="brands" class="section-brands">
    <h3 class="section-brands__title">Trusted more than 150+ brand</h3>
    <div class="section-brands__companies">
      <IconComponent
        v-for="brand in brands"
        :key="brand"
        :name="brand + 'Icon'"
        folder="brands"
      />
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
  display: flex;
  flex-direction: column;
  margin-top: rem(200);
  bottom: rem(10);
  background: rgba(44, 53, 61, 0.2);
  border-radius: rem(25);
  align-items: center;
  gap: rem(55);
  padding: rem(55) rem(85);
  position: relative;

  &::after {
    position: absolute;
    z-index: -1;
    padding: rem(1);
    background: transparent;
    content: "";
    inset: 0;
    background: radial-gradient(
      circle farthest-side at 0% 0%,
      $pink-highlight,
      rgba(44, 53, 61, 0.2) 20%
    );
    border-radius: rem(25);
  }

  &::before {
    border-radius: rem(25);
    position: absolute;
    z-index: -1;
    padding: rem(1);
    background: transparent;
    content: "";
    background: linear-gradient(
      120deg,
      $pink-highlight 0%,
      rgba(44, 53, 61, 0.5) 100%
    );
    inset: 0;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
  }

  &__title {
    font-weight: 500;
    margin: 0;
    font-size: rem(24);
    line-height: rem(36);
    color: $white-tp-8;
  }
  &__companies {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
