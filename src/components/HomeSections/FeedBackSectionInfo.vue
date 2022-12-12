<template>
  <div
    class="info"
    v-for="human in props.feedBackData"
    v-show="props.tabs[human.id].isShow"
    :key="human.id"
  >
    <div class="info__human" :style="{ backgroundImage: `url(${human.img})` }">
      <div class="info__human_name">
        <p>
          {{ human.name }}
          <br />
          <span>{{ human.profession }}</span>
        </p>
      </div>
    </div>
    <div class="info__description">
      <p>
        {{ human.quote }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  tabs: { isShow: boolean }[];
  feedBackData: {
    name: string;
    profession: string;
    quote: string;
    img: string;
    id: number;
  };
}
const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

.info {
  display: flex;
  width: 100%;
  gap: rem(60);
  align-items: center;
  justify-content: center;

  &__human {
    width: rem(400);
    height: rem(500);
    background-image: url("../../assets/img/human.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: end;
    justify-content: end;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      width: rem(30);
      height: rem(30);
      background: #007acc;
      bottom: rem(30);
      right: rem(10);
      z-index: -1;
    }

    &_name {
      margin-bottom: rem(30);
      background: rgba(40, 48, 54, 0.2);
      backdrop-filter: blur(25px);
      border-radius: rem(8);
      padding: rem(10) rem(22) rem(16) rem(22);

      &::before {
        background: linear-gradient(
          90deg,
          $white-tp-1 0,
          rgba(40, 48, 54, 0.5) 60%
        );
        inset: 0;
        -webkit-mask: linear-gradient(#ffffff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        content: "";
        position: absolute;
        z-index: -1;
        padding: rem(1);
        border-radius: rem(8);
      }

      p {
        font-size: rem(26);
        line-height: rem(30);
        letter-spacing: 0.015em;
        color: $white-tp-8;

        span {
          font-weight: 300;
          font-size: rem(16);
          line-height: rem(24);
          color: $white-tp-5;
        }
      }
    }
  }

  &__description {
    width: rem(410);

    p {
      font-weight: 300;
      font-size: rem(14);
      line-height: rem(30);
      letter-spacing: 0.015em;
      color: rgba(255, 255, 255, 0.78);
      position: relative;

      &::before {
        font-family: "Lora", serif;
        content: "‘‘";
        position: absolute;
        display: inline-block;
        font-size: rem(250);
        letter-spacing: -0.06em;
        line-height: 1;
        left: rem(-80);
        top: rem(-80);

        background: linear-gradient(
          188.88deg,
          rgba(252, 252, 252, 0.01) 20.34%,
          rgba(255, 255, 255, 0.5) 155.72%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        transform: rotate(19.17deg);
      }
    }
  }
}
</style>
