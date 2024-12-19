import { PAGE_ROUTES } from "./src/shared/config/";
import { createResolver } from "@nuxt/kit";
// https://nuxt.com/docs/api/configuration/nuxt-config
const development: boolean = process.env.NODE_ENV !== "production";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    // baseURL: development ? "/" : "/sites/taskayev2/",
    baseURL: "/",
  },
  devtools: { enabled: false },
  srcDir: "src/",
  modules: ["@nuxt/eslint", "@nuxtjs/device", "@pinia/nuxt"],
  build: {
    // Без этого (transpile: ["gsap"]) проект c gsap не генерится в production
    transpile: ["gsap"], // https://nuxt.com/docs/api/nuxt-config#transpile
  },
  // pages: false,
  // plugins: [{ src: "@/shared/plugins/hello", mode: "client" }],
  // components: false,
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
  imports: {
    dirs: [
      'shared/composables',
      'shared/utils',
    ]
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
  routeRules: {
    [`${PAGE_ROUTES.edit}/**`]: {
      ssr: false,
    },
  },
  components: {
    global: true,
    dirs: [
      {
        path: "@/shared/components/",
        pathPrefix: false,
        extensions: [".vue"],
      },
    ],
  },
  // dir: {
  //   assets: "app/scss/",
  // },
  // nitro: {
  //   compressPublicAssets: {
  //     brotli: !development,
  //   },
  // },
  // css: ['@/app/scss/style.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          // additionalData: '@use "@/app/scss/style.scss" as *;'
          // additionalData: '@use "@/app/scss/abstract" as *; @use "@/app/scss/common.scss" as *;'
          additionalData: '@use "@/app/scss/abstract" as *;'
          // imports: [{

          //   'src/app/scss/style.scss'
          // }
          // ]
          // additionalData: '@import "src/app/scss/style";',
        },
      },
    },
  },
});
