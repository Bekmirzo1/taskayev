<script setup lang="ts">
import type { ErrorListObj } from '../model';



defineEmits(['clickClose'])
interface Props {
  errorsBlock: ErrorListObj;
}
defineProps<Props>();

</script>
<template>
  <div class="errors-block">
    <div class="errors-block__body">
      <button type="button" @click="$emit('clickClose')" class="errors-block__icon">
        <img src="@/shared/assets/images/icons/close.svg" alt="" />
      </button>
      <ul class="errors-block__list">
        <li v-if="errorsBlock.empty">
          {{ errorsBlock.empty }}
        </li>
        <li v-for="(errorItem, index) in errorsBlock.items" :key="index">
          {{ errorItem }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "./style";
</style>
