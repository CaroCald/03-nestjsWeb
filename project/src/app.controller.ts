import { Get, Controller } from '@nestjs/common';
const fs = require('fs');
@Controller()

export class AppController {
  @Get()
  root(){
      let contador=0;
      console.log('Entro al metodo');
      contador++;
      let html= fs.readFileSync(__dirname+'/html/index.html', 'utf8');
      html=html.replace('{{variable}}', contador);
      return html;
  }

}
