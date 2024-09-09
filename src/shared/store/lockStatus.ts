import { defineStore, createPinia, setActivePinia } from "pinia";
const pinia = createPinia();

export default { store: setActivePinia(pinia) };
export const PageLockStore = defineStore("page-lock-stoer", () => {
  const locked = ref(false);
  function unLockPage() {
    locked.value = false;
    document.documentElement.classList.remove("lock");
  }
  function lockPage() {
    locked.value = true;
    document.documentElement.classList.add("lock");
  }
  return { locked, lockPage, unLockPage };
});
