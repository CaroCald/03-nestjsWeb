import {Body, Controller, Delete, Get, HttpCode, Post} from "@nestjs/common";
import {Param, Req} from "@nestjs/common/utils/decorators/route-params.decorator";
import {Usuario, UsuarioService} from "./usuario.service";

@Controller('Pelicula')
export class AppPeliculaController{

    constructor(private usuarioService: UsuarioService){
    }
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

    @Get('recuperarUsuarios')
    recuperarUsuarios(){
        return this.usuarioService.arregloUsuarios
    }
    @Post('anadirUsuario')
    anadirUsuario(@Body() bodyParams){
        const usuario= new Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad);
        return this.usuarioService.agregarUsuario(usuario);
    }


    @Delete('borrarUsuario')
    borrarUsuario(@Body() bodyParams){
        const usuario= new Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad);
        return this.usuarioService.borrarUsuarios(usuario);
    }

}


class Pelicula{
    constructor(public nombre?:String,
    public estreno?: number){
    }

}