<script setup lang="ts">
import { PageRouteStore } from "@/shared/store";
import { MenuStore, pageLinks } from "../model";
import HeaderMobBody from "./components/HeaderMobBody.vue";
import MenuMain from "./MenuMain.vue";
const header2Top = useTemplateRef("header-top");
const headerFixed = ref(false);
const pageRouteStore = PageRouteStore();
const options = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};
onMounted(() => {
  function headerChange(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && headerFixed.value == false) {
        headerFixed.value = true;
      }
      if (entry.isIntersecting && headerFixed.value == true) {
        headerFixed.value = false;
      }
    });
  }

  const observer2 = new IntersectionObserver(headerChange, options);
  observer2.observe(header2Top.value as Element);
});
const menuStore = MenuStore();

function openMenu() {
  menuStore.menuOpen(true);
}
</script>
<template>
  <div ref="header-top" class="header2-minni"></div>
  <div class="header2" :class="{ 'scroll': headerFixed }">
    <div class="header2__container">
      <!-- :active-value="
          pageLinks.find((item) => item.link == route.path)?.name as string
        " -->
      <!-- :active-value="
          pageLinks.find((item) => item.link == pageRouteStore.page)?.name as string
        " -->
      <!-- active-value="dda" -->
      <HeaderMobBody
        :active-value="
          pageLinks.find((item) => item.link == pageRouteStore.page)
            ?.name as string
        "
        button-value="Меню"
        class="header2__body"
        @click-button="openMenu" />
    </div>
  </div>
  <MenuMain />
</template>
<style lang="scss" scoped>
.header2-minni {
  margin: var(--menu-mob-from-top) toRem(0) toRem(0) toRem(0);
}
.header2 {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
  &.scroll {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
  // .header2__container
  &__container {
  }
  // .header2__body
  &__body {
    min-height: toRem(40);
  }
  // .header2__body
  // &__body {
  //   display: flex;
  //   align-items: center;
  //   min-height: toRem(40);
  //   justify-content: space-between;
  //   gap: toRem(10);
  // }
  // // .header2__map
  // &__map {
  //   display: flex;
  //   align-items: center;
  //   @extend .text2;
  //   // .header2__map-title
  //   &-title {
  //     // color: $mainLight;
  //     opacity: 0.24;
  //   }
  //   // .header2__map-devider
  //   &-devider {
  //     padding: toRem(0) toRem(8);
  //   }
  //   // .header2__map-value
  //   &-value {
  //   }
  // }
  // // .header2__menu-link
  // &__menu-link {
  //   // .header2__menu-link-button
  //   &-button {
  //     @extend .text2;
  //   }
  // }
}
</style>
