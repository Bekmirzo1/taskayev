<script setup lang="ts">
import { BaseHeader } from "./widgets/BaseHeader/";
/* import { MediaStore } from "@/shared/libs/media/";
const mediaStore = MediaStore();
let info = false;
watch(
  () => mediaStore.mediaMax,
  () => {
    if (info == false && mediaStore.checkMedia("laptop")) {
      info = true;
      console.log(info);
    } else if (info == true && !mediaStore.checkMedia("laptop")) {
      info = false;
      console.log(info);
    }
  },
); */
</script>
<template>
  <div class="app">
    <BaseHeader />
    <NuxtPage class="page" />
  </div>
</template>

<style lang="scss">
.app {
  overflow: hidden;
}
</style>
