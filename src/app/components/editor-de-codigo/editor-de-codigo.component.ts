import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor-de-codigo',
  templateUrl: './editor-de-codigo.component.html',
  styleUrls: ['./editor-de-codigo.component.css']
})
export class EditorDeCodigoComponent implements OnInit {

  @ViewChild('realColorPicker') realColorPicker: HTMLInputElement | undefined;
  pickedColor = "#000000"

  constructor() { }

  ngOnInit(): void {
  }

  abreColorPicker(arg: HTMLInputElement){
    // console.log(arg.value);

      arg.click();
      // this.isColorPickerOpened = true;



    // this.realColorPicker.nativeElement;
  }

  handleChangeColorPicker(arg: HTMLInputElement){
    console.log(arg.value);
    this.pickedColor = arg.value;


  }

}
