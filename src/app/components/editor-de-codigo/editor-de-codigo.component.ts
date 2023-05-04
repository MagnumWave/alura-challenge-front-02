import { HighlightViewerComponent } from './../../../shared/components/highlight-viewer/highlight-viewer.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjetosService } from 'src/app/services/projetos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Projeto } from '../comunidade/projeto';
import { listaDeLinguagens } from './listaDeLinguagens';

@Component({
  selector: 'app-editor-de-codigo',
  templateUrl: './editor-de-codigo.component.html',
  styleUrls: ['./editor-de-codigo.component.css']
})
export class EditorDeCodigoComponent implements OnInit {

  listaDeLinguagens = listaDeLinguagens;

  @ViewChild('hlViewer') hlViewer!: HighlightViewerComponent | undefined;
  pickedColor: string | null | undefined = "#6BD1FF";

  myForm = this.fb.group({
    nome: '',
    descricao: '',
    linguagem: 'language-javascript',
    corDeFundo: '#6BD1FF',
    codigo: this.hlViewer?.mockedText
  })

  public innerID: number = 0;

  constructor(private projServ: ProjetosService,
              private router: Router,
              private actRoute: ActivatedRoute,
              private fb: FormBuilder) {
                this.innerID = Number.parseInt(this.actRoute.snapshot.params['id']);
              }

  ngOnInit(): void {
    if (this.innerProjeto){
      this.myForm.patchValue(this.innerProjeto);
      this.pickedColor = this.innerProjeto.corDeFundo;
    }
  }

  abreColorPicker(input: HTMLInputElement){
      input.click();
  }

  handleChangeColorPicker(input: HTMLInputElement){
    this.pickedColor = input.value;
  }

  handleCodigoUpdate(codigo: string){
    this.myForm.get('codigo')?.setValue(codigo);
  }

  salvaProjeto() {
    let proyecto = {
      id: this.innerID ? this.innerID : null,
      nome: this.myForm.value.nome,
      descricao: this.myForm.value.descricao,
      linguagem: this.myForm.value.linguagem,
      corDeFundo: this.myForm.value.corDeFundo,
      codigo: this.myForm.value.codigo
    } as Projeto;

    this.projServ.handleSalvarProjeto(proyecto);
    this.router.navigateByUrl('/comunidade');
  }

  get innerProjeto(){
    return this.projServ.getProjetoById(this.innerID);
  }

  get linguagemEscolhida(){
    return this.innerProjeto && this.innerProjeto.linguagem ? this.innerProjeto.linguagem : "language-javascript";
  }

  escolheLinguagem(){
    this.hlViewer?.changeLanguage(this.myForm.get('linguagem')?.value as string);
  }
}
