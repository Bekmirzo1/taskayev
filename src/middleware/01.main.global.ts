import transitionConfig from "@/shared/helpers/transitionConfig"
export default defineNuxtRouteMiddleware((to, from) => {
  if (to?.meta.pageTransition === undefined) {
    to.meta.pageTransition = transitionConfig
    // console.log('error');
  }
})