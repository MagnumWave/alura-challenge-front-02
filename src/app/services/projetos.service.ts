import { Injectable } from '@angular/core';
import { Projeto, Projetos } from '../components/comunidade/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  public listaDeProjetos: Projetos = [
    {
      id: 1,
      nome: "bobby",
      descricao: "cachorro marrom",
      linguagem: "javascript",
      corDeFundo: "#0F0",
      codigo: "function() {hello bobby}",
      estiloDoHighlight: "dracula",
      numeroDeComentarios: 2,
      numeroDeLikes: 3,
      usuario: "zezito de la rua"
    },
    {
      id: 2,
      nome: "shocka",
      descricao: "cachorra amarela",
      linguagem: "python",
      corDeFundo: "#00F",
      codigo: "function() {hello shocka}",
      estiloDoHighlight: "dracula",
      numeroDeComentarios: 2,
      numeroDeLikes: 3,
      usuario: "zezito de la rua"
    },
    {
      id: 3,
      nome: "aurelio",
      descricao: "humano insano",
      linguagem: "cobol",
      corDeFundo: "#F00",
      codigo: "function() {hello aurelio}",
      estiloDoHighlight: "dracula",
      numeroDeComentarios: 2,
      numeroDeLikes: 3,
      usuario: "zezito de la rua"
    },
  ];

  constructor() {
    // this.listaDeProjetos.push()
  }

  getLista(): Projetos{
    return this.listaDeProjetos;
  }

  getProjetoById(id: number): Projeto | undefined {
    return this.getLista().find((x: Projeto) => x.id == id);
  }

  adicionaProjetoNaLista(projeto: Projeto){
    this.getLista().push(projeto);
  }

  //tem que receber id de quem quer editar e um objeto Projeto.
  editaProjeto(id: number, projeto: Projeto){
    console.log(this.getLista());

    console.log(this.getLista().findIndex((x: Projeto) => x.id == id));
    let indexOfProjeto = this.getLista().findIndex((x: Projeto) => x.id == id);

    let mockProjeto: Projeto = {
      id: indexOfProjeto + 1,
      corDeFundo: projeto.corDeFundo,
      codigo: projeto.codigo,
      descricao: projeto.descricao,
      estiloDoHighlight: projeto.estiloDoHighlight,
      linguagem: projeto.linguagem,
      nome: projeto.nome,
      numeroDeComentarios: projeto.numeroDeComentarios,
      numeroDeLikes: projeto.numeroDeLikes,
      usuario: projeto.usuario
    };
    this.getLista()[indexOfProjeto] = mockProjeto;


  }
}
