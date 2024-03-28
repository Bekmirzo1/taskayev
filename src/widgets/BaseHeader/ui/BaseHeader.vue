<script setup lang="ts">
import VLogo from "@/shared/header/VLogo.vue"
import MenuButton from "./MenuButton.vue"
import { menuOpenedClosed } from "../store/"
import { menuToggle } from "../model"

const viewport = useViewport()
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  if (
    viewport.breakpointValue(oldBreakpoint) <
      viewport.breakpointValue("mob") &&
    viewport.breakpointValue(newBreakpoint) >=
      viewport.breakpointValue("mob") &&
    menuOpenedClosed().opened
  ) {
    menuToggle(false)
  }
})

const headerList = ref([
  { value: "услуги", link: "/about" },
  { value: "кейсы", link: "/about" },
  { value: "о нас", link: "/about" },
  { value: "блог", link: "/about" },
])
const socialList = ref([
  { value: "Telegram", link: "https://t.me/ivantaskayev" },
  { value: "Vkontakte", link: "/about" },
  { value: "Instagram", link: "/about" },
  { value: "Email", link: "/about" },
])
</script>
<template>
  <div>
    <header class="header">
      <div class="header__wrapper">
        <div class="header__container">
          <div class="header__body">
            <div class="header__items">
              <div class="header__item">
                <div class="header__logo">
                  <v-logo class="header__logo-inner" />
                </div>
              </div>
              <div class="header__item">
                <div class="header__fornew">
                  ОТКРЫТ К НОВЫМ
                  <br />
                  ПРОЕКТАМ
                </div>
              </div>
              <div
                class="header__item header__item_list"
                v-if="!viewport.isLessThan('mob')">
                <ul class="header__list">
                  <div
                    class="header__list-row"
                    v-for="i in headerList.length / 2"
                    :key="i">
                    <template
                      v-for="(headerItem, index) in headerList"
                      :key="index">
                      <li v-if="i * 2 > index && (i - 1) * 2 <= index">
                        <nuxt-link
                          :to="headerItem.link"
                          class="header__list-link">
                          <template v-if="index !== headerList.length - 1">
                            {{ headerItem.value }},
                          </template>
                          <template v-else>
                            {{ headerItem.value }}
                          </template>
                        </nuxt-link>
                      </li>
                    </template>
                  </div>
                </ul>
              </div>
              <div
                class="header__item header__item_social"
                v-if="!viewport.isLessThan('mob')">
                <ul class="header__social">
                  <div class="header__social-row">
                    <li>
                      <a
                        href="https://t.me/ivantaskayev"
                        class="header__social-link"
                        target="_blank">
                        TELEGRAM,
                      </a>
                    </li>
                    <li>
                      <a href="" class="header__social-link" target="_blank">
                        VKONTAKTE,
                      </a>
                    </li>
                  </div>
                  <div class="header__social-row">
                    <li>
                      <a href="" class="header__social-link" target="_blank">
                        INSTAGRAM,
                      </a>
                    </li>
                    <li>
                      <a href="" class="header__social-link" target="_blank">
                        EMAIL
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Menu -->
    <div class="menu" v-if="viewport.isLessThan('mob')">
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
      <menu-button class="menu__button" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
// $gapElems: 2;
$gapElems: 4;
// $class: '.menu__button';
.header {
  background-color: $bgColor;
  // .header__wrapper
  &__wrapper {
  }
  // .header__container
  &__container {
  }
  // .header__body
  &__body {
    display: flex;
    align-items: center;
    min-height: toRem($headerHeight);
    border-bottom: toRem(1) solid $mainColor;
    @media (max-width: $md3) {
      min-height: toRem($headerMobHeight);
    }
  }
  // .header__items
  &__items {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  // .header__item
  &__item {
    @extend .text;
    // .header__item_list
    &_list {
    }
    // .header__item_social
    &_social {
    }
  }
  // .header__logo
  &__logo {
    &-inner {
      @include textMob;
    }
  }
  // .header__fornew
  &__fornew {
  }
  // .header__list
  &__list {
    // display: flex;
    // flex-wrap: wrap;
    &-row {
      display: flex;
      gap: toRem($gapElems);
      // li {
      //   a {
      //     &::after {
      //       content: ",";
      //     }
      //   }
      // }
      // &:last-child {
      //   li {
      //     &:last-child {
      //       a {
      //         &::after {
      //           content: "";
      //         }
      //       }
      //     }
      //   }
      // }
    }
    // .header__list-link
    &-link {
      // display: inline-flex;
      @extend .link-anim;
      text-transform: uppercase;
      // line-height: 1;
    }
  }
  // .header__social
  &__social {
    &-row {
      display: flex;
      gap: toRem(2);
    }
    // .header__social-link
    &-link {
      @extend .link-anim;
    }
  }
}

.menu {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 200;
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
