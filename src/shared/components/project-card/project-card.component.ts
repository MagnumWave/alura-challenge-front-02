import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projeto, Projetos } from 'src/app/components/comunidade/projeto';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input('projetoID') projetoID: number = 0;

  // listaDeProjetos: Projetos;
  innerProjeto: Projeto | undefined;

  constructor(private projServ: ProjetosService) {

   }

  ngOnInit(): void {
    if (this.projetoID != 0){
      this.innerProjeto = this.projServ.getProjetoById(this.projetoID);

      console.log(this.innerProjeto);

    }
  }

}
