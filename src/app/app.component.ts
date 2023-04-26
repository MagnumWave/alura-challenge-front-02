import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ProjetosService } from './services/projetos.service';
import { Projeto } from './components/comunidade/projeto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private projService: ProjetosService){
  }
  ngOnInit(): void {
    console.log(this.projService.getLista());

  }



  logaPraMim(){

    // let aux = this.projService.getLista();
    // console.log(aux);

    // let aux2 = this.projService.getProjetoById(2);
    // console.log(aux2);

    let mockProjeto: Projeto = {
      id: null,
      nome: "SHOCKSTER",
      corDeFundo: "golden",
      codigo:"blabs",
      descricao: "mexendo na shocka",
      estiloDoHighlight: "alucard",
      linguagem: "assembly",
      numeroDeComentarios: 25,
      numeroDeLikes: 39,
      usuario: "The Silva"
    }

    let aux3 = this.projService.editaProjeto(2, mockProjeto);
    console.log(aux3);

  }


}
