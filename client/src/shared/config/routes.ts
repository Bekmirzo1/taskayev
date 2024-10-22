export const PAGE_ROUTES = {
  home: "/",
  about: "/about",
  work: "/work",
  service: "/service",
  contact: "/contact",
  login: "/login",
  edit: "/edit"
} as const;

type RoutesKeys = keyof typeof PAGE_ROUTES;
export type RoutesValue = typeof PAGE_ROUTES[RoutesKeys];