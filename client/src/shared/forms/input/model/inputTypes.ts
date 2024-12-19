export type CheckType = "email" | "password" | "textarea";

export interface InputType {
  input: string;
  checkType?: CheckType;
  correct?: boolean;
  required?: boolean;
  errorText?: string;
}
export interface InputTypes {
  [key: string]: InputType;
}
