import { ErorrsValue } from "@/shared/forms/input";
import type { InputType, InputTypes } from "@/shared/forms/input";

interface optionsType {
  input: string;
  name: string;
  options: string[];
}

interface contactInputTypes extends InputTypes {
  inputDesc: InputType;
  inputName: InputType;
  inputEmail?: InputType;
  inputPhone: InputType;
  inputLink: InputType;
  inputService: optionsType;
  inputBudget: optionsType;
  inputDuration: optionsType;
  inputHowKnow: optionsType;
}

export const contactInputs = ref({
  inputName: {
    input: "",
    correct: false,
    required: true,
  },
  inputEmail: {
    input: "",
    checkType: "email",
    correct: false,
    required: false,
    errorText: ErorrsValue.email,
  },
  inputLink: {
    input: "",
    correct: false,
    required: false,
  },
  inputDesc: {
    input: "",
    correct: false,
    required: true,
    checkType: "textarea",
    errorText: ErorrsValue.textarea,
  },
  inputPhone: {
    input: "",
    // checkType: "phone",
    correct: false,
    required: true,
    errorText: ErorrsValue.phone,
  },
  inputService: {
    input: "",
    name: "service",
    options: [
      "Дизайн сайта",
      "Брендинг",
      "Дизайн сайта + брендинг",
      "Дизайн приложения",
      "Дизайн интерфейса",
    ],
  },
  inputBudget: {
    input: "",
    name: "budget",
    options: [
      "до 100 000 RUB ",
      "100 000 - 150 000 RUB",
      "200 000 - 250 000 RUB",
      "более 250 000 RUB",
      "Не знаю",
    ],
  },
  inputDuration: {
    input: "",
    name: "duration",
    options: ["1 месяц", "2-3 месяца", "3-6 месяцев", "1 год", "Любое время"],
  },
  inputHowKnow: {
    input: "",
    name: "wherKnow",
    options: ["Instagram", "Habr", "Designer.ru", "Vkontakte", "Другое"],
  },
} as contactInputTypes);
