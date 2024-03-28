import { defineStore } from 'pinia';

export const menuOpenedClosed = defineStore('lock', () => {
  const opened = ref(false);
  function changeOpened() {
    opened.value = !opened.value;
  }
  return {opened, changeOpened};
})