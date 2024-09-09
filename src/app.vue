<script setup lang="ts">
import { BaseHeader, HeaderMob } from "@/widgets/BaseHeader/";
import gsap from "gsap";
import { MediaStore } from "./shared/libs/media";
const router = useRouter();
const mediaStore = MediaStore();
const preloadElem = useTemplateRef("preloadRef");
const wrapperElem = useTemplateRef("wrapperRef");
const loaded = ref(false);
const pageTranstition = ref(false);
const preloadCoverDuration = 0.8;
if (process.env.NODE_ENV !== "development") {
  router.beforeEach((to, form, next) => {
    if (pageTranstition.value == true) {
      next();
    }
    if (pageTranstition.value === false) {
      pageTranstition.value = true;
      setTimeout(() => {
        next();
      }, preloadCoverDuration * 1000);
    }
  });
  const timeline = gsap.timeline({
    defaults: {
      duration: preloadCoverDuration,
      ease: "power3.inOut",
    },
    onComplete() {
      pageTranstition.value = false;
    },
  });
  watch(pageTranstition, (newVal) => {
    if (newVal) {
      timeline.set(preloadElem.value, {
        autoAlpha: 1,
        yPercent: 100,
      });

      timeline.to(preloadElem.value, {
        yPercent: 0,
        autoAlpha: 1,
      });
      if (!mediaStore.checkMedia("mob")) {
        timeline
          .to(
            wrapperElem.value,
            {
              y: "7vh",
              scale: 0.9,
            },
            "<",
          )
          .set(wrapperElem.value, {
            clearProps: "transform",
          })
          .to(preloadElem.value, {
            autoAlpha: 0,
            yPercent: 0,
            delay: 0.8,
            duration: 0.7,
            ease: 'power2.inOut'
          });
      }

      if (mediaStore.checkMedia("mob")) {
        timeline.to(preloadElem.value, {
          yPercent: -100,
          delay: 0.5,
        });
      }
    }
  });
}

onMounted(() => {
  loaded.value = true;
});
</script>
<template>
  <div class="app" :class="{ 'loaded': loaded }">
    <div ref="wrapperRef" class="app__wrapper">
      <HeaderMob v-if="mediaStore.checkMedia('mob')" />
      <BaseHeader />
      <NuxtPage class="page" />
    </div>
    <ClientOnly>
      <div ref="preloadRef" class="cover-app">
        <div class="cover-app__full"></div>
      </div>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
body {
  @media (min-width: $md3) {
    background-color: $mainColor;
  }
}
#__nuxt {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  @supports (overflow: clip) {
    overflow: clip;
  }
}

.app {
  min-height: 100vh;
  flex: 1 1 auto;
  &__wrapper {
    opacity: 0;
    background-color: $whiteColor;
    .loaded & {
      opacity: 1;
      visibility: visible;
    }
  }
}
.page {
  @supports not (overflow: clip) {
    overflow: hidden;
  }
  @media (min-width: $md3) {
    min-height: 100vh;
  }
}
.cover-app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $whiteColor;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  // pointer-events: none;
  // .cover-app__full
  &__full {
  }
}
</style>
