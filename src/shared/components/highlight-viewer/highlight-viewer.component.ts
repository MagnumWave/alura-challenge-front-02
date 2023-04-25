import { Component, Input, OnInit } from '@angular/core';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

@Component({
  selector: 'app-highlight-viewer',
  templateUrl: './highlight-viewer.component.html',
  styleUrls: ['./highlight-viewer.component.css']
})
export class HighlightViewerComponent implements OnInit {

  @Input('color') color = '#000';

  mockedText = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

  const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

  const unfold = (f, seed) => {
    const go = (f, seed, acc) => {
      const res = f(seed)
      return res ? go(f, res[1], acc.concat([res[0]])) : acc
    }
    return go(f, seed, [])
  }`
  pressionado = false;

  constructor() {
    hljs.registerLanguage('javascript', javascript);
  }

  ngOnInit(): void {
  }

  triggerTest(arg: HTMLElement){
    this.pressionado = true;
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

}
