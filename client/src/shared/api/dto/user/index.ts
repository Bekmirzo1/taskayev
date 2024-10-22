export class UserAuthDto {
  readonly email: string;
  readonly password: string;
}
export class UserFullDto extends UserAuthDto {
  readonly role: "ADMIN" | "USER";
}

export class AuthDto {
  token: string;
  user: UserFullDto;
}
