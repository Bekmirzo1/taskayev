<script setup lang="ts">
function logoClick() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
defineProps({
  href: {
    type: String,
    required: false,
    default: "/",
  },
})
</script>

<template>
  <div class="logo">
    <div class="logo__body">
      UI DESIGNER , <br />
      <nuxt-link :to="href" @click.prevent="logoClick" class="logo__link">
        IVAN TASKAYEV™ </nuxt-link
      >, 2024
    </div>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  @extend .text-pc;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  cursor: pointer;
  // .logo__body
  &__body {
  }
  // .logo__link
  &__link {
    user-select: none;
    @extend .link-anim;
  }
}
</style>
