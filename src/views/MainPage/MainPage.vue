<script setup lang="ts">
import { MediaStore } from "@/shared/libs/media";
import CurrentTime from "@/shared/components/CurrentTime.vue";
const mediaStore = MediaStore();
useHead({
  title: 'Main'
})

</script>
<template>
  <div class="main">
    <div class="fullscreen">
      <div class="fullscreen__center">
        <div class="fullscreen__items">
          <div class="fullscreen__item">
            <div class="fullscreen__item-text">Fresh,</div>
          </div>
          <div class="fullscreen__item">
            <div class="fullscreen__item-text">Light,</div>
          </div>
          <div class="fullscreen__item">
            <div class="fullscreen__item-text">Aesthetic</div>
          </div>
          <div v-if="!mediaStore.checkMedia('mob')" class="fullscreen__item">
            <div class="fullscreen__item-image">
              <img src="@/shared/assets/images/home/main.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="fullscreen__inter">
        <div class="fullscreen__inter-text">
          Дизайн сайтов, интерфейсов, приложений. <br> Для тех, кому нужно лучшее.
          <br>Делаю  ваших клиентов счастливее.
        </div>
      </div>
      <div v-if="!mediaStore.checkMedia('tablet')" class="fullscreen__work">
        <div v-if="!mediaStore.checkMedia('tablet')" class="fullscreen__work-image">
          <div class="fullscreen__work-image-body">
            <img src="@/shared/assets/images/home/main-phone.jpg" alt="phone" />
          </div>
        </div>
        <div class="fullscreen__work-content">
          <div class="fullscreen__work-top">i. Смотреть последний кейс</div>
          <div class="fullscreen__work-text">
            Ethereum Name Service
            <span class="nowrap">is a crucial</span>
            touchpoint
            <span class="nowrap">for the</span>
            Ethereum Ecosystem —
            <span class="nowrap">a digital</span>
            identity.
          </div>
          <div class="fullscreen__work-bottom">DATA PRIVACY</div>
        </div>
        
      </div>
      <div v-if="mediaStore.checkMedia('mob')" class="fullscreen__bottom-image">
        <div class="fullscreen__bottom-image-body">
          <img src="@/shared/assets/images/home/main.jpg" alt="">
        </div>
      </div>
      <div v-if="mediaStore.checkMedia('laptop')" class="fullscreen__time">
        <CurrentTime />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "style.scss";
</style>
