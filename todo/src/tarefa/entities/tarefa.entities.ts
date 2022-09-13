import { IsNotEmpty, MaxLength } from "class-validator";
import { categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_tarefa'})
export class Tarefa{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({nullable: false, length: 100})
    nome: string

    @IsNotEmpty()
    @MaxLength(500)
    @Column({nullable: false, length: 500})
    descricao: string

    @IsNotEmpty()
    @MaxLength(100)
    @Column({nullable: false, length: 100})
    responsavel: string

    
    @Column()
    Data: Date

    
    @Column()
    status: boolean

    @ManyToOne(() => categoria, (Categoria) => Categoria.tarefas, {
        onDelete: "CASCADE"
    })
    Categoria: categoria
}