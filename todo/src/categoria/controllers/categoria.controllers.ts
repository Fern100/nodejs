import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";

@Controller('/categoria')
export class CategoriaController{
    constructor(private readonly service: CategoriaService) {}


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<categoria[]> {
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<categoria>{
        return this.service.findById(id)
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao')descricao: string): Promise<categoria[]>{
        return this.service.findByDescricao(descricao)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Categoria: categoria): Promise<categoria>{
        return this.service.create(Categoria)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()Categoria: categoria): Promise<categoria>{
        return this.service.update(Categoria)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id',ParseIntPipe)id: number){
        return this.service.delete(id)
}
}