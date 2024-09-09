import { PAGE_ROUTES } from "@/shared/config";
import { SOCIAL_LINKS } from "@/shared/config/social-links";
interface LinkObj {
  link: string
  name: string
}
export const pageLinks: LinkObj[] = [
  { link: PAGE_ROUTES.home, name: "Index" },
  { link: PAGE_ROUTES.about, name: "Обо мне" },
  { link: PAGE_ROUTES.work, name: "Работы" },
  { link: PAGE_ROUTES.service, name: "Услуги" },
  { link: PAGE_ROUTES.contact, name: "Контакты" },
];
export const socialLinks: LinkObj[] = [
  { link: SOCIAL_LINKS.email, name: "Email" },
  { link: SOCIAL_LINKS.telegram, name: "Telegram" },
  { link: SOCIAL_LINKS.vk, name: "Vkontakte" },
  { link: SOCIAL_LINKS.whatsapp, name: "WhatsApp" },
  { link: SOCIAL_LINKS.instagram, name: "Instagram" },
];


