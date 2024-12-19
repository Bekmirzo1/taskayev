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
import { InfoService, type InfoDto } from "@/shared/api";
// definePageMeta({
//   authorized: true,
// });
useHead({
  title: "Редактирование",
});
// const route = useRoute();
// console.log(route.meta);
const { data, refresh } = await useAuthAPI<InfoDto>("/info", { method: "GET" });

const editor = ref(ClassicEditor);
// const editorData = ref(
//   `Дизайн сайтов, интерфейсов, приложений.<br />Для тех, кому нужно лучшее.<br />Делаю ваших клиентов счастливее.`,
// );
const editorData = ref(data.value.description);
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

const items = ref(["fresh", "light", "aesthetic"]);
function addItem() {
  items.value.push("");
}
function removeItem(index: number) {
  items.value.splice(index, 1);
}
const file = ref() as Ref<File>;
function selectFile(e: Event) {
  const fileInput = e.target as HTMLInputElement;
  file.value = fileInput.files[0];
}
const fileUrl = computed(() => {
  return file.value
    ? URL.createObjectURL(file.value)
    : // : "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649";
      import.meta.env.VITE_APP_API_HOST + data.value.image;
});

async function sendData() {
  // console.log(file.value);
  const formData = new FormData();
  if (file.value) {
    formData.append("image", file.value);
  }
  formData.append("description", editorData.value);
  formData.append("items", items.value.join(", "));
  const dataSend = await InfoService.changeInfo(formData);
  console.log(dataSend);
}
/* onMounted(() => {
  editor.value = ClassicEditor;
  editorConfig.value = {
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
}); */
</script>
<template>
  <div class="editor-page">
    <div class="editor-page__container">
      <div class="editor-page__body">
        <form action="" class="editor-page__form" @submit.prevent="sendData">
          <div class="editor-page__items">
            <div class="editor-page__item">
              <input
                type="file"
                class="input"
                accept="image/jpeg"
                @change="selectFile" />
              <div class="loading-file">
                <div class="loading-file__inner">
                  <img :src="fileUrl" alt="" />
                </div>
              </div>
            </div>
            <div class="editor-page__item">
              <div class="items">
                <div v-for="(item, index) in items" :key="index" class="item">
                  <input v-model="items[index]" type="text" class="input" />
                  <button type="button" class="btn" @click="removeItem(index)">
                    remove
                  </button>
                </div>
              </div>
              <button type="button" class="btn" @click="addItem">Add</button>
            </div>
            <div class="editor-page__item">
              <ckeditor
                v-model="editorData"
                :editor="editor"
                :config="editorConfig" />
            </div>
          </div>
          <div class="editor-page__button">
            <button class="btn" type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.editor-page {
  padding: toRem(200) toRem(0);
  &:deep(.nowrap) {
    background: #eeeeee;
  }
  // .editor-page__items
  &__items {
  }
  // .editor-page__item
  &__item {
    &:not(:last-child) {
      margin-bottom: toRem(30);
    }
  }
  // .editor-page__button
  &__button {
    margin: toRem(24) toRem(0) toRem(0) toRem(0);
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
.loading-file {
  width: toRem(114);
  &__inner {
    @extend .ibg;
    padding-bottom: percent(157, 114);
  }
}
.item {
  display: flex;
  gap: toRem(20);
  &:not(:last-child) {
    margin-bottom: toRem(20);
  }
}
.input {
  &[type="text"],
  &[type="email"] {
    border: toRem(1) solid $mainColor;
    padding-left: toRem(12);
    text-transform: capitalize;
  }
}
.btn {
  padding: toRem(10) toRem(12);
  background-color: $blueColor;
}
</style>
