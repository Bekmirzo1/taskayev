// https://nuxt.com/docs/api/configuration/nuxt-config
const development: boolean = process.env.NODE_ENV !== "production"

export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: "src/",
  app: {
    // layoutTransition: { name: 'page', mode: 'out-in' },
    baseURL: development ? "/" : "/sites/taskayev/",
    // baseURL: '/',
  },
  pages: true,
  build: {
    transpile: [
      "gsap"
    ]
  },
  modules: [
    // nuxt viewport
    [
      "nuxt-viewport",
      {
        breakpoints: {
          desktopWide: 1920,
          desktop: 1439.98,
          tabletWide: 1279.98,
          tablet: 1023.98,
          mob: 767.98,
          mobSmall: 479.98,
          minSize: 375,
        },
        defaultBreakpoints: {
          desktop: "desktop",
          tablet: "tablet",
          mob: "mob",
        },
      },
    ],
    "@pinia/nuxt",
  ],
  components: {
    global: true,
    dirs: [
      {
        path: "@/shared/UI",
        pathPrefix: false,
        extensions: [".vue"],
      },
      // {
      //   path: '@/modules/header/UI/',
      //   pathPrefix: false,
      // },
      // {
      //   path: '@/modules/main',
      //   pathPrefix: false,
      // }
      // {
      //   path: '@/components',
      //   pathPrefix: false,
      // }
    ],
  },
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            ' @use "sass:math"; @import "src/app/assets/scss/style.scss";',
        },
      },
    },
  },
})
