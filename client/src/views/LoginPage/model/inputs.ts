import type { InputTypes } from "./InputType";

export const inputs = ref({
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
} as InputTypes);