<script setup lang="ts">
import {Threebg} from './back3d/';
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
          <div class="fullscreen__item">
            <div class="fullscreen__item-image">
              <img src="@/shared/assets/images/main.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <Threebg/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import 'style.scss';
</style>
