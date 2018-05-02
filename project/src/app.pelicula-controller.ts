import {Controller, Get, Post} from "@nestjs/common";

@Controller('Pelicula')
export class AppPeliculaController{
    @Get('mostrarCartelera')
    mostrarCartelera(){
        return ['Thor', 'Capi', 'Spidey'] //responder un json
    }
    @Post('mostrarCartelera')
    anadirCartelera(){
        return ['Thor', 'Capi', 'Spidey', 'iron man'] //responder un json
    }
}