<template>
  <header class="header">
    <div class="container">
      <BaseLogo role="button" tabindex="1" />
      <nav class="header__nav">
        <div class="header__nav_item">
          <a href="/home">Home</a>
        </div>
        <div class="header__nav_item">
          <a href="/categories">Categories</a>
          <ArrowIcon />
        </div>
        <div class="header__nav_item">
          <a href="/collections">My Collections</a>
        </div>
        <div class="header__nav_item">
          <a href="/blog">Blog</a>
        </div>
      </nav>
      <div class="header__authorization">
        <button aria-label="login button" class="header__authorization_login">
          Login
        </button>
        <BaseButton :style="{ width: '7.5rem', height: '3rem' }"
          >Sign Up
        </BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup>
import ArrowIcon from "@/components/icons/ArrowIcon";
import BaseButton from "@/components/utils/BaseButton";
import BaseLogo from "@/components/utils/BaseLogo";
</script>

<style lang="scss" scoped>
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.header {
  $header: &;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  backdrop-filter: blur(25px);
  z-index: 9999;

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: rem(48);
    max-width: rem(1224);
    padding: rem(26) rem(20) rem(10) rem(20);

    #{$header}__logo {
      display: flex;
      align-items: center;
      color: $white-tp-9;
      font-size: rem(22);
      font-weight: 600;
      gap: rem(12);

      svg {
        cursor: pointer;
      }
    }

    #{$header}__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: rem(30);

      @include breakpoint-down(lg) {
        display: none;
      }

      &_item {
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        gap: rem(5);

        &:hover {
          a {
            color: white;
          }
        }

        svg {
          padding-top: rem(4);
        }

        a {
          @include transition();
          color: $white-tp-5;
          font-weight: 500;
        }
      }
    }

    #{$header}__authorization {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      gap: rem(30);

      @include breakpoint-down(sm) {
        display: none;
      }

      &_login {
        width: rem(120);
        height: 100%;
        border-radius: rem(8);
        cursor: pointer;
        color: $white-tp-5;
        @include transition();

        &:hover {
          color: white;
        }
      }

      &_register {
        @extend .header__authorization_login;
        background: $orange-main;
        color: white;

        &:hover {
          background: $orange-main-700;
        }
      }
    }
  }
}
</style>
