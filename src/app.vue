<script setup lang="ts">
import gsap from "gsap"
import { BaseHeader, MenuMob } from "@/widgets/BaseHeader/"
import { PreloadElem, pageAnimState } from "./shared/helpers/pageTransition"

const animState = pageAnimState()
const { enter, leave, covered } = storeToRefs(animState)
const wrapper = ref(null)
const prelEl = ref(null)
onMounted(() => {
  // const tl = gsap.timeline({ defaults: { duration: 1 } })
  watch(leave, (newVal) => {
    if (newVal == true) {
      gsap.set(prelEl.value.elemPreload, {
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
          defaults: { duration: 1, ease: "power3.inOut" },
        })
        .to(wrapper.value, {
          y: -20,
          scale: 0.9,
        })
        .to(
          prelEl.value.elemPreload,
          { yPercent: 0, duration: 0.8, ease: "power2.inOut" },
          "<",
        )
        .play()
    }
  })
  watch(enter, (newVal) => {
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
        .set(wrapper.value, {
          y: 0,
          scale: 1,
        })
        .to(prelEl.value.elemPreload, {
          // yPercent: -100,
          autoAlpha: 0,
          delay: 0.5,
        })
        .play()
    }
  })
})
</script>
<template>
  <div class="app">
    <MenuMob></MenuMob>
    <div class="wrapper" ref="wrapper">
      <BaseHeader></BaseHeader>
      <NuxtPage class="page"></NuxtPage>
    </div>
    <PreloadElem ref="prelEl" class="app__cover"></PreloadElem>
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
  &__cover {
    z-index: 1000;
  }
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
