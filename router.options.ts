import type { RouterConfig } from "@nuxt/schema";

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: "home",
      path: "/",
      component: () => import("@/pages/index.vue").then((r) => r.default || r),
    },
    {
      name: "about",
      path: "/about",
      component: () => import("@/pages/about.vue").then((r) => r.default || r),
    },
    {
      name: "works",
      path: "/works",
      component: () => import("@/pages/works.vue").then((r) => r.default || r),
    },
    {
      name: "service",
      path: "/service",
      component: () =>
        import("@/pages/service.vue").then((r) => r.default || r),
    },
    {
      name: "contact",
      path: "/contact",
      component: () =>
        import("@/pages/contact.vue").then((r) => r.default || r),
    },
  ],
} satisfies RouterConfig;
