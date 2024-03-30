import { pageAnimState } from "./store"
import type { TransitionProps } from "vue"
import { storeToRefs } from "pinia"
import { watch } from "vue"
const storeState = () => pageAnimState()

export const layoutTransition: TransitionProps = {
  name: "page-transiton",
  mode: "out-in",
  onEnter: (el, done) => {
    storeState().enterChange(true)
    const { enter } = storeToRefs(storeState())
    watch(enter, (newVal) => {
      if (newVal == false) {
        done()
      }
    })
  },
  onEnterCancelled: (el) => {
    console.log('enter canceled');
    storeState().enterChange(false)
  },
  onLeaveCancelled: (el) => {
    console.log('leave canceled');
    storeState().leaveChange(false)
  },
  onLeave: (el, done) => {
    storeState().leaveChange(true)
    const { leave } = storeToRefs(storeState())
    watch(leave, (newVal) => {
      if (newVal == false) {
        done()
      }
    })
  },
}
