import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor-de-codigo',
  templateUrl: './editor-de-codigo.component.html',
  styleUrls: ['./editor-de-codigo.component.css']
})
export class EditorDeCodigoComponent implements OnInit {

  @ViewChild('realColorPicker') realColorPicker: HTMLInputElement | undefined;
  pickedColor = "#6BD1FF"

  constructor() { }

  ngOnInit(): void {
  }

  abreColorPicker(input: HTMLInputElement){
      input.click();
  }

  handleChangeColorPicker(input: HTMLInputElement){
    this.pickedColor = input.value;
  }

}
