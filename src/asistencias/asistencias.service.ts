import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistencia } from './entities/asistencia.entity';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';


@Injectable()
export class AsistenciasService {

  constructor(
    @InjectRepository(Asistencia)
    private asistenciaRepository: Repository<Asistencia>,
  ) { }

  async findInMonth(opcion: number, idperiodo: number, idtrab: number) {
    console.log("opcion", opcion);
    console.log("idperiodo", idperiodo);
    console.log("idtrab", idtrab);

    // Ejecuta el Store Procedure
    const resultados = await this.asistenciaRepository.query(`intranet.pa_gestionAsistencia ${opcion},${idperiodo},${idtrab}`);
    return resultados;
  }

  create(createAsistenciaDto: CreateAsistenciaDto) {
    return 'This action adds a new asistencia';
  }

  findAll() {
    return `This action returns all asistencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asistencia`;
  }

  update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return `This action updates a #${id} asistencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} asistencia`;
  }
}
