import { HighlightViewerComponent } from './../../../shared/components/highlight-viewer/highlight-viewer.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import hljs from 'highlight.js';
import { ProjetosService } from 'src/app/services/projetos.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Projeto } from '../comunidade/projeto';

@Component({
  selector: 'app-editor-de-codigo',
  templateUrl: './editor-de-codigo.component.html',
  styleUrls: ['./editor-de-codigo.component.css']
})
export class EditorDeCodigoComponent implements OnInit {

  @ViewChild('realColorPicker') realColorPicker: HTMLInputElement | undefined;
  @ViewChild('hlViewer') hlViewer!: HighlightViewerComponent | undefined;

  pickedColor = "#6BD1FF";

  myForm = this.fb.group({
    nome: '',
    descricao: '',
    linguagem: 'language-javascript',
    corDeFundo: '#6BD1FF',
    codigo: this.hlViewer?.mockedText
  })

  constructor(private projServ: ProjetosService,
              private actRoute: ActivatedRoute,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.params['id']);
    //vai afetar o comportamento do botão salvar
    // quando for igual a 0, adiciona
    // quando for diferente de 0, edita
    let intID = Number.parseInt(this.actRoute.snapshot.params['id']);
    if(intID){
      console.log('edita');
      //edita
      let projetobyId = this.projServ.getProjetoById(intID);
      console.log(projetobyId);

    } else {
      console.log('adiciona');
      //adiciona

    }
  }

  abreColorPicker(input: HTMLInputElement){
      input.click();
  }

  handleChangeColorPicker(input: HTMLInputElement){
    this.pickedColor = input.value;
  }

  logaPraMim(){
    console.log(this.myForm.value);
    // console.log(this.hlViewer?.mockedText);
  }

  handleCodigoUpdate(codigo: string){
    this.myForm.get('codigo')?.setValue(codigo);
  }

}
