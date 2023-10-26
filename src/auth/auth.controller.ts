import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth';
import { RegisterAuthDto } from './dto/register-auth';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  register(@Body() usuarioObject: RegisterAuthDto) {
    return this.authService.register(usuarioObject);
  }

  @Post('login')
  login(@Body() usuarioObject: LoginAuthDto) {
    return this.authService.login(usuarioObject);
  }
}
