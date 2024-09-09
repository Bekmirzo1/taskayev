<script setup lang="ts">
import LogoMain from "@/shared/components/LogoMain.vue";
import CurrentTime from "@/shared/components/CurrentTime.vue";
import { MediaStore } from "@/shared/libs/media";
import { MenuStore, pageLinks } from "../model/";
const mediaStore = MediaStore();
const menuStore = MenuStore();

watch(
  () => mediaStore.checkMedia("mob"),
  (newVal) => {
    if (newVal == false && menuStore.opened) {
      menuStore.immediateClose();
    }
  },
);
</script>
<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <div class="header__logo">
          <LogoMain />
        </div>
        <div class="header__discuss">
          <a
            href="https://t.me/ivantaskayev"
            target="_blank"
            class="header__discuss-link">
            Обсудить проект
          </a>
        </div>
        <div v-if="!mediaStore.checkMedia('laptop')" class="header__time">
          <CurrentTime />
        </div>
        <nav v-if="!mediaStore.checkMedia('mob')" class="header__nav">
          <ul class="header__nav-list">
            <li v-for="(link, i) in pageLinks" :key="i">
              <nuxt-link :to="link.link">
                {{ link.name + (i !== pageLinks.length - 1 ? "," : "") }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "styles/style.scss";
</style>
