import { UserLoginDto } from "./UserLoginDto"

export class UserCreateDto extends UserLoginDto {
  readonly role: string
}