// import errorResponse from "@/shared/api/errors/errorResponse";
// import { skipHydrate } from "pinia";
import {
  AuthService,
  type UserAuthDto,
  type UserFullDto,
  type AuthDto,
} from "../api";

// export default { store: setActivePinia(pinia) };
export const AuthStore = defineStore("auth-store", () => {
  const isAuth = ref(false);
  // const authService = AuthService;
  // const authService = new AuthService();
  // const item = new AuthServiceComp();
  // const tokenCookie = useCookie("token", { watch: "shallow" });
  const user = ref({} as AuthDto);
  function setUser(value: AuthDto) {
    user.value = value;
  }
  function setAuth(value: boolean) {
    isAuth.value = value;
  }
  function logout() {
    // const cookie = useCookie('token');
    // cookie.value = null;
    setUser({} as AuthDto);
    setAuth(false);
  }
  function login(user: AuthDto) {
    setUser(user);
    setAuth(true);
  }
  // const authService = AuthService;
  // async function login(email: string, password: string) {
  //   try {
  //     // const data = await AuthService.login(email, password);
  //     // console.log(data);
  //     // const data = await AuthServiceComp.login(email, password);

  //     setAuth(true);
  //     // setUser(data.user);
  //   } catch (error) {
  //     return error;
  //     // errorResponse(error);
  //   }
  // }
  // function logout() {
  //   AuthService.logout();
  //   setAuth(false);
  //   setUser({} as UserFullDto);
  // }
  // async function check() {
  //   try {
  //     const data = await AuthService.check();
  //     setAuth(true);
  //     setUser(data.user);
  //   } catch (error: any) {
  //     errorResponse(error);
  //   }
  // }
  // return { isAuth, user, login, logout, check };
  // return { isAuth, user, setUser, setAuth, login, logout };
  return { isAuth, user, login, logout };
  // return { isAuth, user, some: skipHydrate(authService) };
});
