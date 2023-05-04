import { ProjetosService } from './services/projetos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorDeCodigoComponent } from './components/editor-de-codigo/editor-de-codigo.component';
import { ComunidadeComponent } from './components/comunidade/comunidade.component';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EditorDeCodigoComponent,
    ComunidadeComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ProjetosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
