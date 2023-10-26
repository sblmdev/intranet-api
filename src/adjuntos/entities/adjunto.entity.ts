
import { NoticiaAdjunto } from "src/noticia-adjunto/entities/noticia-adjunto.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
 
@Entity({ name: 'adjunto' })
export class Adjunto {
 
    @PrimaryGeneratedColumn('increment')
    idAdjunto: number;
 
    @Column({ length: 5 })
    extension: string;
 
    @Column({ length: 100 })
    url: string

    @Column({ nullable: true })
    numPag: number;
 
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
    @OneToMany(() => NoticiaAdjunto, (noticia) => noticia.adjuntos)
    @JoinColumn({ name: 'idNoticia' })
    noticias: NoticiaAdjunto; 
}
