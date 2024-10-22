import {
  $authHostAxios,
  $hostAxios,
  type AuthDto,
  type UserAuthDto,
} from "../api";
import errorResponse from "../api/errors/errorResponse";

export class AuthServiceComp {
  async login(email: string, password: string) {
    try {
      // const { data } = await useAPI<AuthDto>("/login", {
      //   method: "post",
      //   body: { email, password } as UserAuthDto,
      // });
      // const { data } = await useAsyncData("login", () =>
      //   $host("/login", { method: "post", body: { login, password } }),
      // );
      // const { data } = useAsyncData("login", () =>
      //   $fetch(`${import.meta.env.VITE_APP_API_URL}/login`, { method: "post", body: { login, password } }),
      // );
      const { data } = await $hostAxios.post<AuthDto>(
        `${import.meta.env.VITE_APP_API_URL}/login`,
        {
          email,
          password,
        } as UserAuthDto,
      );
      // localStorage.setItem("token", data.value.token);
      localStorage.setItem("token", data.token);
      // $locally.setItem("token", `${data.value.token}`);
      // return data.value;
      return data;
    } catch (error) {
      errorResponse(error);
    }
  }
  async logout() {
    localStorage.removeItem("token");
  }
  async check(): Promise<AuthDto> {
    try {
      const { data } = await $authHostAxios.get<AuthDto>("/auth");
      // localStorage.setItem("token", 'dsasda');
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      errorResponse(error);
    }
  }
}
