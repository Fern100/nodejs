import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { categoria } from "../entities/categoria.entity";

export class CategoriaService{
    constructor(
        @InjectRepository(categoria)
        private categoriaRepository: Repository<categoria>)
        {}
    
        async findAll(): Promise<categoria[]> {
            return this.categoriaRepository.find({
                relations: {
                    tarefas: true
                }
            })
        }
    
        async findById(id: number): Promise<categoria>{
            let Categoria = await this.categoriaRepository.findOne({
                where: {
                    id
                },
                relations: {
                    tarefas: true
            }
        })
        if(!Categoria)
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND)

            return Categoria
        }
    
        async findByDescricao(descricao: string): Promise<categoria[]>{
           return this.categoriaRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                tarefas: true
            }
        })
        }
    
        async create(Categoria: categoria): Promise<categoria>{
            return this.categoriaRepository.save(Categoria)}
    
        async update(Categoria: categoria): Promise<categoria>{
            let CategoriaUpdate = await this.findById(Categoria.id)
            if(!CategoriaUpdate || !Categoria.id)
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND)
        return this.categoriaRepository.save(Categoria)}
    
        async delete(id: number): Promise<DeleteResult>{
            let CategoriaDelete = await this.findById(id)
            if(!CategoriaDelete)
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND)
        return this.categoriaRepository.delete(id)}
    
    }