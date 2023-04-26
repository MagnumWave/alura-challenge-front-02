import { HighlightViewerComponent } from './../../../shared/components/highlight-viewer/highlight-viewer.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import hljs from 'highlight.js';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-editor-de-codigo',
  templateUrl: './editor-de-codigo.component.html',
  styleUrls: ['./editor-de-codigo.component.css']
})
export class EditorDeCodigoComponent implements OnInit {

  @ViewChild('realColorPicker') realColorPicker: HTMLInputElement | undefined;
  pickedColor = "#6BD1FF"

  constructor(private projServ: ProjetosService) { }

  ngOnInit(): void {
  }

  abreColorPicker(input: HTMLInputElement){
      input.click();
  }

  handleChangeColorPicker(input: HTMLInputElement){
    this.pickedColor = input.value;
  }

  visualizarComHighlight(arg: HighlightViewerComponent){
    // console.log(arg);

    // document.addEventListener('DOMContentLoaded', (event) => {
    //   document.querySelectorAll('code').forEach((el:any) => {
    //     hljs.highlightElement(el);
    //   });
    // });

    // this.projServ.adicionaProjetoNaLista({
    //   id: 4,
    //   nome: "mister pangaré",
    //   descricao: "teste de mock",
    //   corDeFundo: "",
    //   codigo: "function() {hello world}",
    //   estiloDoHighlight: "",
    //   linguagem: "C sharp",
    //   numeroDeComentarios: 7,
    //   numeroDeLikes: 10,
    //   usuario: "zezito piroth"
    // });
  }

}
