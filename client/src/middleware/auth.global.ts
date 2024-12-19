import { PAGE_ROUTES } from "@/shared/config";
import { AuthStore, LoadStore } from "@/shared/store";

export default defineNuxtRouteMiddleware((to) => {
  if (to.meta.authorized) {
    const loadState = LoadStore();
    if (!loadState.loaded) return;
    const authStore = AuthStore();
    console.log(authStore.isAuth);
    if (!authStore.isAuth) {
      // if (to.meta.authorized) {
      console.log("authorized");
      // return navigateTo({
      //   path: PAGE_ROUTES.login,
      //   query: { redirect: to.path },
      // });
      return navToLogin(to.path);
    } else {
      return;
    }
  }
});
