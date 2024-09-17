<script setup lang="ts"></script>
<template>
  <div class="logo">
    <router-link to="/" class="logo__inner">
      IVAN TASKAYEV ™, 2024
    </router-link>
  </div>
</template>
<style lang="scss">
.logo {
  &__inner {
   display: inline-block;
   @extend .link;
  }
}
</style>
