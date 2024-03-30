<script setup lang="ts">
import { pageAnimState } from "../store"
import gsap from "gsap"
const elemPreload = ref(null)
const animState = pageAnimState()
const { covered, enter, leave } = storeToRefs(animState)
onMounted(() => {
  // *Animation
/*   watch(leave, (newVal) => {
    if (newVal == true) {
      gsap.set(elemPreload.value, {
        yPercent: 100,
        autoAlpha: 1,
      })
      gsap
        .timeline({
          onComplete() {
            animState.coverChange(true)
            animState.leaveChange(false)
          },
          paused: true,
          defaults: { duration: 0.5 },
        })
        .to(elemPreload.value, { yPercent: 0 })
        .play()
    }
  }) */
 /*  watch(enter, (newVal) => {
    if (newVal == true) {
      gsap
        .timeline({
          paused: true,
          onComplete() {
            if (covered.value == true) {
              animState.coverChange(false)
            }
            if (enter.value == true) {
              animState.enterChange(false)
            }
          },
          defaults: {
            duration: 0.5,
          },
        })

        .to(elemPreload.value, {
          // yPercent: -100,
          autoAlpha: 0,
          duration: 0.5,
          delay: 0.5,
        })
        .play()
    }
  }) */
})
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
