import { defineStore } from "pinia"

export const pageLoadState = defineStore("page-loadstate", () => {
  const loaded = ref(false);
  function loadChange(value: boolean) {
    loaded.value = value;
  }
  return { loaded, loadChange}
})
