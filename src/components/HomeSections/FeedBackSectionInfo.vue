<template>
  <div
    class="info"
    :id="`feedback-info-${human.name}`"
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
  isLeftSide: boolean;
}
const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
@use "../../assets/scss/util" as *;
@use "../../assets/scss/globals" as *;

@keyframes slide-right {
  0% {
    margin-right: rem(500);
  }
  100% {
    margin-right: rem(0);
  }
}
@keyframes slide-left {
  0% {
    margin-left: rem(500);
  }
  100% {
    margin-left: rem(0);
  }
}

.animation-left {
  animation: 450ms slide-right ease-in-out;
}
.animation-right {
  animation: 450ms slide-left ease-in-out;
}

.info {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: rem(25);
  gap: rem(60);

  @include breakpoint-down(sm) {
    flex-direction: column;
    -ms-flex-direction: column;
  }

  &__human {
    position: relative;
    display: flex;
    justify-content: end;
    align-items: end;
    width: rem(400);
    height: rem(500);
    background-image: url("../../assets/img/human.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    @include breakpoint-down(sm) {
      width: rem(300);
      height: rem(350);
    }

    &::after {
      position: absolute;
      right: rem(10);
      bottom: rem(35);
      z-index: -1;
      width: rem(30);
      height: rem(30);
      background: #007acc;
      content: "";
    }

    &_name {
      position: relative;
      padding: rem(10) rem(22) rem(16) rem(22);
      margin-bottom: rem(30);
      background: rgba(40, 48, 54, 0.2);
      border-radius: rem(8);
      -webkit-backdrop-filter: blur(25px);
      backdrop-filter: blur(25px);

      @supports not (
        (backdrop-filter: blur(25px)) or (-webkit-backdrop-filter: blur(25px))
      ) {
        background: $background-main-tp-8;
      }

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
        position: absolute;
        z-index: -1;
        padding: rem(1);
        border-radius: rem(8);
        content: "";
      }

      p {
        color: $white-tp-8;
        font-size: rem(26);
        line-height: rem(30);
        letter-spacing: 0.015em;

        span {
          color: $white-tp-5;
          font-size: rem(16);
          font-weight: 300;
          line-height: rem(24);
        }
      }
    }
  }

  &__description {
    width: rem(410);

    @include breakpoint-down(sm) {
      width: 100%;
    }

    p {
      position: relative;
      color: rgba(255, 255, 255, 0.78);
      font-size: rem(14);
      font-weight: 300;
      line-height: rem(30);
      letter-spacing: 0.015em;

      &::before {
        position: absolute;
        top: rem(-80);
        left: rem(-80);
        display: inline-block;

        background: linear-gradient(
          188.88deg,
          rgba(252, 252, 252, 0.01) 20.34%,
          rgba(255, 255, 255, 0.5) 155.72%
        );
        font-family: "Lora", serif;
        font-size: rem(250);
        line-height: 1;
        letter-spacing: -0.06em;

        transform: rotate(19.17deg);
        content: "‘‘";
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
