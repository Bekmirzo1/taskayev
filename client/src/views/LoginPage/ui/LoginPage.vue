<script setup lang="ts">
import { $authHostAxios, AuthService, type AuthDto } from "@/shared/api";
import { inputs, validateInput } from "../model";
import { AuthStore } from "@/shared/store/";
import errorResponse from "@/shared/api/errors/errorResponse";
const authStore = AuthStore();
useHead({
  title: "Login",
});
async function loginSubmit() {
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
    // authStore.check()
    // try {
    //  await authStore.login(inputs.value.inputEmail.input, "1234");
    // setTimeout(() => {
    //   authStore.logout();
    //   console.log(authStore.isAuth);
    // }, 300);
    // } catch (error) {
    //   errorResponse(error)
    //   // console.log(error);
    // }
    if (!authStore.isAuth) {
      try {
        const res = await AuthService.login(
          inputs.value.inputEmail.input,
          "12345",
        );
        /* const res = await $hostAuth<AuthDto>("/check", {
        method: "GET",
      }); */
        authStore.login(res);
        const tokenCookie = useCookie("token", { watch: "shallow" });
        tokenCookie.value = res.token;
        console.log(res);
      } catch (error) {
        errorResponse(error);
      }
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
