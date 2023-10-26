import { Module } from '@nestjs/common';
import { NoticiaAdjuntoService } from './noticia-adjunto.service';
import { NoticiaAdjuntoController } from './noticia-adjunto.controller';

@Module({
  controllers: [NoticiaAdjuntoController],
  providers: [NoticiaAdjuntoService],
})
export class NoticiaAdjuntoModule {}
