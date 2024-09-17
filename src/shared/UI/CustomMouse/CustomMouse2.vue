<script setup lang="ts">
const { isDesktop } = useDevice();


// Posiitons
const xPos = ref(0);
const yPos = ref(0);
const hover = ref(false);
const leave = ref(true);

function mouseCover(e: MouseEvent, val: boolean = false) {
  const target = e.target as Element;
  if (
    target.closest("button") ||
    target.closest("a") ||
    target.closest("input")
  ) {
    hover.value = val;
  }
}
function mouseLeave() {
  leave.value = true;
}

interface DotStyles {
  top: string;
  left: string;
}

interface DotObj {
  index: number;
  css: DotStyles;
}

const dots = ref([] as DotObj[]);
function mouseMove(e: MouseEvent) {
  xPos.value = e.clientX;
  yPos.value = e.clientY;
  const dot = {
    index: new Date().getTime(),
    css: { top: e.clientY + "px", left: e.clientX + "px" },
  };
  dots.value.push(dot);
  setTimeout(() => {
    dots.value = dots.value.filter((item) => item.index !== dot.index);
  }, 1500);

  if (leave.value == true) {
    leave.value = false;
  }
}

function mouseOver(e: MouseEvent) {
  mouseCover(e, true);
}
function mouseOut(e: MouseEvent) {
  mouseCover(e, false);
}

onMounted(() => {
  if (isDesktop) {
    document.documentElement.addEventListener("mousemove", mouseMove);
    document.documentElement.addEventListener("mouseover", mouseOver);
    document.documentElement.addEventListener("mouseout", mouseOut);
    document.documentElement.addEventListener("mouseleave", mouseLeave);
  }
});
</script>
<template>
  <div  class="mouse-cover">
    <span
      v-for="dot in dots"
      :key="dot.index"
      :style="{ top: `${dot.css.top}`, left: `${dot.css.left}` }"
      class="dot">
      <div class="dot__inner"></div>
    </span>
    <div
      :class="{ 'hovered': hover, 'leave': leave }"
      class="mouse"
      :style="{ top: `${yPos}px`, left: `${xPos}px` }">
      <!-- :style="{ top: `${yPos}px`, left: `${xPos}px` }" -->
      <!-- :style="{ transform: `translate(${xPos}px, ${yPos}px)` }" -->
      <div class="mouse__inner"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media (any-hover: hover) {
  .mouse-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    pointer-events: none;
    mix-blend-mode: difference;
  }
  .mouse {
    position: absolute;
    top: 0%;
    left: 0%;
    // top: toRem(-15);
    // left: toRem(-15);
    // transform: translate(-50%, -50%);
    width: toRem(15);
    height: toRem(15);
    // border-radius: 50%;
    // background-color: red;
    opacity: 1;
    visibility: visible;
    @include transMultiple(opacity visibility, $trsDur, ease, 0s);
    &.hovered {
      .mouse__inner {
        &::after {
          transform: scale(1.5);
        }
      }
    }
    &.leave {
      opacity: 0;
      visibility: visible;
    }
    // .mouse__inner
    &__inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
        transition: transform 0.3s ease-in-out 0s;
      }
    }
  }
  .dot {
    position: fixed;
    display: block;
    width: toRem(10);
    height: toRem(10);
    transform: translate(-50%, -50%);

    // .dot__inner
    &__inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: #fff;
      animation-duration: 1500ms;
      animation-name: fall-1;
      animation-fill-mode: forwards;
    }
  }
}

@keyframes fall-1 {
  0% {
    transform: translate(0px, 0px) scale(0.25);
    opacity: 0;
  }

  5% {
    transform: translate(0px, 0px) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate(0px, 200px) scale(1);
    opacity: 0;
  }
}
/* @keyframes fall-1 {
  0% {
    transform: translate(0px, 0px) rotateX(45deg) rotateY(30deg) rotateZ(0deg)
      scale(0.25);
    opacity: 0;
  }

  5% {
    transform: translate(10px, -10px) rotateX(45deg) rotateY(30deg)
      rotateZ(0deg) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate(25px, 200px) rotateX(180deg) rotateY(270deg)
      rotateZ(90deg) scale(1);
    opacity: 0;
  }
} */
</style>
