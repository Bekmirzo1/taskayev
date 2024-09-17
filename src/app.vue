<script setup lang="ts">
import { BaseHeader, HeaderMob } from "@/widgets/BaseHeader/";
import gsap from "gsap";
import { PreloadElem } from "./app/Preload";
import { MediaStore } from "./shared/libs/media";
import { CustomMouse2 } from "./shared/UI/CustomMouse";
import { productionMode } from "@/shared/config/";
import { LoadStore, PageLockStore } from "./shared/store";

gsap.registerEase("easeOutCubic", function (progress) {
  return 1 - Math.pow(1 - progress, 3);
});
gsap.registerEase("easeInQuad", function (progress) {
  return 1 - (1 - progress) * (1 - progress);
});

const { isDesktop } = useDevice();
const router = useRouter();
const loadState = LoadStore();
const lockState = PageLockStore();
const mediaStore = MediaStore();
const coverPagesElem = useTemplateRef("coverBetweenRef");
const wrapperElem = useTemplateRef("wrapperRef");
const pageTranstition = ref(false);
const preloadCoverDuration = 0.8;

if (productionMode) {
  router.beforeEach((to, form, next) => {
    if (pageTranstition.value == true) {
      next();
    }
    if (pageTranstition.value === false) {
      scrollTo({ top: 0 });
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
      timeline.set(coverPagesElem.value, {
        autoAlpha: 1,
        yPercent: 100,
      });

      timeline.to(coverPagesElem.value, {
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
          .to(coverPagesElem.value, {
            autoAlpha: 0,
            yPercent: 0,
            delay: 0.8,
            duration: 0.7,
            ease: "power2.inOut",
          });
      }

      if (mediaStore.checkMedia("mob")) {
        timeline.to(coverPagesElem.value, {
          yPercent: -100,
          delay: 0.5,
        });
      }
    }
  });
}

onMounted(() => {
  if (productionMode) {
    if (isDesktop) {
      document.documentElement.classList.add("custom-cursor");
    }
  } else {
    lockState.unLockPage();
  }
});

const coverValue = ref({ clipVal: 100 });
const coverOnLoaded = ref({ y: 100, scale: 0.9 });
if (productionMode) {
  watch(
    () => loadState.loaded,
    (newVal) => {
      if (newVal) {
        animaetLoaded();
      }
    },
    { once: true },
  );
  function animaetLoaded() {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "easeInQuad" },
      onComplete() {
        loadState.fullLoad();
        lockState.unLockPage();
      },
    });
    scrollTo({ top: 0 });
    timeline
      .to(coverOnLoaded.value, {
        y: 0,
        scale: 1,
      })
      .to(
        coverValue.value,
        {
          clipVal: 0,
          // duration: 0.8
        },
        "<0.3",
      );
  }
} else {
  loadState.loadApp();
  loadState.fullLoad();
}
</script>
<template>
  <div
    class="app"
    :class="{
      'loaded': loadState.loaded,
      'full-loaded': loadState.fullLoaded,
    }">
    <PreloadElem v-if="productionMode" />
    <div ref="wrapperRef" class="app__wrapper">
      <div
        class="app__wrapper-cover"
        :style="{
          transform: !loadState.fullLoaded
            ? `translate(0, ${coverOnLoaded.y}vh) scale(${coverOnLoaded.scale})`
            : 'unset',
        }">
        <div
          v-if="productionMode"
          class="cover-full"
          :style="{
            clipPath: `polygon(0 0, 100% 0, 100% ${coverValue.clipVal}%, 0 ${coverValue.clipVal}%)`,
          }"></div>
        <HeaderMob v-if="mediaStore.checkMedia('mob')" />
        <BaseHeader />
        <NuxtPage class="page" />
      </div>
    </div>
    <ClientOnly>
      <div ref="coverBetweenRef" class="cover-app">
        <div class="cover-app__full"></div>
      </div>
      <CustomMouse2 v-if="productionMode" />
      <!-- <CustomMouse2  /> -->
    </ClientOnly>
  </div>
</template>

<style lang="scss">
html.custom-cursor,
.custom-cursor body {
  cursor: none;
  a,
  button {
    cursor: none;
  }
}

.cover-full {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: $mainColor;
}

#__nuxt {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  // overflow-y: auto;
  // height: 100%;
}

.app {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  @supports (overflow: clip) {
    overflow: clip;
  }
  &.full-loaded {
    @media (min-width: $md3) {
      background-color: $mainColor;
    }
  }

  // .app__wrapper
  &__wrapper {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    opacity: 0;
    visibility: hidden;
    // background-color: #dfdbdb;
    // transform: translate(0, 100vh) scale(0.9);
    .loaded & {
      opacity: 1;
      visibility: visible;
      // transform: unset;
      // transition: transform 0.3s ease 0s;
      // transform: translate(0, 0) scale(1);
    }
    // .app__wrapper-cover
    &-cover {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      background-color: $whiteColor;
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
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  // pointer-events: none;
  // .cover-app__full
  &__full {
  }
}
</style>
