<script setup lang="ts">
const { isDesktop } = useDevice();

// Mouse
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
function mouseMove(e: MouseEvent) {
  xPos.value = e.clientX;
  yPos.value = e.clientY;
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
  <div
    :class="{ 'hovered': hover, 'leave': leave }"
    class="mouse"
    :style="{ transform: `translate(${xPos}px, ${yPos}px)` }">
    <!-- :style="{ top: `${yPos}px`, left: `${xPos}px` }" -->
    <!-- :style="{ transform: `translate(${xPos}px, ${yPos}px)` }" -->
    <div class="mouse__inner"></div>
  </div>
</template>
<style lang="scss" scoped>
@media (any-hover: hover) {
  .mouse {
    position: fixed;
    top: 0%;
    left: 0%;
    // top: toRem(-15);
    // left: toRem(-15);
    // transform: translate(-50%, -50%);
    width: toRem(10);
    height: toRem(10);
    border-radius: 50%;
    z-index: 1000;
    pointer-events: none;
    mix-blend-mode: difference;
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
        transition: transform 0.3s ease 0s;
      }
    }
  }
}
</style>
