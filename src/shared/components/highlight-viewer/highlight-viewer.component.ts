import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-viewer',
  templateUrl: './highlight-viewer.component.html',
  styleUrls: ['./highlight-viewer.component.css']
})
export class HighlightViewerComponent implements OnInit {

  @Input('color') color = '#000';

  constructor() { }

  ngOnInit(): void {
  }

}
