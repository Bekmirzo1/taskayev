import { layoutTransition } from "~/shared/helpers/pageTransition"
export default defineNuxtRouteMiddleware((to, from) => {
  if (to?.meta.pageTransition === undefined) {
    to.meta.pageTransition = layoutTransition
    // console.log('error');
  }
})
