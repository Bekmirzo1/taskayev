<script setup lang="ts">
defineOptions({
  name: 'LogoutButton'
})
</script>
<template>
  <button class="button-leave">logout</button>
</template>
<style lang="scss" scoped>
.button-leave {
  @extend .text-link;
  // color: $blueColor;
  background: #3e484f;
  padding: toRem(10) toRem(14);
  font-size: toRem(16);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 400;
  @media (any-hover: hover) {
    transition: background-color 0.3s ease 0s;
    &:hover {
      background-color: #6f8492;
    }
  }
  // -webkit-text-stroke: toRem(0.4);
}
</style>
