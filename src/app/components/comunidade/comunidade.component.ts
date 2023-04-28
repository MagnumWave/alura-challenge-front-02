import { Component, OnInit } from '@angular/core';
import { ProjetosService } from 'src/app/services/projetos.service';
import { Projetos } from './projeto';

@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.component.html',
  styleUrls: ['./comunidade.component.css']
})
export class ComunidadeComponent implements OnInit {

  listaDeProjetos: Projetos;

  constructor(private projServ: ProjetosService) {
    this.listaDeProjetos = projServ.getLista();
   }

  ngOnInit(): void {
    console.log(this.listaDeProjetos);

  }

}
