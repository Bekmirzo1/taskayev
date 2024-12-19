import { emailTest, passwordTest, textareaTest } from "./inputTests";
import type { InputType } from "./inputTypes";

function exhaustiveCheck(param: never) {
  return param;
}

export function validateInput(input: InputType) {
  if (input.required && input.input.trim() == "") {
    input.correct = false;
  }
  if (input.input.trim() !== "") {
    console.log('check');
    if (!input.checkType) {
      input.correct = true;
    }
    switch (input.checkType) {
      case "email": {
        input.correct = emailTest(input.input);
        break;
      }
      case "password": {
        input.correct = passwordTest(input.input);
        break;
      }
      case "textarea": {
        input.correct = textareaTest(input.input);
        break;
      }
      default: {
        exhaustiveCheck(input.checkType);
      }
    }
    /* if (input.input == "") {
    input.correct = input.required ? false : true;
  } else {
    if (!input.checkType) {
      input.correct = input.input.trim() === "" ? false : true;
      // input.correct = true;
    }
    switch (input.checkType) {
      case "email": {
        input.correct = emailTest(input.input);
        break;
      }
      case "password": {
        input.correct = passwordTest(input.input);
        break;
      }
      default: {
        exhaustiveCheck(input.checkType);
      }
    } */
    /* if (input.checkType == "email") {
      input.correct = emailTest(input.input);
    }
    if (input.checkType == "password") {
      input.correct = passwordTest(input.input);
    } */
  }
  return input.correct;
}
