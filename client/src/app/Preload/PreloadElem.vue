<script setup lang="ts">
import { LoadStore } from '@/shared/store';
import gsap from "gsap";


const loadState = LoadStore();


const delayBetweenLoaded = 15;

const numberLoading = ref({ number: 0 });
const totalImages = ref(0);
const imagesLoaded = ref(0);
function setProgress() {
  imagesLoaded.value++;
}
onMounted(async () => {
  const loadingImages = document.querySelectorAll(
    'img:not([loading="lazy"])',
  ) as NodeListOf<HTMLImageElement>;
  if (loadingImages.length > 0) {
    totalImages.value = loadingImages.length;
    for (const loadingImage of loadingImages) {
      await new Promise((resolve) => {
        if (loadingImage.complete) {
          setProgress();
          resolve("done");
        } else {
          loadingImage.onload = () => {
            setProgress();
            resolve("done");
          };
        }
      });
    }
    await new Promise((resolve) => setTimeout(resolve, delayBetweenLoaded));
  } else {
    totalImages.value = 1;
    imagesLoaded.value = 1;
  }
});

watch(imagesLoaded, (newVal) => {
  const value = Math.min(Math.floor((newVal / totalImages.value) * 100), 100);
  gsap.to(numberLoading.value, {
    number: value,
    duration: 1,
    ease: "easeOutCubic",
    onComplete() {
      if (value === 100) {
        loadState.loadApp();
        // animaetLoaded();
      }
    },
  });
});
</script>
<template>
    <div class="loaded-number">{{ numberLoading.number.toFixed(0) }}%</div>
</template>
<style lang="scss" scoped>
.loaded-number {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: $secondFamily;
  font-size: toRem(12);
  font-weight: 400;
  letter-spacing: -0.04em;
  font-variation-settings: "EXPO" -55;
  user-select: none;
  z-index: -1;
}
</style>