<script setup lang="ts">
interface Props {
  text?: string;
}

defineEmits(['clickClose'])

defineProps<Props>();
</script>
<template>
  <div class="success-sent">
    <div class="success-sent__body">
      <div class="success-sent__main">
        {{ text ? text : "Форма отправилась успешно" }}
      </div>
      <button type="button" class="success-sent__close" @click="$emit('clickClose')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none">
          <path
            d="M2.68786 12H0V0H2.68786V1.19742H1.15194V10.7961H2.68786V12Z"
            fill="#141414" />
          <path
            d="M10.5099 9.59871H7.87159V8.40129H8.32989L7.48142 6.50215L6.63295 8.40129H7.08505V9.59871H4.47151V8.40129H5.17135L6.74443 5.35622L5.19612 2.40129H4.61396V1.19742H7.17795V2.40129H6.65772L7.48142 4.2618L8.31751 2.40129H7.80966V1.19742H10.386V2.40129H9.76053L8.21842 5.35622L9.7915 8.40129H10.5099V9.59871Z"
            fill="#141414" />
          <path
            d="M15 12H12.3121V10.7961H13.8481V1.19742H12.3121V0H15V12Z"
            fill="#141414" />
        </svg>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.success-sent {
  position: fixed;
  z-index: 1000;
  bottom: toRem(20);
  right: toRem(20);
  // .success-sent__body
  &__body {
    background-color: $blueColor;
    display: flex;
    align-items: center;
    padding: toRem(16);
    // padding: toRem(16) toRem(32) toRem(16) toRem(16);
    // font-size: toRem(13);
  }
  // .success-sent__main
  &__main {
    @extend .text;
    margin: toRem(0) toRem(16) toRem(0) toRem(0);
  }
  // .success-sent__close
  &__close {
    font-size: 0;
    line-height: 0;
  }
}
</style>
