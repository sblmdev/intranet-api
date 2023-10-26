import { Length } from "class-validator";

export class LoginAuthDto {
    @Length(1,45)
    username: string;
    @Length(1,45)
    password: string;
}
