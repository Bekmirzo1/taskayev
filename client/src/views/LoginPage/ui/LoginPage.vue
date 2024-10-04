<script setup lang="ts">
interface InputType {
  input: string;
  checkType?: "email" | "password";
  correct?: boolean;
  required?: boolean;
}
interface InputTypes {
  [key: string]: InputType;
}
const inputs = ref({
  inputEmail: {
    input: "www@www.com",
    checkType: "email",
    correct: false,
    required: true,
  },
  inputPassword: {
    input: "dilzoda10",
    checkType: "password",
    correct: false,
    required: true,
  },
} as InputTypes);

function emailTest(formRequiredItem: string) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem);
}
function passwordTest(formRequiredItem: string) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formRequiredItem);
}
function validateInput(input: InputType) {
  if (input.input == "") {
    input.correct = input.input === "" ? false : true;
  } else {
    if (!input.checkType) {
      input.correct = input.input.trim() === "" ? false : true;
      // input.correct = true;
    }
    if (input.checkType == "email") {
      input.correct = emailTest(input.input);
    }
    if (input.checkType == "password") {
      input.correct = passwordTest(input.input);
    }
  }
  return input.correct;
}
function loginSubmit() {
  let errors = 0;
  for (const key in inputs.value) {
    if (Object.hasOwnProperty.call(inputs.value, key)) {
      const element = inputs.value[key];
      if (element.required) {
        const isCorrect = validateInput(element);
        if (!isCorrect) {
          errors++;
        }
      }
    }
  }
  if (errors === 0) {
    console.log("great");
  } else {
    console.log("errors here");
  }
}
</script>
<template>
  <div class="login-page">
    <div class="login-page__wrapper">
      <div class="login-page__container">
        <div class="login-page__body">
          <h1 class="login-page__title">Логин</h1>
          <form
            action=""
            class="login-page__form form"
            @submit.prevent="loginSubmit">
            <div class="form__rows">
              <div class="form__input">
                <v-input
                  v-model="inputs.inputEmail.input"
                  placeholder="Email*" />
              </div>
              <div class="form__input">
                <v-input
                  v-model="inputs.inputPassword.input"
                  type="password"
                  placeholder="Пароль*" />
              </div>
            </div>
            <div class="form__bottom">
              <v-button class="form__button" type="submit">Отправить</v-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./styles.scss";
</style>
