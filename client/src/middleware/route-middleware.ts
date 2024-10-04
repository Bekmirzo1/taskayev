import { PageRouteStore } from "@/shared/store"

export default defineNuxtRouteMiddleware((to) => {
  const pageRouteStore = PageRouteStore();
  if (to.path) {
    pageRouteStore.pageTo(to.path)
    pageRouteStore.changeMeta(to.meta)
  }
  // if (to.) {
  //   return abortNavigation()
  // }
  
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
})