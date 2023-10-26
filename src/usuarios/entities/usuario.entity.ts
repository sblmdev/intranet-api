import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
