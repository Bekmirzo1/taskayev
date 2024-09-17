<script setup lang="ts">
import { MediaStore } from "@/shared/libs/media";
import { CurrentTime } from "@/shared/UI/CurrentTime/";
import { LinkBegin } from "@/widgets/BaseHeader";
const mediaStore = MediaStore();

useHead({
  title: "Main",
});
</script>
<template>
  <div class="main">
    <div class="fullscreen">
      <!-- fullscreen__center -->
      <div class="fullscreen__center">
        <div class="fullscreen__items">
          <span class="fullscreen__item">
            <span class="fullscreen__item-text">Fresh,</span>
          </span>
          
          <span class="fullscreen__item">
            <span class="fullscreen__item-text">Light,</span>
          </span>
          <span class="fullscreen__item">
            <span class="fullscreen__item-text">Aesthetic</span>
          </span>
        </div>
      </div>
      <!-- fullscreen__inter -->
      <div class="fullscreen__inter">
        <div class="fullscreen__inter-text">
          Дизайн сайтов, интерфейсов, приложений.
          <br />
          Для тех, кому нужно лучшее.
          <br />
          Делаю ваших клиентов счастливее.
        </div>
        <div
          v-if="!mediaStore.checkMedia('mob')"
          class="fullscreen__inter-begin">
          <LinkBegin />
        </div>
      </div>
      <!-- fullscreen__work -->
      <div v-if="!mediaStore.checkMedia('tablet')" class="fullscreen__work">
        <div class="fullscreen__work-body">
          <div class="fullscreen__work-image">
            <div class="fullscreen__work-image-body">
              <img
                src="@/shared/assets/images/home/main-phone.jpg"
                alt="phone" />
            </div>
          </div>
          <div class="fullscreen__work-content">
            <div class="fullscreen__work-top">Последняя работа [i],</div>
            <div class="fullscreen__work-main">
              <h3 class="fullscreen__work-title">Оксана Нестерова</h3>
              <div class="fullscreen__work-text">
                Копирайтинг, Дизайн, Анимации, Разработка
              </div>
            </div>
            <div class="fullscreen__work-bottom">
              <a
                href="https://www.dobroksana.ru/"
                class="fullscreen__work-link"
                target="_blank">
                Смотреть работу
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- fullscreen__bottom-image -->
      <div class="fullscreen__bottom-image">
        <div class="fullscreen__bottom-image-body">
          <img src="@/shared/assets/images/home/main.jpg" alt="" />
        </div>
      </div>
      <!-- Fullscreen squares -->
      <div class="fullscreen__forms">
        <div class="fullscreen__form"></div>
        <div class="fullscreen__form"></div>
      </div>
      <!-- <div v-if="mediaStore.checkMedia('laptop')" class="fullscreen__time">
        <CurrentTime />
      </div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "style.scss";
</style>
