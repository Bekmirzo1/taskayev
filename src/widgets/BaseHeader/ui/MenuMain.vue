<script setup lang="ts">
import { MenuStore, pageLinks, socialLinks } from "../model/";
// import LogoMain from "@/shared/components/LogoMain.vue";
import HeaderMobBody from "./components/HeaderMobBody.vue";
import { LoadStore } from "@/shared/store";
import { LogoBase } from "@/shared/UI/Logo";
import LinkBegin from "./components/LinkBegin.vue";
const menuStore = MenuStore();
const loadState = LoadStore();
function closeMenu() {
  menuStore.menuOpen(false);
}
const router = useRouter();

router.beforeEach((to, from, next) => {
  if (menuStore.opened) {
    // menuStore.menuOpen(false);
    menuStore.immediateClose();
    next();
  }
});

</script>
<template>
  <div
    v-if="loadState.fullLoaded"
    class="menu"
    :class="{
      opened: menuStore.opened,
      'close-immediate': menuStore.closedImmediate,
    }">
    <div class="menu__wrapper">
      <div class="menu__container">
        <div class="menu__body">
          <div class="menu__header">
            <div class="menu__logo">
              <LogoBase />
            </div>
            <div class="menu__discuss">
              <LinkBegin class="menu__discuss-link" />
            </div>
          </div>
          <nav class="menu__main">
            <div class="menu__header2">
              <HeaderMobBody
                button-value="Свернуть"
                @click-button="closeMenu" />
            </div>
            <div class="menu__rows">
              <div class="menu__row">
                <div class="menu__row-body">
                  <ul class="menu__list">
                    <li v-for="(link, index) in pageLinks" :key="index">
                      <router-link :to="link.link">{{ link.name }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="menu__row">
                <h4 class="menu__row-title">Связаться</h4>
                <div class="menu__row-body">
                  <ul class="menu__list">
                    <li v-for="(link, index) in socialLinks" :key="index">
                      <a :href="link.link" target="_blank">{{ link.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "styles/menu.scss";
</style>
