import axios, { type InternalAxiosRequestConfig } from "axios";

export default defineNuxtPlugin({
  async setup() {
    const axiosHost = axios.create({
      baseURL: import.meta.env.VITE_APP_API_URL,
    });
    return {
      provide: {
        axiosHost,
      },
    };
  },
});
