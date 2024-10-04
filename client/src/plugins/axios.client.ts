import axios, { type InternalAxiosRequestConfig } from "axios";

export default defineNuxtPlugin({
  async setup() {
    const axiosAuthHost = axios.create({
      baseURL: import.meta.env.VITE_APP_API_URL,
    });
    const authInterCeptor = (config: InternalAxiosRequestConfig) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      console.log(config.headers.Authorization);
      return config;
    };
    axiosAuthHost.interceptors.request.use(authInterCeptor);
    return {
      provide: {
        axiosAuthHost,
      },
    };
  },
});
