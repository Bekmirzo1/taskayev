import type { FixedBlockState } from "./types";
export const timeToRemove = 3000,
  timetoHide = timeToRemove / 2;
export const fixedBlockDef = {
  showed: false,
  animating: false,
} as FixedBlockState;

export function immediateFixedHide(state: Ref<FixedBlockState>): void {
  clearTimeout(state.value.animationTimeout);
  clearTimeout(state.value.showedTimeout);
  state.value.showed = false;
  state.value.animating = false;
}

export function fixedBlockShow(state: Ref<FixedBlockState>) {
  if (!state.value.showed) {
    state.value.showed = true;
    state.value.animationTimeout = setTimeout(() => {
      state.value.animating = true;
    }, timetoHide);
    state.value.showedTimeout = setTimeout(() => {
      state.value.showed = false;
      state.value.animating = false;
    }, timeToRemove);
  }
}