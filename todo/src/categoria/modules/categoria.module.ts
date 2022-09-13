import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaController } from "../controllers/categoria.controllers";
import { categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";

@Module({
    imports: [TypeOrmModule.forFeature([categoria])],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [TypeOrmModule]
})
export class CategoriaModule {}