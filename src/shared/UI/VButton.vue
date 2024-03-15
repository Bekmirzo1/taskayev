<script setup lang="ts">
defineOptions({
  name: "v-button",
})
const props = defineProps({
  // icon: Boolean,
  href: String,
})
/* const element = computed(() =>
  props.href == "" || props.href ? "a" : "button",
); */
const element = props.href == "" || props.href ? "a" : "button"
</script>
<template>
  <component :is="element" :href="href" class="btn">
    <span class="btn__body btn__body_original">
      <slot></slot>
    </span>
    <span class="btn__body btn__body_copy">
      <slot></slot>
    </span>
  </component>
</template>
<style lang="scss" scoped>
.btn {
  overflow: hidden;
  transform: translateZ(0);
  position: relative;
  z-index: 1;
  border-radius: toRem(50);
  border: toRem(1) solid $mainColor;
  // text-transform: uppercase;
  &:hover {
    .btn__body {
      transform: translate(0, -100%);
    }
  }
  // .btn__body
  &__body {
    @extend .text;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: toRem(14);
    line-height: percent(21, 14);
    font-weight: 500;
    padding: toRem(4) toRem(11) toRem(5);
    transition: transform 0.3s cubic-bezier(0.5, 1, 0.89, 1) 0s;
    will-change: transform;
    // .btn__body_original
    &_original {
    }
    // .btn__body_copy
    &_copy {
      position: absolute;
      // width: 100%;
      // height: 100%;
      top: 100%;
      left: 0;
      // transform: translate(0%, 0);
      background-color: $mainColor;
      color: #fff;
    }
  }
}
</style>
