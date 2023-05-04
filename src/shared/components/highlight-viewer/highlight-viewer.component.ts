import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import hljs from 'highlight.js';
import { Projeto } from 'src/app/components/comunidade/projeto';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-highlight-viewer',
  templateUrl: './highlight-viewer.component.html',
  styleUrls: ['./highlight-viewer.component.css']
})
export class HighlightViewerComponent implements OnInit {

  @Input('color') color: string | null | undefined = '#000';
  @Input('modoEdicao') modoEdicao = false;
  @Output('codigo') codigo: EventEmitter<any> = new EventEmitter();
  @Input('projetoID') projetoID: number = 0;
  @Input('linguagemEscolhida') linguagemEscolhida: string | null | undefined = 'language-abnf';

  innerProjeto: Projeto | undefined;

  mockedText: string | undefined;

  constructor(private projServ: ProjetosService) {}

  ngOnInit(): void {
    if (this.projetoID != 0){
      this.innerProjeto = this.projServ.getProjetoById(this.projetoID)
      this.mockedText = this.innerProjeto?.codigo;
    } else {
      this.mockedText = 'Digite aqui seu código.';
      this.codigo.emit(this.mockedText);
    }
  }

  ligaHL(codeElement:HTMLElement){
    hljs.highlightElement(codeElement);
  }

  desligaHL(codeElement: HTMLElement){
    this.updateTextMock(codeElement);
    this.removeAllChildrenFromNode(codeElement);
    this.updateNodeClasses(codeElement, this.linguagemEscolhida as string);
    this.appendElementText(codeElement, this.mockedText as string);
  }

  private updateTextMock(codeElement: HTMLElement){
    this.mockedText = codeElement.textContent as string;
  }

  private removeAllChildrenFromNode(codeElement:HTMLElement){
    while (codeElement.hasChildNodes() && codeElement.firstChild)
      codeElement.firstChild.remove();
  }

  private updateNodeClasses(codeElement: HTMLElement, languageClass: string) {
    codeElement.className = "";
    codeElement.classList.add('hljs');
    codeElement.classList.add(languageClass);
  }

  private appendElementText(codeElement: HTMLElement, mockedText: string) {
    codeElement.append(mockedText);
  }

  handleCodeBlur(codeElement: HTMLElement){
    this.mockedText = codeElement.textContent as string;

    this.codigo.emit(this.mockedText);
  }

  handleCodeClick(codeElement: HTMLElement){
    if(this.modoEdicao){
      this.desligaHL(codeElement);
      codeElement.setAttribute('contenteditable','true');
      codeElement.focus();
    }
  }

  changeLanguage(newLanguage: string){
    this.linguagemEscolhida = newLanguage;
  }

  get estiloHighlight(){
    if(!this.innerProjeto || !this.innerProjeto.estiloDoHighlight){
      return "dracula"
    } else {
      return this.innerProjeto.estiloDoHighlight;
    }
  }

}
