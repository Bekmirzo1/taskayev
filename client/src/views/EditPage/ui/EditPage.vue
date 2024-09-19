<script setup lang="ts">
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  Style,
  GeneralHtmlSupport,
} from "ckeditor5";
import { Ckeditor } from "@ckeditor/ckeditor5-vue";

import "ckeditor5/ckeditor5.css";

const editor = ref(ClassicEditor);
const editorData = ref("<p>Hello <span class=\"nowrap\"> CKEditor 5</span> in Vue!</p>");
const editorConfig = {
  plugins: [
    GeneralHtmlSupport,
    Bold,
    Style,
    Essentials,
    Italic,
    Mention,
    Paragraph,
    Undo,
  ],
  toolbar: ["style", "undo", "redo", "|", "bold", "italic"],
  style: {
    definitions: [
      {
        name: "Nowrap",
        element: "span",
        classes: ["nowrap"],
      },
      {
        name: "Bold",
        element: "span",
        classes: ["bold"],
      },
    ],
  },
};
</script>
<template>
  <div class="editor-page">
    <div class="editor-page__container">
      <ckeditor v-model="editorData" :editor="editor" :config="editorConfig" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.editor-page {
  padding: toRem(200) toRem(0);
  &:deep(.nowrap){
    background: #eeeeee;
  }
  // &:deep(.myeditor) {
  //   outline: none;
  //   min-height: 50vh;
  //   padding: toRem(12) toRem(20);
  //   background-color: #d3d3d3;
  //   .nowrap {
  //     background-color: #c9bfbf;
  //   }
  // }
}
</style>
