// https://nuxt.com/docs/api/configuration/nuxt-config
const development: boolean = process.env.NODE_ENV !== "production"
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    baseURL: development ? "/" : "/sites/taskayev2/",
  },
  devtools: { enabled: false },
  srcDir: "src/",
  modules: ["@nuxt/eslint", "@pinia/nuxt"],
  // pages: false,
  components: false,
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
