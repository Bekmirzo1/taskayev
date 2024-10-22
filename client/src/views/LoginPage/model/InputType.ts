export interface InputType {
  input: string;
  checkType?: "email" | "password";
  correct?: boolean;
  required?: boolean;
}
export interface InputTypes {
  inputEmail: InputType;
  inputPassword: InputType;
  [key: string]: InputType;
}