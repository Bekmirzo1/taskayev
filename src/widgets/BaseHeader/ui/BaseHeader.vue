<script setup lang="ts">
import LogoMain from "~/shared/components/LogoMain.vue";
import { MediaStore } from "~/shared/libs/media";
const mediaStore = MediaStore();
// const route = useRoute();
// console.log(route);

const links = [
  { link: "/", name: "index" },
  { link: "/about", name: "Обо мне" },
  { link: "/works", name: "Работы" },
  { link: "/service", name: "Услуги" },
  { link: "/contact", name: "Контакты" },
];
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
            class="header__discuss-link link-underline">
            Обсудить проект
          </a>
        </div>
        <div v-if="!mediaStore.checkMedia('laptop')" class="header__time">
          <div class="current-time">03:03:30 PM (NSK)</div>
        </div>
        <nav v-if="!mediaStore.checkMedia('mob')" class="header__nav">
          <ul class="header__nav-list">
            <li v-for="(link, i) in links" :key="i">
              <nuxt-link :to="link.link">
                {{ link.name + (i !== links.length - 1 ? "," : "") }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "style.scss";
</style>
