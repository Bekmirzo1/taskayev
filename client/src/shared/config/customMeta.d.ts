declare module "#app" {
  interface PageMeta {
    header?: "main" | "another";
    authed?: boolean;
  }
}

export {};
