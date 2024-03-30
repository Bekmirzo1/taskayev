<script setup lang="ts">
import VLogo from "@/shared/header/VLogo.vue"
import MenuButton from "./MenuButton.vue"
import { menuOpenedClosed } from "../store"
import { menuToggle, headerList, socialList } from "../model"
import { pageAnimState } from "~/shared/helpers/pageTransition"

const viewport = useViewport()

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  if (
    viewport.breakpointValue(oldBreakpoint) < viewport.breakpointValue("mob") &&
    viewport.breakpointValue(newBreakpoint) >=
      viewport.breakpointValue("mob") &&
    menuOpenedClosed().opened
  ) {
    menuToggle(false)
  }
})
function toggleActive() {
  menuToggle(!menuOpenedClosed().opened)
}

const statePage = pageAnimState()
const { covered } = storeToRefs(statePage)

watch(covered, (newVal) => {
  if (newVal == true) {
    menuToggle(false)
  }
})
</script>
<template>
  <div>
    <div
      class="menu"
      v-if="viewport.isLessThan('mob')"
      :class="{ covered: covered }">
      <nav class="menu__body">
        <div class="menu__body-inner">
          <div class="menu__header">
            <div class="menu__header-item">
              <v-logo class="menu__header-logo" />
            </div>
            <div class="menu__header-item">
              <div class="menu__header-fornew">
                ОТКРЫТ К НОВЫМ
                <br />
                ПРОЕКТАМ
              </div>
            </div>
          </div>
          <div class="menu__main">
            <div class="menu__blocks">
              <div class="menu__block">
                <h4 class="menu__title">Карта сайта</h4>
                <ul class="menu__list">
                  <li v-for="(headerItem, index) in headerList" :key="index">
                    <nuxt-link :to="headerItem.link" class="menu__list-link">
                      <template v-if="index !== headerList.length - 1">
                        {{ headerItem.value }},
                      </template>
                      <template v-else>
                        {{ headerItem.value }}
                      </template>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="menu__block">
                <h4 class="menu__title">Связаться</h4>
                <ul class="menu__list">
                  <li v-for="(socialItem, index) in socialList" :key="index">
                    <nuxt-link
                      :to="socialItem.link"
                      class="menu__list-link"
                      target="_blank">
                      <template v-if="index !== socialList.length - 1">
                        {{ socialItem.value }},
                      </template>
                      <template v-else>
                        {{ socialItem.value }}
                      </template>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <menu-button class="menu__button" @click="toggleActive" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 200;
  &.covered {
    *, &:deep(*) {
      transition: none !important;
      pointer-events: none !important;
    }
  }
  // .menu__body
  &__body {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $mainColor;
    color: #fff;
    pointer-events: auto;
    padding: toRem(0) toRem($containerPaddingMob);
    overflow-y: auto;
    transition: transform 0.8s $menuAnimation 0s;
    transform: translate(0, -100%);
    .menu-open & {
      transform: translate(0, 0);
    }
    // .menu__body-inner
    &-inner {
      filter: blur(5px);
      transition: filter 0.8s $menuAnimation 0s;
      .menu-open & {
        filter: blur(0px);
      }
    }
  }
  // .menu__header
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: toRem(17) toRem(0);
    min-height: toRem($headerMobHeight);
    border-bottom: toRem(1) solid #fff;
  }
  // .menu__header-item
  &__header-item {
    @include textMob;
  }
  // .menu__header-logo
  &__header-logo {
    @include textMob;
  }
  // .menu__header-fornew
  &__header-fornew {
  }
  // .menu__main
  &__main {
    padding: toRem(40) toRem(0) toRem(60);
  }
  // .menu__blocks
  &__blocks {
  }
  // .menu__block
  &__block {
    padding: toRem(0) toRem(0) toRem(16) toRem(0);
    border-bottom: toRem(1) solid $dividerDark;
    &:not(:last-child) {
      margin-bottom: toRem(40);
    }
  }
  // .menu__title
  &__title {
    @include text;
    color: $grayDullColor;
    margin: toRem(0) toRem(0) toRem(10) toRem(0);
  }
  // .menu__list
  &__list {
    li {
      display: inline;
    }
  }
  // .menu__list-link
  &__list-link {
    font-size: toRem(20);
    line-height: percent(32, 20);
    letter-spacing: $ltrSpace;
  }
  // .menu__button
  &__button {
    pointer-events: auto;
  }
}
</style>
