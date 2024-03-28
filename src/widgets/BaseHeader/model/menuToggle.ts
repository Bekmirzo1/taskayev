import { menuOpenedClosed } from "../store/"
// const lockUnlock = menuOpenedClosed();

export let menuAction = false

export const menuToggle = (open: boolean) => {
  if (menuAction === false) {
    menuAction = true
    menuOpenedClosed().changeOpened();
    if (open === true) {
      menuOpen()
    } else if (open === false) {
      menuClose()
    }
    setTimeout(() => {
      menuAction = false
    }, 700)
    return true
  }
}

export function menuOpen(): void {
  document.body.classList.add("menu-open")
  document.body.classList.add("lock")
}
export function menuClose(): void {
  document.body.classList.remove("menu-open")
  document.body.classList.remove("lock")
}
