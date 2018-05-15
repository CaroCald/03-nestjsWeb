import {Controller, Post, Query, Req, Res, Get, Param} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";

@Controller('Usuario')
export class UsuarioController{

    constructor(private _usuarioService:UsuarioService){

    }
    @Get('anadirCookie')
    anadirCookie(@Res() response, @Req() request, @Query() query){
        //response.cookie("Web", "2018A");
        const parametros={
            nombre: request.query.nombre,
            valor:request.query.valor
        };
        response.cookie(parametros.nombre, parametros.valor);
        return response.send()
    }

    @Get('buscarCookie/:nombreCookie')
    buscarCookie(@Res() response, @Req() request, @Param() paramParams){
    const nombreCookie = request.paramParams.nombreCookie;
    const existeCookie =request.cookies[nombreCookie];
    if(existeCookie)
    {
        return response.send(existeCookie);
    }else{
        return response.status(400).send({
            mensaje: 'No existe la cookie',
            status: 400
        });
    }
    //request.cookie["hola"
        //request.cookie.hola

    }
    @Post('crear')
    crearUsuario(
        @Query() queryParametros, @Req() request, @Res() response
    ){
        const enviaNombre=queryParametros.nombre;
        const enviaApellido=queryParametros.apellido;
        const enviaEdad=queryParametros.edad;
        const enviaParametros=(enviaNombre&&enviaApellido&&enviaEdad);
        if(enviaParametros){
            const nuevoUsuario= new Usuario(queryParametros.nombre,queryParametros.apellido, queryParametros.edad);
            const usuarios=this._usuarioService.agregarUsuario(nuevoUsuario);
            return response.send(usuarios);
        }else{
            return response.status(400).send({
                mensaje: 'No enevia parametros',
                status: 400
            })
        }





    }







}