<script setup lang="ts">
// import LogoMain from "@/shared/components/LogoMain.vue";
import { LogoBase, LogoBig } from "@/shared/UI/Logo";
import { CurrentTime } from "@/shared/UI/CurrentTime/";
import { MediaStore } from "@/shared/libs/media";
import { MenuStore, pageLinks } from "../model/";
import LinkBegin from "./components/LinkBegin.vue";
import LogoutButton from "./components/LogoutButton.vue";
import { AuthStore } from "@/shared/store";
import type { AuthDto } from "@/shared/api";
import { PAGE_ROUTES } from "@/shared/config";
// import { PageRouteStore } from "@/shared/store";
const route = useRoute();
const authStore = AuthStore();
// const pageRouteStore = PageRouteStore();
const router = useRouter();
const mediaStore = MediaStore();
const menuStore = MenuStore();
const headerBig = ref(false);
// if (pageRouteStore.meta.header == "main") {
//   headerBig.value = true;
// }
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

function logout() {
  const cookie = useCookie("token");
  // console.log(cookie.value);
  cookie.value = null;
  console.log(cookie.value);
  authStore.logout();
  if (route.meta.authed) {
    router.push(PAGE_ROUTES.login)
  }
  // authStore.setUser({} as AuthDto);
  // authStore.setAuth(false);
  // console.log('dasdsa');
}
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
          <div v-if="authStore.isAuth" class="header-logout">
            <LogoutButton @click.prevent="logout" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "styles/style.scss";
</style>
