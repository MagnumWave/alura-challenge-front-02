import { ToastService } from './toast.service';
import { Injectable } from '@angular/core';
import { Projeto, Projetos } from '../components/comunidade/projeto';
import { listaDeProjetos } from './listaDeProjetos';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private listaDeProjetos = listaDeProjetos;

  constructor(private toasterService: ToastService) {}

  getLista(): Projetos{
    return this.listaDeProjetos;
  }

  getProjetoById(id: number): Projeto | undefined {
    return this.getLista().find((x: Projeto) => x.id == id);
  }

  handleSalvarProjeto(projeto: Projeto){
    if(!projeto.id){
      this.adicionaProjetoNaLista(projeto);
      this.toasterService.show("NOVO PROJETO ADICIONADO!", `Nome do Projeto: ${projeto.nome}`);
    } else {
      this.editaProjeto(projeto);
      this.toasterService.show("ALTERAÇÕES REALIZADAS!", `Nome do Projeto: ${projeto.nome}`);
    }
  }

  private adicionaProjetoNaLista(projeto: Projeto){
    projeto.id = this.lastID + 1;
    this.getLista().push(projeto);
  }

  private editaProjeto(projeto: Projeto){
    this.getLista()[projeto.id - 1] = projeto;
  }

  private get lastID(){
    return this.getLista().length;
  }
}
