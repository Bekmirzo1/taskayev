<script setup lang="ts">
import { BaseHeader } from "@/widgets/BaseHeader/"


</script>
<template>
  <div class="app">
    <BaseHeader></BaseHeader>
    <NuxtPage></NuxtPage>
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
  flex: 1 1 auto;
  // min-height: 100%;
  // overflow: hidden;
}
.page {
  padding: toRem($headerHeight) toRem(0) toRem(0) toRem(0);
  @media (max-width: $md3) {
    padding: toRem($headerMobHeight) toRem(0) toRem(0) toRem(0);
  }
}
</style>
