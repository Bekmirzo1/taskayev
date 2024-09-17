<script setup lang="ts">
// import LogoMain from "@/shared/components/LogoMain.vue";
import { LogoBase, LogoBig } from "@/shared/UI/Logo";
import { CurrentTime } from "@/shared/UI/CurrentTime/";
import { MediaStore } from "@/shared/libs/media";
import { MenuStore, pageLinks } from "../model/";
import LinkBegin from "./components/LinkBegin.vue";
const route = useRoute();
const router = useRouter();
const mediaStore = MediaStore();
const menuStore = MenuStore();
const headerBig = ref(false);
if (route.meta.header == "main") {
  headerBig.value = true;
}
router.afterEach((to) => {
  if (to.meta.header == "main") {
    headerBig.value = true;
  } else {
    if (headerBig.value == true) {
      headerBig.value = false;
    }
  }
});
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
  <header class="header" :class="{ bigger: headerBig }">
    <div class="header__container">
      <div class="header__body">
        <div class="header__logo">
          <LogoBig v-if="headerBig" />
          <LogoBase v-if="!headerBig" />
        </div>

        <div class="header__main">
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
          <div v-if="mediaStore.checkMedia('mob')" class="header__discuss">
            <LinkBegin class="header__discuss-link" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "styles/style.scss";
</style>
