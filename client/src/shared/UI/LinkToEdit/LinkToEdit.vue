<script setup lang="ts">
import { PAGE_ROUTES, type RoutesValue } from "@/shared/config";
import { AuthStore } from "@/shared/store";
const authStore = AuthStore();

interface Props {
  link?: RoutesValue;
}

withDefaults(defineProps<Props>(), {
  link: PAGE_ROUTES.edit,
});
</script>
<template>
  <div v-if="authStore.isAuth" class="change-content">
    <div class="change-content__container">
      <div class="change-content__body">
        <nuxt-link :to="link" class="change-content__link">
          <span class="change-content__link-image">
            <img src="@/shared/assets/images/home/pencil.svg" alt="" />
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.change-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  z-index: 999;
  // @media (any-hover: hover) {
  //   opacity: 0;
  //   &:hover {
  //     opacity: 1;
  //   }
  // }
  // .change-content__container
  &__container {
    width: 100%;
  }
  // .change-content__body
  &__body {
    display: flex;
    justify-content: flex-end;
  }
  // .change-content__link
  &__link {
    // position: absolute;
    // top: 50%;
    // right: 0;
    // transform: translate(0, 50%);
    pointer-events: auto;
  }
  // .change-content__link-image
  &__link-image {
    display: inline-block;
    width: toRem(24);
    img {
      max-width: 100%;
    }
  }
}
</style>
