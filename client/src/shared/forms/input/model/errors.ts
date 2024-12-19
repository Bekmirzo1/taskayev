import { textLengthNum } from "./inputTests";

export const ErorrsValue = {
  email: "Пожалуйста, введите действительный адрес электронной почты",
  password: 'Пожалуйста, введите пароль правильно',
  phone: "Пожалуйста, введите действительный номер телефона",
  textarea: `В описании должно быть минимум ${textLengthNum} символов`,
} as const;
