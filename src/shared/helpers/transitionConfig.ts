import gsap from "gsap"

import { useTransitionComposable } from "@/shared/composables/transition-composable"
import type { TransitionProps } from "vue"

const { transitionState, toggleTransitionComplete } = useTransitionComposable()

const layoutTransition: TransitionProps = {
  name: "page-transiton",
  mode: "out-in",
  onEnter: (el, done) => {
    // gsap.set([el], {
    //   // y: 0,
    //   autoAlpha: 0,
    // })
    /* gsap.set(document.querySelector(".app__preload"), {
      yPercent: 100,
      autoAlpha: 1,
    }) */
    gsap
      .timeline({
        // paused: true,
        onComplete() {
          toggleTransitionComplete(true)
          done()
        },
        defaults: {
          duration: 0.5,
          scale: 1,
        },
      })

      // .to(document.querySelector(".app__preload"), { yPercent: 0 })
      .set([el, document.querySelector(".header")], {
        autoAlpha: 1,
        scale: 1,
        delay: 0.5,
      })
      .to(document.querySelector(".app__preload"), {
        yPercent: -100,
        // autoAlpha: 0,
        duration: 0.5,
      })

    // .play()
  },
  onLeave: (el, done) => {
    toggleTransitionComplete(false)
    gsap.set(document.querySelector(".app__preload"), {
      yPercent: 100,
      autoAlpha: 1,
    })
    gsap
      .timeline({
        onComplete: done,
        paused: true,
        defaults: { duration: 0.5 },
      })
      .to(document.querySelector(".app__preload"), { yPercent: 0 })
      // .to([el, document.querySelector(".header")], { autoAlpha: 0 })
      .play()
  },
}

export default layoutTransition
