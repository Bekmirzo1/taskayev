import type { RouterConfig } from "@nuxt/schema";
import { PAGE_ROUTES } from "@/shared/config";
import { AboutPage } from "@/views/AboutPage";

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: "home",
      path: PAGE_ROUTES.home,
      meta: {
        header: "main",
      },
      component: () => import("@/pages/index.vue").then((r) => r.default || r),
    },
    {
      name: "about",
      path: PAGE_ROUTES.about,
      component: () =>
        import("@/views/AboutPage/AboutPage.vue").then((r) => r.default || r),
      // component: () => AboutPage.then((r: typeof AboutPage) => r.default || r),
      // component: () => import("@/pages/about.vue").then((r) => r.default || r),
    },
    {
      name: "works",
      path: PAGE_ROUTES.work,
      component: () => import("@/pages/works.vue").then((r) => r.default || r),
    },
    {
      name: "service",
      path: PAGE_ROUTES.service,
      component: () =>
        import("@/pages/service.vue").then((r) => r.default || r),
    },
    {
      name: "contact",
      path: PAGE_ROUTES.contact,
      component: () =>
        import("@/pages/contact.vue").then((r) => r.default || r),
    },
    {
      name: "edit-main",
      path: PAGE_ROUTES.edit,
      
      component: () =>
        import("@/views/EditPage/ui/EditPage.vue").then((r) => r.default || r),
      // component: () => AboutPage.then((r: typeof AboutPage) => r.default || r),
      // component: () => import("@/pages/about.vue").then((r) => r.default || r),
    },
  ],
  // scrollBehavior() {
  //   // always scroll to top
  //   return { top: 0 }
  // },
} satisfies RouterConfig;
