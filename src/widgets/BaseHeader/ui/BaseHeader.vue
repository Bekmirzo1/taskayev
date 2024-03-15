<script setup lang="ts">
import VLogo from "~/shared/header/VLogo.vue"
const viewport = useViewport()

const headerList = ref([
  { value: "услуги", link: "/about" },
  { value: "кейсы", link: "/about" },
  { value: "о нас", link: "/about" },
  { value: "блог", link: "/about" },
])
// let mobRef = ref(false)
// function mediaChange(media) {
//   if (media.matches) {
//     mobRef.value = true
//   } else {
//     mobRef.value = false
//   }
// }

// const mobMedia = window.matchMedia("(max-width: 767.98px)")
// mobMedia.addListener(mediaChange)
// mediaChange(mobMedia)
</script>
<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container">
        <div class="header__body">
          <div class="header__items">
            <div class="header__item">
              <div class="header__logo">
                <v-logo></v-logo>
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
              v-if="!viewport.match('tablet')">
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
            <div class="header__item header__item_social" v-if="!viewport.match('tablet')">
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
</template>
<style lang="scss" scoped>
// $gapElems: 2;
$gapElems: 4;
.header {
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
  }
  // .header__social-link
  &__social-link {
  }
}
</style>
