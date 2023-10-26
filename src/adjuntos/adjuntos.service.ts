import { Injectable } from '@nestjs/common';
import { CreateAdjuntoDto } from './dto/create-adjunto.dto';
import { UpdateAdjuntoDto } from './dto/update-adjunto.dto';

@Injectable()
export class AdjuntosService {
  create(createAdjuntoDto: CreateAdjuntoDto) {
    return 'This action adds a new adjunto';
  }

  findAll() {
    return `This action returns all adjuntos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adjunto`;
  }

  update(id: number, updateAdjuntoDto: UpdateAdjuntoDto) {
    return `This action updates a #${id} adjunto`;
  }

  remove(id: number) {
    return `This action removes a #${id} adjunto`;
  }
}
