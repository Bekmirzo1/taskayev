import type { AuthDto, UserAuthDto, UserFullDto } from "./dto/user";
import { $hostAxios, $authHostAxios } from "./hosts";
import errorResponse from "./errors/errorResponse";
import type { AxiosInstance } from "axios";
import type { UseFetchOptions } from "#app";
import { AuthStore } from "@/shared/store";
import { PAGE_ROUTES, type RoutesValue } from "../config";
const { $locally, $axiosAuthHost, $hostAuth, $host } = useNuxtApp();

class AuthService {
  // private host: AxiosInstance;
  private host: typeof $host | null;
  private store: ReturnType<typeof AuthStore> | null;
  private route: ReturnType<typeof useRoute> | null;
  private router: ReturnType<typeof useRouter> | null;
  constructor() {
    this.host = null;
    this.store = null;
  }
  private hostInit() {
    if (this.host == null) {
      this.host = useNuxtApp().$host;
    }
    if (this.store == null) {
      this.store = AuthStore();
    }
    if (this.route == null) {
      this.route = useRoute();
    }
    if (this.router == null) {
      // this.router = useNuxtApp().$router;
      this.router = useRouter();
    }
  }
  // async login(email: string, password: string): Promise<AuthDto> {
  //   // const host = useNuxtApp().$host;
  //   // console.log(this.host);
  //   // console.log(typeof this.host);
  //   // console.log(typeof useNuxtApp().$host);
  //   this.hostInit();
  //   return await this.host<AuthDto>("/login", {
  //     method: "post",
  //     body: { email, password } as UserAuthDto,
  //   });

  //   // if (!(this.host instanceof useNuxtApp().$host)) {
  //   //   console.log('dasdas');

  //   //   this.host = useNuxtApp().$host;
  //   // }
  //   // const { data } = await useAPI<AuthDto>("/login", {
  //   //   method: "post",
  //   //   body: { email, password } as UserAuthDto,
  //   // });
  //   // const { data } = useAsyncData("login", () =>
  //   //   $fetch(`${import.meta.env.VITE_APP_API_URL}/login`, { method: "post", body: { login, password } }),
  //   // );
  //   // const { data } = await $hostAxios.post<AuthDto>(
  //   //   `${import.meta.env.VITE_APP_API_URL}/login`,
  //   //   {
  //   //     email,
  //   //     password,
  //   //   } as UserAuthDto,
  //   // );
  //   // localStorage.setItem("token", data.value.token);
  //   // $locally.setItem("token", `${data.value.token}`);
  //   // return data.value;

  //   // return data;
  // }
  exp(){
    console.log('experimint in AuthService');
    
  }
  async login(email: string, password: string): Promise<AuthDto> {
    this.hostInit();
    
    try {
      const user = await this.host<AuthDto>("/login", {
        method: "post",
        body: { email, password } as UserAuthDto,
      });
      if (this.route.query.redirect) {
        this.router.push(this.route.query.redirect as RoutesValue)
      }
      this.store.login(user);
      return user;
    } catch (error) {
      errorResponse(error);
    }
  }
  async registration(
    email: string,
    password: string,
    role: UserFullDto["role"] = "ADMIN",
  ): Promise<AuthDto> {
    this.hostInit();
    return this.host<AuthDto>("/registration", {
      method: "post",
      body: { email, password, role } as UserFullDto,
    });
  }
  //  logout() {
  //   this.hostInit();
  //   this.store.logout();
  //   if (this.route.meta.authorized) {
  //     this.router.push(PAGE_ROUTES.login)
  //   }
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
