import { PAGE_ROUTES } from "@/shared/config";
import { AuthStore } from "@/shared/store";

export default defineNuxtRouteMiddleware((to) => {
  // if (import.meta.server) return;
  if (to.meta.authed) {
    const authStore = AuthStore();
    console.log(authStore.isAuth);
    
    if (!authStore.isAuth) {
      // if (to.meta.authed) {
      console.log("authed");
      return navigateTo(PAGE_ROUTES.login);
    } else {
      return;
    }
  }
  // if (to.) {
  //   return abortNavigation()
  // }

  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
});
