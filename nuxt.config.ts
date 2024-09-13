import { createResolver } from "@nuxt/kit";

// https://nuxt.com/docs/api/configuration/nuxt-config
const development: boolean = process.env.NODE_ENV !== "production";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    baseURL: development ? "/" : "/sites/taskayev2/",
    // baseURL: "/",
  },
  devtools: { enabled: false },
  srcDir: "src/",
  modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxtjs/device"],
  build: {
    // Без этого (transpile: ["gsap"]) проект c gsap не генерится в production
    transpile: ["gsap"], // https://nuxt.com/docs/api/nuxt-config#transpile
  },
  // pages: false,
  components: false,
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "@": ["src/"],
          "@/*": ["src/*"],
        },
      },
    },
  },
  hooks: {
    // https://nuxt.com/docs/guide/recipes/custom-routing#using-approuteroptions
    "pages:routerOptions"({ files }) {
      const resolver = createResolver(import.meta.url);
      // add a route
      files.push({
        path: resolver.resolve("./router.options.ts"),
        optional: true,
      });
    },
  },
  // components: {
  //   global: true,
  //   dirs: [
  //     {
  //       path: "@/shared/UI",
  //       pathPrefix: false,
  //       extensions: [".vue"],
  //     },
  //   ],
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ' @import "src/app/scss/style.scss";',
        },
      },
    },
  },
});