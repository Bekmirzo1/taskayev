<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { pageAnimState } from "@/shared/helpers/pageTransition";

gsap.registerPlugin(ScrollTrigger);

gsap.registerEase("easeOutExpo", function (x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
});


gsap.registerEase("easeOutSine", function (x) {
  return Math.sin((x * Math.PI) / 2);
});

const viewport = useViewport();

const hello: Ref<null | HTMLElement> = ref(null);
const smile: Ref<null | HTMLElement> = ref(null);
const { enter, covered } = storeToRefs(pageAnimState());

// time line hello
let tlHello: null | GSAPTimeline = null;

const titleBlocks = [
  {
    val: "SITE",
  },
  {
    val: "DESIGN",
  },
  {
    val: "FR",
    smile: true,
    val2: "NTEND",
  },
];

const titleBlockElems: Ref<null | HTMLElement[]> = ref([]);
let titleBlockAnim = null;

const mainImageElem: Ref<null | HTMLElement> = ref(null);
onMounted(() => {
  watch(
    viewport.breakpoint,
    (newBreakpoint, oldBreakpoint) => {
      if (
        viewport.breakpointValue(newBreakpoint) <
          viewport.breakpointValue("mob") &&
        tlHello !== null
      ) {
        tlHello.revert();
        tlHello = null;
      }
      if (
        tlHello === null &&
        viewport.breakpointValue(newBreakpoint) >=
          viewport.breakpointValue("mob")
      ) {
        tlHello = gsap.timeline({
          scrollTrigger: {
            trigger: hello.value,
            start: "-64px 0%",
            end: "80% 70%",
            scrub: 1,
            // markers: true,
          },
          defaults: {
            force3D: true,
          },
        });
        tlHello.fromTo(
          smile.value,
          {
            yPercent: 3,
          },
          {
            yPercent: -10,
          },
        );
      }
    },
    { immediate: true },
  );
  titleBlockAnim = gsap.context(() => {});
  gsap.set(titleBlockElems.value, {
    autoAlpha: 0,
  });

  function animTitle(elem = titleBlockElems.value[0], index = 0) {
    gsap.fromTo(
      elem,
      {
        scrollTrigger: {
          trigger: elem,
          once: true,
        },
        autoAlpha: 0,
        yPercent: 70,
        xPercent: 0,
        rotateY: 20,
        rotateX: -40,
        rotateZ: 13,
        transformOrigin: "center center -2em",
        duration: 1.2,
        // transitionProperty: 400,
      },
      {
        yPercent: 0,
        xPercent: 0,
        autoAlpha: 1,
        duration: 1,
        rotateY: 0,
        rotateX: 0,
        rotateZ: 0,
        ease: "easeOutSine",
        z: 0,
        onStart() {
          if (index < titleBlockElems.value.length - 1) {
            setTimeout(() => {
              animTitle(titleBlockElems.value[index + 1], index + 1);
            }, 100);
          } else if (index == titleBlockElems.value.length - 1) {
            setTimeout(() => {
              imageContent();
            }, 1000);
          }
        },
      },
    );
  }
  function imageContent() {
    gsap.to(mainImageElem.value, {
      scaleY: 0,
      ease: "easeOutExpo",
      duration: 1,
    });
  }
  watch(covered, (oldVal, newVal) => {
    // console.log(newVal);
    if (oldVal == false) {
      if (titleBlockAnim !== null) {
        animTitle();
      }
    }
  });
});
onUnmounted(() => {
  if (tlHello !== null) {
    tlHello.revert();
  }
  if (titleBlockAnim !== null) {
    titleBlockAnim.revert();
  }
});
</script>
<template>
  <div>
    <section class="hello" ref="hello">
      <div class="hello__container">
        <div class="hello__body">
          <div class="hello__main">
            <div class="hello__content">
              <h1 class="hello__title">
                <span
                  v-for="(item, index) in titleBlocks"
                  :key="index"
                  class="hello__title-block _anim"
                  ref="titleBlockElems"
                  :class="{ 'hello__title-block_smile': item.smile }">
                  {{ item.val }}
                  <template v-if="item.smile">
                    <span class="hello__title-smile">
                      <span class="hello__title-smile-inner" ref="smile">
                        <img src="@/app/assets/images/smile.svg" alt="" />
                      </span>
                    </span>
                    {{ item.val2 }}
                  </template>
                </span>
              </h1>
              <div class="hello__button">
                <v-button href="https://t.me/ivantaskayev" target="_blank">
                  CONTACT@IVANTASKAYEV
                </v-button>
              </div>
            </div>
            <div class="hello__image">
              <div class="hello__image-body">
                <img src="@/app/assets/images/main.jpg" alt="" />
                <div class="hello__image-absolute" ref="mainImageElem"></div>
              </div>
            </div>
          </div>
          <div class="hello__footer">
            <ul class="hello__footer-list">
              <li class="hello__footer-item">
                ЭКСПЕРТНОСТЬ —
                <br />
                ДИЗАЙН & РАЗРАБОТКА САЙТОВ
              </li>
              <li class="hello__footer-item">
                БРЕНДИНГ & USER INTERFACE,
                <br />
                FRONTEND РАЗРАБОТКА
              </li>
              <li class="hello__footer-item">
                МЕСТОПОЛОЖЕНИЕ,
                <br />
                НОВОСИБИРСК
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.hello {
  $fontTitle: 240;
  $fontTitleDesktop: 192;
  $fontTitleMob: 112;
  $fontTitleMobSmall: 48;

  $smileCoff: math.div(34, 48);
  // .hello__container
  &__container {
  }
  // .hello__body
  &__body {
    border-bottom: toRem(1) solid $mainColor;
  }
  // .hello__main
  &__main {
    display: flex;
    justify-content: space-between;
  }
  // .hello__content
  &__content {
  }
  // .hello__button
  &__button {
    margin: vw(40) toRem(0) toRem(0) vw(520);
    @media (max-width: $md1) {
      margin: toRem(40) toRem(0) toRem(0) toRem(0);
    }
  }
  // .hello__title
  &__title {
    font-size: vw($fontTitle);
    // font-size: 13vw;
    margin: vw(20) toRem(0) toRem(0) toRem(0);
    line-height: percent(200, $fontTitle);
    letter-spacing: -0.07em;
    perspective: 1000;
    // transform-origin: 400px;
    // transform: translate(10px) rotateX(30deg) rotateY(30deg) rotateZ(50deg);
    @media (max-width: $md4) {
      line-height: 1;
    }
    @media (max-width: $md2) {
      margin: toRem(120) toRem(-40) toRem(0) toRem(0);
    }
    @media (max-width: $md1) {
      @include adaptiveValue(
        "font-size",
        $fontTitleDesktop,
        $fontTitleMob,
        $desktop,
        $mob,
        1
      );
      // font-size: toRem($fontTitleDesktop);
    }
    @media (max-width: $md3) {
      margin: toRem(104) toRem(-25) toRem(0) toRem(0);
      @include adaptiveValue(
        "font-size",
        $fontTitleMob,
        $fontTitleMobSmall,
        $mob,
        $mobSmall,
        1
      );
    }

    // .hello__title-block
    &-block {
      display: block;
      &:last-child {
        @media (min-width: $md1) {
          margin: toRem(0) em(284, -$fontTitle) toRem(0) em(284, $fontTitle);
        }
      }
      // .hello__title-block_smile
      &_smile {
        display: inline-flex;
        align-items: center;
        flex-wrap: nowrap;
      }
    }

    // .hello__title-smile
    &-smile {
      transform: translate(0, -5%);
      line-height: 0;
      &-inner {
        width: vw($fontTitle * $smileCoff);
        display: inline;
        // background-color: $redColor;
        font-size: 0;
        display: inline-flex;
        align-self: center;
        @media (max-width: $md1) {
          // width: toRem($fontTitleDesktop * $smileCoff);
          @include adaptiveValue(
            "width",
            $fontTitleDesktop * $smileCoff,
            $fontTitleMob * $smileCoff,
            $desktop,
            $mob,
            1
          );
        }
        @media (max-width: $md3) {
          @include adaptiveValue(
            "width",
            $fontTitleMob * $smileCoff,
            $fontTitleMobSmall * $smileCoff,
            $mob,
            $mobSmall,
            1
          );
        }
      }
      img {
        max-width: 100%;
      }
    }
  }
  // .hello__image
  &__image {
    width: toRem(261);
    margin: toRem(20) toRem(0) toRem(0) toRem(0);

    @media (max-width: $md2) {
      width: toRem(200);
    }
    @media (max-width: $md3) {
      // width: toRem(131);
      @include adaptiveValue("width", 200, 131, $mob, $mobSmall, 1);
      margin: toRem(16) toRem(0) toRem(0) toRem(0);
    }

    &-body {
      position: relative;
      img {
        max-width: 100%;
      }
    }
    &-absolute {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $bgColor;
      transform-origin: bottom center;
      pointer-events: none;
    }
  }
  // .hello__footer
  &__footer {
    margin: toRem(155) toRem(0) toRem(0) vw(474);
    padding: toRem(0) toRem(0) toRem(22) toRem(0);
    @media (max-width: $md1) {
      margin: toRem(120) toRem(0) toRem(0) toRem(0);
    }
    @media (max-width: $md2) {
      padding: toRem(0) toRem(0) toRem(20) toRem(0);
    }
    @media (max-width: $md3) {
      margin: toRem(76) toRem(0) toRem(0) toRem(0);
      padding: toRem(0) toRem(0) toRem(16) toRem(0);
    }
    // .hello__footer-list
    &-list {
      @media (min-width: $md3) {
        display: flex;
      }
    }
    // .hello__footer-item
    &-item {
      // @extend .text;
      font-size: clamp(toRem(14), vw(14), toRem(22));
      @media (max-width: $md0) {
        @include text;
      }
      &:not(:last-child) {
        margin-right: toRem(56);
        @media (max-width: $md2) {
          margin-right: toRem(24);
        }
        @media (max-width: $md3) {
          margin: toRem(0) toRem(0) toRem(12) toRem(0);
        }
      }
      &:last-child {
        @media (min-width: $md3) {
          flex: 1 1 auto;
          text-align: right;
        }
      }
    }
  }
}
</style>
