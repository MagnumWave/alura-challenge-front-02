import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import hljs from 'highlight.js';
import { Projeto } from 'src/app/components/comunidade/projeto';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-highlight-viewer',
  templateUrl: './highlight-viewer.component.html',
  styleUrls: ['./highlight-viewer.component.css']
})
export class HighlightViewerComponent implements OnInit {

  @Input('color') color: string | undefined = '#000';
  @Input('modoEdicao') modoEdicao = false;
  @Output('codigo') codigo: EventEmitter<any> = new EventEmitter();
  @Input('projetoID') projetoID: number = 0;

  @ViewChild('codeElement')
  newCodeElement!: HTMLElement;

  innerProjeto: Projeto | undefined;

  podeEditar = false;

  mockedText: string | undefined;
  pressionado = true;

  constructor(private route: ActivatedRoute,
              private projServ: ProjetosService) {
    // hljs.registerLanguage('javascript', javascript);

  }

  ngOnInit(): void {
    // if (this.projetoID){
    //   this.mockedText = this.innerProjeto?.codigo;
    // }

    if (this.projetoID != 0){
      this.innerProjeto = this.projServ.getProjetoById(this.projetoID)
      this.mockedText = this.innerProjeto?.codigo;
      console.log(this.innerProjeto);

    } else {
      this.mockedText = 'digite seu código, por obséquio...';
    }
    // this.codigo.emit(this.mockedText)
    // console.log(this.route.snapshot.params['id']);
    //vai afetar o comportamento do botão salvar
    // quando for igual a 0, adiciona
    // quando for diferente de 0, edita

  }

  triggerTest(arg: HTMLElement){
    // this.pressionado = true;
    // document.addEventListener('DOMContentLoaded', (event) => {
    //   document.querySelectorAll('code').forEach((el:any) => {
    //     hljs.highlightElement(el);
    //   });
    // });
    hljs.highlightElement(arg)
  }

  mostraMock(){
    if (this.pressionado){
      return this.mockedText
    } else {
      return ""
    }
  }

  ligaHL(codeElement:HTMLElement){
    hljs.highlightElement(codeElement);
  }

  desligaHL(codeElement: HTMLElement){
    this.updateTextMock(codeElement);
    this.removeAllChildrenFromNode(codeElement);
    this.updateNodeClasses(codeElement, 'language-javascript');
    if(this.mockedText){
      this.appendElementText(codeElement, this.mockedText);
    }

  }

  updateTextMock(codeElement: HTMLElement){
    this.mockedText = codeElement.textContent as string;
  }

  removeAllChildrenFromNode(codeElement:HTMLElement){
    while (codeElement.hasChildNodes() && codeElement.firstChild)
      codeElement.firstChild.remove();
  }

  updateNodeClasses(codeElement: HTMLElement, languageClass: string) {
    codeElement.className = "";
    codeElement.classList.add('hljs');
    codeElement.classList.add(languageClass);
  }

  appendElementText(codeElement: HTMLElement, mockedText: string) {
    codeElement.append(mockedText);
  }

  visualizarComHighlight(codeElement: HTMLElement){
    this.ligaHL(codeElement)
  }

  handleCodeBlur(codeElement: HTMLElement){
    if(codeElement.textContent)
      this.mockedText = codeElement.textContent;

    this.codigo.emit(this.mockedText)

  }

  handleCodeClick(codeElement: HTMLElement){
    if(this.modoEdicao){
      this.desligaHL(codeElement);
      codeElement.setAttribute('contenteditable','true');
      codeElement.focus();
    }
  }

}
