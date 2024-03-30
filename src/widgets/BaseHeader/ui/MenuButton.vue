<script setup lang="ts">
import { menuOpenedClosed } from "../store/"

const openClosed = menuOpenedClosed()
const closeElem: Ref<null | HTMLElement> = ref(null)
const openElem: Ref<null | HTMLElement> = ref(null)


</script>
<template>
  <button
    type="button"
    class="menu-button"
    :class="{
      active: openClosed.opened,
    }"
    
    :style="{
      '--close-width':
        closeElem != null ? closeElem.offsetWidth + 'px' : '80px',
      '--open-width': openElem != null ? openElem.offsetWidth + 'px' : '80px',
    }">
    <div class="menu-button__body">
      <span
        class="menu-button__body-inner menu-button__body-inner_open"
        ref="openElem">
        меню
      </span>
      <span
        class="menu-button__body-inner menu-button__body-inner_close"
        ref="closeElem">
        закрыть
      </span>
    </div>
  </button>
</template>
<style lang="scss" scoped>
.menu-button {
  position: absolute;
  bottom: toRem(20);
  right: toRem(16);
  z-index: 99;
  line-height: 0;
  $trsVal: 0.5s;
  &.active {
    .menu-button__body {
      // width: var(--close-width);
      // padding: toRem(0) toRem(15);
      padding: toRem(0)
        calc(toRem(10) + (var(--close-width) - var(--open-width)) / 2);
      border-color: $dividerLight;
    }
    .menu-button__body-inner {
      &_open {
        // transform: perspective(toRem(400)) rotateX(90deg);
        // opacity: 0;
        transform: translate(0, -100%);
      }
      &_close {
        transform: translate(0, 0);
        // opacity: 1;
        // transform: perspective(toRem(400)) rotateX(0deg);
      }
    }
  }
  &__body {
    position: relative;
    display: inline-block;
    @include text;
    text-transform: uppercase;
    background: #fff;
    border: toRem(1) solid $mainColor;
    border-radius: toRem(50);
    padding: toRem(0) toRem(10);
    // transition: padding $trsVal ease 0s;
    @include transMultiple(padding border-color, $trsVal, ease, 0s);
    overflow: hidden;
    will-change: padding;
  }
  // .menu-button__body-inner
  &__body-inner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    // @include transMultiple(transform, $trsVal, ease, 0s);
    transition: transform $trsVal ease 0s;
    user-select: none;
    padding: toRem(4) toRem(0) toRem(2);
    // .menu-button__body-inner_open
    &_open {
    }
    // .menu-button__body-inner_close
    &_close {
      position: absolute;
      top: 0;
      right: calc((var(--close-width) - var(--open-width)) / 2);
      // transform: perspective(toRem(400)) rotateX(90deg);
      // opacity: 0;
      transform: translate(0, 100%);
    }
  }
}
</style>
