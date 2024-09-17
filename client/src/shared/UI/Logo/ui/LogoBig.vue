<script setup lang="ts">
import BigLogoSvg from "./BigLogoVector.vue";
</script>
<template>
  <div class="logo-big">
    <router-link to="/" class="logo-big__inner">
      <BigLogoSvg class="logo-big__svg" />
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.logo-big {
  // .logo-big__inner
  &__inner {
    width: toRem(367);
    display: inline-block;
    
    @media (max-width: $md0) {
      width: toRem(270);
    }
    @media (max-width: $md1) {
      width: toRem(193);
    }
    @media (max-width: $md3) {
        width: toRem(131);
    }
  }
  // .logo-big__svg
  &__svg {
    max-width: 100%;
  }
}
</style>
