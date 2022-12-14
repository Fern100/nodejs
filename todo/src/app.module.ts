import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/modules/categoria.module';
import { TarefaModule } from './tarefa/entities/modules/tarefa.modules';
import { Tarefa } from './tarefa/entities/tarefa.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_todo',
      entities:[Tarefa, categoria],
      synchronize: true 
    }),
    TarefaModule,
    CategoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
