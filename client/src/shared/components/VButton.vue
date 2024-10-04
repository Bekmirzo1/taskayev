<script setup lang="ts">
import type { ButtonHTMLAttributes, HTMLAttributes } from "vue";

defineOptions({
  name: "VButton",
});


interface ButtonAttr {
  type?: ButtonHTMLAttributes["type"];
}
withDefaults(defineProps<ButtonAttr>(), {
  type: "submit",
});
</script>
<template>
  <button class="button" :type="type">
    <slot>Отправить</slot>
  </button>
</template>
<style lang="scss" scoped>
.button {
  @extend .text2-link;
  display: block;
  width: 100%;
  text-transform: uppercase;
  padding: toRem(16);
  border-width: toRem(2) 0px toRem(2) 0px;
  border-style: solid;
  border-color: #141414;
}
</style>
