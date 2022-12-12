<template>
  <section id="brands" class="section-contact">
    <div class="section-contact__text">
      <h2>Become a contributor?</h2>
      <p>
        Join us and get tips & tricks to become a great Designer and Developer
      </p>
    </div>
    <BaseInput
      placeholder="Enter your email..."
      button-text="Join Us"
      style="width: 100%; background: #283036"
    />
  </section>
</template>

<script setup lang="ts">
import BaseInput from "@/utils/BaseInput";
</script>

<style scoped lang="scss">
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.section-contact {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: rem(100);
  padding-bottom: rem(240);
  padding-top: rem(40);

  &__text {
    text-align: center;
    max-width: rem(550);

    h2 {
      font-weight: 500;
      font-size: rem(48);
      line-height: rem(62);
      color: $white-tp-9;
    }
    p {
      font-size: rem(18);
      line-height: rem(30);
      color: $white-tp-5;
      padding: 0 rem(62);
    }
  }
}
</style>
