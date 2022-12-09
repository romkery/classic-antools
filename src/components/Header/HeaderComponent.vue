<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <LogoIcon />
        <span>antools.</span>
      </div>
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
        <button
          aria-label="register button"
          class="header__authorization_register"
        >
          Sign Up
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import LogoIcon from "@/components/icons/logo-Icon.svg?component";
import ArrowIcon from "@/components/icons/arrow-Icon.svg?component";
</script>

<style lang="scss" scoped>
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.header {
  $header: &;
  display: flex;
  justify-content: center;
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: rem(48);
    max-width: rem(1224);
    padding: rem(26) rem(20) 0 rem(20);

    #{$header}__logo {
      display: flex;
      align-items: center;
      color: $white-tp-9;
      font-size: rem(22);
      gap: rem(12);
      font-weight: 600;

      svg {
        cursor: pointer;
      }
    }

    #{$header}__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: rem(30);

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
      gap: rem(30);
      font-weight: 600;

      &_login {
        width: rem(120);
        height: 100%;
        color: $white-tp-5;
        cursor: pointer;
        border-radius: rem(8);
        @include transition();

        &:hover {
          color: white;
        }
      }

      &_register {
        @extend .header__authorization_login;
        color: white;
        background: $orange-main;

        &:hover {
          background: $orange-main-700;
        }
      }
    }
  }
}
</style>
