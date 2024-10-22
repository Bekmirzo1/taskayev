import type { AuthDto, UserAuthDto } from "./dto/user";
import { $hostAxios, $authHostAxios } from "./hosts";
import errorResponse from "./errors/errorResponse";
import type { AxiosInstance } from "axios";
import type { UseFetchOptions } from "#app";
const { $locally, $axiosAuthHost, $hostAuth, $host } = useNuxtApp();

class AuthService {
  // private host: AxiosInstance;
  private host: typeof $host | null;
  constructor() {
    this.host = null;
  }
  async login(email: string, password: string): Promise<AuthDto> {
    // const host = useNuxtApp().$host;
    // console.log(this.host);
    // console.log(typeof this.host);
    // console.log(typeof useNuxtApp().$host);
    if (this.host == null) {
      this.host = useNuxtApp().$host;
    }
    return this.host<AuthDto>("/login", {
      method: "post",
      body: { email, password } as UserAuthDto,
    });

    // if (!(this.host instanceof useNuxtApp().$host)) {
    //   console.log('dasdas');

    //   this.host = useNuxtApp().$host;
    // }
    // const { data } = await useAPI<AuthDto>("/login", {
    //   method: "post",
    //   body: { email, password } as UserAuthDto,
    // });
    // const { data } = useAsyncData("login", () =>
    //   $fetch(`${import.meta.env.VITE_APP_API_URL}/login`, { method: "post", body: { login, password } }),
    // );
    // const { data } = await $hostAxios.post<AuthDto>(
    //   `${import.meta.env.VITE_APP_API_URL}/login`,
    //   {
    //     email,
    //     password,
    //   } as UserAuthDto,
    // );
    // localStorage.setItem("token", data.value.token);
    // $locally.setItem("token", `${data.value.token}`);
    // return data.value;

    // return data;
  }
  // async logout() {
  //   localStorage.removeItem("token");
  // }
  // async check(): Promise<AuthDto> {
  //   try {
  //     const { data } = await $authHostAxios.get<AuthDto>("/auth");
  //     // localStorage.setItem("token", 'dsasda');
  //     localStorage.setItem("token", data.token);
  //     return data;
  //   } catch (error) {
  //     errorResponse(error);
  //   }
  // }
}

export default new AuthService();
