import { PageLockStore } from "@/shared/store";

const pageLockStore = PageLockStore();
export const MenuStore = defineStore("menu", () => {
  const opened = ref(false);
  const closedImmediate = ref(false);
  function menuOpen(open: boolean) {
    if (closedImmediate.value !== false) {
      closedImmediate.value = false;
    }
    if (open == false) {
      pageLockStore.unLockPage();
    } else {
      pageLockStore.lockPage();
    }
    opened.value = open;
  }
  function immediateClose() {
    closedImmediate.value = true;
    pageLockStore.unLockPage();
  }
  return { opened, menuOpen, closedImmediate, immediateClose };
});
