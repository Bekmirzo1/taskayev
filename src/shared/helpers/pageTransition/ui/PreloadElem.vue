<script setup lang="ts">
import { pageAnimState } from "../store"
import gsap from "gsap"
const elemPreload = ref(null)
const animState = pageAnimState()
const { covered, enter, leave } = storeToRefs(animState)
defineExpose({
  elemPreload
})
</script>
<template>
  <div class="app__preload" ref="elemPreload"></div>
</template>
<style lang="scss" scoped>
.app__preload {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $bgColor;
  z-index: 400;
  opacity: 0;
  pointer-events: none;
}
</style>
