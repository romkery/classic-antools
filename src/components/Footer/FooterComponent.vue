<template>
  <footer class="footer">
    <div class="footer__info">
      <BaseLogo />
      <BaseTextCard
        :title-text="textCardData[0].title"
        :sub-text="textCardData[0].sub"
        :sub-size="textCardData[0].subSize"
        :title-size="textCardData[0].titleSize"
      />
    </div>
    <div class="footer__links">
      <BaseTextCard
        :title-text="card.title"
        :sub-text="card.sub"
        :sub-size="card.subSize"
        :title-size="card.titleSize"
        v-for="(card, index) in textCardData.slice(1)"
        :key="index"
      />
    </div>
  </footer>
</template>

<script setup>
import BaseTextCard from "@/utils/BaseTextCard";
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
      '<a href="/section-hero">+621987463</a>',
      '<a href="/section-hero">M Building, No.10 A</a>',
      '<a href="/section-hero">antools@awesome.com </a>',
    ],
  },
  {
    title: "Categories",
    sub: [
      '<a href="/section-hero">Design</a>',
      '<a href="/section-hero">Development</a>',
    ],
  },
  {
    title: "Company Info",
    sub: [
      '<a href="/section-hero">About us</a>',
      '<a href="/section-hero">Our Partners</a>',
      '<a href="/section-hero">Blog</a>',
    ],
  },
];
</script>

<style lang="scss" scoped>
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.footer {
  width: 100%;
  height: rem(350);
  display: flex;
  flex-wrap: wrap;
  gap: rem(155);
  align-items: center;
  justify-content: center;
  border-top: rem(0.5) solid $white-tp-2;

  &__info {
    width: rem(260);
    display: flex;
    flex-direction: column;
    gap: rem(25);
  }

  &__links {
    display: flex;
    gap: rem(115);
    flex-wrap: wrap;
  }
}
</style>
