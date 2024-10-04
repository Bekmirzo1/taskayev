export default defineNuxtPlugin(() => {

  const apiAuth = $fetch.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    // baseURL: 'http://localhost:5000/',
    // headers: {
    //   Authorization: `Bearer ${localStorage.getItem("token")}`,
    // },
    async onRequest({ options }) {
      console.log(options.headers);
      // const headers = options?.headers ? new Headers(options.headers) : new Headers();
      // if (!headers.has('Authorization')) {
      //   // headers.set("Authorization", `Bearer ${authToken}`);
      //   await headers.set("Authorization", `Bearer 213312`);

      // }
    },
  });
  // // nuxtApp.hook("app:mounted", () => {
  // //   localStorage.setItem("token", "asdads");
  // // });
  return {
    provide: {
      apiAuth,
    },
  };
});

// export default defineNuxtPlugin(() => {
//   const apiAuth = $fetch.create({
//     baseURL: process.env.VITE_APP_API_URL,
//     // headers: {
//     //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//     // },
//   });
//   // const { session } = useSession('')

//   // const api = $fetch.create({
//   //   baseURL: 'https://api.nuxt.com',
//   //   onRequest({ request, options, error }) {
//   //     if (session.value?.token) {
//   //       const headers = options.headers ||= {}
//   //       if (Array.isArray(headers)) {
//   //         headers.push(['Authorization', `Bearer ${session.value?.token}`])
//   //       } else if (headers instanceof Headers) {
//   //         headers.set('Authorization', `Bearer ${session.value?.token}`)
//   //       } else {
//   //         headers.Authorization = `Bearer ${session.value?.token}`
//   //       }
//   //     }
//   //   },
//   //   async onResponseError({ response }) {
//   //     if (response.status === 401) {
//   //       await nuxtApp.runWithContext(() => navigateTo('/login'))
//   //     }
//   //   }
//   // })

//   // Expose to useNuxtApp().$api
//   return {
//     provide: {
//       // lacally: {
//       apiAuth,
//       // },
//       // api,
//     },
//   };
// });
