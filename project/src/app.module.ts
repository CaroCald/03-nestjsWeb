import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [], //importar modulos
  controllers: [AppController], //controladores
  components: [], //componentes
})
export class AppModule {}
