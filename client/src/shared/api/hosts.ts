// import axios from "axios";

const $host = $fetch.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});
const $authHost = $fetch.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem('token')}`
  // },
  async onRequest({ options }) {
    
    // const headers = options?.headers ? new Headers(options.headers) : new Headers();
    // if (!headers.has('Authorization')) {
    //   // headers.set("Authorization", `Bearer ${authToken}`);
    //   await headers.set("Authorization", `Bearer 213312`);
      
    // }
  },
  // onResponse(){
  //   localStorage.setItem('token', 'Bearer')
  // }
});

export { $host, $authHost };
