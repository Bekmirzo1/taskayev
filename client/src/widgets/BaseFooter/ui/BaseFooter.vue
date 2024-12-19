<script setup lang="ts">
import { SOCIAL_LINKS } from "@/shared/config";
const route = useRoute();
const router = useRouter();

const headerBig = ref(false);

if (route.meta.header == "main") {
  headerBig.value = true;
}

router.afterEach((to) => {
  if (to.meta.header === "main") {
    headerBig.value = true;
  } else {
    if (headerBig.value == true) {
      headerBig.value = false;
    }
  }
});


</script>
<template>
  <footer v-if="!headerBig" class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <div class="footer__rights">
          <span class="footer__rights-name">
            © IVAN TASKAYEV ™, {{ new Date().getFullYear() }},
          </span>
          <span class="footer__rights-reserved">Все права защищены</span>
        </div>
        <div class="footer__social">
          <ul class="footer__social-links">
            <li>
              <a
                :href="SOCIAL_LINKS.telegram"
                class="footer__social-link"
                target="_blank">
                Tg
              </a>
            </li>
            <li>
              <a
                :href="SOCIAL_LINKS.instagram"
                class="footer__social-link"
                target="_blank">
                Ig
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__dev">
          <div class="footer__dev-text">Разработка</div>
          <a
            :href="SOCIAL_LINKS.developerLink"
            class="footer__dev-link"
            target="_blank">
            Bekmirzo Azimov
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@use "./style.scss";
</style>
