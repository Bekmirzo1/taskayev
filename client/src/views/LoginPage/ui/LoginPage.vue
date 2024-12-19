<script setup lang="ts">
import { AuthService, type AuthDto } from "@/shared/api";
import { loginInputs } from "../model";
import { AuthStore } from "@/shared/store/";
import errorResponse from "@/shared/api/errors/errorResponse";
import { validateInput } from "@/shared/forms/input";
const authStore = AuthStore();
useHead({
  title: "Login",
});
async function loginSubmit() {
  let errors = 0;
  for (const key in loginInputs.value) {
    if (Object.hasOwnProperty.call(loginInputs.value, key)) {
      const element = loginInputs.value[key];
      if (element.required) {
        const isCorrect = validateInput(element);
        if (!isCorrect) {
          errors++;
        }
      }
    }
  }
  if (errors === 0) {
    if (!authStore.isAuth) {
      // try {
        const res = await AuthService.login(
          loginInputs.value.inputEmail.input,
          "12345",
        );
        console.log(res);
      // } catch (error) {
      //   errorResponse(error);
      // }
    }
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
          <form class="login-page__form form" @submit.prevent="loginSubmit">
            <div class="form__rows">
              <div class="form__input">
                <v-input
                  v-model="loginInputs.inputEmail.input"
                  type="text"
                  placeholder="Email*" />
              </div>
              <div class="form__input">
                <v-input
                  v-model="loginInputs.inputPassword.input"
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
@use "./styles.scss";
</style>
