export const textLengthNum = 50;
export function emailTest(formRequiredItem: string): boolean {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem);
}
export function passwordTest(formRequiredItem: string): boolean {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formRequiredItem);
}
export function textareaTest(formRequiredItem: string): boolean {
  return formRequiredItem.length > textLengthNum;
}