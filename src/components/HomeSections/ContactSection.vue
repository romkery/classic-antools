<template>
  <section id="contacts" class="section-contact">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: rem(240) 0;
  gap: rem(100);

  &__text {
    max-width: rem(550);
    text-align: center;

    h2 {
      color: $white-tp-9;
      font-size: rem(48);
      font-weight: 500;
      line-height: rem(62);
    }
    p {
      padding: 0 rem(62);
      color: $white-tp-5;
      font-size: rem(18);
      line-height: rem(30);
    }
  }
}
</style>
