import type { InputType } from "./InputType";

function emailTest(formRequiredItem: string) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem);
}
function passwordTest(formRequiredItem: string) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formRequiredItem);
}

export function validateInput(input: InputType) {
  if (input.input == "") {
    input.correct = input.input === "" ? false : true;
  } else {
    if (!input.checkType) {
      input.correct = input.input.trim() === "" ? false : true;
      // input.correct = true;
    }
    if (input.checkType == "email") {
      input.correct = emailTest(input.input);
    }
    if (input.checkType == "password") {
      input.correct = passwordTest(input.input);
    }
  }
  return input.correct;
}