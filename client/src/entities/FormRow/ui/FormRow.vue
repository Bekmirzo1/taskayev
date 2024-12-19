<script setup lang="ts">
interface Props {
  number: string;
  tag: string
}
defineProps<Props>();
</script>
<template>
  <div class="form-row">
    <div class="form-row__body">
      <div class="form-row__column form-row__column_left">
        <div class="form-row__item">
          <h3 class="form-row__title">
            <slot name="title">Выберите услугу(и), которая вас интересует</slot>
          </h3>
        </div>
        <div class="form-row__block">
          <slot></slot>
        </div>
      </div>
      <div class="form-row__column form-row__column_right">
        <div class="form-row__item">
          <div class="form-row__number">
            [{{ number }}]
            <!-- [<slot name="number">1</slot>] -->
          </div>
          <div class="form-row__type">
            {{ tag }}
            <!-- <slot name="type">Услуги</slot> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "./style.scss";
</style>
