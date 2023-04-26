import { Component, Input, OnInit, ViewChild } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-highlight-viewer',
  templateUrl: './highlight-viewer.component.html',
  styleUrls: ['./highlight-viewer.component.css']
})
export class HighlightViewerComponent implements OnInit {

  @Input('color') color = '#000';

  @ViewChild('codeElement')
  newCodeElement!: HTMLElement;

  mockedText = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

  const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

  const unfold = (f, seed) => {
    const go = (f, seed, acc) => {
      const res = f(seed)
      return res ? go(f, res[1], acc.concat([res[0]])) : acc
    }
    return go(f, seed, [])
  }`
  pressionado = true;

  constructor() {
    // hljs.registerLanguage('javascript', javascript);

  }

  ngOnInit(): void {
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
    this.appendElementText(codeElement, this.mockedText);
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

}
