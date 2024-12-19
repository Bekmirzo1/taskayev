<script setup lang="ts">
import { SOCIAL_LINKS } from "@/shared/config";
import { ContactForm } from "@/widgets/ContactForm";

useHead({
  title: "Contact",
});




</script>
<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__top top-contact">
        <h3 class="top-contact__subtitle">
          Нет времени заполнять бриф, тогда
          <br />
          переходим сразу в личные сообщения
        </h3>
        <div class="top-contact__body contact__grid">
          <div class="top-contact__left contact__grid-left">
            <div class="top-contact__gettouch">
              <a
                :href="SOCIAL_LINKS.telegram"
                class="top-contact__gettouch-link"
                target="_blank">
                Написать в telegram
              </a>
            </div>
            <div class="top-contact__or">(или)</div>
          </div>
          <h1 class="top-contact__title contact__grid-right">
            заполнить бриф и я свяжусь с вами
          </h1>
        </div>
      </div>
      <div class="contact__body contact__grid">
        <div class="contact__left contact__grid-left">
          <div class="contact__left-img">
            <div class="contact__left-img-body">
              <img src="@/shared/assets/images/contact/brief.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="contact__main contact__grid-right">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "style.scss";
</style>
