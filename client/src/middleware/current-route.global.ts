import { PageRouteStore } from "@/shared/store";

export default defineNuxtRouteMiddleware((to) => {
  const pageRouteStore = PageRouteStore();
  if (to.path) {
    pageRouteStore.pageTo(to.path);
    pageRouteStore.changeMeta(to.meta);
  }
});
