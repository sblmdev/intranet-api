import { Injectable } from '@nestjs/common';
import { CreateNoticiaAdjuntoDto } from './dto/create-noticia-adjunto.dto';
import { UpdateNoticiaAdjuntoDto } from './dto/update-noticia-adjunto.dto';

@Injectable()
export class NoticiaAdjuntoService {
  create(createNoticiaAdjuntoDto: CreateNoticiaAdjuntoDto) {
    return 'This action adds a new noticiaAdjunto';
  }

  findAll() {
    return `This action returns all noticiaAdjunto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noticiaAdjunto`;
  }

  update(id: number, updateNoticiaAdjuntoDto: UpdateNoticiaAdjuntoDto) {
    return `This action updates a #${id} noticiaAdjunto`;
  }

  remove(id: number) {
    return `This action removes a #${id} noticiaAdjunto`;
  }
}
