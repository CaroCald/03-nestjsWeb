import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";

@Module({
  imports: [], //importar modulos
  controllers: [AppController, AppPeliculaController], //controladores
  components: [], //componentes
})
export class AppModule {}

