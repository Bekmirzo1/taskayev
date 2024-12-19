// import errorResponse from "@/shared/api/errors/errorResponse";
// import { skipHydrate } from "pinia";
import {
  AuthService,
  type UserAuthDto,
  type UserFullDto,
  type AuthDto,
} from "@/shared/api";
import { PAGE_ROUTES } from "@/shared/config";

// export default { store: setActivePinia(pinia) };
export const AuthStore = defineStore("auth-store", () => {
  const isAuth = ref(false);
  // const route = useRoute();
  const user = ref({} as AuthDto);
  function setUser(value: AuthDto) {
    user.value = value;
  }
  function setAuth(value: boolean) {
    isAuth.value = value;
  }
  function logout() {
    const cookie = useCookie("token");
    cookie.value = null;
    console.log(cookie.value);
    setUser({} as AuthDto);
    setAuth(false);
    // if (route.meta.authorized) {
    //   useRouter().push(PAGE_ROUTES.edit)
    // }
  }
  function login(user: AuthDto) {
    setUser(user);
    setAuth(true);
    const tokenCookie = useCookie("token", { watch: "shallow" });
    tokenCookie.value = user.token;
  }
  function check(user: AuthDto) {
    setUser(user);
    setAuth(true);
    const tokenCookie = useCookie("token", { watch: "shallow" });
    tokenCookie.value = user.token;
  }

  return { isAuth, user, login, logout, check };
});
