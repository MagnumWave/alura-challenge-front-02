import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
