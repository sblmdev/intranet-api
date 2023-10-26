import { Module } from '@nestjs/common';
import { AdjuntosService } from './adjuntos.service';
import { AdjuntosController } from './adjuntos.controller';

@Module({
  controllers: [AdjuntosController],
  providers: [AdjuntosService],
})
export class AdjuntosModule {}
