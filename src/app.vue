<script setup lang="ts">
import { BaseHeader } from "@/widgets/BaseHeader/"
// const nuxtApp = useNuxtApp()
</script>
<template>
  <div class="app">
    <BaseHeader></BaseHeader>
    <NuxtPage class="page"></NuxtPage>
    <div class="app__preload"></div>
    <!-- <BaseHeader></BaseHeader> -->
    <!-- <NuxtPage> -->
    <!-- </NuxtPage> -->
  </div>
</template>
<style lang="scss">
#__nuxt {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @supports (overflow: clip) {
    overflow: clip;
  }
}
.app {
  min-height: 100vh;
  flex: 1 1 auto;
  // min-height: 100%;
  // overflow: hidden;
}
.app__preload {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $redColor;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
}
.page {
  background-color: $bgColor;
  min-height: 100vh;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
  // animation: anim-page 2s ease 0s;
  opacity: 1;
  filter: blur(0);
}

// @keyframes anim-page {
//   0% {
//     background-color: #fff;
//     transform: translate(0, 100%);
//   }
//   100% {
//     transform: translate(0, 0%);
//   }
// }

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
