import { PAGE_ROUTES } from "../config";

export async function navToLogin(path: string) {
  return navigateTo({ path: PAGE_ROUTES.login, query: { redirect: path } });
}
