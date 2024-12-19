import type { InputTypesLogin } from "./InputType";

export const loginInputs = ref({
  inputEmail: {
    input: "admin@mail.com",
    checkType: "email",
    correct: false,
    required: true,
  },
  inputPassword: {
    input: "12345",
    // checkType: "password",
    correct: false,
    required: true,
  },
} as InputTypesLogin);