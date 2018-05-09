import {ExpressMiddleware, Middleware, NestMiddleware} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Middleware()
export class LogMiddleware implements NestMiddleware{
    constructor(private usuarioService: UsuarioService){
    }
    resolve(nombre: string, anio:number): ExpressMiddleware {
        return (request, response, next) => {
            console.log('*****nombre y numero', nombre, anio, this.usuarioService.arregloUsuarios);
            const respuesta={
                baseUrl:request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.protocol,
                headers:  request.headers,
            };
            console.log(respuesta);
            next(); //para ir al siguiente middleware
        };
    }
}