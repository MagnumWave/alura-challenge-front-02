import { Component } from '@angular/core';
import { ProjetosService } from 'src/app/services/projetos.service';
import { Projetos } from './projeto';

@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.component.html',
  styleUrls: ['./comunidade.component.css']
})
export class ComunidadeComponent {

  listaDeProjetos: Projetos;

  constructor(private projServ: ProjetosService) {
    this.listaDeProjetos = this.projServ.getLista();
   }

}
