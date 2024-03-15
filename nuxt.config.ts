// https://nuxt.com/docs/api/configuration/nuxt-config
const development: boolean = process.env.NODE_ENV !== "production";

export default defineNuxtConfig( {
  devtools: { enabled: false },
  srcDir: "src/",
  app: {
    baseURL: development ? "/" : "/sites/taskayev/",
    // baseURL: '/',
  },
  pages: true,
  modules: [
    'nuxt-viewport'
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
          additionalData: '@import "src/app/assets/scss/style.scss";',
        },
      },
    },
  },
} )
