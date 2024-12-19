export class ContactDto {
  service: string
  description?: string
  budget?: string
  time?: string
  name: string
  email?: string
  phone: string
  anotherLink?: string
  howDidKnow?: string
}

export interface FixedBlockState {
  showed: boolean;
  animating: boolean;
  showedTimeout?: NodeJS.Timeout;
  animationTimeout?: NodeJS.Timeout;
}