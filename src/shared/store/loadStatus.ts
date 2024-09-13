import { defineStore } from "pinia";

export const LoadStore = defineStore("loaded-status", () => {
  const loaded = ref(false);
  const fullLoaded = ref(false);
  function loadApp() {
    loaded.value = true;
  }
  function fullLoad() {
    fullLoaded.value = true;
  }
  return { loaded, loadApp, fullLoaded, fullLoad };
});
