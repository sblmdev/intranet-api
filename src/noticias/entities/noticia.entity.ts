import { NoticiaAdjunto } from 'src/noticia-adjunto/entities/noticia-adjunto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';

@Entity('noticia')
export class Noticia {
    @PrimaryGeneratedColumn()
    idNoticia: number;

    @Column()
    fecha: string;

    @Column()
    titulo: string;

    @Column()
    contenido: string;

    @Column()
    imagen: string;

    @Column()
    idUsuarioCrea: number;

    @Column({ length: 20 })
    ipUsuarioCrea: string;

    @Column()
    fechaCreacion: Date;

    @Column({ nullable: true })
    idUsuarioModifica: number;

    @Column({ length: 20, nullable: true })
    ipUsuaModi: string;

    @Column({ nullable: true })
    fecUsuarioModifica: Date;

    @Column({ length: 1 })
    estadoEliminacion: string;

    // Enviar
    @OneToMany(() => NoticiaAdjunto, (adjunto) => adjunto.noticias)
    @JoinColumn({ name: 'idAdjunto' })
    adjuntos: NoticiaAdjunto[];
}