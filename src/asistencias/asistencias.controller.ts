import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards  } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('asistencias')
@UseGuards(JwtAuthGuard)
export class AsistenciasController {
  constructor(private readonly asistenciasService: AsistenciasService) { }

  @Get()
  async findInMonth(
    @Query('opcion') opcion: number,
    @Query('idperiodo') idperiodo: number,
    @Query('idtrab') idtrab: number,
  ) {
    return await this.asistenciasService.findInMonth(opcion, idperiodo, idtrab);
  }

  @Post()
  create(@Body() createAsistenciaDto: CreateAsistenciaDto) {
    return this.asistenciasService.create(createAsistenciaDto);
  }

  @Get()
  findAll() {
    return this.asistenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log("A", id)
    return this.asistenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.asistenciasService.update(+id, updateAsistenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asistenciasService.remove(+id);
  }
}
