import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TarefaController } from "src/tarefa/controllers/tarefa.controllers";
import { TarefaService } from "../service/tarefa.service";
import { Tarefa } from "../tarefa.entities";

@Module({
    imports: [TypeOrmModule.forFeature([Tarefa])],
    providers: [TarefaService],
    controllers: [TarefaController],
    exports: [TypeOrmModule]
})
export class TarefaModule{}