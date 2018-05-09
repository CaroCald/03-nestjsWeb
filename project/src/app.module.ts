import {MiddlewaresConsumer, Module, NestMiddleware, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";
import {ParametrosController} from "./parametros.controller";
import {UsuarioService} from "./usuario.service";
import {LogMiddleware} from "./log.middleware";

@Module({
  imports: [], //importar modulos
  controllers: [AppController, AppPeliculaController, ParametrosController], //controladores
  components: [UsuarioService], //componentes
})
export class AppModule implements NestModule{

    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LogMiddleware).with('EPN', 1989).forRoutes(
            AppController, AppPeliculaController, ParametrosController
        );
    }
}

