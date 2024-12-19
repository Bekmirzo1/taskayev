<script setup lang="ts">
import { contactInputs, fixedBlockDef, fixedBlockShow, immediateFixedHide, timetoHide, timeToRemove, type ContactDto } from "../model";
import errorResponse from "@/shared/api/errors/errorResponse";
import { vMaska } from "maska/vue";
import { SelectOptions } from "@/shared/forms/SelectOptions";
import { FormRow } from "@/entities/FormRow";
import type { MaskInputOptions } from "maska";
import { ErrorsBlock, type ErrorListObj } from "@/entities/ErrorsBlock";
import { SuccessSent } from "@/entities/SuccessSent";
import { validateInput } from "@/shared/forms/input";
const { $host } = useNuxtApp();



const successState = ref({ ...fixedBlockDef });
// let successTimeout: NodeJS.Timeout, successHide: NodeJS.Timeout;
const errorsState = ref({ ...fixedBlockDef });
const emptyErrorValue = "Пожалуйста, заполните все обязательные поля.";
const errorsList: Ref<ErrorListObj> = ref({
  empty: false,
  items: [
    "Пожалуйста, введите действительный адрес электронной почты",
    "Пожалуйста, введите действительный номер телефона",
  ],
});


function immediateSuccessHide(): void {
  immediateFixedHide(successState);
}

function immediateErrorHide(): void {
  immediateFixedHide(errorsState);
}
async function submitContactForm() {
  let errors = 0;
  errorsList.value.empty = false;
  errorsList.value.items = [];
  for (const key in contactInputs.value) {
    if (Object.hasOwnProperty.call(contactInputs.value, key)) {
      const input = contactInputs.value[key];
      if (input.required || input.input.trim() !== "") {
        const isCorrect = validateInput(input);
        if (!isCorrect) {
          errors++;
          fixedBlockShow(errorsState);
          if (input.input.trim() === "" && !errorsList.value.empty) {
            errorsList.value.empty = emptyErrorValue;
          } else if (input.errorText && input.input.trim() !== "") {
            errorsList.value.items.push(input.errorText);
          }
        }
      }
    }
  }
  if (errors == 0) {
    try {
      const result = await $host("/contact", {
        method: "post",
        body: {
          name: contactInputs.value.inputName.input,
          email: contactInputs.value.inputEmail.input,
          phone: contactInputs.value.inputPhone.input,
          service: contactInputs.value.inputService.input,
          description: contactInputs.value.inputDesc.input,
          anotherLink: contactInputs.value.inputLink.input,
          budget: contactInputs.value.inputBudget.input,
          howDidKnow: contactInputs.value.inputHowKnow.input,
          time: contactInputs.value.inputDuration.input,
        } as ContactDto,
      });
      for (const key in contactInputs.value) {
        if (Object.prototype.hasOwnProperty.call(contactInputs.value, key)) {
          const field = contactInputs.value[key];
          field.input = "";
        }
      }
      fixedBlockShow(successState);
      console.log(result);
    } catch (error) {
      errorResponse(error);
    }
  }
}

const maskPhone = reactive<MaskInputOptions>({
  // mask: ['+7 (###) ##-##-##', '+1 (###) ###-##-##'],
  mask: (value: string) =>
    value.match(/^\+[78]/) ? "+# (###) ### ## ##" : "+A",
  tokens: {
    // A: { pattern: /\d{1,3}/, repeated: true }
    A: { pattern: /\d/, repeated: true },
  },
  eager: true,
});
</script>
<template>
  <form class="form contact-form" @submit.prevent="submitContactForm">
    <div class="contact-form__blocks">
      <FormRow number="1" tag="Услуги">
        <template #title>Выберите услугу(и), которая вас интересует</template>
        <SelectOptions
          v-model="contactInputs.inputService.input"
          class="contact-form__select"
          :name="contactInputs.inputService.name"
          :options="contactInputs.inputService.options"
          selected />
        <!-- <template #number>1</template> -->
        <!-- <template #type>Услуги</template> -->
      </FormRow>
      <FormRow number="2" tag="Проекты">
        <template #title>Детали работы. Цели, тип сайта и тд.</template>
        <v-input
          v-model="contactInputs.inputDesc.input"
          class="contact-form__textarea"
          type="textarea"
          placeholder="Опишите проект*"></v-input>
      </FormRow>
      <FormRow number="3" tag="Бюджет">
        <template #title>Ожидаемый бюджет</template>
        <SelectOptions
          v-model="contactInputs.inputBudget.input"
          class="contact-form__select"
          :name="contactInputs.inputBudget.name"
          :options="contactInputs.inputBudget.options" />
      </FormRow>
      <FormRow number="4" tag="Сроки">
        <template #title>Выберите время реализации проекта</template>
        <SelectOptions
          v-model="contactInputs.inputDuration.input"
          class="contact-form__select"
          :name="contactInputs.inputDuration.name"
          :options="contactInputs.inputDuration.options" />
      </FormRow>
      <FormRow number="5" tag="связаться">
        <template #title>Форма обратной связи</template>
        <div class="form__rows">
          <v-input
            v-model="contactInputs.inputName.input"
            type="text"
            placeholder="Имя*" />
          <v-input
            v-model="contactInputs.inputEmail.input"
            type="text"
            placeholder="Email" />
          <v-input
            v-model="contactInputs.inputPhone.input"
            v-maska="maskPhone"
            type="text"
            placeholder="Телефон*" />
          <v-input
            v-model="contactInputs.inputLink.input"
            type="text"
            placeholder="Ссылка на сайт (если есть)" />
        </div>
      </FormRow>
      <FormRow number="6" tag="Дополнительно">
        <template #title>Откуда про меня узнали?</template>
        <SelectOptions
          v-model="contactInputs.inputHowKnow.input"
          class="contact-form__select"
          :name="contactInputs.inputHowKnow.name"
          :options="contactInputs.inputHowKnow.options" />
      </FormRow>
    </div>
    <div class="form__bottom">
      <v-button class="form__button" type="submit">Отправить</v-button>
      <div class="contact-form__privacy">
        <span class="block-tablet">Нажимая на кнопку,</span>
        вы принимаете
        <a href="" class="link link-underline2">политику конфиденциальности.</a>
      </div>
    </div>
  </form>
  <SuccessSent
    v-show="successState.showed"
    class="contact-sent"
    :class="{ 'hide': successState.animating }"
    :style="{ 'transition-duration': timeToRemove - timetoHide + 'ms' }"
    @click-close="immediateSuccessHide" />
  <ErrorsBlock
    v-show="errorsState.showed"
    :errors-block="errorsList"
    class="contact-sent"
    :class="{ 'hide': errorsState.animating }"
    :style="{ 'transition-duration': timeToRemove - timetoHide + 'ms' }"
    @click-close="immediateErrorHide" />
</template>
<style lang="scss" scoped>
@use "./styles/style.scss";
.contact-sent {
  $hideDuration: cubic-bezier(0.33, 1, 0.68, 1);
  &.hide {
    opacity: 0;
    visibility: hidden;
    transition:
      opacity $hideDuration,
      visibility $hideDuration;
  }
}
</style>
