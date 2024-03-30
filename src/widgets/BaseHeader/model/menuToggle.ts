import { menuOpenedClosed } from "../store/"
// const lockUnlock = menuOpenedClosed();

export let menuAction = false

export function menuToggle(open: boolean, time?: number) {
  if (!time) {
    time = 700
  }
  
  if (menuAction === false) {
    menuAction = true
    menuOpenedClosed().changeOpened()
    if (open === true) {
      menuOpen()
    } else if (open === false) {
      menuClose()
    }
    setTimeout(() => {
      menuAction = false
    }, time)
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
