// import { defineStore } from "pinia";

export const PageRouteStore = defineStore("page-route", () => {
  const page = ref('/');
  const meta = ref({} as Record<string | number | symbol, unknown>);
  function pageTo(val: string) {
    page.value = val;
  }
  function changeMeta(val: typeof meta.value) {
    meta.value = val;
  }
  return { page, pageTo, meta, changeMeta };
});