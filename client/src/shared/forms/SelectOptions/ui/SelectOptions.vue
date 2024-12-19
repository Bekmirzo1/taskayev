<script setup lang="ts">
interface SelectProps {
  options: string[];
  name: string;
  selected?: boolean;
}
const props = defineProps<SelectProps>();
// const pick = ref("");
const pick = defineModel<string>({ default: "" });
console.log(pick.value);

const hello = (option: string, index: number): boolean => {
  let val = false;
  const firstSelected = props.selected && pick.value == "" && index == 0;
  if (pick.value == option || firstSelected) {
    val = true;
    if (firstSelected) {
      pick.value = props.options[0];
    }
  }
  return val;
};
// const optionExp = ref({ pick: "", values: ["Дизайн сайта", "Брендинг", "Дизайн сайта + брендинг"] });
</script>
<template>
  <div class="list-options">
    <label
      v-for="(option, index) in options"
      :key="index"
      class="list-options__option"
      :class="{ 'selected': hello(option, index) }">
      <input
        v-model="pick"
        type="radio"
        :name="name"
        :value="option"
        class="list-options__item" />
      {{ option }}
    </label>
  </div>
</template>
<style lang="scss" scoped>
.list-options {
  border: toRem(1) solid $underlineSecondaryColor;
  border-radius: toRem(8);
  overflow: hidden;
  transform: translateZ(0);
  // .list-options__option
  &__option {
    position: relative;
    display: block;
    user-select: none;
    cursor: pointer;
    padding: toRem(8);
    @extend .text;
    font-weight: 400;
    @include transMultiple(background-color color, $trsDur, ease, 0s);
    @media (max-width: $md0) {
      padding: toRem(7);
    }
    // -webkit-text-stroke: 0%;
    @media (any-hover: hover) {
      &:hover {
        background-color: $blueColor2;
        color: $whiteColor;
      }
    }
    &.selected {
      background-color: $blueColor2;
      color: $whiteColor;
    }
    // .list-options__option_nothing
    &_nothing {
      display: none;
    }
  }
  // .list-options__item
  &__item {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    // visibility: hidden;
    top: 0;
    left: 0;
    cursor: pointer;
  }
}
</style>
