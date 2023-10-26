import { Adjunto } from "src/adjuntos/entities/adjunto.entity";
import { Noticia } from "src/noticias/entities/noticia.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity('noticia-adjunto')
export class NoticiaAdjunto {
    @PrimaryGeneratedColumn()
    idNoticiaAdjunto: number;

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

    @ManyToOne(() => Noticia, noticia => noticia.adjuntos)
    @JoinColumn({ name: 'idNoticia' })
    noticias: Noticia;
 
    @ManyToOne(() => Adjunto, adjunto => adjunto.noticias)
    @JoinColumn({ name: 'idAdjunto' })
    adjuntos: Adjunto;
}
