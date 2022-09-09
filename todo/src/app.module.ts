import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefaModule } from './tarefa/entities/modules/tarefa.modules';
import { Tarefa } from './tarefa/entities/tarefa.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Lar2401$',
      database: 'db_todo',
      entities:[Tarefa],
      synchronize: true 
    }),
    TarefaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
