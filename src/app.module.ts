import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NoticiasModule } from './noticias/noticias.module';
import { AdjuntosModule } from './adjuntos/adjuntos.module';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { NoticiaAdjuntoModule } from './noticia-adjunto/noticia-adjunto.module';
import { Adjunto } from './adjuntos/entities/adjunto.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Noticia } from './noticias/entities/noticia.entity';
import { Trabajador } from './trabajador/entities/trabajador.entity';
import { Asistencia } from './asistencias/entities/asistencia.entity';
import { NoticiaAdjunto } from './noticia-adjunto/entities/noticia-adjunto.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
    host: '',
    port: 1433,
    username: 'sa',
    password: '',
    database: 'INTRANET',
    entities: [
      Usuario,
      Adjunto,
      Noticia,
      Asistencia,
      Trabajador,
      NoticiaAdjunto
    ],
    synchronize: true,
    options: { encrypt: false }
  }),
    AuthModule,
    UsuariosModule,
    NoticiasModule,
    AdjuntosModule,
    TrabajadorModule,
    AsistenciasModule,
    NoticiaAdjuntoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
