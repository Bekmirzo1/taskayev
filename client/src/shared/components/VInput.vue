<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue";

defineOptions({
  name: "VInput",
});
const model = defineModel<string>();
interface Props {
  error?: null | boolean;
  type?: InputTypeHTMLAttribute;
  placeholder?: string;
}

// const { error = null } = defineProps<Props>();
withDefaults(defineProps<Props>(), {
  error: null,
  type: "text",
  placeholder: "",
});
</script>
<template>
  <input
    v-model="model"
    v-bind="$attrs"
    autocomplete="off"
    :type="type"
    class="input"
    :class="{
      _formerror: error,
    }"
    :placeholder="placeholder" />
</template>
<style lang="scss" scoped></style>
