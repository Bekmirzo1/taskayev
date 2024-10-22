export default defineNuxtPlugin({
  name: "nuxtdsad",
  // dependsOn: ["nuxt:revive-payload:client"],
  async setup() {
    const hostAuth = $fetch.create({
      baseURL: import.meta.env.VITE_APP_API_URL,
      /* headers: {
        // Authorization: `Bearer ${useCookie("token").value}`,
        // Authorization: `Bearer ${Math.floor(Math.random() * 10)}`,
      }, */
      // headers: await useRequestHeaders(['authorization']),
      async onRequest({ options }) {
        const token = useCookie("token");
        if (token?.value) {
          /* console.log("[fetch request] Authorization header created");
          options.headers = options.headers || {};
          options.headers.Authorization = `Bearer ${token.value}`;
          console.log(options.headers.Authorization); */
    
          const headers = new Headers(options.headers);
          // headers.set("Authorization", `Bearer ${Math.floor(Math.random() * 10)}`);
          headers.set("Authorization", `Bearer ${token.value}`);

          options.headers = headers;
        }
        // const token = useCookie("token");
        // options.headers = options.headers || ({} as Record<string, string>);
        // if (token?.value) {
        // console.log("[fetch request] Authorization header created");
        // options.headers.Authorization = `Bearer ${token.value}`;
        // } else {
        //   options.headers.Authorization = `Bearer ${Math.floor(Math.random() * 10)}`;
        // // }
        // console.log(options.headers.Authorization);
        /* const headers = (options.headers ||= {}) as Record<string, string> ;
        headers.Authorization = `Bearer ${localStorage.getItem("token")}`; */

        /* const headers =  (options.headers || {}) as Record<string, string>
        // const headers = (options.headers as Headers) || ({} as Record<string, string>);
        if (Array.isArray(headers)) {
          headers.push(["Authorization", `Bearer array`]);
        } else if (headers instanceof Headers) {
          headers.set("Authorization", `Bearer headers`);
        } else {
          headers.Authorization = `Bearer newOne`;
        }
        console.log(options.headers.Authorization); */
        /* const token = localStorage.getItem("token") || "someVal";
        const headers = options?.headers
          ? new Headers(options.headers)
          : new Headers();
        if (!headers.has("Authorization")) {
          await headers.set("Authorization", `Bearer ${token}`);
        }
        const headers2 = options?.headers
          ? new Headers(options.headers)
          : new Headers();
        console.log(headers.get("Authorization"));
        console.log(headers2.get("Authorization")); */
      },
    });
    // // nuxtApp.hook("app:mounted", () => {
    // //   localStorage.setItem("token", "asdads");
    // // });
    return {
      provide: {
        hostAuth,
      },
    };
  },
});
/* export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.pl
  const apiAuth2 = $fetch.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    
    // baseURL: 'http://localhost:5000/',
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    async onRequest({ options }) {
      console.log(options.headers);
      console.log('dsdadas');
      
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
      apiAuth2,
    },
  };
}); */
