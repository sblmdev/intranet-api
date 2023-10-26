import { Repository } from 'typeorm';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterAuthDto } from './dto/register-auth';
import { HttpException, Injectable } from '@nestjs/common';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService
  ) {}

  async register(usuarioObject: RegisterAuthDto) {
    const { password } = usuarioObject;
    const plainToHash = await hash(password, 10);
    usuarioObject = { ...usuarioObject, password: plainToHash };
    const usuarioCreated = this.usuarioRepository.create(usuarioObject);
    return this.usuarioRepository.save(usuarioCreated);
  }
  
  async login(usuarioObject: LoginAuthDto) {    
    const { username, password } = usuarioObject;

    const findUsuario = await this.usuarioRepository.findOneBy({username});    
    if(!findUsuario) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, findUsuario.password);
    if(!checkPassword) throw new HttpException('PASSWORD_INVALID', 404);

    const payload = { id: findUsuario.idUsuario, username: findUsuario.username };
    const token = this.jwtService.sign(payload);

    const data = {
      usuario: findUsuario,
      token
    };    
    return data;
  }

}
