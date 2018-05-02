import {Controller, Get, HttpCode, Post} from "@nestjs/common";
import {Param, Req} from "@nestjs/common/utils/decorators/route-params.decorator";

@Controller('Pelicula')
export class AppPeliculaController{
    peliculas: Pelicula[]=[];
    @Get('mostrarCartelera')
    mostrarCartelera(){
        return ['Thor', 'Capi', 'Spidey'] //responder un json
    }
    @Post('mostrarCartelera/:nombre/:estreno')
    @HttpCode(203)
    anadirCarteleraQueryParameter(@Req() req, @Req() res){
        const parametrosQuery=req.query;
        this.peliculas.push(new Pelicula(parametrosQuery.nombre, parametrosQuery.estreno));
        return res.send(this.peliculas);
    }

/*
anadirCartelera(@Param() parametros){
        this.peliculas.push(new Pelicula(parametros.nombre, parametros.estreno)); //responder un json
        return this.peliculas;
    }
 */

}


class Pelicula{
    constructor(public nombre?:String,
    public estreno?: number){
    }

}