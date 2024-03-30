import { defineStore } from "pinia"

export const pageAnimState = defineStore("page-anim-state", () => {
  const covered = ref(false)
  function coverChange(val: boolean = false) {
    covered.value = val
  }
  const enter = ref(false)
  function enterChange(val: boolean = false) {
    enter.value = val
  }
  const leave = ref(false)
  function leaveChange(val: boolean = false) {
    leave.value = val
  }
  return { covered, coverChange, enter, enterChange, leave, leaveChange }
})
