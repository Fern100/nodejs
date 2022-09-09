import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TarefaService } from "../entities/service/tarefa.service";
import { Tarefa } from "../entities/tarefa.entities";

@Controller('/tarefa')
export class TarefaController{
    constructor(private readonly service: TarefaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tarefa[]> {
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<Tarefa>{
        return this.service.findById(id)
    }
    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome')nome: string): Promise<Tarefa[]>{
        return this.service.findByNome(nome)
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    create(@Body()tarefa: Tarefa): Promise<Tarefa>{
        return this.service.update(tarefa)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id',ParseIntPipe)id: number){
        return this.service.delete(id)
}
}