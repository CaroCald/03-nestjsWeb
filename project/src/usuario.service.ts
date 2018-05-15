import {Component} from "@nestjs/common";

@Component()
export class UsuarioService{
    arregloUsuarios: Usuario[]=[];
    agregarUsuario(usuario:Usuario):Usuario[]{
        this.arregloUsuarios.push(usuario);
        return this.arregloUsuarios;
    }
    borrarUsuarios(usuario:Usuario){
        const indice=this.arregloUsuarios.findIndex((usuarioObjeto)=> usuarioObjeto===usuario);
        this.arregloUsuarios.slice(indice,1); //desde que indice va a empezar y el numero de objetos a borrarse.
        return this.arregloUsuarios;
    }
}

export class Usuario{
    constructor(public nombre:string,
                public apellido:string,
                public edad: number){

    }
}