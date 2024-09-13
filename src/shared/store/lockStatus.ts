import { defineStore, createPinia, setActivePinia } from "pinia";
const pinia = createPinia();

export default { store: setActivePinia(pinia) };
export const PageLockStore = defineStore("page-lock-status", () => {
  const locked = ref(false);
  function unLockPage() {
    locked.value = false;
    document.documentElement.classList.add("unlock");
  }
  function lockPage() {
    locked.value = true;
    document.documentElement.classList.remove("unlock");
  }
  return { locked, lockPage, unLockPage };
});
