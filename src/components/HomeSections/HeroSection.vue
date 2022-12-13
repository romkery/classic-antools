<template>
  <section id="hero" class="section-hero">
    <div class="section-hero__main">
      <h1 class="section-hero__main_tagline">
        Awesome tools for <br />
        Designer & Developer<span>.</span>
      </h1>
      <p class="section-hero__main_description">
        Antool is a web collection of information on paid or <br />
        free Design and Development tools
      </p>
      <BaseInput
        button-text="Search"
        placeholder="find more than 430+ tools..."
        icon="SearchIcon"
      />
      <div class="section-hero__main_socials">
        <a :href="social.slice(0, -4)" v-for="social in socials" :key="social">
          <IconComponent :name="social" folder="socials" />
        </a>
      </div>
    </div>
    <IconComponent name="HeroIcon" class="section-hero__img" />
  </section>
</template>

<script setup>
import BaseInput from "@/components/utils/BaseInput";
import IconComponent from "@/components/utils/IconComponent";

const socials = ["FacebookIcon", "InstagramIcon", "TwitterIcon"];
</script>

<style scoped lang="scss">
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.section-hero {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @include breakpoint-down(sm) {
    text-align: center;
    margin-top: rem(50);
  }

  &::before {
    position: absolute;
    top: rem(-185);
    left: rem(-110);
    z-index: -1;
    width: rem(1324);
    height: rem(700);
    background-color: hsl(207, 8%, 27%);
    content: "";

    @include breakpoint-down(lg) {
      width: calc(100% + rem(40));
      left: rem(-20);
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: rem(105);
    gap: rem(30);

    @include breakpoint-down(sm) {
      align-items: center;
    }

    &_tagline {
      margin: 0;
      color: $white-tp-9;
      font-size: rem(50);
      font-weight: 500;
      line-height: rem(70);

      span {
        color: $orange-main;
      }
    }
    &_description {
      color: $white-tp-6;
      font-size: rem(18);
      font-weight: 400;
      line-height: rem(30);
    }

    &_socials {
      display: flex;
      justify-content: center;
      align-items: center;
      width: rem(200);
      height: rem(50);
      gap: rem(8);

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(58);
        height: rem(58);
        background-color: $background-main;
        border-radius: rem(8);

        @include breakpoint-down(sm) {
          text-align: center;
          background: $white-tp-1;
        }
      }
    }
  }

  &__img {
    position: absolute;
    right: rem(10);
    z-index: -1;
    width: rem(1323);
    height: rem(910);

    @include breakpoint-down(lg) {
      width: rem(824);
      height: rem(780);
    }

    @include breakpoint-down(md) {
      width: rem(724);
      height: rem(568);
    }
  }
}
</style>
