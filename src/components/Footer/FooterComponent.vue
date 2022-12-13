<template>
  <footer>
    <div class="footer">
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
          v-for="(card, index) in textCardData.slice(1)"
          :key="index"
          @click="setScrollBehavior"
          ><h3>{{ card.title }}</h3></FooterTextCard
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterTextCard from "@/components/utils/FooterTextCard";
import BaseLogo from "@/components/utils/BaseLogo";

const setScrollBehavior = () => {
  document.documentElement.style.scrollBehavior = "smooth";
  setTimeout(
    () => (document.documentElement.style.scrollBehavior = "auto"),
    100
  );
};

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

footer {
  height: 100%;
  max-width: rem(1225);
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .footer {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: rem(350);
    border-top: rem(0.5) solid $white-tp-2;
    gap: rem(155);
    padding: 0 rem(20);

    @include breakpoint-down(sm) {
      flex-direction: column;
      -ms-flex-direction: column;
      gap: rem(50);
    }

    @include breakpoint-down(xl) {
      gap: rem(55);
    }
    @include breakpoint-down(lg) {
      gap: rem(20);
      padding: rem(40) rem(20);
    }

    &__info {
      display: flex;
      flex-direction: column;
      -ms-flex-direction: column;
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
        -ms-flex-direction: column;
      }

      @include breakpoint-down(lg) {
        gap: rem(40);
      }
    }
  }
}
</style>
