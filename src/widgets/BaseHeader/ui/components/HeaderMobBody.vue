<script setup lang="ts">
defineProps<{
  activeValue?: string;
  buttonValue: string;
}>();
defineEmits(['clickButton'])
</script>
<template>
  <div class="header2-body">
    <div class="header2-body__map">
      <h5 class="header2-body__map-title">Карта сайта</h5>
      <span v-if="activeValue" class="header2-body__map-devider">/</span>
      <span v-if="activeValue" class="header2-body__map-value">{{activeValue}}</span>
    </div>
    <div class="header2-body__menu-link">
      <button type="button" class="header2-body__menu-link-button" @click="$emit('clickButton')">{{buttonValue}}</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header2-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: toRem(10);
  @extend .text2-link;
  -webkit-text-stroke: toRem(0.8);
  // .header2-body__map
  &__map {
    display: flex;
    align-items: center;
    // .header2-body__map-title
    &-title {
      opacity: 0.24;
    }
    // .header2-body__map-devider
    &-devider {
      padding: toRem(0) toRem(8);
    }
    // .header2-body__map-value
    &-value {
    }
  }
  // .header2-body__menu-link
  &__menu-link {
    // .header2-body__menu-link-button
    &-button {
    }
  }
}
</style>
