import axios, { type InternalAxiosRequestConfig } from "axios";

/* const $host = $fetch.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
}); */
const $hostAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});
const $authHostAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});
const authInterCeptor = (config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  console.log(`config.headers.Authorization - ${config.headers.Authorization}`);
  return config;
};
$authHostAxios.interceptors.request.use(authInterCeptor);
/* const $authHost = $fetch.create({
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
}); */

export { $hostAxios, $authHostAxios };
