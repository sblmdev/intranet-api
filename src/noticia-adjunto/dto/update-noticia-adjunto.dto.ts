import { PartialType } from '@nestjs/mapped-types';
import { CreateNoticiaAdjuntoDto } from './create-noticia-adjunto.dto';

export class UpdateNoticiaAdjuntoDto extends PartialType(CreateNoticiaAdjuntoDto) {}
