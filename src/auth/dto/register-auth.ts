import { Length } from 'class-validator';
import { LoginAuthDto } from './login-auth';
import { PartialType } from '@nestjs/mapped-types';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    cod_persona: number;
    @Length(1,45)
    username: string;
    @Length(1,45)
    password: string;
}
