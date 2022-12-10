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
      <div class="section-hero__main_search">
        <div class="container">
          <SearchIcon />
          <input type="text" placeholder="find more than 430+ tools..." />
          <button>Search</button>
        </div>
      </div>
      <div class="section-hero__main_socials">
        <a :href="social.slice(0, -4)" v-for="social in socials" :key="social">
          <Icon :name="social" />
        </a>
      </div>
    </div>
    <Icon name="HeroIcon" class="section-hero__img" />
  </section>
</template>

<script setup>
import SearchIcon from "@/components/icons/SearchIcon";
import Icon from "@/utils/IconComponent";

const socials = ["FacebookIcon", "InstagramIcon", "TwitterIcon"];
</script>

<style scoped lang="scss">
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.section-hero {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: rem(624);
  max-width: rem(1224);

  &::before {
    position: absolute;
    top: rem(-185);
    left: rem(-110);
    z-index: -1;
    width: rem(1324);
    height: rem(702);
    background-color: hsl(207, 8%, 27%);
    content: "";
    overflow: auto;
  }

  &__main {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: rem(105);
    gap: rem(30);

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
    &_search {
      $search: &;
      width: rem(500);
      height: rem(64);
      background: $background-main;
      border-radius: rem(15);

      .container {
        display: flex;
        align-items: center;
        padding: rem(8) rem(11);
        gap: rem(15);

        input {
          flex-grow: 1;

          &:focus {
            #{$search} {
              border: 10px solid skyblue;
            }
            .container {
              border: 1px solid skyblue;
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
      }
    }
  }

  &__img {
    position: absolute;
    right: rem(10);
    z-index: -1;
    width: rem(1323);
    height: rem(910);
  }
}
</style>
