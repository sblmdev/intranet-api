import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoticiaAdjuntoService } from './noticia-adjunto.service';
import { CreateNoticiaAdjuntoDto } from './dto/create-noticia-adjunto.dto';
import { UpdateNoticiaAdjuntoDto } from './dto/update-noticia-adjunto.dto';

@Controller('noticia-adjunto')
export class NoticiaAdjuntoController {
  constructor(private readonly noticiaAdjuntoService: NoticiaAdjuntoService) {}

  @Post()
  create(@Body() createNoticiaAdjuntoDto: CreateNoticiaAdjuntoDto) {
    return this.noticiaAdjuntoService.create(createNoticiaAdjuntoDto);
  }

  @Get()
  findAll() {
    return this.noticiaAdjuntoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticiaAdjuntoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoticiaAdjuntoDto: UpdateNoticiaAdjuntoDto) {
    return this.noticiaAdjuntoService.update(+id, updateNoticiaAdjuntoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noticiaAdjuntoService.remove(+id);
  }
}
