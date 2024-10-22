export default defineNuxtPlugin({
  dependsOn: ['nuxtdsad'],
  async setup() {
    const host = $fetch.create({
      baseURL: import.meta.env.VITE_APP_API_URL,
    });
    return {
      provide: {
        host,
      },
    };
  },
});
