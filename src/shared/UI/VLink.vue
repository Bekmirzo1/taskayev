<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: false,
    default: "/",
  },
})
</script>
<template>
  <NuxtLink :to="link" class="link-anim">
    <span class="link-anim__body">
      <slot></slot>
    </span>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.link-anim {
  // .link-anim__body
  &__body {
    @extend .text;
    display: inline;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: toRem(1);
      bottom: 0;
      left: 0;
      background-color: $redColor;
      transform-origin: right;
      transition: transform 0.3s ease 0s;
      transform: scaleX(0);
    }
  }
  @media (any-hover: hover) {
    &:hover {
      .link-anim__body {
        &::after {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
  }
}
</style>
