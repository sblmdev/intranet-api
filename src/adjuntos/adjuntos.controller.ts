import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdjuntosService } from './adjuntos.service';
import { CreateAdjuntoDto } from './dto/create-adjunto.dto';
import { UpdateAdjuntoDto } from './dto/update-adjunto.dto';

@Controller('adjuntos')
export class AdjuntosController {
  constructor(private readonly adjuntosService: AdjuntosService) {}

  @Post()
  create(@Body() createAdjuntoDto: CreateAdjuntoDto) {
    return this.adjuntosService.create(createAdjuntoDto);
  }

  @Get()
  findAll() {
    return this.adjuntosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adjuntosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdjuntoDto: UpdateAdjuntoDto) {
    return this.adjuntosService.update(+id, updateAdjuntoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adjuntosService.remove(+id);
  }
}
