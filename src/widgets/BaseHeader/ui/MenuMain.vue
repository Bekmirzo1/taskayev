<script setup lang="ts">
import { MenuStore, pageLinks, socialLinks } from "../model/";
import LogoMain from "@/shared/components/LogoMain.vue";
import CurrentTime from "@/shared/components/CurrentTime.vue";
import { SOCIAL_LINKS } from "@/shared/config/social-links";
import HeaderMobBody from "./HeaderMobBody.vue";
const menuStore = MenuStore();
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
              <LogoMain />
            </div>
            <div class="menu__discuss">
              <a
                class="menu__discuss-link"
                :href="SOCIAL_LINKS.telegram"
                target="_blank">
                Обсудить проект
              </a>
            </div>
          </div>
          <nav class="menu__main">
            <div class="menu__header2">
              <HeaderMobBody
                active-value="Меню"
                button-value="Закрыть"
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
      <div class="menu__time">
        <CurrentTime />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "styles/menu.scss";
</style>
