<template>
  <footer class="footer">
    <div class="footer__info">
      <BaseLogo />
      <FooterTextCard
        :title-text="textCardData[0].title"
        :sub-text="textCardData[0].sub"
        :sub-size="textCardData[0].subSize"
        :title-size="textCardData[0].titleSize"
        ><h3>{{ textCardData[0].title }}</h3></FooterTextCard
      >
    </div>
    <div class="footer__links">
      <FooterTextCard
        :title-text="card.title"
        :sub-text="card.sub"
        :sub-size="card.subSize"
        :title-size="card.titleSize"
        v-for="(card, index) in textCardData.slice(1)"
        :key="index"
        ><h3>{{ card.title }}</h3></FooterTextCard
      >
    </div>
  </footer>
</template>

<script setup>
import FooterTextCard from "@/utils/FooterTextCard";
import BaseLogo from "@/utils/BaseLogo";

const textCardData = [
  {
    title: "Copyright 2021. Antools",
    sub: "Antool is a web collection of information on paid or free Design and Development tools",
    titleSize: "1rem",
    subSize: "0.8rem",
  },
  {
    title: "Contact Us",
    sub: [
      '<a href="#contacts">+621987463</a>',
      '<a href="#contacts">M Building, No.10 A</a>',
      '<a href="#contacts">antools@awesome.com </a>',
    ],
  },
  {
    title: "Categories",
    sub: ['<a href="#hero">Design</a>', '<a href="#hero">Development</a>'],
  },
  {
    title: "Company Info",
    sub: [
      '<a href="#tools">About us</a>',
      '<a href="#newcomer">Our Partners</a>',
      '<a href="#feedback">Blog</a>',
    ],
  },
];
</script>

<style lang="scss" scoped>
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: rem(350);
  border-top: rem(0.5) solid $white-tp-2;
  gap: rem(155);

  @include breakpoint-down(sm) {
    flex-direction: column;
    gap: rem(50);
  }

  @include breakpoint-down(md) {
    width: 100%;
    padding: rem(40) 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: rem(260);
    gap: rem(25);

    @include breakpoint-down(md) {
      width: rem(170);
    }
  }

  &__links {
    display: flex;
    gap: rem(115);

    @include breakpoint-down(md) {
      flex-direction: column;
    }

    @include breakpoint-down(lg) {
      gap: rem(50);
    }
  }
}
</style>
